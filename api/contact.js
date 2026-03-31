export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, revenue, challenge, contact } = req.body || {};

    if (!name || !company || !revenue || !challenge || !contact) {
      return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const listId = Number(process.env.BREVO_CONTACT_LIST_ID || process.env.BREVO_LIST_ID);

    // Salva il contatto in Brevo solo se il campo contact è una email valida
    if (isEmail && listId) {
      const brevoContactResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: contact,
          attributes: {
            FIRSTNAME: name,
            COMPANY: company,
            REVENUE: revenue,
            CHALLENGE: challenge,
            SOURCE: 'Contact Form',
          },
          listIds: [listId],
          updateEnabled: true,
        }),
      });

      if (!brevoContactResponse.ok) {
        const errorText = await brevoContactResponse.text();
        console.error('Errore Brevo contatto:', errorText);
      }
    }

    // Notifica email a te
    const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          email: process.env.BREVO_SENDER_EMAIL,
          name: process.env.BREVO_SENDER_NAME || 'Sivra',
        },
        to: [
          {
            email: process.env.NOTIFICATION_EMAIL || 'daniele.colasanti22@gmail.com',
          },
        ],
        subject: 'Nuovo contatto dal sito',
        htmlContent: `
          <h2>Nuovo contatto dal form Contatti</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Azienda:</strong> ${company}</p>
          <p><strong>Fatturato:</strong> ${revenue}</p>
          <p><strong>Contatto:</strong> ${contact}</p>
          <p><strong>Sfida:</strong><br>${challenge.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Errore email Brevo:', errorText);
      return res.status(500).json({ error: 'Invio email fallito' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Errore API /api/contact:', error);
    return res.status(500).json({ error: 'Errore
