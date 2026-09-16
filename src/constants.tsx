import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Layers, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle,
  MapPin, 
  ExternalLink, 
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
  Lock,
  Sun,
  Moon,
  Target,
  Brain,
  Lightbulb,
  FileText,
  Download,
  Coffee,
  Leaf,
  Palette,
  Box,
  GitBranch,
  Activity,
  RefreshCw,
  Braces,
  Layout
} from 'lucide-react';

export const ICONS = {
  Code2,
  Server,
  Database,
  Terminal,
  Layers,
  Cpu,
  Globe,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
  Lock,
  Sun,
  Moon,
  Target,
  Brain,
  Lightbulb,
  FileText,
  Download,
  Coffee,
  Leaf,
  Palette,
  Box,
  GitBranch,
  Activity,
  RefreshCw,
  Braces,
  Layout
};

// Los servicios no cargan fotos de stock ni listan tecnologias. Al cliente le
// importa que problema le resolves, no con que lo construis, y el detalle
// tecnico ya tiene su propia seccion.
//
// `diagram` elige el esquema de components/ServiceDiagram, que representa el
// entregable. Va como clave explicita y no por indice: asi reordenar la lista
// no cambia que dibujo le toca a cada servicio.
export const SERVICES = [
  {title: "Landing Pages", diagram: "landing", icon: "Globe", color: "cyan"},
  {title: "Web Catalogs", diagram: "catalogo", icon: "Layers", color: "indigo"},
  {title: "E-commerce Solutions", diagram: "tienda", icon: "Rocket", color: "rose"},
  {title: "API Architectures", diagram: "integraciones", icon: "Server", color: "amber"},
  {title: "Database Optimization", diagram: "optimizacion", icon: "Database", color: "emerald"},
  {title: "Automations & CI/CD", diagram: "automatizacion", icon: "Zap", color: "sky"},
  {title: "Odoo ERP", diagram: "erp", icon: "Box", color: "violet"}
] as const;

// Los tres pasos de "Como trabajo". El texto vive en las traducciones de
// App.tsx; aca solo el icono de cada paso.
export const PROCESS = [
  {icon: "MessageCircle"},
  {icon: "FileText"},
  {icon: "RefreshCw"}
];

export const WHY_ME = [
  {
    title: "Experience",
    icon: "ShieldCheck",
  },
  {
    title: "Delivered Projects",
    icon: "Rocket",
  },
  {
    title: "Full-Stack Versatility",
    icon: "Layers",
  },
  {
    title: "Strategic Problem Solver",
    icon: "Brain",
  }
];

// `slug` apunta al glifo de marca en components/techIcons. Los que no tienen
// (Oracle, SQL Server y CI/CD no estan en simple-icons por marca registrada)
// caen al icono generico de `icon`.
//
// Los colores son los de cada marca, salvo cuatro que venian practicamente
// negros y desaparecian sobre el fondo oscuro: Django, SQLite y Flutter usan
// su tono claro oficial, y Next.js —cuya marca es monocroma— un gris neutro
// que se lee en ambos temas.
export const TECH_STACK = [
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "PHP", slug: "php", icon: "Code2", color: "#777BB4" },
      { name: "Laravel", slug: "laravel", icon: "Zap", color: "#FF2D20" },
      { name: "Python", slug: "python", icon: "Terminal", color: "#3776AB" },
      { name: "Django", slug: "django", icon: "ShieldCheck", color: "#44B78B" },
      { name: "FastAPI", slug: "fastapi", icon: "Zap", color: "#05998B" },
      { name: "C#", slug: "dotnet", icon: "Code2", color: "#512BD4" },
      { name: "Java", slug: "openjdk", icon: "Coffee", color: "#F89820" },
      { name: "Spring Boot", slug: "springboot", icon: "Leaf", color: "#6DB33F" },
      { name: "Node.js", slug: "nodedotjs", icon: "Server", color: "#339933" }
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "TypeScript", slug: "typescript", icon: "Code2", color: "#3178C6" },
      { name: "JavaScript", slug: "javascript", icon: "Code2", color: "#F7DF1E" },
      { name: "React", slug: "react", icon: "Cpu", color: "#61DAFB" },
      { name: "Next.js", slug: "nextdotjs", icon: "Globe", color: "#9CA3AF" },
      { name: "Flutter", slug: "flutter", icon: "Layers", color: "#54C5F8" },
      { name: "Tailwind CSS", slug: "tailwindcss", icon: "Palette", color: "#06B6D4" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "PostgreSQL", slug: "postgresql", icon: "Database", color: "#4169E1" },
      { name: "Oracle", slug: null, icon: "Database", color: "#F80000" },
      { name: "SQL Server", slug: null, icon: "Database", color: "#CC2927" },
      { name: "MySQL", slug: "mysql", icon: "Database", color: "#4479A1" },
      { name: "SQLite", slug: "sqlite", icon: "Database", color: "#0F80CC" },
      { name: "Redis", slug: "redis", icon: "Zap", color: "#DC382D" }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: "Terminal",
    items: [
      { name: "Docker", slug: "docker", icon: "Box", color: "#2496ED" },
      { name: "Linux", slug: "linux", icon: "Terminal", color: "#FCC624" },
      { name: "Git", slug: "git", icon: "GitBranch", color: "#F05032" },
      { name: "GitHub Actions", slug: "githubactions", icon: "Activity", color: "#2088FF" },
      { name: "CI/CD", slug: null, icon: "RefreshCw", color: "#9CA3AF" }
    ]
  }
];

// Formato internacional sin signos ni espacios: 595 (Paraguay) + 986544857.
// Tipado como string y no como literal: vaciarlo tiene que seguir siendo una
// opcion valida —ahi los botones no se renderizan— y con el literal inferido
// TypeScript trataba esa comparacion como imposible.
export const WHATSAPP_NUMBER: string = "595986544857";

/**
 * Mensaje precargado segun desde donde se toco el boton.
 *
 * Los tres botones mandaban el mismo texto, asi que no habia forma de saber
 * que parte del sitio convierte. Redactados para que se distingan de un
 * vistazo en la bandeja sin que el que escribe sienta que lo etiquetaron.
 */
const MENSAJES = {
  es: {
    hero: "Hola Osmar, vi tu sitio y quiero consultarte por un proyecto.",
    contacto: "Hola Osmar, quiero contarte qué necesito para mi negocio.",
    flotante: "Hola Osmar, estaba viendo tu sitio y me surgió una consulta.",
  },
  en: {
    hero: "Hi Osmar, I saw your site and I'd like to ask about a project.",
    contacto: "Hi Osmar, I'd like to tell you what my business needs.",
    flotante: "Hi Osmar, I was looking at your site and I have a question.",
  },
} as const;

export type WhatsappOrigen = keyof (typeof MENSAJES)['es'];

/** Devuelve "" si no hay numero cargado, y ahi el boton no se renderiza. */
export const whatsappUrl = (origen: WhatsappOrigen, lang: 'es' | 'en' = 'es') =>
  WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJES[lang][origen])}`
    : "";

/** Solo para saber si hay que renderizar los botones. */
export const WHATSAPP_ACTIVO = WHATSAPP_NUMBER !== "";

export const CONTACT_INFO = {
  name: "Osmar Gimenez",
  email: "osmar_gimenez@outlook.com",
  linkedin: "https://www.linkedin.com/in/osmar-gimenez-5971b0187/",
  location: "Paraguay (Remote Available)",
  whatsapp: whatsappUrl('contacto')
};
