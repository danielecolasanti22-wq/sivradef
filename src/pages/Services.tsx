import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { CheckCircle2, ArrowRight, Zap, Target, BarChart3, Settings, Users, Cpu, Globe, Lightbulb, TrendingUp, ShieldCheck, HelpCircle, Workflow, Search, Mail, MousePointer2, Palette, Layout, Megaphone, Filter, Share2, MessageSquare, Code, BarChart as BarChartIcon } from 'lucide-react';

const revenueData = [
  { month: 'Mese 1', attuale: 100, proiettato: 100 },
  { month: 'Mese 2', attuale: 110, proiettato: 125 },
  { month: 'Mese 3', attuale: 115, proiettato: 160 },
  { month: 'Mese 4', attuale: 120, proiettato: 210 },
  { month: 'Mese 5', attuale: 122, proiettato: 280 },
  { month: 'Mese 6', attuale: 125, proiettato: 380 },
];

const timeSavedData = [
  { task: 'Data Entry', manuale: 40, ai: 5 },
  { task: 'Lead Qual.', manuale: 30, ai: 8 },
  { task: 'Reporting', manuale: 20, ai: 2 },
  { task: 'Scheduling', manuale: 15, ai: 3 },
];

const automationData = [
  { name: 'Task Manuali', value: 65, color: '#333' },
  { name: 'Automazione AI', value: 35, color: '#00FF94' },
];

const funnelData = [
  { stage: 'Traffico', value: 100, label: '10,000' },
  { stage: 'Lead', value: 35, label: '3,500' },
  { stage: 'MQL', value: 15, label: '1,500' },
  { stage: 'Clienti', value: 5, label: '500' },
];

