import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { name: 'Servizi', path: '/services' },
  { name: 'Chi Siamo', path: '/about' },
  { name: 'Casi Studio', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div
        className={cn(
          'pointer-events-auto flex items-center justify-between bg-background/60 backdrop-blur-xl border border-white/10 rounded-full px-8 transition-all duration-500 shadow-2xl max-w-5xl w-full',
          isScrolled ? 'py-3 bg-background/80' : 'py-4'
        )}
      >
        <Link
          to="/"
          className="text-xl font-display font-bold tracking-tighter text-foreground shrink-0"
          aria-label="SIVRA homepage"
        >
          SIVRA<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-xs font-medium uppercase tracking-widest transition-colors hover:text-accent',
                location.pathname === link.path ? 'text-accent' : 'text-muted'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-black px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-accent-hover transition-all hover:scale-105 active:scale-95"
          >
            Contatti
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-full left-0 right-0 mt-4 bg-background/95 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col gap-6 md:hidden shadow-2xl"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-xl font-display font-bold transition-colors',
                    location.pathname === link.path ? 'text-accent' : 'text-foreground'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent text-black px-6 py-4 rounded-full text-center font-bold mt-4 uppercase tracking-widest text-sm"
              >
                Prenota una chiamata
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
