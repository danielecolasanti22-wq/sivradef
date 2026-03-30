export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'perche-il-tuo-marketing-non-funziona',
    title: 'Perché il tuo marketing non funziona (e come risolverlo)',
    excerpt: 'Molte aziende investono migliaia di euro in pubblicità senza vedere un ritorno. Il problema non è il budget, ma il sistema.',
    content: `
      <p>Il marketing moderno è diventato estremamente complesso. Tra algoritmi che cambiano ogni settimana e piattaforme che nascono e muoiono, è facile perdere la bussola.</p>
      
      <h2>Il problema del "Secchio Bucato"</h2>
      <p>Immagina di versare acqua in un secchio con dei buchi sul fondo. Non importa quanta acqua versi, il secchio non si riempirà mai. Molte aziende fanno esattamente questo: versano traffico (acqua) in un sistema di conversione (secchio) che non tiene.</p>
      
      <h2>La soluzione: Il Sistema SIVRA</h2>
      <p>In SIVRA, non crediamo nel marketing "a pioggia". Crediamo nella costruzione di sistemi. Un sistema che funziona è composto da tre pilastri fondamentali:</p>
      <ul>
        <li><strong>Posizionamento:</strong> Perché un cliente dovrebbe scegliere te invece della concorrenza?</li>
        <li><strong>Acquisizione:</strong> Come portiamo persone qualificate a conoscerti in modo prevedibile?</li>
        <li><strong>Conversione:</strong> Come trasformiamo quel traffico in fatturato reale?</li>
      </ul>
      
      <p>Senza questi tre elementi in perfetto equilibrio, ogni euro speso in marketing è un euro sprecato.</p>
    `,
    date: '15 Marzo 2026',
    author: 'Marco Riva',
    category: 'Strategia',
    image: 'https://picsum.photos/seed/strategy/800/600',
    readTime: '5 min'
  },
  {
    id: '2',
    slug: 'ottimizzazione-conversioni-e-commerce',
    title: '5 Strategie per raddoppiare le conversioni del tuo E-commerce',
    excerpt: 'Piccoli cambiamenti possono portare a grandi risultati. Ecco come abbiamo aiutato un brand a crescere del 67% in 4 mesi.',
    content: `
      <p>L'ottimizzazione del tasso di conversione (CRO) è l'arte di convincere più persone a completare l'acquisto una volta arrivate sul tuo sito.</p>
      
      <h2>1. Velocità di caricamento</h2>
      <p>Ogni secondo di ritardo costa fatturato. Un sito lento è la prima causa di abbandono del carrello.</p>
      
      <h2>2. Social Proof Strategica</h2>
      <p>Non basta mettere delle stelline. Le recensioni devono rispondere alle obiezioni dei clienti. Se vendi un prodotto costoso, le recensioni devono parlare della qualità e della durata.</p>
      
      <h2>3. Checkout in un solo passaggio</h2>
      <p>Meno attrito crei, più vendite ottieni. Riduci i campi obbligatori al minimo indispensabile.</p>
    `,
    date: '10 Marzo 2026',
    author: 'Elena Sivi',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    readTime: '7 min'
  },
  {
    id: '3',
    slug: 'acquisizione-clienti-b2b-2026',
    title: 'Il futuro dell\'acquisizione clienti B2B nel 2026',
    excerpt: 'Le vecchie tattiche di cold calling sono morte. Ecco come costruire un motore di lead generation moderno.',
    content: `
      <p>Il mercato B2B è cambiato radicalmente. I decision maker sono più informati e meno disposti a tollerare interruzioni non richieste.</p>
      
      <h2>Dall'Outbound all'Inbound Strategico</h2>
      <p>Oggi non vendi più, aiuti a comprare. Il tuo ruolo è diventare un'autorità nel tuo settore attraverso contenuti di valore che risolvono problemi reali.</p>
      
      <h2>L'importanza dei Dati</h2>
      <p>Non puoi scalare ciò che non misuri. Ogni interazione deve essere tracciata per capire dove si perde il potenziale cliente nel funnel.</p>
    `,
    date: '5 Marzo 2026',
    author: 'Marco Riva',
    category: 'B2B',
    image: 'https://picsum.photos/seed/b2b/800/600',
    readTime: '6 min'
  }
];
