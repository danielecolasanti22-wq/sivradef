import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export function TermsConditions() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Termini e Condizioni</h1>
            
            <div className="prose prose-invert max-w-none space-y-8 text-muted">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Accettazione dei Termini</h2>
                <p>
                  Accedendo e utilizzando il sito web di SIVRA, l'utente accetta di essere vincolato dai presenti Termini e Condizioni. Se non concordate con una qualsiasi parte di questi termini, siete pregati di non utilizzare il nostro sito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Descrizione dei Servizi</h2>
                <p>
                  SIVRA fornisce servizi di ingegneria della crescita, marketing digitale, automazione e consulenza strategica. Le informazioni fornite sul sito sono a scopo informativo e non costituiscono un'offerta contrattuale vincolante fino alla firma di un accordo di servizio specifico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Proprietà Intellettuale</h2>
                <p>
                  Tutti i contenuti presenti su questo sito (testi, grafiche, loghi, icone, immagini, clip audio, download digitali e software) sono di proprietà di SIVRA o dei suoi fornitori di contenuti e sono protetti dalle leggi internazionali sul copyright e sulla proprietà intellettuale.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitazione di Responsabilità</h2>
                <p>
                  SIVRA non sarà responsabile per eventuali danni diretti, indiretti, incidentali, speciali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare il sito o i suoi servizi. Sebbene ci sforziamo di fornire informazioni accurate, non garantiamo che i contenuti siano privi di errori o aggiornati in tempo reale.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Link a Terze Parti</h2>
                <p>
                  Il nostro sito può contenere link a siti web di terze parti. SIVRA non ha alcun controllo su tali siti e non è responsabile per i loro contenuti o per le loro pratiche sulla privacy. L'inclusione di tali link non implica l'approvazione da parte nostra.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Modifiche ai Termini</h2>
                <p>
                  SIVRA si riserva il diritto di modificare questi Termini e Condizioni in qualsiasi momento. Le modifiche saranno efficaci immediatamente dopo la loro pubblicazione sul sito. L'uso continuato del sito dopo tali modifiche costituisce l'accettazione dei nuovi termini.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Legge Applicabile</h2>
                <p>
                  Questi Termini e Condizioni sono regolati e interpretati in conformità con le leggi italiane. Qualsiasi controversia derivante da questi termini sarà soggetta alla giurisdizione esclusiva dei tribunali competenti in Italia.
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
