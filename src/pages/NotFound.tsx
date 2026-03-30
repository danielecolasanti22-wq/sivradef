import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, Home } from 'lucide-react';

export function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[12rem] md:text-[18rem] font-display font-bold leading-none text-white/5 select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
              404
            </h1>
            
            <div className="relative z-10">
              <div className="text-accent font-mono text-sm mb-6 uppercase tracking-[0.3em]">Errore di Sistema</div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">
                Pagina non trovata.
              </h2>
              <p className="text-muted text-lg max-w-md mx-auto mb-12 leading-relaxed">
                Sembra che tu abbia preso una strada che non porta alla crescita. Torniamo sulla retta via.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/" 
                  className="bg-accent text-black px-8 py-4 rounded-sm font-bold hover:bg-accent-hover transition-colors flex items-center gap-2 group"
                >
                  <Home size={18} />
                  Torna alla Home
                </Link>
                <button 
                  onClick={() => window.history.back()}
                  className="px-8 py-4 rounded-sm border border-white/10 hover:border-white/30 transition-colors flex items-center gap-2 text-muted hover:text-foreground"
                >
                  <ArrowLeft size={18} />
                  Torna indietro
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
