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
  /** Se presente, usato per il title del documento e og:title al posto di title */
  seoTitle?: string;
  /** Se presente, usato per meta description e og:description */
  metaDescription?: string;
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
    slug: 'sito-riceve-traffico-ma-non-genera-contatti',
    title: 'Il tuo sito riceve traffico ma non genera contatti? 7 motivi da controllare subito',
    excerpt:
      'Se il tuo sito riceve traffico ma non genera contatti, il problema potrebbe non essere il numero di visite ma la struttura della conversione. In questa guida vediamo 7 motivi comuni e come individuarli.',
    seoTitle: 'Il tuo sito riceve traffico ma non genera contatti? 7 motivi',
    metaDescription:
      'Il tuo sito riceve visite ma non porta richieste? Scopri i 7 motivi più comuni che bloccano le conversioni e come intervenire in modo efficace.',
    content: `
      <p>Portare traffico su un sito web non basta. Puoi investire in SEO, campagne advertising, contenuti o social media, ma se le visite non si trasformano in richieste, preventivi o appuntamenti, il problema non è il traffico in sé. Il problema è quello che succede dopo.</p>

      <p>Molte aziende si trovano proprio in questa situazione: il sito viene visitato, i numeri sembrano discreti, ma i contatti arrivano con il contagocce. In questi casi, il punto non è attirare ancora più persone a tutti i costi, ma capire perché il sito non sta convertendo.</p>

      <p>Se il tuo sito riceve traffico ma non genera contatti, molto spesso ci sono alcuni errori ricorrenti che bloccano la conversione. Vederli con chiarezza è il primo passo per migliorare davvero i risultati.</p>

      <h2>Perché un sito può ricevere visite senza generare richieste</h2>
      <p>Avere traffico e avere conversioni non sono la stessa cosa. Una persona può arrivare sul tuo sito, scorrere una pagina, leggere qualche riga e poi uscire senza fare nulla. Questo non significa necessariamente che il traffico sia sbagliato, ma spesso indica che il sito non sta accompagnando l'utente verso un'azione chiara.</p>

      <p>Un sito efficace non deve solo essere bello da vedere o ben fatto dal punto di vista tecnico. Deve soprattutto aiutare chi arriva a capire subito tre cose:</p>
      <ul>
        <li>cosa fai</li>
        <li>perché dovrebbe scegliere te</li>
        <li>qual è il passo successivo da compiere</li>
      </ul>

      <p>Quando uno di questi elementi manca, il sito rischia di trasformarsi in una semplice vetrina. E una vetrina, da sola, raramente genera contatti in modo costante.</p>

      <h2>1. La proposta di valore non è chiara</h2>
      <p>Uno dei motivi più comuni per cui un sito web non genera contatti è la mancanza di chiarezza. L'utente arriva sulla pagina e non capisce immediatamente cosa fai, per chi lo fai e quale problema risolvi.</p>

      <p>Spesso succede perché i testi sono troppo generici. Frasi come "soluzioni innovative", "servizi su misura" o "supportiamo la crescita del tuo business" possono sembrare professionali, ma in realtà dicono poco. Non aiutano chi legge a orientarsi e non differenziano davvero la tua attività da tante altre.</p>

      <p>La home page e le pagine servizi dovrebbero invece comunicare in modo diretto:</p>
      <ul>
        <li>a chi ti rivolgi</li>
        <li>quale risultato aiuti a ottenere</li>
        <li>in che modo lavori</li>
        <li>perché la tua proposta è diversa o più efficace</li>
      </ul>

      <p>Se chi arriva sul sito deve interpretare, dedurre o cercare troppo a lungo le informazioni principali, nella maggior parte dei casi se ne andrà prima ancora di compiere un'azione.</p>

      <h2>2. Le call to action non guidano davvero l'utente</h2>
      <p>Un altro problema molto frequente riguarda le call to action, cioè gli inviti all'azione. Se il sito non dice in modo chiaro cosa fare dopo, l'utente difficilmente prenderà l'iniziativa da solo.</p>

      <p>Molti siti hanno CTA deboli, nascoste o troppo vaghe. Altri ne hanno troppe e tutte insieme: contattaci, scopri di più, leggi il blog, guarda i servizi, iscriviti alla newsletter, seguici sui social. Il risultato è che l'utente si disperde.</p>

      <p>Per aumentare i contatti dal sito, serve un percorso più semplice. Ogni pagina dovrebbe avere un obiettivo preciso e una call to action coerente con quell'obiettivo. In alcuni casi può essere una richiesta di contatto. In altri, una call conoscitiva, una demo, un audit o la compilazione di un form.</p>

      <p>Quello che conta è che l'azione sia:</p>
      <ul>
        <li>visibile</li>
        <li>comprensibile</li>
        <li>rilevante rispetto al contenuto della pagina</li>
        <li>facile da compiere</li>
      </ul>

      <p>Se la CTA è debole o confusa, il sito perde efficacia anche quando il traffico è buono.</p>

      <h2>3. La pagina non risponde all'intento di chi arriva</h2>
      <p>Non tutte le visite sono uguali. Una persona che arriva da Google dopo aver cercato una soluzione specifica si aspetta di trovare una risposta coerente con la sua ricerca. Se atterra su una pagina troppo generica, dispersiva o poco focalizzata, tende ad abbandonarla.</p>

      <p>Questo succede spesso quando si porta traffico verso la homepage invece che verso una pagina costruita per rispondere a un bisogno preciso. Oppure quando il contenuto della pagina promette una cosa nel titolo o nell'annuncio, ma poi non la sviluppa davvero nel testo.</p>

      <p>Per esempio, se un utente sta cercando come aumentare le conversioni del sito web, vuole trovare contenuti concreti su conversioni, struttura della pagina, call to action, fiducia e percorso utente. Se invece atterra su una pagina aziendale molto istituzionale, è probabile che non trovi quello che cerca.</p>

      <p>Quando una pagina non risponde all'intento di ricerca o all'aspettativa iniziale, il tasso di conversione si abbassa anche se il traffico è potenzialmente qualificato.</p>

      <h2>4. Manca fiducia</h2>
      <p>Anche quando il messaggio è chiaro e la call to action è presente, molte persone non compiono il passo successivo perché non si fidano abbastanza.</p>

      <p>La fiducia online si costruisce con una serie di elementi che rassicurano e rendono credibile la tua proposta. Tra questi ci sono:</p>
      <ul>
        <li>testimonianze</li>
        <li>recensioni</li>
        <li>casi studio</li>
        <li>risultati concreti</li>
        <li>portfolio</li>
        <li>loghi clienti</li>
        <li>esempi di lavori reali</li>
        <li>una presentazione chiara del team o del metodo</li>
      </ul>

      <p>Se il sito non mostra nessuna prova sociale o nessun elemento di autorevolezza, l'utente può percepire il servizio come poco solido, poco verificabile o semplicemente troppo rischioso da approfondire.</p>

      <p>Questo vale ancora di più nei servizi complessi, nei progetti ad alto valore o in tutti quei casi in cui il contatto non è impulsivo ma richiede una scelta ragionata.</p>

      <p>Molti siti chiedono fiducia senza aver costruito prima le condizioni per ottenerla.</p>

      <h2>5. Il percorso verso il contatto è troppo complicato</h2>
      <p>A volte il problema non è convincere l'utente, ma rendere troppo difficile l'azione finale.</p>

      <p>Form lunghi, richieste premature, pagine poco intuitive, passaggi inutili o tempi di caricamento lenti sono tutti ostacoli che riducono le conversioni. Più il percorso è faticoso, più aumentano le probabilità che la persona rimandi o abbandoni.</p>

      <p>Se vuoi che il sito generi più contatti, devi semplificare il più possibile il passaggio tra interesse e azione. Chiediti:</p>
      <ul>
        <li>il form è davvero essenziale?</li>
        <li>sto chiedendo solo le informazioni necessarie?</li>
        <li>la CTA è facile da raggiungere anche da mobile?</li>
        <li>il contatto richiede troppi clic?</li>
        <li>l'utente capisce subito cosa succede dopo aver compilato il form?</li>
      </ul>

      <p>In molti casi, ridurre attriti e complessità porta miglioramenti molto più rapidi di un restyling completo.</p>

      <h2>6. Il sito è pensato per essere visto, non per convertire</h2>
      <p>Ci sono siti molto curati dal punto di vista visivo che però non funzionano sul piano della conversione. Succede quando il progetto è stato sviluppato soprattutto per fare bella figura e non per guidare l'utente verso un obiettivo.</p>

      <p>Un sito efficace non deve essere solo elegante o moderno. Deve essere leggibile, orientato, gerarchico. Deve mettere in evidenza le informazioni più importanti, creare un flusso logico e ridurre le distrazioni.</p>

      <p>Quando invece la struttura è troppo decorativa o dispersiva, l'utente può trovarsi davanti a:</p>
      <ul>
        <li>testi troppo lunghi e poco scansionabili</li>
        <li>blocchi visivi che non chiariscono le priorità</li>
        <li>menu troppo complessi</li>
        <li>sezioni belle ma poco utili</li>
        <li>informazioni decisive nascoste o poco valorizzate</li>
      </ul>

      <p>Il design non è un problema quando supporta la conversione. Lo diventa quando prende il sopravvento sulla funzione.</p>

      <h2>7. Non esiste un vero funnel dietro il sito</h2>
      <p>Un sito da solo raramente basta per generare clienti in modo costante. Anche quando la pagina è buona, serve un sistema che accompagni la persona lungo il percorso.</p>

      <p>In molte realtà manca proprio questo: il sito è presente, ma non è inserito in un funnel di acquisizione. Non c'è continuità tra fonte di traffico, pagina di destinazione, call to action, raccolta del lead e follow-up successivo.</p>

      <p>Per fare un esempio semplice, un utente può arrivare sul sito, trovare un contenuto interessante e lasciare i suoi dati. Ma poi cosa succede? Riceve una risposta? Entra in un flusso email? Viene contattato? C'è un CRM che tiene traccia del lead? Oppure tutto si interrompe lì?</p>

      <p>Quando il sito non è collegato a un processo più ampio, anche le visite più promettenti rischiano di non trasformarsi in opportunità reali.</p>

      <h2>Come capire dove si blocca la conversione del tuo sito</h2>
      <p>Se il tuo sito riceve traffico ma non genera contatti, la cosa migliore da fare non è cambiare tutto subito. Prima conviene osservare dove si crea il blocco.</p>

      <p>Puoi iniziare analizzando alcuni aspetti essenziali:</p>
      <ul>
        <li>il messaggio iniziale è chiaro in pochi secondi?</li>
        <li>ogni pagina ha una CTA evidente?</li>
        <li>la pagina corrisponde davvero all'intento di chi arriva?</li>
        <li>ci sono elementi di fiducia sufficienti?</li>
        <li>il percorso di contatto è semplice?</li>
        <li>il sito è costruito per guidare o solo per presentare?</li>
        <li>esiste un funnel reale dopo la visita?</li>
      </ul>

      <p>Spesso non è necessario rifare l'intero sito. Bastano interventi mirati sulla struttura, sui testi, sulle call to action o sulla logica delle pagine per vedere i primi miglioramenti.</p>

      <h2>Cosa fare per aumentare i contatti dal sito</h2>
      <p>Migliorare le conversioni significa lavorare sull'esperienza dell'utente in modo strategico. Non basta aggiungere un pulsante o cambiare qualche colore. Serve capire quali elementi stanno frenando il passaggio da visita a richiesta.</p>

      <p>Nella maggior parte dei casi, le aree su cui intervenire sono queste:</p>
      <ul>
        <li>chiarire meglio la proposta di valore</li>
        <li>semplificare il percorso verso il contatto</li>
        <li>progettare CTA più forti e coerenti</li>
        <li>creare pagine più focalizzate</li>
        <li>inserire elementi di fiducia</li>
        <li>collegare il sito a un funnel di acquisizione più strutturato</li>
      </ul>

      <p>Il punto non è solo avere più traffico, ma far lavorare meglio quello che già arriva.</p>

      <h2>Conclusione</h2>
      <p>Se il tuo sito web riceve traffico ma non genera contatti, il problema non è quasi mai uno solo. Di solito è una combinazione di messaggio poco chiaro, percorso dispersivo, mancanza di fiducia e assenza di una struttura orientata alla conversione.</p>

      <p>La buona notizia è che questi aspetti si possono migliorare. E spesso i risultati arrivano non aumentando le visite, ma rendendo più efficace l'esperienza di chi è già interessato.</p>

      <p>Un sito che converte non è quello che semplicemente attira attenzione. È quello che sa accompagnare la persona giusta verso il passo successivo.</p>
    `,
    date: '10 Marzo 2026',
    author: 'Elena Sivi',
    category: 'STRATEGIA',
    // TODO: sostituire `image` con URL cover dedicata quando disponibile
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    readTime: '7 MIN DI LETTURA'
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
