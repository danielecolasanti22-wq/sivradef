function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(value) {
  const email = String(value ?? '').trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function brevoFetch(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  const rawText = await response.text();
  let parsed;

  try {
    parsed = rawText ? JSON.parse(rawText) : null;
  } catch {
    parsed = rawText;
  }

  return { response, data: parsed, rawText };
}

export default async function handler(req, res) {
  console.log('[newsletter] request received', {
    method: req.method,
    bodyKeys: req.body ? Object.keys(req.body) : [],
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const email = String(req.body?.email || '').trim();

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Email non valida' });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);

    const missingEnv = [];
    if (!apiKey) missingEnv.push('BREVO_API_KEY');
    if (!senderEmail) missingEnv.push('BREVO_SENDER_EMAIL');
    if (!senderName) missingEnv.push('BREVO_SENDER_NAME');
    if (!notificationEmail) missingEnv.push('NOTIFICATION_EMAIL');
    if (!Number.isFinite(listId) || !listId)
      missingEnv.push('BREVO_NEWSLETTER_LIST_ID');

    console.log('[newsletter] env check', {
      hasApiKey: Boolean(apiKey),
      hasSenderEmail: Boolean(senderEmail),
      hasSenderName: Boolean(senderName),
      hasNotificationEmail: Boolean(notificationEmail),
      brevoNewsletterListId: process.env.BREVO_NEWSLETTER_LIST_ID,
      missingEnv,
    });

    if (missingEnv.length) {
      return res.status(500).json({
        error: 'Env vars Brevo mancanti',
        missingEnv,
      });
    }

    const contactSave = await brevoFetch('https://api.brevo.com/v3/contacts', {
      email,
      listIds: [listId],
      updateEnabled: true,
      attributes: { SOURCE: 'Blog Newsletter' },
    });

    console.log('[newsletter] brevo contacts response', {
      status: contactSave.response.status,
      ok: contactSave.response.ok,
      body: contactSave.data,
    });

    if (!contactSave.response.ok) {
      return res.status(502).json({
        error: 'Brevo ha rifiutato il salvataggio newsletter',
        brevoStatus: contactSave.response.status,
        brevoBody: contactSave.data,
      });
    }

    const emailSend = await brevoFetch('https://api.brevo.com/v3/smtp/email', {
      sender: { email: senderEmail, name: senderName },
      to: [{ email: notificationEmail, name: 'Sivra Team' }],
      subject: 'Nuova iscrizione newsletter dal Blog',
      htmlContent: `
        <h2>Nuova iscrizione newsletter</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      `,
    });

    console.log('[newsletter] brevo notification email response', {
      status: emailSend.response.status,
      ok: emailSend.response.ok,
      body: emailSend.data,
    });

    if (!emailSend.response.ok) {
      return res.status(502).json({
        error: "Brevo ha rifiutato l'email di notifica",
        brevoStatus: emailSend.response.status,
        brevoBody: emailSend.data,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[newsletter] unexpected error', error);
    return res.status(500).json({ error: 'Errore interno del server' });
  }
}