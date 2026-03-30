import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BarChart3, Target, Zap, Quote, Download, CheckCircle2, ShieldCheck, Search, RefreshCw, LayoutDashboard } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const dummyData = [
  { month: 'Gen', revenue: 4000 },
  { month: 'Feb', revenue: 4500 },
  { month: 'Mar', revenue: 5200 },
  { month: 'Apr', revenue: 6100 },
  { month: 'Mag', revenue: 7500 },
  { month: 'Giu', revenue: 9200 },
];

export function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen lg:min-h-[82vh] flex items-center pt-32 pb-20 lg:pt-44 lg:pb-12 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tighter leading-[1.05] mb-8 lg:mb-4"
            >
              La maggior parte delle aziende non ha un problema di visibilità. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                Ha un problema di sistema.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted mb-12 lg:mb-4 max-w-2xl font-light leading-relaxed"
            >
              SIVRA costruisce il sistema commerciale che trasforma l'attenzione in fatturato — 
              attraverso strategia, posizionamento e conversione.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/services"
                className="px-8 py-4 rounded-sm border border-white/20 hover:border-accent hover:text-accent transition-all duration-300 font-medium tracking-wide flex items-center justify-center"
              >
                Scopri i nostri servizi
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 rounded-sm bg-accent text-black hover:bg-accent-hover transition-all duration-300 font-semibold tracking-wide flex items-center justify-center gap-2 group"
              >
                Richiedi chiamata strategica
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-y border-white/10 bg-card/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6 max-w-7xl py-8 lg:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-4 divide-x-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center md:items-start px-2 md:px-4 text-center md:text-left">
              <span className="text-3xl md:text-5xl lg:text-4xl font-display font-bold text-foreground mb-1 md:mb-2">
                <AnimatedCounter value={12} />
              </span>
              <span className="text-[10px] md:text-sm text-muted uppercase tracking-wider font-medium">Clienti Massimi Attivi</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-2 md:px-4 text-center md:text-left">
              <span className="text-3xl md:text-5xl lg:text-4xl font-display font-bold text-foreground mb-1 md:mb-2">
                <AnimatedCounter value={90} prefix="< " suffix="gg" />
              </span>
              <span className="text-[10px] md:text-sm text-muted uppercase tracking-wider font-medium">Risultati Tangibili</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-2 md:px-4 text-center md:text-left">
              <span className="text-3xl md:text-5xl lg:text-4xl font-display font-bold text-foreground mb-1 md:mb-2">
                <AnimatedCounter value={50} prefix="+" suffix="%" />
              </span>
              <span className="text-[10px] md:text-sm text-muted uppercase tracking-wider font-medium">Efficienza Operativa</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-2 md:px-4 text-center md:text-left">
              <span className="text-3xl md:text-5xl lg:text-4xl font-display font-bold text-foreground mb-1 md:mb-2">
                <AnimatedCounter value={100} suffix="%" />
              </span>
              <span className="text-[10px] md:text-sm text-muted uppercase tracking-wider font-medium">Sistemi Custom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="pt-32 pb-[60px] bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Competenze</h2>
            <p className="text-xl text-muted max-w-2xl">Tutto il necessario per trasformare l'attenzione in fatturato.</p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {[
              {
                title: 'Strategia di Crescita',
                desc: 'Identifichiamo i colli di bottiglia che bloccano la tua crescita e costruiamo un piano chiaro per rimuoverli.'
              },
              {
                title: 'Sistema di Acquisizione',
                desc: 'Progettiamo l\'intero funnel: posizionamento, landing page, sequenze email, campagne — costruiti per convertire.'
              },
              {
                title: 'Consulenza Strategica',
                desc: 'Diventiamo il tuo team di crescita esterno. Coinvolti nelle decisioni, responsabili dei risultati.'
              }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 border border-accent/20 bg-background hover:border-accent/50 transition-all duration-500 rounded-sm min-w-[70vw] md:min-w-0 snap-center"
              >
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-8">{service.desc}</p>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-accent transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center md:justify-end">
            <Link to="/services" className="text-accent hover:text-accent-hover font-medium flex items-center gap-2 transition-colors group">
              Vedi tutti i servizi <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ingegneria della Crescita */}
      <section className="pt-[97px] pb-32 bg-card/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Ingegneria della Crescita: <br />
                <span className="text-accent">Oltre il Marketing.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-12">
                Il nostro lavoro inizia dove finisce il marketing tradizionale. Non ci limitiamo a generare traffico; costruiamo l'infrastruttura necessaria per trasformare quell'attenzione in profitto reale e scalabile.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Architettura del Funnel", desc: "Progettiamo il percorso dell'utente dal primo contatto alla vendita finale, eliminando ogni punto di attrito." },
                  { title: "Automazione Operativa", desc: "Integriamo AI e sistemi CRM per automatizzare i processi ripetitivi e liberare il tuo tempo per la strategia." },
                  { title: "Asset Digitali ad Alta Conversione", desc: "Creiamo landing page e siti web ottimizzati per un unico scopo: convertire i visitatori in clienti paganti." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center shrink-0 text-accent font-mono text-sm">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative h-[400px] lg:h-full min-h-[400px]">
              {/* Floating Keywords Zone - Green, Pulsing, No Overlap */}
              <div className="absolute inset-0 overflow-visible">
                {[
                  { text: "Analisi", size: "text-2xl md:text-4xl", top: "10%", left: "10%", delay: 0 },
                  { text: "Marketing", size: "text-2xl md:text-4xl", top: "15%", left: "60%", delay: 0.5 },
                  { text: "Automazione", size: "text-lg md:text-2xl", top: "5%", left: "35%", delay: 3 },
                  { text: "Strategia", size: "text-lg md:text-2xl", top: "30%", left: "80%", delay: 0.8 },
                  { text: "Conversione", size: "text-2xl md:text-4xl", top: "25%", left: "45%", delay: 1.8 },
                  { text: "Dati", size: "text-3xl md:text-5xl", top: "45%", left: "35%", delay: 1 },
                  { text: "ROI", size: "text-5xl md:text-7xl", top: "40%", left: "5%", delay: 2.5 },
                  { text: "Ingegneria", size: "text-lg md:text-2xl", top: "55%", left: "15%", delay: 2.2 },
                  { text: "Leader", size: "text-3xl md:text-5xl", top: "60%", left: "70%", delay: 1.5 },
                  { text: "Processi", size: "text-xl md:text-3xl", top: "75%", left: "25%", delay: 2 },
                  { text: "Funnel", size: "text-xl md:text-3xl", top: "85%", left: "55%", delay: 1.2 },
                  { text: "Scalabilità", size: "text-xl md:text-3xl", top: "90%", left: "10%", delay: 0.3 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`absolute font-display font-bold whitespace-nowrap pointer-events-none select-none text-accent ${item.size}`}
                    style={{ top: item.top, left: item.left }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      rotate: [0, 2, -2, 0],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 6 + Math.random() * 6,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut"
                    }}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>

              {/* Subtle Technical Grid Background */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '25px 25px' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modus Operandi */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Il Nostro Modus Operandi.</h2>
            <p className="text-muted text-lg">
              Trasparenza totale, dati in tempo reale e una partnership che non si ferma alla semplice consegna di un progetto.
            </p>
          </div>
          
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {[
              {
                title: "Audit & Diagnostica",
                desc: "Iniziamo con una radiografia completa del tuo business. Analizziamo ogni punto di fuga nel tuo attuale sistema di vendita per capire dove intervenire con priorità.",
                icon: <Search className="text-accent" size={32} />
              },
              {
                title: "Implementazione Agile",
                desc: "Non aspettiamo mesi per il lancio. Implementiamo soluzioni in cicli rapidi, testando immediatamente l'efficacia sul mercato per ottimizzare in tempo reale.",
                icon: <RefreshCw className="text-accent" size={32} />
              },
              {
                title: "Reporting Trasparente",
                desc: "Avrai accesso a dashboard personalizzate che mostrano esattamente l'andamento delle campagne e del sistema. Niente report fumosi, solo numeri chiari.",
                icon: <LayoutDashboard className="text-accent" size={32} />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-accent/20 hover:border-accent/50 transition-all bg-card/20 rounded-sm min-w-[70vw] md:min-w-0 snap-center"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SIVRA */}
      <section className="pt-[90px] pb-32 bg-card/50 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-16">
              {[
                {
                  title: "Ingegneria dei Sistemi di Vendita.",
                  desc: "Non ci limitiamo a creare campagne pubblicitarie. Progettiamo e sviluppiamo l'intera infrastruttura — dai siti web ad alta conversione alle automazioni CRM — per massimizzare il valore di ogni lead."
                },
                {
                  title: "Ottimizzazione Basata sui Dati.",
                  desc: "Ogni nostra decisione è guidata dai numeri. Testiamo costantemente ogni variabile del funnel, dai testi alle creatività, per garantire che il tuo budget generi il massimo ritorno sull'investimento possibile."
                },
                {
                  title: "Partnership Operativa & Strategica.",
                  desc: "Non siamo consulenti esterni che consegnano report e spariscono. Diventiamo il braccio operativo della tua azienda, gestendo attivamente ogni aspetto tecnico e creativo finché i risultati non sono consolidati."
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border border-accent/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold text-accent mb-2">ROI</div>
                    <div className="text-sm uppercase tracking-widest text-muted">Focus Risultati</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-[100px] pb-[90px] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Domande Frequenti</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Quanto tempo ci vuole per vedere i primi risultati?",
                a: "Dipende dalla complessità del sistema e dal punto di partenza, ma solitamente iniziamo a vedere segnali misurabili e miglioramenti nelle metriche chiave entro i primi 90 giorni di collaborazione."
              },
              {
                q: "Lavorate con qualsiasi tipo di azienda?",
                a: "No. Selezioniamo rigorosamente le aziende con cui collaboriamo. Cerchiamo business che hanno già un prodotto o servizio validato dal mercato e che sono pronti a scalare. Non lavoriamo con startup in fase pre-revenue."
              },
              {
                q: "Qual è il vostro approccio alla collaborazione?",
                a: "Operiamo come una boutique strategica ad alta intensità. Non siamo una fabbrica di marketing; selezioniamo un numero limitato di partner ogni anno per garantire che ogni progetto riceva l'attenzione diretta dei nostri esperti senior, assicurando una profondità di intervento che le agenzie tradizionali non possono offrire."
              },
              {
                q: "Qual è il budget minimo richiesto per collaborare?",
                a: "I nostri interventi sono altamente personalizzati e basati sul valore generato. Durante la chiamata conoscitiva valuteremo la tua situazione attuale e il potenziale di crescita per capire se l'investimento è giustificato dai risultati attesi."
              },
              {
                q: "Offrite servizi di gestione social media?",
                a: "No. Ci concentriamo esclusivamente su sistemi che generano fatturato diretto: posizionamento strategico, architettura dei funnel e sistemi di acquisizione. Non offriamo 'social media management' fine a se stesso."
              }
            ].map((faq, i) => (
              <div key={i}>
                <FAQItem question={faq.q} answer={faq.a} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-sm overflow-hidden bg-card/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-display font-bold pr-8">{question}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-accent text-2xl font-light leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-muted leading-relaxed border-t border-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
