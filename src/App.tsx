import { motion, useScroll, useTransform } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import cvFile from './CV-Osmar-Gimenez.pdf';
import { ICONS, SERVICES, PROCESS, WHY_ME, CONTACT_INFO, WHATSAPP_URL } from './constants';
import {
  SpotlightCard,
  MagneticButton,
  MouseFollower,
  FloatingShapes,
  Noise,
  RevealText
} from './components/AnimatedComponents';
import { NandutiSun, NandutiHero, NandutiWeave } from './components/Nanduti';
import { ServiceDiagram } from './components/ServiceDiagram';
import { BrandIcon } from './components/BrandIcon';
import { TechMarquee } from './components/TechMarquee';

/**
 * Subraya una frase con un hilo tejido a mano, en lugar de pintarla con un
 * degradado. El trazo es irregular a proposito: un subrayado perfectamente
 * recto se lee como borde de caja, uno con pulso se lee como hecho por alguien.
 */
const ThreadUnderline = ({children}: {children: React.ReactNode}) => (
  <span className="relative inline-block whitespace-normal text-brand-primary">
    {children}
    <svg
      viewBox="0 0 300 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute -bottom-1 left-0 h-[0.35em] w-full text-brand-secondary"
    >
      <path
        d="M2 7.5 C 48 3, 96 9.5, 148 5.5 S 252 3.5, 298 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </span>
);

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
      badge: "Osmar Gimenez, software developer",
      heroLocation: "Based in Paraguay",
      headline: "I build digital solutions that drive business growth.",
      subtitle: "From high-performance landing pages to complex backend architectures, I handle the entire process so you can focus on your business.",
      cta: "Start a Project",
      ctaWhatsapp: "Message me on WhatsApp",
      services: "View Services",
      nav: ['Services', 'How I work', 'About me', 'Contact'],
      workTogether: "Let's Work Together",
      servicesTitle: "What I can build for you",
      servicesSubtitle: "Start from what you need solved. The technology comes after.",
      servicesList: [
        {
          problem: "“I need a page that actually sells”",
          title: "Landing page",
          description: "One page with a single goal: that whoever arrives writes to you. Fast, mobile-first and measurable."
        },
        {
          problem: "“I want to show my products without setting up a store”",
          title: "Web catalog",
          description: "Your products online, always current, with a WhatsApp button on every item. No cart, no checkout."
        },
        {
          problem: "“I want to sell online”",
          title: "Online store",
          description: "Full purchase cycle: cart, payments, stock and orders. Ready to grow without being rebuilt."
        },
        {
          problem: "“I need my systems to talk to each other”",
          title: "Integrations and APIs",
          description: "I connect your store, your ERP and whatever else you use, so you stop moving data by hand."
        },
        {
          problem: "“My system is slow”",
          title: "Database optimization",
          description: "I find what's slowing it down and fix it: queries, indexes and structure. Same system, less waiting."
        },
        {
          problem: "“I do everything by hand and lose time”",
          title: "Automations",
          description: "Reports, backups, deploys and repetitive tasks running on their own, without you remembering them."
        },
        {
          problem: "“I need to get my business organized”",
          title: "Odoo implementation",
          description: "Outgrown your spreadsheets? I set up Odoo so stock, sales and invoicing live in one place. Migration, setup and support."
        }
      ],
      processTitle: "How I work",
      processSubtitle: "No surprises. You know what happens at every step before you commit to anything.",
      processList: [
        {
          title: "We talk for 20 minutes",
          description: "You tell me what you need. No commitment and no jargon. If I'm not the right fit, I'll say so."
        },
        {
          title: "I send you a proposal",
          description: "Closed price and deadline, in writing. If it doesn't work for you, we don't go ahead. No hard feelings."
        },
        {
          title: "I build it with weekly deliveries",
          description: "Every week you see real progress. No waiting months in the dark wondering how it's going."
        }
      ],
      whyMeTitle: "Why choose my work?",
      whyMeSubtitle: "I don't just write code; I build the engine that drives your business forward.",
      whyMeList: [
        {
          title: "8+ Years of Quality",
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
      aboutTitle: "Who you'd be working with",
      aboutText: "I'm Osmar Giménez, a software developer based in Paraguay. I work directly with you — no agency, no account manager in between, no team you never get to meet. I invoice locally and we can meet in person if you're in Asunción.",
      aboutCv: "If you want the long version — certifications, employment history, the whole track record — it's all in my CV.",
      cvButton: "Download CV (PDF)",
      stackToggle: "Technologies I work with",
      stackHint: "For anyone who wants the technical detail",
      contactTitle: "Ready to scale your digital presence?",
      contactSubtitle: "Let's discuss how my 8+ years of software expertise can drive your business results.",
      contactPrimary: "Send an Email",
      contactSecondary: "LinkedIn Profile",
      badge1: "Paraguay (Remote Available)",
      badge2: "Problem Solver Mindset",
      footerText: "Building digital solutions that drive business growth.",
      copyright: "© 2026 OSMAR.GIMENEZ. ALL RIGHTS RESERVED."
    },
    es: {
      badge: "Osmar Giménez, desarrollador de software",
      heroLocation: "Desde Paraguay",
      headline: "Construyo soluciones tecnológicas que impulsan tu crecimiento",
      subtitle: "Desde landing pages de alto rendimiento hasta arquitecturas backend complejas, gestiono todo el proceso para que puedas enfocarte en tu negocio",
      cta: "Iniciar Proyecto",
      ctaWhatsapp: "Escribime por WhatsApp",
      services: "Ver Servicios",
      nav: ['Servicios', 'Cómo trabajo', 'Sobre mí', 'Contacto'],
      workTogether: "Trabajemos Juntos",
      servicesTitle: "Qué te puedo construir",
      servicesSubtitle: "Empezá por lo que necesitás resolver. La tecnología viene después.",
      servicesList: [
        {
          problem: "«Necesito una página que venda»",
          title: "Landing page",
          description: "Una sola página con un solo objetivo: que el que llega te escriba. Rápida, pensada para celular y medible."
        },
        {
          problem: "«Quiero mostrar mis productos sin armar una tienda»",
          title: "Catálogo web",
          description: "Tus productos online, siempre actualizados, con botón de WhatsApp en cada uno. Sin carrito ni checkout."
        },
        {
          problem: "«Quiero vender por internet»",
          title: "Tienda online",
          description: "Ciclo de compra completo: carrito, pagos, stock y pedidos. Lista para crecer sin rehacerla."
        },
        {
          problem: "«Necesito que mis sistemas hablen entre sí»",
          title: "Integraciones y APIs",
          description: "Conecto tu tienda, tu ERP y lo que uses, para que dejes de pasar datos a mano."
        },
        {
          problem: "«Mi sistema va lento»",
          title: "Optimización de base de datos",
          description: "Busco qué lo está frenando y lo corrijo: consultas, índices y estructura. El mismo sistema, con menos espera."
        },
        {
          problem: "«Hago todo a mano y pierdo tiempo»",
          title: "Automatizaciones",
          description: "Reportes, respaldos, despliegues y tareas repetitivas andando solas, sin que tengas que acordarte."
        },
        {
          problem: "«Necesito ordenar mi empresa»",
          title: "Implementación de Odoo",
          description: "¿Tu negocio ya no entra en las planillas? Configuro Odoo para que stock, ventas y facturación estén en un solo lugar. Migración, configuración y soporte."
        }
      ],
      processTitle: "Cómo trabajo",
      processSubtitle: "Sin sorpresas. Sabés qué pasa en cada paso antes de comprometerte a nada.",
      processList: [
        {
          title: "Hablamos 20 minutos",
          description: "Me contás qué necesitás. Sin compromiso y sin tecnicismos. Si no soy la persona indicada, te lo digo."
        },
        {
          title: "Te paso una propuesta",
          description: "Precio cerrado y plazo, por escrito. Si no te sirve, no seguimos. Sin resentimientos."
        },
        {
          title: "Desarrollo con entregas semanales",
          description: "Cada semana ves avances reales. Nada de esperar meses a ciegas preguntándote cómo viene."
        }
      ],
      whyMeTitle: "¿Por qué elegir mi trabajo?",
      whyMeSubtitle: "No solo escribo código; construyo el motor que impulsa el crecimiento de tu negocio.",
      whyMeList: [
        {
          title: "+8 Años de Calidad",
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
      aboutTitle: "Con quién vas a trabajar",
      aboutText: "Soy Osmar Giménez, desarrollador de software radicado en Paraguay. Trabajás directamente conmigo: sin agencia, sin ejecutivo de cuentas en el medio, sin un equipo que nunca llegás a conocer. Facturo local y, si estás en Asunción, nos podemos ver en persona.",
      aboutCv: "Si querés la versión larga —certificaciones, trayectoria laboral, todo el recorrido— está en mi CV.",
      cvButton: "Descargar CV (PDF)",
      stackToggle: "Tecnologías con las que trabajo",
      stackHint: "Para quien quiera el detalle técnico",
      contactTitle: "¿Listo para escalar tu presencia digital?",
      contactSubtitle: "Hablemos de cómo mis más de 8 años de experiencia en software pueden impulsar los resultados de tu negocio.",
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
          <BrandIcon slug="whatsapp" size={28} />
        </a>
      )}
      <Noise />
      {/* Trama de ñandutí de fondo, en lugar de la grilla de puntos generica. */}
      <NandutiWeave className="fixed inset-0 -z-10 h-full w-full text-brand-primary opacity-[0.07] pointer-events-none" />
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
                  href={`#${['services', 'process', 'about', 'contact'][i]}`}
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
                aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
                className="text-[10px] sm:text-xs font-bold hover:text-brand-primary transition-colors uppercase p-2"
              >
                {lang === 'en' ? 'ES' : 'EN'}
              </button>
              {/* Solo lleva icono, asi que el nombre accesible tiene que venir
                  del aria-label o el boton queda mudo para un lector de pantalla. */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={
                  theme === 'dark'
                    ? (lang === 'es' ? 'Activar tema claro' : 'Switch to light theme')
                    : (lang === 'es' ? 'Activar tema oscuro' : 'Switch to dark theme')
                }
                className="p-2 rounded-full hover:bg-brand-card transition-colors text-brand-text"
              >
                {theme === 'dark' ? <ICONS.Sun size={18} /> : <ICONS.Moon size={18} />}
              </button>
            </div>

            <MagneticButton>
              {/* En movil el texto se oculta y queda solo el icono, asi que el
                  aria-label es lo unico que nombra el enlace en ese tamaño.
                  El color del texto se fuerza a blanco desde md: heredando
                  `dark:text-neutral-300` daba 3.54 de contraste sobre el azul,
                  por debajo del 4.5 que pide WCAG. */}
              <a
                href="#contact"
                aria-label={content.workTogether}
                className="group flex items-center justify-center bg-transparent border border-neutral-700 rounded-full p-3 text-neutral-800 dark:text-neutral-300 md:p-0 md:px-6 md:py-2.5 md:bg-blue-600 md:text-white md:dark:text-white md:border-transparent md:border-none md:rounded-lg md:shadow-lg md:shadow-blue-600/20 hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hover:bg-blue-700 transition-all duration-300"
              >
                <span className="hidden md:inline text-sm font-semibold whitespace-nowrap">{content.workTogether}</span>
                <span className="flex items-center justify-center md:hidden leading-none"><ICONS.Mail size={18} className="group-hover:scale-110 transition-transform md:group-hover:scale-100" /></span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* <main> es el landmark que faltaba: sin el, quien navega con
          lector de pantalla no tiene forma de saltar directo al contenido. */}
      <main>

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
                {/* Una linea, no dos pildoras. El par de chips redondeados con
                    punto que late y `uppercase tracking-widest` es la firma
                    visual del landing generado; esto se lee como cabecera de
                    publicacion, que es lo contrario. */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mb-8 flex items-center gap-3 text-sm text-brand-muted"
                >
                  <NandutiSun seed={1} className="h-5 w-5 shrink-0 text-brand-primary" />
                  <span>{content.badge}</span>
                  <span aria-hidden="true" className="hidden h-px w-6 bg-brand-border sm:block" />
                  <span className="hidden items-center gap-1.5 text-brand-secondary sm:inline-flex">
                    <ICONS.MapPin size={14} />
                    {content.heroLocation}
                  </span>
                </motion.div>
                {/* Sin degradado en el texto: es otro tic del landing generado, y
                    ademas baja el contraste justo en la linea mas importante. La
                    frase clave se marca con un hilo tejido debajo. */}
                <h1 className="mb-6 text-balance text-left font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:mb-8 sm:text-5xl md:text-[4.25rem]">
                  {lang === 'es' ? (
                    <>
                      Construyo soluciones tecnológicas que{' '}
                      <ThreadUnderline>impulsan tu crecimiento.</ThreadUnderline>
                    </>
                  ) : (
                    <>
                      I build digital solutions that{' '}
                      <ThreadUnderline>drive business growth.</ThreadUnderline>
                    </>
                  )}
                </h1>
              
                <RevealText 
                  key={lang}
                  text={content.subtitle}
                  className="text-lg md:text-2xl text-brand-muted leading-relaxed font-light mb-10 sm:mb-12"
                />

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* El principal abre la conversacion directamente; mandar al
                      visitante a scrollear hasta contacto pierde gente. */}
                  <MagneticButton className="w-full sm:w-auto">
                    {WHATSAPP_URL ? (
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp flex w-full items-center justify-center gap-3 px-8 py-4 text-base font-bold sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
                      >
                        <BrandIcon slug="whatsapp" size={24} /> {content.ctaWhatsapp}
                      </a>
                    ) : (
                      <a href="#contact" className="btn-primary flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold w-full sm:w-auto">
                        {content.cta} <ICONS.ArrowRight size={22} />
                      </a>
                    )}
                  </MagneticButton>
                  <MagneticButton className="w-full sm:w-auto">
                    <a href="#services" className="btn-secondary flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold border-brand-border hover:bg-brand-card w-full sm:w-auto">
                      {content.services}
                    </a>
                  </MagneticButton>
                </div>
              </motion.div>

              {/* Ñandutí en lugar de la ilustración de stock. Es SVG generado en
                  el propio bundle, así que no hay chunk ni JSON que descargar. */}
              <div className="hidden lg:flex justify-center items-center relative w-full h-[450px]">
                <NandutiHero className="w-full max-w-[420px]" />
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
          className="section-tint relative overflow-hidden py-20"
        >
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
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
                        {/* El esquema representa el entregable del servicio. El
                            sol de ñandutí que habia antes era identico en las
                            siete tarjetas y no decia nada de lo que se vende. */}
                        <div className="relative h-48 overflow-hidden border-b border-brand-border flex items-center justify-center">
                          <ServiceDiagram
                            kind={service.diagram}
                            className="h-40 w-40 text-brand-primary opacity-55 transition-all duration-500 ease-out group-hover:opacity-90 group-hover:scale-[1.06]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent pointer-events-none" />
                          <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-brand-primary/20 backdrop-blur-md border border-brand-border flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                            <Icon size={24} />
                          </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                          {/* El entregable queda como etiqueta y el titular es el
                              problema dicho por el cliente, no la categoria tecnica. */}
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-3">
                            {serviceContent.title}
                          </span>
                          <h3 className="text-xl font-bold mb-3 font-display text-balance">
                            {serviceContent.problem}
                          </h3>
                          <p className="text-brand-muted text-base leading-relaxed text-balance">
                            {serviceContent.description}
                          </p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Como trabajo: responde "que pasa si te escribo" apenas el visitante
            termina de ver que hacés, que es cuando se lo pregunta. */}
        <motion.section
          id="process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative overflow-hidden py-20"
        >
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">{content.processTitle}</h2>
              <RevealText
                key={`process-subtitle-${lang}`}
                text={content.processSubtitle}
                className="text-xl text-brand-muted max-w-2xl text-balance"
              />
            </div>

            <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
              {/* Hilo que une los tres pasos, al modo del radio de un ñandutí. */}
              <span
                aria-hidden="true"
                className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-primary/40 via-brand-primary/20 to-transparent"
              />

              {PROCESS.map((step, idx) => {
                const StepIcon = ICONS[step.icon as keyof typeof ICONS];
                const stepContent = content.processList[idx];

                return (
                  <li key={stepContent.title} className="relative flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-primary/30 bg-brand-bg text-brand-primary">
                        <StepIcon size={22} />
                      </span>
                      <span className="font-display text-5xl font-bold leading-none text-brand-primary/20">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="mb-3 font-display text-xl font-bold text-balance">{stepContent.title}</h3>
                    <p className="text-brand-muted leading-relaxed text-balance">{stepContent.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </motion.section>

        {/* Why Me Section - Bento Grid */}
        <motion.section
          id="whyme"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20"
        >
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
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
                        <h3 className="font-bold mb-4 font-display text-xl text-balance">{whyMeContent.title}</h3>
                        <p className="text-brand-muted leading-relaxed text-lg text-balance">{whyMeContent.description}</p>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Sobre mi. Antes era la seccion "Descargar CV" y ocupaba una pantalla
            entera: el CV dejo de ser la oferta y pasó a ser el respaldo. */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="section-tint relative overflow-hidden py-20"
        >
          <NandutiSun
            seed={1}
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-brand-primary opacity-[0.12]"
          />
          <div className="relative z-10 mx-auto w-full max-w-3xl px-6 md:px-12 lg:px-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-balance">{content.aboutTitle}</h2>
            <p className="text-xl text-brand-muted leading-relaxed mb-8 text-balance">
              {content.aboutText}
            </p>
            <p className="text-base text-brand-muted leading-relaxed mb-6 text-balance">
              {content.aboutCv}
            </p>
            <a
              href={cvFile}
              download="CV_Osmar_Gimenez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
            >
              <ICONS.Download size={16} className="transition-transform group-hover:translate-y-0.5" />
              {content.cvButton}
            </a>
          </div>
        </motion.section>

        {/* Stack como carrusel: dos carriles que corren en sentidos opuestos.
            Se ven las 26 tecnologias de un vistazo, con el glifo real de cada
            marca, y ocupa un tercio de lo que ocupaba la grilla de tarjetas. */}
        <section
          id="stack"
          className="section-tint relative overflow-hidden py-20"
        >
          {/* El carrusel vive dentro del mismo contenedor que el resto: a borde
              completo hacia que las demas secciones se vieran angostas. */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold tracking-tight">
                {content.stackToggle}
              </h2>
              <p className="mt-1 text-sm text-brand-muted">{content.stackHint}</p>
            </div>

            <TechMarquee />
          </div>
        </section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative overflow-hidden py-20 text-center"
        >
          <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-24">
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
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-4 whitespace-nowrap px-12 py-6 text-xl font-bold">
                    <BrandIcon slug="whatsapp" size={26} /> WhatsApp
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

            <div className="flex flex-wrap justify-center gap-8 pt-12">
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
      </main>

      <footer className="relative z-10 py-20">
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
              aria-label="GitHub de Osmar Giménez"

              className="group relative p-4 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] text-slate-950 dark:text-slate-400"
            >
              <ICONS.Github size={32} strokeWidth={2} className="lucide stroke-currentColor transition-colors" />
            </a>
            <a 
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Osmar Giménez"

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
