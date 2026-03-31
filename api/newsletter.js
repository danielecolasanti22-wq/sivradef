export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  try {
    const { email } = req.body || {};

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'Email non valida' });
    }

    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || 'daniele.colasanti22@gmail.com';

    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || 'Sivra';
    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID || process.env.BREVO_LIST_ID);

    if (!apiKey) {
      return res.status(500).json({ error: 'BREVO_API_KEY mancante' });
    }

    if (!listId) {
      return res.status(500).json({ error: 'ID lista Brevo mancante' });
    }

    const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email.trim(),
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!contactResponse.ok) {
      const errorText = await contactResponse.text();
      console.error('Errore Brevo newsletter:', errorText);
      return res.status(500).json({ error: 'Salvataggio contatto Brevo fallito' });
    }

    if (!senderEmail) {
      return res.status(500).json({ error: 'BREVO_SENDER_EMAIL mancante' });
    }

    const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: {
          email: senderEmail,
          name: senderName,
        },
        to: [
          {
            email: notificationEmail,
            name: 'Daniele',
          },
        ],
        subject: 'Nuova iscrizione newsletter dal Blog',
        htmlContent: `
          <h2>Nuova iscrizione newsletter</h2>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Errore invio notifica newsletter:', errorText);
      return res.status(500).json({ error: 'Invio email fallito' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Errore API /api/newsletter:', error);
    return res.status(500).json({ error: 'Errore interno del server' });
  }
}

function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}