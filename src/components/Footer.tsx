import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-[60px] pb-12 mt-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter text-foreground">
              SIVRA<span className="text-accent">.</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
            SIVRA costruisce il sistema di acquisizione clienti per imprenditori italiani che vogliono smettere di dipendere dal passaparola e scalare in modo prevedibile.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/sivragp/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575393580970" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/sivra-growth-partner/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">Navigazione</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services" className="text-muted hover:text-accent transition-colors">Servizi</Link></li>
              <li><Link to="/about" className="text-muted hover:text-accent transition-colors">Chi Siamo</Link></li>
              <li><Link to="/case-studies" className="text-muted hover:text-accent transition-colors">Casi Studio</Link></li>
              <li><Link to="/blog" className="text-muted hover:text-accent transition-colors">Blog & Strategie</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">Servizi</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services" className="text-muted hover:text-accent transition-colors">Strategia di Crescita</Link></li>
              <li><Link to="/services" className="text-muted hover:text-accent transition-colors">Sistemi di Acquisizione</Link></li>
              <li><Link to="/services" className="text-muted hover:text-accent transition-colors">Consulenza Strategica</Link></li>
              <li><Link to="/services" className="text-muted hover:text-accent transition-colors">Ottimizzazione Conversioni</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">Contatti</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 text-muted">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@sivragp.com" className="hover:text-accent transition-colors">info@sivragp.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Phone size={16} className="text-accent" />
                <span>+39 320 968 4720</span>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <MapPin size={16} className="text-accent" />
                <span>Roma, Italia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-muted uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} SIVRA - Growth Partner.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Termini e Condizioni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
