import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

export function Blog() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
              Strategie di <span className="text-accent">Crescita</span>
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Approfondimenti, guide e casi studio per aiutarti a costruire sistemi che scalano il tuo business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-card border border-white/5 hover:border-accent/30 transition-all duration-500 rounded-sm overflow-hidden"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-xs font-mono text-accent uppercase tracking-widest">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-display font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      Leggi <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-card/50 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Ricevi le nostre strategie direttamente nella tua inbox.
          </h3>
          <p className="text-muted mb-10">
            Niente spam. Solo sistemi, dati e strategie di crescita testate sul campo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-grow bg-background border border-white/10 px-6 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-accent text-black px-8 py-3 rounded-sm font-bold hover:bg-accent-hover transition-colors whitespace-nowrap"
            >
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}
