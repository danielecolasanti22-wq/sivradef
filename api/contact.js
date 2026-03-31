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
  console.log('[contact] request received', {
    method: req.method,
    bodyKeys: req.body ? Object.keys(req.body) : [],
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, revenue, challenge, contact } = req.body || {};

    const trimmedName = String(name ?? '').trim();
    const trimmedCompany = String(company ?? '').trim();
    const trimmedRevenue = String(revenue ?? '').trim();
    const trimmedChallenge = String(challenge ?? '').trim();
    const trimmedContact = String(contact ?? '').trim();

    if (!trimmedName || !trimmedCompany || !trimmedRevenue || !trimmedChallenge || !trimmedContact) {
      return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const listId = Number(process.env.BREVO_CONTACT_LIST_ID);

    const missingEnv = [];
    if (!apiKey) missingEnv.push('BREVO_API_KEY');
    if (!senderEmail) missingEnv.push('BREVO_SENDER_EMAIL');
    if (!senderName) missingEnv.push('BREVO_SENDER_NAME');
    if (!notificationEmail) missingEnv.push('NOTIFICATION_EMAIL');
    if (!Number.isFinite(listId) || !listId) missingEnv.push('BREVO_CONTACT_LIST_ID');

    console.log('[contact] env check', {
      hasApiKey: Boolean(apiKey),
      hasSenderEmail: Boolean(senderEmail),
      hasSenderName: Boolean(senderName),
      hasNotificationEmail: Boolean(notificationEmail),
      brevoContactListId: process.env.BREVO_CONTACT_LIST_ID,
      missingEnv,
    });

    if (missingEnv.length) {
      return res.status(500).json({
        error: 'Env vars Brevo mancanti',
        missingEnv,
      });
    }

    const isEmail = isValidEmail(trimmedContact);
    let savedToBrevoList = false;

    if (isEmail) {
      const contactSave = await brevoFetch('https://api.brevo.com/v3/contacts', {
        email: trimmedContact,
        attributes: {
          FIRSTNAME: trimmedName,
          COMPANY: trimmedCompany,
          REVENUE: trimmedRevenue,
          CHALLENGE: trimmedChallenge,
          SOURCE: 'Contact Form',
        },
        listIds: [listId],
        updateEnabled: true,
      });

      console.log('[contact] brevo contacts response', {
        status: contactSave.response.status,
        ok: contactSave.response.ok,
        body: contactSave.data,
      });

      if (!contactSave.response.ok) {
        return res.status(502).json({
          error: 'Brevo ha rifiutato il salvataggio del contatto',
          brevoStatus: contactSave.response.status,
          brevoBody: contactSave.data,
        });
      }

      savedToBrevoList = true;
    } else {
      console.log('[contact] contact value non-email, skip salvataggio Brevo', {
        contact: trimmedContact,
      });
    }

    const emailSend = await brevoFetch('https://api.brevo.com/v3/smtp/email', {
      sender: { email: senderEmail, name: senderName },
      to: [{ email: notificationEmail, name: 'Sivra Team' }],
      subject: 'Nuovo contatto dal sito',
      htmlContent: `
        <h2>Nuovo contatto dal form Contatti</h2>
        <p><strong>Nome:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Azienda:</strong> ${escapeHtml(trimmedCompany)}</p>
        <p><strong>Fatturato:</strong> ${escapeHtml(trimmedRevenue)}</p>
        <p><strong>Contatto:</strong> ${escapeHtml(trimmedContact)}</p>
        <p><strong>Sfida:</strong><br>${escapeHtml(trimmedChallenge).replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('[contact] brevo notification email response', {
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

    return res.status(200).json({
      ok: true,
      savedToBrevoList,
      note: savedToBrevoList
        ? 'Notifica inviata e lead salvato in Brevo.'
        : 'Notifica inviata, ma il contatto non era un indirizzo email (lead non salvato).',
    });
  } catch (error) {
    console.error('[contact] unexpected error', error);
    return res.status(500).json({ error: 'Errore interno del server' });
  }
}