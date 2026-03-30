import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100]"
        >
          <div className="bg-card border border-white/10 p-6 rounded-sm shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Cookie size={20} />
              </div>
              <div className="flex-grow">
                <h4 className="text-sm font-bold mb-2">Esperienza di Navigazione</h4>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  Utilizziamo i cookie per analizzare il traffico e migliorare la tua esperienza sul sito SIVRA. Continuando a navigare, accetti la nostra <Link to="/cookies" className="text-accent hover:underline">politica sui cookie</Link>.
                </p>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={acceptCookies}
                    className="bg-accent text-black text-xs font-bold px-4 py-2 rounded-sm hover:bg-accent-hover transition-colors"
                  >
                    Accetta Tutto
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-xs text-muted hover:text-foreground transition-colors"
                  >
                    Solo Necessari
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-muted hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
