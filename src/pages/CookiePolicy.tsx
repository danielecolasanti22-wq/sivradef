import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export function CookiePolicy() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-8 text-muted">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Cosa sono i Cookie?</h2>
                <p>
                  I cookie sono piccoli file di testo che vengono memorizzati sul vostro computer o dispositivo mobile quando visitate un sito web. Sono ampiamente utilizzati per far funzionare i siti web, o per farli funzionare in modo più efficiente, nonché per fornire informazioni ai proprietari del sito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Come utilizziamo i Cookie?</h2>
                <p>Utilizziamo i cookie per diverse finalità, tra cui:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookie Tecnici (Necessari):</strong> Essenziali per il corretto funzionamento del sito e per consentirvi di navigare e utilizzare le sue funzionalità. Senza questi cookie, alcuni servizi non possono essere forniti.</li>
                  <li><strong>Cookie Analitici:</strong> Ci aiutano a capire come i visitatori interagiscono con il sito web, raccogliendo e riportando informazioni in modo anonimo. Utilizziamo questi dati per migliorare le prestazioni del nostro sito.</li>
                  <li><strong>Cookie di Marketing:</strong> Utilizzati per tracciare i visitatori attraverso i siti web. L'intento è quello di visualizzare annunci pertinenti e coinvolgenti per il singolo utente.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookie di Terze Parti</h2>
                <p>
                  Alcuni cookie sono inseriti da servizi di terze parti che compaiono sulle nostre pagine. Ad esempio, potremmo utilizzare Google Analytics per analizzare il traffico del sito. Questi servizi hanno le proprie informative sulla privacy e sui cookie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Come gestire i Cookie?</h2>
                <p>
                  Potete controllare e/o eliminare i cookie a vostro piacimento. Potete eliminare tutti i cookie già presenti sul vostro computer e impostare la maggior parte dei browser in modo da bloccarne l'installazione. Tuttavia, se lo fate, potreste dover adattare manualmente alcune preferenze ogni volta che visitate un sito e alcuni servizi e funzionalità potrebbero non funzionare.
                </p>
                <p className="mt-4">
                  Per maggiori informazioni su come gestire i cookie nei browser più comuni, potete consultare i seguenti link:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Apple Safari</li>
                  <li>Microsoft Edge</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Consenso</h2>
                <p>
                  Al vostro primo accesso al nostro sito, vi verrà mostrato un banner informativo sull'uso dei cookie. Continuando a navigare sul sito o cliccando su "Accetta", acconsentite all'uso dei cookie in conformità con questa policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Modifiche a questa Policy</h2>
                <p>
                  Potremmo aggiornare questa Cookie Policy periodicamente per riflettere, ad esempio, modifiche ai cookie che utilizziamo o per altri motivi operativi, legali o normativi.
                </p>
              </section>

              <p className="pt-8 text-sm italic">Ultimo aggiornamento: Marzo 2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
