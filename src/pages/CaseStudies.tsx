import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { 
  ArrowUpRight, 
  Users, 
  LayoutDashboard, 
  ShoppingBag, 
  Search, 
  Bell, 
  TrendingUp, 
  CheckCircle2,
  Calendar,
  CreditCard,
  Target,
  Plus
} from 'lucide-react';

export function CaseStudies() {
  useEffect(() => {
    document.title = 'Casi Studio: Risultati Reali per i Nostri Clienti — SIVRA';
    const description =
      'Scopri i casi studio SIVRA: risultati concreti su lead generation, posizionamento e crescita per PMI e liberi professionisti.';
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
            I Nostri <span className="text-accent">Progetti</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted max-w-2xl leading-relaxed"
          >
            Collaboriamo con aziende e associazioni per costruire ecosistemi digitali che comunicano autorità e generano valore nel tempo.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl py-24 space-y-32">
        
        {/* Case 1: Associazione Imprenditori Italia */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-accent font-mono text-sm tracking-widest uppercase">Web Development & Institutional</div>
            <a
              href="https://aimprenditori.it/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-start gap-3 text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight transition-colors hover:text-accent"
            >
              <span>Associazione Imprenditori Italia</span>
              <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-accent opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-8 sm:w-8" />
            </a>
            
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground block mb-2 text-lg">La Sfida:</strong>
                L'Associazione necessitava di una presenza digitale che riflettesse l'autorevolezza e il prestigio del network, fornendo al contempo uno strumento funzionale per i propri associati.
              </p>
              <p>
                <strong className="text-foreground block mb-2 text-lg">La Soluzione:</strong>
                Abbiamo progettato e sviluppato un sito istituzionale moderno, focalizzato sulla User Experience e sulla facilità di reperimento delle informazioni. Il design pulito e professionale comunica istantaneamente i valori dell'Associazione.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['UI/UX Design', 'Custom Development', 'Institutional Branding', 'Responsive Architecture'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* UI Mockup: Device Stack (Desktop + Mobile) */}
          <div className="relative aspect-[4/3] sm:aspect-video flex items-center justify-center">
            {/* Desktop Browser */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full sm:w-[85%] aspect-video bg-[#0C0C0C] border border-white/10 rounded-sm overflow-hidden shadow-2xl z-0"
            >
              {/* Browser Header */}
              <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>
              
              {/* Desktop Content */}
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-20 h-2 bg-accent/30 rounded-full" />
                  <div className="flex gap-3">
                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-1.5 bg-white/5 rounded-full" />)}
                  </div>
                </div>
                <div className="space-y-3 pt-4">
                  <div className="w-2/3 h-6 bg-white/10 rounded-sm" />
                  <div className="w-1/2 h-6 bg-accent/20 rounded-sm" />
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="aspect-video bg-white/[0.02] border border-white/5 rounded-sm" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mobile Device */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-4 bottom-0 w-[22%] aspect-[9/19] bg-[#0C0C0C] border-[3px] border-white/10 rounded-[2rem] overflow-hidden shadow-2xl z-10 hidden sm:block"
            >
              {/* Mobile Screen Content */}
              <div className="h-full flex flex-col">
                <div className="h-6 bg-white/5 flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="p-4 space-y-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full" />
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-white/10 rounded-full" />
                    <div className="w-full h-3 bg-white/10 rounded-full" />
                    <div className="w-2/3 h-3 bg-white/10 rounded-full" />
                  </div>
                  <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-sm" />
                  <div className="w-full h-8 bg-accent rounded-sm" />
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/5 blur-3xl rounded-full" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
          </div>
        </section>

        {/* Case 2: Asterys Lab */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          {/* UI Mockup: Management Dashboard */}
          <div className="order-2 lg:order-1 relative aspect-[4/3] sm:aspect-video bg-[#0C0C0C] border border-white/10 rounded-sm overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
            
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-accent/20 flex items-center justify-center">
                    <Target size={18} className="text-accent" />
                  </div>
                  <div className="text-sm font-display font-bold uppercase tracking-widest">Digital Ecosystem</div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase font-bold">Live Data</div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                    <Search size={12} className="text-muted" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Growth', val: '+32%', color: 'text-accent' },
                  { label: 'ROAS', val: '3.2x', color: 'text-white' },
                  { label: 'Efficiency', val: '94%', color: 'text-white' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 bg-white/[0.03] border border-white/5 rounded-sm">
                    <div className="text-[8px] text-muted uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className={`text-xl font-display font-bold ${stat.color}`}>{stat.val}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex-grow bg-white/[0.02] border border-white/5 rounded-sm p-6 relative overflow-hidden flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-[10px] font-mono text-muted uppercase">Recent Conversions</div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <div className="w-1 h-1 rounded-full bg-accent/40" />
                    <div className="w-1 h-1 rounded-full bg-accent/20" />
                  </div>
                </div>
                
                <div className="space-y-3 flex-grow">
                  {[
                    { id: '#8922', time: '2m ago', val: '€45.00' },
                    { id: '#8921', time: '14m ago', val: '€120.00' },
                    { id: '#8920', time: '22m ago', val: '€75.00' }
                  ].map((conv, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] border-b border-white/5 pb-2">
                      <div className="flex gap-3">
                        <span className="text-muted">{conv.id}</span>
                        <span className="font-bold">{conv.val}</span>
                      </div>
                      <span className="text-accent/60">{conv.time}</span>
                    </div>
                  ))}
                </div>

                {/* Abstract Graph Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-16 flex items-end px-6 gap-1 opacity-20 pointer-events-none">
                  {[20, 35, 25, 50, 45, 70, 60, 90].map((h, i) => (
                    <div key={i} className="flex-grow bg-accent" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-accent font-mono text-sm tracking-widest uppercase">Web Management & Digital Marketing</div>
            <a
              href="https://asteryslab.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-start gap-3 text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight transition-colors hover:text-accent"
            >
              <span>Asterys Lab</span>
              <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-accent opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-8 sm:w-8" />
            </a>
            
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground block mb-2 text-lg">La Sfida:</strong>
                Gestire un ecosistema digitale complesso garantendo coerenza di brand, performance tecniche elevate e una strategia di acquisizione costante in un settore altamente competitivo.
              </p>
              <p>
                <strong className="text-foreground block mb-2 text-lg">La Soluzione:</strong>
                SIVRA opera come partner strategico per il management web e il marketing digitale. Abbiamo implementato processi di ottimizzazione continua e campagne mirate che hanno consolidato la presenza online del brand.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Web Management', 'Performance Marketing', 'Content Strategy', 'Data Analysis'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case 3: Sivra Denim */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-accent font-mono text-sm tracking-widest uppercase">E-commerce & Fashion</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight">Sivra Denim</h2>
            
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground block mb-2 text-lg">La Sfida:</strong>
                Lanciare un brand di streetwear con un'identità forte e un'esperienza di acquisto fluida, capace di competere nel mercato fashion digitale contemporaneo.
              </p>
              <p>
                <strong className="text-foreground block mb-2 text-lg">La Soluzione:</strong>
                Sviluppo di una piattaforma e-commerce custom focalizzata sul mobile-first e sulla narrazione del brand. Abbiamo inoltre gestito campagne social strategiche con collaborazioni con influencer a livello internazionale, aumentando significativamente l'autorevolezza e la risonanza globale del brand.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['E-commerce Development', 'Streetwear Branding', 'Influencer Marketing', 'Social Strategy'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* UI Mockup: E-commerce Experience */}
          <div className="relative aspect-[4/3] sm:aspect-video bg-[#0C0C0C] border border-white/10 rounded-sm overflow-hidden group shadow-2xl flex items-center justify-center">
            {/* Desktop Admin Preview (Background) */}
            <div className="absolute top-8 left-8 right-8 bottom-8 bg-white/[0.02] border border-white/5 rounded-sm opacity-40 scale-110 blur-[1px]">
              <div className="h-6 border-b border-white/5 px-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-12 h-2 bg-white/5 rounded-full" />
              </div>
              <div className="p-4 grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-12 bg-white/5 rounded-sm" />)}
              </div>
            </div>

            {/* Mobile Mockup (Foreground) */}
            <div className="w-48 h-80 bg-background border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl z-10">
              <div className="h-6 bg-white/5 flex items-center justify-center">
                <div className="w-12 h-1 bg-white/10 rounded-full" />
              </div>
              
              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-display font-bold uppercase italic">Sivra Denim</div>
                  <ShoppingBag size={14} className="text-accent" />
                </div>
                
                <div className="aspect-[3/4] bg-white/5 rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="text-[8px] text-accent uppercase font-bold">New Drop</div>
                    <div className="text-xs font-bold uppercase">Essential Hoodie</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold">€89.00</div>
                  <div className="px-4 py-2 bg-accent text-black text-[10px] font-bold uppercase rounded-sm">Add to Cart</div>
                </div>
              </div>
            </div>
            
            {/* Sales Badge */}
            <div className="absolute top-12 right-12 p-4 bg-accent text-black rounded-sm rotate-6 shadow-xl z-20">
              <div className="text-[10px] font-bold uppercase">Conversion Rate</div>
              <div className="text-2xl font-display font-bold">+12%</div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
