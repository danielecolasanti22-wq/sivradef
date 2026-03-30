import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export function PrivacyPolicy() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-8 text-muted">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduzione</h2>
                <p>
                  Benvenuti su SIVRA. La vostra privacy è estremamente importante per noi. Questa Privacy Policy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le vostre informazioni quando visitate il nostro sito web e utilizzate i nostri servizi di ingegneria della crescita.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Titolare del Trattamento</h2>
                <p>
                  Il titolare del trattamento dei dati è SIVRA, con sede legale in Italia. Per qualsiasi domanda riguardante questa informativa, potete contattarci all'indirizzo email fornito nella sezione contatti.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Dati Raccolti</h2>
                <p>Raccogliamo diverse tipologie di informazioni, tra cui:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dati di Contatto:</strong> Nome, indirizzo email, numero di telefono forniti volontariamente tramite i nostri moduli.</li>
                  <li><strong>Dati di Utilizzo:</strong> Informazioni su come interagite con il nostro sito (indirizzo IP, tipo di browser, pagine visitate).</li>
                  <li><strong>Cookie:</strong> Piccoli file di dati memorizzati sul vostro dispositivo per migliorare l'esperienza utente.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Finalità del Trattamento</h2>
                <p>Utilizziamo i vostri dati per:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornire e gestire i nostri servizi.</li>
                  <li>Rispondere alle vostre richieste di informazioni.</li>
                  <li>Inviare comunicazioni di marketing (solo previo vostro esplicito consenso).</li>
                  <li>Analizzare e migliorare le prestazioni del nostro sito web.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Base Giuridica</h2>
                <p>
                  Trattiamo i vostri dati personali sulla base del vostro consenso, dell'esecuzione di un contratto o del nostro legittimo interesse a migliorare i nostri servizi e la sicurezza del sito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Diritti dell'Interessato</h2>
                <p>In conformità con il GDPR, avete il diritto di:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accedere ai vostri dati personali.</li>
                  <li>Chiedere la rettifica o la cancellazione dei dati.</li>
                  <li>Opporvi al trattamento o chiederne la limitazione.</li>
                  <li>Richiedere la portabilità dei dati.</li>
                  <li>Revocare il consenso in qualsiasi momento.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Sicurezza dei Dati</h2>
                <p>
                  Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i vostri dati da accessi non autorizzati, alterazioni o distruzioni.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifiche a questa Policy</h2>
                <p>
                  Ci riserviamo il diritto di aggiornare questa Privacy Policy periodicamente. Vi invitiamo a consultare questa pagina regolarmente per rimanere informati su come proteggiamo le vostre informazioni.
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
