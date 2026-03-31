import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { useEffect } from 'react';

export function About() {
  useEffect(() => {
    document.title = 'Chi Siamo: il Team SIVRA, Growth Partner per PMI Italiane';
    const description =
      'Scopri il team SIVRA e il nostro approccio alla crescita: strategia, acquisizione clienti e sistemi di marketing per PMI e professionisti.';
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', description);
  }, []);

  return (
    <PageTransition>
      <section className="pt-40 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Chi è SIVRA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted max-w-2xl leading-relaxed"
          >
            Costruiamo sistemi che fanno crescere le aziende.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl py-24">
        
        {/* Company Description */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-foreground/80">
            <p>
              C'è differenza tra fare marketing e far crescere un'azienda.
              Il primo produce numeri. La seconda produce fatturato.
              <span className="text-accent font-medium block mt-2">SIVRA lavora sulla seconda.</span>
            </p>
            <p>
              Strategia, posizionamento, acquisizione clienti, conversione — tutto costruito attorno ai veri obiettivi delle persone con cui lavoriamo. Nessun pacchetto standard. Nessuna vanity metric. Un sistema progettato per durare e portare risultati concreti.
            </p>
            <p>
              Lavoriamo con un numero limitato di clienti alla volta, con un coinvolgimento diretto su ogni progetto. Perché la crescita non è qualcosa che deleghi a un junior — è qualcosa che costruisci insieme.
            </p>
          </div>
        </section>

        {/* Methodology Timeline */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Come Pensiamo</h2>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-white/10" />
            
            {[
              {
                title: 'Dati oltre i Dogmi',
                desc: 'Non seguiamo le mode. Guardiamo cosa ci dicono i numeri e costruiamo strategie basate su evidenze empiriche.'
              },
              {
                title: 'Sistemi oltre le Tattiche',
                desc: 'Un post virale è una tattica. Un funnel di acquisizione prevedibile è un sistema. Noi costruiamo solo sistemi.'
              },
              {
                title: 'Fatturato oltre la Copertura',
                desc: 'Le impression sono gratis. Il fatturato paga i conti. Ogni nostra azione è legata a un risultato commerciale.'
              },
              {
                title: 'Partnership oltre il Fornitore',
                desc: 'Limitiamo il nostro portafoglio clienti per poter agire come un\'estensione del tuo team, non come un\'agenzia distaccata.'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20 pb-16 last:pb-0"
              >
                <div className="absolute left-0 top-1 w-14 h-14 bg-background border border-accent rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-accent rounded-full" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-muted text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
