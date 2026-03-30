import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, ChangeEvent, FocusEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  company: string;
  revenue: string;
  challenge: string;
  contact: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  revenue?: string;
  challenge?: string;
  contact?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    revenue: '',
    challenge: '',
    contact: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Il nome è obbligatorio';
        if (value.trim().length < 2) return 'Il nome deve avere almeno 2 caratteri';
        return '';
      case 'company':
        if (!value.trim()) return "L'azienda è obbligatoria";
        return '';
      case 'revenue':
        if (!value) return 'Seleziona una fascia di fatturato';
        return '';
      case 'challenge':
        if (!value.trim()) return 'Raccontaci la tua sfida';
        if (value.trim().length < 10) return 'Inserisci almeno 10 caratteri';
        return '';
      case 'contact':
        if (!value.trim()) return 'Il metodo di contatto è obbligatorio';
        if (value.includes('@')) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) return 'Formato email non valido';
        } else {
          const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
          if (value.length < 6) return 'Inserisci un contatto valido (Email o Telefono)';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    if (touched[id]) {
      const error = validateField(id, value);
      setErrors(prev => ({ ...prev, [id]: error }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    const error = validateField(id, value);
    setErrors(prev => ({ ...prev, [id]: error }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      company: true,
      revenue: true,
      challenge: true,
      contact: true,
    });

    if (!hasErrors) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        company: '',
        revenue: '',
        challenge: '',
        contact: '',
      });
      setTouched({});
    }
  };

  return (
    <PageTransition>
      <section className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column - Text */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-bold mb-8"
              >
                Parliamo della tua crescita.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted max-w-xl leading-relaxed mb-12"
              >
                Non è una chiamata di vendita. Una conversazione di 30 minuti per capire dove sei e se possiamo aiutarti.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-card border border-white/5 rounded-sm inline-block"
              >
                <div className="text-sm font-mono text-accent mb-2 uppercase tracking-wider">Disponibilità</div>
                <div className="text-foreground font-medium">Accettiamo un massimo di 2 nuovi clienti al mese.</div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden"
            >
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Richiesta inviata!</h3>
                  <p className="text-muted mb-8">Ti risponderemo entro le prossime 24 ore.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-accent font-medium hover:underline"
                  >
                    Invia un'altra richiesta
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">Nome</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-background border rounded-sm px-4 py-3 text-foreground focus:outline-none transition-colors ${
                          touched.name && errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'
                        }`}
                        placeholder="Mario Rossi"
                      />
                      {touched.name && errors.name && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground/80">Azienda</label>
                      <input 
                        type="text" 
                        id="company" 
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-background border rounded-sm px-4 py-3 text-foreground focus:outline-none transition-colors ${
                          touched.company && errors.company ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'
                        }`}
                        placeholder="Acme Corp"
                      />
                      {touched.company && errors.company && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle size={12} /> {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="revenue" className="text-sm font-medium text-foreground/80">Fascia di fatturato mensile</label>
                    <div className="relative">
                      <select 
                        id="revenue" 
                        value={formData.revenue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-background border rounded-sm px-4 py-3 text-foreground focus:outline-none transition-colors appearance-none ${
                          touched.revenue && errors.revenue ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'
                        }`}
                      >
                        <option value="" disabled>Seleziona un'opzione</option>
                        <option value="<10k">Sotto i 10k€</option>
                        <option value="10k-50k">10k€ - 50k€</option>
                        <option value="50k-100k">50k€ - 100k€</option>
                        <option value="100k+">Oltre 100k€</option>
                      </select>
                    </div>
                    {touched.revenue && errors.revenue && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.revenue}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="challenge" className="text-sm font-medium text-foreground/80">Sfida principale</label>
                    <textarea 
                      id="challenge" 
                      rows={4}
                      value={formData.challenge}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-background border rounded-sm px-4 py-3 text-foreground focus:outline-none transition-colors resize-none ${
                        touched.challenge && errors.challenge ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'
                      }`}
                      placeholder="Raccontaci cosa sta bloccando la tua crescita..."
                    />
                    {touched.challenge && errors.challenge && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.challenge}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact" className="text-sm font-medium text-foreground/80">Metodo di contatto preferito</label>
                    <input 
                      type="text" 
                      id="contact" 
                      value={formData.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-background border rounded-sm px-4 py-3 text-foreground focus:outline-none transition-colors ${
                        touched.contact && errors.contact ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'
                      }`}
                      placeholder="Email o Numero di telefono"
                    />
                    {touched.contact && errors.contact && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.contact}
                      </p>
                    )}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-black font-semibold py-4 rounded-sm hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 group mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        Richiedi Chiamata Strategica
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-muted text-center mt-4">
                    Rispondiamo entro 24 ore. Niente spam, mai.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
