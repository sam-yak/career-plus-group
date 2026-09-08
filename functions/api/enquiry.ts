/**
 * Enquiry form endpoint. Deployed automatically by Cloudflare Pages from the
 * `functions/` directory at the repo root: POST /api/enquiry.
 *
 * WHY A FUNCTION AND NOT CLOUDFLARE EMAIL ROUTING
 * Email Routing receives, it does not send. Its `send_email` binding, which can
 * send, is a Workers binding and is NOT among the bindings Pages Functions
 * support. So the mail leaves through a transactional provider instead. Resend
 * is used here; swapping it means rewriting `deliver()` and nothing else.
 *
 * CONFIGURE in the Pages project, Settings > Environment variables:
 *   RESEND_API_KEY   secret, from resend.com
 *   ENQUIRY_TO       where leads land, e.g. contact@careerplusgroup.in
 *   ENQUIRY_FROM     a verified sender, e.g. website@careerplusgroup.org
 *
 * Until those exist the endpoint returns 503 and the form tells the visitor to
 * call instead. That is deliberate: a lead is never silently swallowed.
 */

interface Env {
  RESEND_API_KEY?: string;
  ENQUIRY_TO?: string;
  ENQUIRY_FROM?: string;
}

/**
 * Fields the form may send, in reading order, with the label a person sees.
 *
 * Anything not listed is ignored rather than forwarded. The order is the order
 * they appear in the email: who they are, how to reach them, what they want,
 * then the detail specific to that business line, then their message.
 *
 * `service` is deliberately absent. It carries the internal slug, "real-estate",
 * while `serviceLabel` carries "Real Estate". Printing both put a developer's
 * identifier in front of whoever reads these every day.
 */
const FIELDS: ReadonlyArray<readonly [string, string]> = [
  ['name', 'Name'],
  ['phone', 'Phone'],
  ['email', 'Email'],
  ['city', 'City'],
  ['serviceLabel', 'Business line'],
  ['propertyType', 'Property type'],
  ['budget', 'Budget'],
  ['loanType', 'Loan type'],
  ['loanAmount', 'Loan amount'],
  ['employment', 'Employment'],
  ['sector', 'Sector'],
  ['volume', 'Monthly volume'],
  ['destination', 'Destination'],
  ['course', 'Course'],
  ['intake', 'Intake'],
  ['dates', 'Dates'],
  ['travellers', 'Travellers'],
  ['message', 'Message'],
  ['sourcePage', 'Enquired from'],
];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function validate(d: Record<string, string>): string | null {
  if (!d.name?.trim()) return 'Name is required.';
  if (!/^[6-9]\d{9}$/.test((d.phone || '').replace(/\D/g, '').slice(-10)))
    return 'A valid 10-digit Indian mobile number is required.';
  if (d.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email))
    return 'That email address does not look right.';
  return null;
}

async function deliver(env: Env, subject: string, html: string, replyTo?: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.ENQUIRY_FROM,
      to: [env.ENQUIRY_TO],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const json = (body: unknown, status: number) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Malformed request.' }, 400);
  }

  // Honeypot. A real person never fills a field they cannot see, so this is
  // answered with a 200: telling a bot it failed only teaches it to try again.
  if (body.companyWebsite) return json({ ok: true }, 200);

  // Re-validated here because client-side checks are a convenience for people,
  // not a control. Anything can POST to this URL.
  const invalid = validate(body);
  if (invalid) return json({ ok: false, error: invalid }, 422);

  if (!env.RESEND_API_KEY || !env.ENQUIRY_TO || !env.ENQUIRY_FROM) {
    return json({ ok: false, error: 'not-configured' }, 503);
  }

  const rows = FIELDS
    .filter(([key]) => body[key]?.trim())
    .map(([key, label]) =>
      `<tr><td style="padding:5px 16px 5px 0;color:#5f5e58;vertical-align:top;white-space:nowrap">${label}</td>` +
      `<td style="padding:5px 0"><strong>${esc(body[key].trim())}</strong></td></tr>`)
    .join('');

  const line = body.serviceLabel || body.service || 'General';
  const html =
    `<h2 style="font-family:Georgia,serif;color:#1a2a4f">New enquiry: ${esc(line)}</h2>` +
    `<table style="font-family:system-ui,sans-serif;font-size:15px">${rows}</table>` +
    `<p style="color:#5f5e58;font-size:13px">Received ${new Date().toUTCString()} ` +
    `from careerplusgroup.org</p>`;

  try {
    await deliver(env, `Website enquiry: ${line}, ${body.name.trim()}`, html, body.email?.trim() || undefined);
    return json({ ok: true }, 200);
  } catch (err) {
    console.error('enquiry delivery failed', err);
    return json({ ok: false, error: 'delivery-failed' }, 502);
  }
};

/** Anything other than POST. Keeps the URL from looking like a broken page. */
export const onRequest: PagesFunction<Env> = () =>
  new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
