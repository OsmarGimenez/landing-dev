import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ICONS, SERVICES, WHY_ME, TECH_STACK, CONTACT_INFO } from './constants';
import { 
  Typewriter, 
  SpotlightCard, 
  MagneticButton, 
  TiltCard,
  MouseFollower,
  GridBackground,
  FloatingShapes,
  Noise,
  RevealText
} from './components/AnimatedComponents';

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-primary/30 overflow-x-hidden bg-brand-bg font-sans text-brand-text">
      <Noise />
      <GridBackground />
      <MouseFollower />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tighter text-brand-primary"
          >
            OSMAR<span className="text-white">.</span>GIMENEZ
          </motion.span>
          <div className="hidden md:flex gap-10 text-sm font-medium text-brand-muted">
            {['Services', 'Why Me', 'Stack', 'Contact'].map((item, i) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="hover:text-brand-text transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          <MagneticButton>
            <a href="#contact" className="btn-primary py-2.5 px-6 text-sm font-semibold rounded-lg">Let's Work Together</a>
          </MagneticButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-40 pb-32 min-h-screen flex items-center overflow-hidden">
        <FloatingShapes />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <motion.div style={{ y: y1, opacity }} className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-primary/30 rounded-full blur-[150px] animate-blob" />
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]), opacity }} className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-[150px] animate-blob animation-delay-2000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-8 border border-brand-primary/20"
              >
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                Osmar Gimenez | Software Dev
              </motion.span>
              <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
                I build digital solutions that <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">drive business growth.</span>
              </h1>
              <RevealText 
                text="From high-performance landing pages to complex backend architectures, I handle the entire process so you can focus on your business."
                className="text-xl md:text-2xl text-brand-muted mb-12 leading-relaxed font-light max-w-3xl"
              />
              <div className="flex flex-col sm:flex-row gap-6">
                <MagneticButton>
                  <a href="#contact" className="btn-primary flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold">
                    Start a Project <ICONS.ArrowRight size={22} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#services" className="btn-secondary flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold border-white/10 hover:bg-white/5">
                    View Services
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="section-padding relative overflow-hidden bg-white/[0.01] border-y border-white/5"
      >
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Services</h2>
            <RevealText 
              text="Tailored technical solutions designed to solve complex business challenges."
              className="text-xl text-brand-muted max-w-2xl"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon as keyof typeof ICONS];
              return (
                <SpotlightCard key={service.title} className="p-0 group overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden border-b border-white/10">
                      <img 
                        src={service.mockup} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent" />
                      <div className="absolute bottom-6 left-8 w-14 h-14 rounded-2xl bg-brand-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                        <Icon size={28} />
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                      <p className="text-brand-muted text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-brand-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Why Me Section - Bento Grid */}
      <motion.section 
        id="whyme"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="section-padding"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Why Work With Me?</h2>
            <RevealText 
              text="I don't just write code; I solve problems. My approach combines deep technical knowledge with a focus on business outcomes."
              className="text-xl text-brand-muted max-w-3xl"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_ME.map((item, idx) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS];
              const isLarge = item.size === 'large';
              const isMedium = item.size === 'medium';
              
              return (
                <SpotlightCard 
                  key={item.title} 
                  className={`p-10 flex flex-col justify-between ${
                    isLarge ? 'md:col-span-2 md:row-span-2' : 
                    isMedium ? 'md:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-8">
                      <Icon size={24} />
                    </div>
                    <h4 className={`font-bold mb-4 font-display ${isLarge ? 'text-3xl' : 'text-xl'}`}>{item.title}</h4>
                    <p className="text-brand-muted leading-relaxed text-lg">{item.description}</p>
                  </div>
                  {isLarge && (
                    <div className="mt-12 grid grid-cols-3 gap-4 opacity-30">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="h-2 bg-white/10 rounded-full" />
                      ))}
                    </div>
                  )}
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CV Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="section-padding bg-white/[0.01] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SpotlightCard className="p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 text-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to review my full profile?</h2>
                <p className="text-xl text-brand-muted mb-10 leading-relaxed">
                  Download my comprehensive CV to see my full professional history, technical certifications, and detailed project case studies.
                </p>
                <MagneticButton>
                  <button className="btn-primary flex items-center gap-4 px-10 py-5 text-lg font-bold">
                    <ICONS.Rocket size={24} /> Download CV (PDF)
                  </button>
                </MagneticButton>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-64 h-80 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="p-8 space-y-4">
                    <div className="w-1/2 h-4 bg-white/20 rounded" />
                    <div className="w-full h-2 bg-white/10 rounded" />
                    <div className="w-full h-2 bg-white/10 rounded" />
                    <div className="w-3/4 h-2 bg-white/10 rounded" />
                    <div className="pt-8 space-y-2">
                      <div className="w-full h-2 bg-white/5 rounded" />
                      <div className="w-full h-2 bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-bg to-transparent" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section 
        id="stack"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="section-padding bg-white/[0.01] border-y border-white/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Tech Stack</h2>
            <RevealText 
              text="A versatile arsenal of tools to build modern, high-performance applications."
              className="text-xl text-brand-muted max-w-2xl mx-auto justify-center"
            />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECH_STACK.map((category) => {
              const Icon = ICONS[category.icon as keyof typeof ICONS];
              return (
                <SpotlightCard key={category.category} className="p-8 h-full border-white/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold font-display">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map(item => (
                      <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-brand-muted hover:text-brand-text hover:border-brand-primary/50 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="section-padding text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl mb-10 font-display font-bold leading-tight tracking-tight">
            Let's <span className="text-brand-primary">Work</span> Together.
          </h2>
          <RevealText 
            text="Ready to build something amazing? Reach out and let's discuss your next project."
            className="text-2xl text-brand-muted mb-16 font-light justify-center"
          />
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-20">
            <MagneticButton>
              <a href={`mailto:${CONTACT_INFO.email}`} className="btn-primary flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold shadow-2xl shadow-brand-primary/20">
                <ICONS.Mail size={26} /> Send an Email
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold border-white/10 hover:bg-white/5">
                <ICONS.Linkedin size={26} /> LinkedIn Profile
              </a>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-brand-muted border-t border-white/5 pt-16">
            <div className="flex items-center gap-3 text-lg">
              <ICONS.MapPin size={22} className="text-brand-primary" /> {CONTACT_INFO.location}
            </div>
            <div className="flex items-center gap-3 text-lg">
              <ICONS.ShieldCheck size={22} className="text-brand-secondary" /> Problem Solver
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <span className="text-2xl font-display font-bold tracking-tighter text-brand-primary">OSMAR<span className="text-white">.</span>GIMENEZ</span>
            <p className="text-sm text-brand-muted mt-3 max-w-xs">Building digital solutions that drive business growth.</p>
            <p className="text-xs text-brand-muted/50 mt-8 uppercase tracking-widest font-semibold">© {new Date().getFullYear()} Osmar Gimenez. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-primary transition-colors">
              <ICONS.Github size={32} />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-primary transition-colors">
              <ICONS.Linkedin size={32} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
