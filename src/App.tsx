import { motion, useScroll, useTransform } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import cvFile from './CV-Osmar-Gimenez.pdf';
import technologyData from './assets/Technology.json';
import { ICONS, SERVICES, WHY_ME, TECH_STACK, CONTACT_INFO, WHATSAPP_URL } from './constants';
import { 
  SpotlightCard, 
  MagneticButton, 
  MouseFollower,
  GridBackground,
  FloatingShapes,
  Noise,
  RevealText
} from './components/AnimatedComponents';

export default function App() {

  

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [lang, setLang] = useState<'en' | 'es'>('es');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const t = {
    en: {
      badge: "Osmar Gimenez | Software Dev",
      headline: "I build digital solutions that drive business growth.",
      subtitle: "From high-performance landing pages to complex backend architectures, I handle the entire process so you can focus on your business.",
      cta: "Start a Project",
      services: "View Services",
      nav: ['Services', 'Why Me', 'Stack', 'Contact'],
      workTogether: "Let's Work Together",
      servicesTitle: "Services",
      servicesSubtitle: "Tailored technical solutions designed to solve complex business challenges.",
      servicesList: [
        {
          title: "Landing Pages",
          description: "High-conversion landing pages. Sites optimized to convert visitors into customers immediately."
        },
        {
          title: "Web Catalogs",
          description: "Pro Digital Catalogs. Showcase your products with smooth and attractive interfaces, ideal for WhatsApp sales or inquiries."
        },
        {
          title: "E-commerce Solutions",
          description: "E-commerce & Online Stores. Complete, secure, and scalable sales systems to take your business to the next level."
        },
        {
          title: "API Architectures",
          description: "API & Backend Architecture. Robust logic and secure integrations to connect your applications with the world."
        },
        {
          title: "Database Optimization",
          description: "Database Optimization. Efficient structures and management dashboards to guarantee the integrity and speed of your data."
        },
        {
          title: "Automations & CI/CD",
          description: "Automation & Deployment. I optimize your workflow with automatic processes and continuous deployments without errors."
        },
        {
          title: "Odoo ERP",
          description: "Outgrown your spreadsheets? We implement Odoo so stock, sales and invoicing live in one place. Migration, setup and support."
        }
      ],
      whyMeTitle: "Why choose my work?",
      whyMeSubtitle: "I don't just write code; I build the engine that drives your business forward.",
      whyMeList: [
        {
          title: "5+ Years of Quality",
          description: "I have a proven track record of building robust, enterprise-grade software that stands the test of time."
        },
        {
          title: "+25 Successful Launches",
          description: "From small tools to large-scale systems, I deliver high-performance solutions that matter."
        },
        {
          title: "End-to-End Solutions",
          description: "I manage the entire lifecycle: from pixel-perfect UI to complex backend logic and server management."
        },
        {
          title: "Business-First Mindset",
          description: "I focus on finding the most efficient technical path to achieve your specific commercial goals."
        }
      ],
      cvTitle: "Ready to see the full picture?",
      cvSubtitle: "Download my professional CV to explore my technical certifications, deep-dive project case studies, and 5+ years of experience.",
      cvButton: "Download CV (PDF)",
      stackTitle: "Tech Stack",
      stackSubtitle: "A versatile arsenal of tools to build modern, high-performance applications.",
      contactTitle: "Ready to scale your digital presence?",
      contactSubtitle: "Let's discuss how my 5+ years of software expertise can drive your business results.",
      contactPrimary: "Send an Email",
      contactSecondary: "LinkedIn Profile",
      badge1: "Paraguay (Remote Available)",
      badge2: "Problem Solver Mindset",
      footerText: "Building digital solutions that drive business growth.",
      copyright: "© 2026 OSMAR.GIMENEZ. ALL RIGHTS RESERVED."
    },
    es: {
      badge: "Osmar Giménez | Desarrollador de software",
      headline: "Construyo soluciones tecnológicas que impulsan tu crecimiento",
      subtitle: "Desde landing pages de alto rendimiento hasta arquitecturas backend complejas, gestiono todo el proceso para que puedas enfocarte en tu negocio",
      cta: "Iniciar Proyecto",
      services: "Ver Servicios",
      nav: ['Servicios', 'Por qué yo', 'Stack', 'Contacto'],
      workTogether: "Trabajemos Juntos",
      servicesTitle: "Servicios",
      servicesSubtitle: "Soluciones técnicas a medida diseñadas para resolver desafíos empresariales complejos.",
      servicesList: [
        {
          title: "Landing Pages",
          description: "Landing Pages de Alta Conversión. Sitios optimizados para convertir visitantes en clientes de forma inmediata."
        },
        {
          title: "Catálogos Web",
          description: "Catálogos Digitales Pro. Exhibe tus productos con interfaces fluidas y atractivas, ideales para ventas por WhatsApp o consulta."
        },
        {
          title: "Soluciones E-commerce",
          description: "E-commerce & Tiendas Online. Sistemas de venta completos, seguros y escalables para llevar tu negocio al siguiente nivel."
        },
        {
          title: "Arquitectura de APIs",
          description: "Arquitectura de APIs y Backend. Lógica robusta e integraciones seguras para conectar tus aplicaciones con el mundo."
        },
        {
          title: "Optimización de BD",
          description: "Optimización de Bases de Datos. Estructuras eficientes y tableros de gestión para garantizar la integridad y velocidad de tus datos."
        },
        {
          title: "Automatización y CI/CD",
          description: "Automatización y Despliegue. Optimizo tu flujo de trabajo con procesos automáticos y despliegues continuos sin errores."
        },
        {
          title: "Odoo ERP",
          description: "¿Tu negocio ya no entra en las planillas? Implementamos Odoo para que stock, ventas y facturación estén en un solo lugar. Migración, configuración y soporte."
        }
      ],
      whyMeTitle: "¿Por qué elegir mi trabajo?",
      whyMeSubtitle: "No solo escribo código; construyo el motor que impulsa el crecimiento de tu negocio.",
      whyMeList: [
        {
          title: "5+ Años de Calidad",
          description: "Cuento con una trayectoria comprobada construyendo software empresarial robusto que resiste el paso del tiempo."
        },
        {
          title: "+25 Lanzamientos Exitosos",
          description: "Desde herramientas pequeñas hasta sistemas a gran escala, entrego soluciones de alto rendimiento que generan impacto."
        },
        {
          title: "Soluciones Integrales",
          description: "Gestiono todo el ciclo de vida: desde interfaces impecables hasta lógica de backend compleja y administración de servidores."
        },
        {
          title: "Mente Estratégica",
          description: "Me enfoco en encontrar el camino técnico más eficiente para alcanzar tus objetivos comerciales específicos."
        }
      ],
      cvTitle: "¿Listo para ver mi perfil completo?",
      cvSubtitle: "Descarga mi CV profesional para conocer mis certificaciones técnicas, casos de estudio detallados y mis más de 5 años de trayectoria.",
      cvButton: "Descargar CV (PDF)",
      stackTitle: "Stack Tecnológico",
      stackSubtitle: "Un arsenal versátil de herramientas para construir aplicaciones modernas y de alto rendimiento.",
      contactTitle: "¿Listo para escalar tu presencia digital?",
      contactSubtitle: "Hablemos de cómo mis más de 5 años de experiencia en software pueden impulsar los resultados de tu negocio.",
      contactPrimary: "Enviar un Correo",
      contactSecondary: "Perfil de LinkedIn",
      badge1: "Paraguay (Disponible en Remoto)",
      badge2: "Mentalidad Resolutiva",
      footerText: "Construyo soluciones tecnológicas que impulsan tu crecimiento.",
      copyright: "© 2026 OSMAR.GIMENEZ. TODOS LOS DERECHOS RESERVADOS."
    }
  };

  const content = t[lang];

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
    <div className="min-h-screen selection:bg-brand-primary/30 overflow-x-hidden bg-brand-bg font-sans text-brand-text transition-colors duration-500">
      {WHATSAPP_URL && (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <ICONS.MessageCircle size={26} />
        </a>
      )}
      <Noise />
      <GridBackground />
      <MouseFollower theme={theme} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl font-display font-bold tracking-tighter text-brand-primary shrink-0"
          >
            OSMAR<span className="text-brand-primary">.</span>GIMENEZ
          </motion.span>
          
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
              {content.nav.map((item, i) => (
                <motion.a 
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${['services', 'whyme', 'stack', 'contact'][i]}`} 
                  className="hover:text-brand-text transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4 md:border-l md:border-brand-border md:pl-8">
              <button 
                onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                className="text-[10px] sm:text-xs font-bold hover:text-brand-primary transition-colors uppercase p-2"
              >
                {lang === 'en' ? 'ES' : 'EN'}
              </button>
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-brand-card transition-colors text-brand-text"
              >
                {theme === 'dark' ? <ICONS.Sun size={18} /> : <ICONS.Moon size={18} />}
              </button>
            </div>

            <MagneticButton>
              <a href="#contact" className="group flex items-center justify-center bg-transparent border border-neutral-700 rounded-full p-3 text-neutral-800 dark:text-neutral-300 md:p-0 md:px-6 md:py-2.5 md:bg-blue-600 md:text-white md:border-transparent md:border-none md:rounded-lg md:shadow-lg md:shadow-blue-600/20 hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hover:bg-blue-700 transition-all duration-300">
                <span className="hidden md:inline text-sm font-semibold whitespace-nowrap">{content.workTogether}</span>
                <span className="flex items-center justify-center md:hidden leading-none"><ICONS.Mail size={18} className="group-hover:scale-110 transition-transform md:group-hover:scale-100" /></span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center overflow-hidden">
        <FloatingShapes />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <motion.div style={{ y: y1, opacity }} className="absolute top-20 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/30 rounded-full blur-[80px] md:blur-[150px] animate-blob" />
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]), opacity }} className="absolute bottom-20 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-secondary/20 rounded-full blur-[80px] md:blur-[150px] animate-blob animation-delay-2000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 sm:mb-8 border border-brand-primary/20"
              >
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                {content.badge}
              </motion.span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 sm:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight text-left text-balance">
                {lang === 'es' ? (
                  <>
                    Construyo soluciones tecnológicas que <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">impulsan tu crecimiento.</span>
                  </>
                ) : (
                  <>
                    I build digital solutions that <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">drive business growth.</span>
                  </>
                )}
              </h1>
              
              <RevealText 
                key={lang}
                text={content.subtitle}
                className="text-lg md:text-2xl text-brand-muted leading-relaxed font-light mb-10 sm:mb-12"
              />

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <MagneticButton className="w-full sm:w-auto">
                  <a href="#contact" className="btn-primary flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold w-full sm:w-auto">
                    {content.cta} <ICONS.ArrowRight size={22} />
                  </a>
                </MagneticButton>
                <MagneticButton className="w-full sm:w-auto">
                  <a href="#services" className="btn-secondary flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold border-brand-border hover:bg-brand-card w-full sm:w-auto">
                    {content.services}
                  </a>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Right Column: The Animation */}
              <div className="hidden lg:flex justify-center items-center relative w-full h-[450px]">
                <div className="relative mx-auto flex justify-center items-center w-full max-w-[400px] h-[400px]">
                  <Player
                    autoplay
                    loop
                    src={technologyData}
                    style={{ height: '100%', width: '100%' }}
                    className="relative"
                  />
                </div>
              </div>
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
        className="section-padding relative overflow-hidden bg-brand-card/30 border-y border-brand-border"
      >
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">{content.servicesTitle}</h2>
            <RevealText 
              key={`subtitle-${lang}`}
              text={content.servicesSubtitle}
              className="text-xl text-brand-muted max-w-2xl text-balance"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = ICONS[service.icon as keyof typeof ICONS];
              const serviceContent = content.servicesList[idx];
              
              const glowStyles: Record<string, string> = {
                cyan: 'hover:border-cyan-500/30 hover:shadow-[0_0_20px_-5px_rgba(165,243,252,0.1)] dark:hover:shadow-[0_0_35px_-5px_rgba(6,182,212,0.4)] [--glow-color:rgba(165,243,252,0.1)] dark:[--glow-color:rgba(6,182,212,0.4)] [--border-glow-color:rgba(165,243,252,0.3)] dark:[--border-glow-color:rgba(6,182,212,0.6)] [--glow-blend:soft-light] dark:[--glow-blend:normal]',
                indigo: 'hover:border-indigo-500/30 hover:shadow-[0_0_20px_-5px_rgba(199,210,254,0.1)] dark:hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.4)] [--glow-color:rgba(199,210,254,0.1)] dark:[--glow-color:rgba(99,102,241,0.4)] [--border-glow-color:rgba(199,210,254,0.3)] dark:[--border-glow-color:rgba(99,102,241,0.6)] [--glow-blend:soft-light] dark:[--glow-blend:normal]',
                rose: 'hover:border-rose-500/30 hover:shadow-[0_0_20px_-5px_rgba(254,205,211,0.1)] dark:hover:shadow-[0_0_35px_-5px_rgba(244,63,94,0.4)] [--glow-color:rgba(254,205,211,0.1)] dark:[--glow-color:rgba(244,63,94,0.4)] [--border-glow-color:rgba(254,205,211,0.3)] dark:[--border-glow-color:rgba(244,63,94,0.6)] [--glow-blend:soft-light] dark:[--glow-blend:normal]',
                amber: 'hover:border-amber-500/30 hover:shadow-[0_0_20px_-5px_rgba(253,230,138,0.1)] dark:hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.4)] [--glow-color:rgba(253,230,138,0.1)] dark:[--glow-color:rgba(245,158,11,0.4)] [--border-glow-color:rgba(253,230,138,0.3)] dark:[--border-glow-color:rgba(245,158,11,0.6)] [--glow-blend:soft-light] dark:[--glow-blend:normal]',
                emerald: 'hover:border-emerald-500/30 hover:shadow-[0_0_20px_-5px_rgba(167,243,208,0.1)] dark:hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.4)] [--glow-color:rgba(167,243,208,0.1)] dark:[--glow-color:rgba(16,185,129,0.4)] [--border-glow-color:rgba(167,243,208,0.3)] dark:[--border-glow-color:rgba(16,185,129,0.6)] [--glow-blend:soft-light] dark:[--glow-blend:normal]',
                sky: 'hover:border-sky-500/30 hover:shadow-[0_0_20px_-5px_rgba(186,230,253,0.1)] dark:hover:shadow-[0_0_35px_-5px_rgba(14,165,233,0.4)] [--glow-color:rgba(186,230,253,0.1)] dark:[--glow-color:rgba(14,165,233,0.4)] [--border-glow-color:rgba(186,230,253,0.3)] dark:[--border-glow-color:rgba(14,165,233,0.6)] [--glow-blend:soft-light] dark:[--glow-blend:normal]',
                violet: 'hover:border-violet-500/30 hover:shadow-[0_0_20px_-5px_rgba(221,214,254,0.1)] dark:hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.4)] [--glow-color:rgba(221,214,254,0.1)] dark:[--glow-color:rgba(139,92,246,0.4)] [--border-glow-color:rgba(221,214,254,0.3)] dark:[--border-glow-color:rgba(139,92,246,0.6)] [--glow-blend:soft-light] dark:[--glow-blend:normal]',
              };

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-full"
                >
                  <SpotlightCard className={`p-0 group overflow-hidden transition-all duration-300 ${glowStyles[service.color || 'cyan']}`}>
                    <div className="flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden border-b border-brand-border">
                        <img 
                          src={service.mockup} 
                          alt={service.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent" />
                        <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-brand-primary/20 backdrop-blur-md border border-brand-border flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                          <Icon size={24} />
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-3 font-display text-balance">{serviceContent.title}</h3>
                        <p className="text-brand-muted text-base leading-relaxed mb-6 text-balance">
                          {serviceContent.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {service.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 bg-brand-card border border-brand-border rounded-lg text-[10px] font-medium text-brand-muted">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
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
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-balance">{content.whyMeTitle}</h2>
            <RevealText 
              key={`whyme-subtitle-${lang}`}
              text={content.whyMeSubtitle}
              className="text-xl text-brand-muted max-w-3xl text-balance"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_ME.map((item, idx) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS];
              const whyMeContent = content.whyMeList[idx];
              
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <SpotlightCard 
                    className="p-10 flex flex-col justify-between h-full transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_20px_-5px_rgba(167,243,208,0.1)] dark:hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.4)] [--glow-color:rgba(167,243,208,0.1)] dark:[--glow-color:rgba(16,185,129,0.4)] [--border-glow-color:rgba(167,243,208,0.3)] dark:[--border-glow-color:rgba(16,185,129,0.6)] [--glow-blend:soft-light] dark:[--glow-blend:normal]"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-8">
                        <Icon size={24} />
                      </div>
                      <h4 className="font-bold mb-4 font-display text-xl text-balance">{whyMeContent.title}</h4>
                      <p className="text-brand-muted leading-relaxed text-lg text-balance">{whyMeContent.description}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
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
        className="section-padding bg-brand-card/20 border-y border-brand-border"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SpotlightCard className="p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 text-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">{content.cvTitle}</h2>
                <p className="text-xl text-brand-muted mb-10 leading-relaxed text-balance">
                  {content.cvSubtitle}
                </p>
                <MagneticButton>
                  <a href={cvFile} download="CV_Osmar_Gimenez.pdf" className="btn-primary animate-shine flex items-center justify-center gap-3 px-6 py-3 text-base font-bold group w-fit mx-auto md:mx-0" target="_blank" rel="noopener noreferrer">
                    <ICONS.Download size={24} className="group-hover:translate-y-1 transition-transform" /> {content.cvButton}
                  </a>
                </MagneticButton>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-64 h-80 bg-brand-card border border-brand-border rounded-xl relative overflow-hidden shadow-2xl transform group-hover:-rotate-3 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent" />
                    <div className="p-8 space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <ICONS.FileText size={32} className="text-brand-primary" />
                        <div className="w-12 h-1 bg-brand-primary/30 rounded" />
                      </div>
                      <div className="w-3/4 h-3 bg-brand-text/20 rounded" />
                      <div className="w-full h-2 bg-brand-text/10 rounded" />
                      <div className="w-full h-2 bg-brand-text/10 rounded" />
                      <div className="w-5/6 h-2 bg-brand-text/10 rounded" />
                      <div className="pt-8 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brand-secondary/20" />
                          <div className="w-full h-2 bg-brand-text/5 rounded" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brand-primary/20" />
                          <div className="w-full h-2 bg-brand-text/5 rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-bg to-transparent" />
                  </div>
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
        className="section-padding bg-brand-card/20 border-y border-brand-border relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">{content.stackTitle}</h2>
            <RevealText 
              key={`stack-subtitle-${lang}`}
              text={content.stackSubtitle}
              className="text-xl text-brand-muted max-w-2xl mx-auto justify-center text-balance"
            />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECH_STACK.map((category) => {
              const CategoryIcon = ICONS[category.icon as keyof typeof ICONS];
              return (
                <SpotlightCard key={category.category} className="p-8 h-full border-brand-border hover:border-brand-primary/50 transition-colors">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                      <CategoryIcon size={24} />
                    </div>
                    <h4 className="text-xl font-bold font-display">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map(item => {
                      const ItemIcon = ICONS[item.icon as keyof typeof ICONS];
                      return (
                        <div 
                          key={item.name} 
                          className="tech-chip flex items-center gap-2 px-3 py-2 bg-brand-card border border-brand-border rounded-xl text-sm text-brand-muted hover:text-brand-text transition-all duration-300 group/tech"
                          style={{ '--hover-color': item.color } as React.CSSProperties}
                        >
                          <ItemIcon size={16} className="text-brand-muted group-hover/tech:text-[var(--hover-color)] transition-colors" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                      );
                    })}
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
          <h2 className="text-5xl md:text-7xl mb-10 font-display font-bold leading-tight tracking-tight text-balance">
            {content.contactTitle}
          </h2>
          <RevealText 
            key={`contact-subtitle-${lang}`}
            text={content.contactSubtitle}
            className="text-2xl text-brand-muted mb-16 font-light justify-center text-balance"
          />
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
            {WHATSAPP_URL && (
              <MagneticButton>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold shadow-2xl shadow-brand-primary/20 whitespace-nowrap">
                  <ICONS.MessageCircle size={26} /> WhatsApp
                </a>
              </MagneticButton>
            )}
            <MagneticButton>
              <a href={`mailto:${CONTACT_INFO.email}`} className="btn-secondary flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold whitespace-nowrap">
                <ICONS.Mail size={26} /> {content.contactPrimary}
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold border-white/10 hover:bg-white/5 whitespace-nowrap">
                <ICONS.Linkedin size={26} /> {content.contactSecondary}
              </a>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-12 border-t border-brand-border">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-brand-card border border-brand-border rounded-full text-sm font-medium text-brand-muted text-balance">
              <ICONS.MapPin size={18} className="text-brand-primary" /> {content.badge1}
            </div>
            <div className="flex items-center gap-3 px-5 py-2.5 bg-brand-card border border-brand-border rounded-full text-sm font-medium text-brand-muted text-balance">
              <ICONS.ShieldCheck size={18} className="text-brand-secondary" /> {content.badge2}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 py-20 border-t border-brand-border bg-white dark:bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-display font-bold tracking-tighter text-brand-primary mb-4">
              OSMAR<span className="text-brand-primary">.</span>GIMENEZ
            </span>
            <p className="text-base text-slate-950 dark:text-slate-400 max-w-xs mb-8 font-black dark:font-normal">
              {content.footerText}
            </p>
            <p className="text-xs tracking-widest font-black text-slate-950 dark:text-slate-400 uppercase">
              {content.copyright}
            </p>
          </div>
          
          <div className="flex gap-10">
            <a 
              href="https://github.com/OsmarGimenez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] text-slate-950 dark:text-slate-400"
            >
              <ICONS.Github size={32} strokeWidth={2} className="lucide stroke-currentColor transition-colors" />
            </a>
            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 bg-brand-primary/10 dark:bg-brand-primary/5 rounded-2xl border border-brand-primary/30 dark:border-brand-primary/10 transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] text-slate-950 dark:text-slate-400"
            >
              <ICONS.Linkedin size={32} strokeWidth={2} className="lucide stroke-currentColor transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