export function Services() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-white/5 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-accent font-mono text-sm mb-4 tracking-[0.3em] uppercase">Soluzioni per la Crescita</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
              Ingegneria <span className="text-accent">Commerciale</span>.
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Non vendiamo "servizi di marketing". Costruiamo l'infrastruttura strategica e operativa che permette alla tua azienda di scalare in modo prevedibile e profittevole.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl pt-32 pb-32 space-y-48">
        
        {/* Pillar 1: Consulenza Strategica */}
        <section id="strategia">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                  <Target size={14} /> 01. Visione & Posizionamento
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Consulenza Strategica</h2>
                <p className="text-lg text-muted leading-relaxed">
                  Molte PMI falliscono non per mancanza di impegno, ma per un posizionamento debole. Ti aiutiamo a smettere di competere sul prezzo e a diventare l'unica scelta logica per il tuo mercato.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-card border border-white/5 rounded-sm">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Cosa include:
                  </h4>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Audit del Modello di Business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Strategia Go-to-Market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Analisi Competitiva Profonda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Definizione Value Proposition</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-accent/5 border border-accent/10 rounded-sm">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <HelpCircle size={16} /> Fa per te se:
                  </h4>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Il tuo mercato è saturo e i margini calano</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Non hai un piano di acquisizione chiaro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Vuoi lanciare un nuovo prodotto/servizio</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-l-2 border-accent bg-accent/5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Il Risultato</h4>
                <p className="text-muted text-sm italic">
                  "Passare da un'azienda che rincorre i clienti a un brand che viene cercato. Risultato medio: +25% di margini grazie a un posizionamento premium."
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-sm blur-2xl group-hover:bg-accent/10 transition-all" />
              <div className="relative bg-card border border-white/10 rounded-sm p-8 h-[550px] flex flex-col shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-mono text-muted uppercase tracking-widest">Proiezione di Crescita</h4>
                  <TrendingUp size={20} className="text-accent" />
                </div>
                <div className="h-[200px] w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorPro" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00FF94" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#00FF94" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px' }}
                        itemStyle={{ color: '#00FF94' }}
                      />
                      <Area type="monotone" dataKey="attuale" stroke="#333" fill="transparent" strokeDasharray="5 5" isAnimationActive={true} animationDuration={2000} />
                      <Area type="monotone" dataKey="proiettato" stroke="#00FF94" fillOpacity={1} fill="url(#colorPro)" strokeWidth={3} isAnimationActive={true} animationDuration={2500} animationBegin={500} />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="mt-2 flex justify-between text-[8px] text-muted uppercase tracking-tighter">
                    <span>Situazione Attuale</span>
                    <span className="text-accent">Metodo SIVRA</span>
                  </div>
                </div>

                <div className="flex-1 relative border-l border-b border-white/20">
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-muted uppercase tracking-[0.3em]">Impatto</div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-muted uppercase tracking-[0.3em]">Sforzo</div>
                  
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    <div className="border-r border-b border-white/5 bg-accent/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-accent text-[10px] font-bold uppercase mb-1">Quick Wins</div>
                        <div className="text-[8px] text-muted">Alta Priorità</div>
                      </div>
                    </div>
                    <div className="border-b border-white/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/30 text-[10px] font-bold uppercase mb-1">Strategic</div>
                        <div className="text-[8px] text-muted">Lungo Termine</div>
                      </div>
                    </div>
                    <div className="border-r border-white/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/20 text-[10px] font-bold uppercase mb-1">Fillers</div>
                        <div className="text-[8px] text-muted">Basso Valore</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/10 text-[10px] font-bold uppercase mb-1">Avoid</div>
                        <div className="text-[8px] text-muted">Spreco</div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-[20%] left-[30%] w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_rgba(0,255,148,0.8)] z-10" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 2: Automazione con AI */}
        <section id="automazione">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-sm blur-2xl group-hover:bg-accent/10 transition-all" />
              <div className="relative bg-card border border-white/10 rounded-sm p-8 h-[550px] flex flex-col shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-mono text-muted uppercase tracking-widest">Efficienza Operativa</h4>
                  <Cpu size={20} className="text-accent" />
                </div>
                <div className="h-[200px] w-full flex items-center justify-center relative mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={automationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                        animationDuration={1500}
                        animationBegin={200}
                      >
                        {automationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                    <div className="text-2xl font-display font-bold text-accent">35%</div>
                    <div className="text-[8px] text-muted uppercase tracking-widest">Risparmio</div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">Risparmio Ore Settimanali</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={timeSavedData} layout="vertical" margin={{ left: 0, right: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#222" horizontal={false} />
                      <XAxis type="number" hide />
                      <YAxis dataKey="task" type="category" stroke="#666" fontSize={10} width={70} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px' }}
                        cursor={{ fill: 'transparent' }}
                      />
                      <Bar dataKey="manuale" fill="#333" radius={[0, 2, 2, 0]} barSize={10} isAnimationActive={true} animationDuration={1500} animationBegin={400} />
                      <Bar dataKey="ai" fill="#00FF94" radius={[0, 2, 2, 0]} barSize={10} isAnimationActive={true} animationDuration={1500} animationBegin={600} />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-2 flex justify-between text-[8px] text-muted uppercase">
                    <span>Prima (Manuale)</span>
                    <span className="text-accent">Dopo (AI)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                  <Settings size={14} /> 02. Efficienza & Scalabilità
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Automazione con AI</h2>
                <p className="text-lg text-muted leading-relaxed">
                  Il collo di bottiglia della crescita è spesso operativo. Implementiamo l'intelligenza artificiale e l'automazione per eliminare i compiti ripetitivi, permettendo al tuo team di concentrarsi su ciò che genera valore.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-card border border-white/5 rounded-sm">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Cosa include:
                  </h4>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Setup CRM & Lead Scoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Integrazione Zapier/Make</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>AI Agent per Supporto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Dashboard Dati Real-time</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-accent/5 border border-accent/10 rounded-sm">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <HelpCircle size={16} /> Fa per te se:
                  </h4>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Il team perde tempo in data-entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>I lead non vengono richiamati subito</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Hai sistemi che non si parlano tra loro</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-l-2 border-accent bg-accent/5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Esempio Pratico</h4>
                <p className="text-muted text-sm italic">
                  "Automatizzare la qualificazione dei lead: il tuo commerciale riceve solo appuntamenti con persone che hanno già il budget e il bisogno confermato. Risparmio: 15 ore/settimana per venditore."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 3: Marketing Digitale */}
        <section id="marketing">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                  <Globe size={14} /> 03. Acquisizione & Autorità
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Marketing Digitale</h2>
                <p className="text-lg text-muted leading-relaxed">
                  Non facciamo "post sui social". Costruiamo un motore di acquisizione multi-canale che porta lead qualificati ogni singolo giorno, trasformando il tuo marketing da un costo a un investimento misurabile.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-card border border-white/5 rounded-sm">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Cosa include:
                  </h4>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>SEO & Content Strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Campagne Meta & Google Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Copywriting Persuasivo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Funnel di Vendita & Email</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-accent/5 border border-accent/10 rounded-sm">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <HelpCircle size={16} /> Fa per te se:
                  </h4>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Dipendi troppo dal passaparola</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Hai un sito che non genera contatti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Vuoi scalare i volumi di vendita</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-l-2 border-accent bg-accent/5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Il Risultato</h4>
                <p className="text-muted text-sm italic">
                  "Un flusso prevedibile di potenziali clienti. Non dipenderai più dalla fortuna. Ogni euro investito ha un ritorno chiaro e tracciabile (ROI medio 4x)."
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-sm blur-2xl group-hover:bg-accent/10 transition-all" />
              <div className="relative bg-card border border-white/10 rounded-sm p-8 h-[550px] flex flex-col shadow-2xl">
                <div className="flex justify-between items-center mb-10">
                  <h4 className="text-sm font-mono text-muted uppercase tracking-widest">Funnel di Conversione</h4>
                  <Zap size={20} className="text-accent" />
                </div>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={funnelData} layout="vertical" margin={{ top: 0, right: 40, left: 40, bottom: 0 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="stage" type="category" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 10 }} />
                      <Tooltip 
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        contentStyle={{ backgroundColor: '#0A0A0A', borderColor: '#222', borderRadius: '4px' }}
                        itemStyle={{ color: '#00FF94' }}
                      />
                      <Bar dataKey="value" fill="#00FF94" radius={[0, 4, 4, 0]} barSize={32} isAnimationActive={true} animationDuration={1800} animationBegin={300}>
                        {funnelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fillOpacity={1 - index * 0.2} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 space-y-6">
                  <div className="grid grid-cols-4 gap-2">
                    {funnelData.map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs font-bold text-accent">{item.label}</div>
                        <div className="text-[8px] text-muted uppercase">{item.stage}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center p-4 bg-accent/5 border border-accent/10 rounded-sm">
                    <div className="text-xs font-bold uppercase tracking-widest">ROI Medio</div>
                    <div className="text-2xl font-display font-bold text-accent">4.2x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modular Services Section */}
        <section id="servizi-modulari" className="pt-0 pb-5 pl-[1px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Soluzioni Modulari</h2>
            <p className="text-lg text-muted">
              Offriamo un approccio a 360°, ma sappiamo che ogni azienda ha esigenze diverse. Puoi scegliere il sistema completo o focalizzarti su un singolo modulo per risolvere una sfida specifica.
            </p>
          </div>

          <div className="grid grid-rows-2 grid-flow-col lg:grid-flow-row lg:grid-rows-none lg:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {[
              {
                title: "Brand Identity",
                description: "Costruiamo l'anima del tuo brand. Dal logo al posizionamento, creiamo un'identità che comunica autorità e attira i clienti giusti.",
                icon: Palette,
                features: ["Logo Design", "Brand Book", "Tone of Voice", "Visual Language"]
              },
              {
                title: "Siti Web & E-commerce",
                description: "Sviluppiamo piattaforme ad alte prestazioni focalizzate sulla conversione. Non solo estetica, ma strumenti di vendita ottimizzati SEO.",
                icon: Layout,
                features: ["UX/UI Design", "Shopify & Custom", "SEO Optimization", "Performance Check"]
              },
              {
                title: "Campagne Marketing",
                description: "Gestiamo il tuo budget pubblicitario su Meta, Google e LinkedIn per massimizzare il ROAS e scalare le vendite in modo prevedibile.",
                icon: Megaphone,
                features: ["Meta Ads", "Google Search", "LinkedIn B2B", "TikTok Ads"]
              },
              {
                title: "Funnel di Vendita",
                description: "Progettiamo il percorso che trasforma un estraneo in un cliente fedele. Ottimizziamo ogni step per ridurre il costo di acquisizione.",
                icon: Filter,
                features: ["Lead Generation", "Landing Pages", "A/B Testing", "CRO"]
              },
              {
                title: "Email Marketing",
                description: "Sfruttiamo il canale più profittevole per nutrire i lead e aumentare il Life Time Value dei tuoi clienti attraverso automazioni avanzate.",
                icon: Mail,
                features: ["Newsletter", "Automazioni", "Segmentazione", "Retention"]
              },
              {
                title: "Social Media Management",
                description: "Creiamo contenuti che generano engagement e autorità. Gestiamo la tua presenza social per costruire una community attiva attorno al brand.",
                icon: Share2,
                features: ["Content Strategy", "Copywriting", "Community Management", "Growth"]
              },
              {
                title: "Automazioni & AI",
                description: "Eliminiamo le inefficienze operative integrando i tuoi sistemi e implementando agenti AI per il supporto e la vendita.",
                icon: Workflow,
                features: ["CRM Setup", "Workflow AI", "Integrazioni API", "Chatbot Avanzati"]
              },
              {
                title: "SEO & Content",
                description: "Scaliamo la tua visibilità organica sui motori di ricerca attraverso una strategia di contenuti basata sui dati e sull'intento di ricerca.",
                icon: Search,
                features: ["Keyword Research", "Technical SEO", "Link Building", "Copy SEO"]
              },
              {
                title: "Analisi & Reporting",
                description: "Tracciamo ogni singola azione per darti una visione chiara del tuo ROI. Decisioni basate sui numeri, non sulle sensazioni.",
                icon: BarChartIcon,
                features: ["Custom Dashboards", "Data Tracking", "ROI Analysis", "Competitor Audit"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 lg:p-8 bg-card border border-accent/20 rounded-sm hover:border-accent/50 transition-all group w-[65vw] lg:w-auto lg:min-w-0 snap-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-xs text-muted/80">
                      <div className="w-1 h-1 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-card border border-white/5 rounded-sm text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Non sai da dove iniziare?</h3>
            <p className="text-muted mb-10">
              Analizziamo insieme la tua situazione attuale e identifichiamo la leva più potente per la tua crescita in una chiamata di 30 minuti.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-accent text-black px-10 py-4 rounded-sm font-bold hover:bg-accent-hover transition-all group"
            >
              Analisi Gratuita <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
