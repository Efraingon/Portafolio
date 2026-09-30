import { Project } from "@/types/project";
import { ScopeOption, FeatureOption } from "@/types/estimator";

export const PORTFOLIO_OWNER = {
  name: "Efraín González",
  title: "Principal Software Engineer & Enterprise Systems Architect",
  tagline: "Especialista en Integraciones .NET Core, Arquitectura SQL Server, APIs REST, ERPs Financieros & Dashboards Power BI",
  bio: "Ingeniero de Software especializado en el desarrollo de soluciones empresariales robustas con C#, .NET Core, ASP.NET MVC, SQL Server, APIs RESTful y Azure. Más de 15 años de trayectoria liderando integraciones bancarias, plataformas de seguros (SISTRAN), comercio exterior (VUCE Costa Rica), automatización de inventarios, firma electrónica y Business Intelligence para marcas internacionales.",
  linkedinUrl: "https://www.linkedin.com/in/efrain-gonzalez-75854590/",
  email: "efraingon@gmail.com",
  phone: "+58 04143071574",
  location: "Estado Miranda, Venezuela (Disponible Remoto Global)",
  education: [
    {
      institution: "Universidad Central de Venezuela",
      degree: "Maestría en Computación Emergente (Matemática Computacional y Aplicada)",
      years: "2000 - 2004",
    },
    {
      institution: "Universidad Simón Rodríguez",
      degree: "Licenciatura en Administración Mención Informática / Ingeniería Informática",
      years: "1991 - 2000",
    },
  ],
  certifications: [
    "Microsoft Certified Professional (ADO.NET & .NET Framework 3.5)",
    "Microsoft Certified Professional (Windows Forms Application Development)",
    "Microsoft Certified Professional (.NET Framework Application Development Foundation)",
    "Inducción a la Seguridad de la Información & Continuidad del Negocio",
  ],
  stats: [
    { label: "Años de Experiencia", value: "15+" },
    { label: "Integraciones Bancarias/ERP", value: "50+" },
    { label: "Optimización BD SQL", value: "99.9%" },
    { label: "Países con Proyectos", value: "España, EE.UU., PR, MX, CR, CO, VE" },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-vuce",
    title: "Sistema VUCE (Ventanilla Única de Comercio Exterior)",
    subtitle: "Plataforma de Comercio Exterior para el Gobierno de Costa Rica",
    clientName: "ITelligent Information Technologies SL (España / Costa Rica)",
    category: "Enterprise Web",
    description: "Desarrollo del sistema nacional VUCE para la gestión transaccional de trámites de importación y exportación con consumo seguro de APIs RESTful y oData.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    tags: ["C#", "JS DevExtreme", "RESTful APIs", "oData", "SQL Server"],
    metrics: [
      { label: "Carga Transaccional Diaria", value: "100k+ trámites" },
      { label: "Disponibilidad del Sistema", value: "99.99%" },
    ],
    featured: true,
    architectureHighlights: [
      "Arquitectura distribuida con consumo de servicios RESTful y oData para interoperabilidad comercial.",
      "Interfaz de usuario optimizada con componentes JS DevExtreme para alto volumen operativo.",
      "Aislamiento seguro de datos gubernamentales y auditoría de firmas digitales.",
    ],
  },
  {
    id: "proj-sistran",
    title: "Plataforma Core Asegurador SISTRAN (Multinacional)",
    subtitle: "Re-arquitectura e Integración de Core para AIG, AXA, Prudencia y HDI",
    clientName: "SISTRAN Consultores / Bandit (España, México, Colombia, PR)",
    category: "Cloud Architecture",
    description: "Migración y modernización a .NET Core, C# y SQL Server de los sistemas integrales de seguros de vida y generales para gigantes del sector asegurador en Latinoamérica y el Caribe.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    tags: [".NET Core", "C#", "SQL Server", "Worker Services", "REST APIs"],
    metrics: [
      { label: "Reducción Deuda Técnica", value: "45%" },
      { label: "Seguros Procesados", value: "Múltiples Países" },
    ],
    featured: true,
    architectureHighlights: [
      "Migración de legacy a .NET Core C# con arquitectura de micro-servicios y Worker Services.",
      "Unificación de reportes complejos para pólizas de Vida y Ramos Generales.",
      "Optimización de lógica de negocio transaccional con Stored Procedures de alta velocidad.",
    ],
  },
  {
    id: "proj-banking",
    title: "Módulo de Integración y Conciliación Bancaria",
    subtitle: "Sincronización Transaccional en Tiempo Real para Entidades Financieras",
    clientName: "Plataformas Financieras & ERP Enterprise",
    category: "Full-Stack SaaS",
    description: "Solución de procesamiento y conciliación bancaria automatizada entre sistemas administrativos ERP y plataformas bancarias externas con algoritmos de detección de discrepancias.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    tags: ["C#", "ASP.NET MVC", "SQL Server", "T-SQL Triggers", "REST APIs"],
    metrics: [
      { label: "Automatización Conciliación", value: "98%" },
      { label: "Ahorro Horas Manuales", value: "-120h/mes" },
    ],
    featured: true,
    architectureHighlights: [
      "Implementación de Stored Procedures y Triggers en SQL Server para consistencia transaccional ACID.",
      "Validaciones de seguridad y encriptación de payloads para pagos y movimientos bancarios.",
      "Manejo de cierres de caja normales y forzados con auditoría completa.",
    ],
  },
  {
    id: "proj-inventory-sync",
    title: "Automatización & Sincronización de Inventarios Multisede",
    subtitle: "Integración en Tiempo Real entre Empresa Base y Plantas de Producción",
    clientName: "RESDIG CONSULTORES / Sambil",
    category: "Cloud Architecture",
    description: "Sistema automatizado de sincronización de inventarios por almacén, artículos y facturación activado por notas de entrega y Triggers de base de datos.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    tags: ["C#", "ASP.NET MVC", "SQL Server T-SQL", "DevExpress", "Excel Integration"],
    metrics: [
      { label: "Sincronización Real-Time", value: "< 2s" },
      { label: "Precisión de Stock", value: "100%" },
    ],
    featured: false,
    architectureHighlights: [
      "Triggers automáticos en SQL Server disparados al generar notas de entrega en empresa base.",
      "Módulo de importación inteligente desde Excel para actualización masiva de inventario.",
      "Control de autorización de descuentos y notas de crédito en tiempo real.",
    ],
  },
  {
    id: "proj-powerbi-dashboards",
    title: "Business Intelligence & Dashboards Financieros",
    subtitle: "Cuadros de Mando Ejecutivo para Ventas, Categorías y Periodos",
    clientName: "Gálac Software & Clientes Enterprise",
    category: "AI & Automation",
    description: "Plataforma de Business Intelligence con Power BI y SQL Server para el monitoreo operacional, ventas por categoría y comparación de periodos financieros.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["Power BI", "SQL Server", "Power Query", "C# ETL", "T-SQL"],
    metrics: [
      { label: "Visualización de Periodos", value: "Comparativa Histórica" },
      { label: "Toma de Decisiones", value: "1-Click Exec" },
    ],
    featured: true,
    architectureHighlights: [
      "Extracción y modelado de datos mediante aplicaciones C# y Power Query ETL.",
      "Dashboards interactivos con Tooltips avanzados para desglose de facturación.",
      "Reportes RDLC detallados y totales para auditorías fiscales y contables.",
    ],
  },
  {
    id: "proj-signature",
    title: "Módulo de Firma Electrónica e Integraciones Seguras",
    subtitle: "Integración con Proveedores Externos de Validación Digital",
    clientName: "Gálac Software / Enterprise Solutions",
    category: "Enterprise Web",
    description: "Servicios reutilizables y APIs para la firma digital de documentos administrativos, retenciones e impuestos con flujos de autenticación segura.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    tags: ["C#", "ASP.NET Core", "REST APIs", "OAuth / Security", "JSON"],
    metrics: [
      { label: "Validación Legal", value: "Firma Certificada" },
      { label: "Velocidad de Firma", value: "< 1s" },
    ],
    featured: false,
    architectureHighlights: [
      "Capa de servicios desacoplada para comunicación con proveedores de firma electrónica.",
      "Validación de certificados digitales y flujos de aprobación paso a paso.",
    ],
  },
];

export const ESTIMATOR_SCOPES: ScopeOption[] = [
  {
    id: "MVP Development",
    title: "Sistema / Módulo a Medida",
    description: "Desarrollo rápido de módulos backend/frontend con C#, .NET Core y SQL Server.",
    basePriceUSD: 3500,
    iconName: "Rocket",
  },
  {
    id: "Enterprise SaaS",
    title: "Integración ERP / Bancaria Enterprise",
    description: "Conexión de sistemas administrativos, facturación, cobros y pasarelas bancarias.",
    basePriceUSD: 7500,
    iconName: "Building2",
  },
  {
    id: "Cloud Migration",
    title: "Optimización SQL & Re-arquitectura .NET",
    description: "Refactorización de base de datos, tuning de Stored Procedures, Triggers y migración a nube.",
    basePriceUSD: 5000,
    iconName: "CloudLightning",
  },
  {
    id: "AI Integration Audit",
    title: "Dashboards Power BI & Business Intelligence",
    description: "Modelado de datos en Power Query, dashboards financieros y analítica ejecutiva.",
    basePriceUSD: 4000,
    iconName: "Sparkles",
  },
];

export const ESTIMATOR_FEATURES: FeatureOption[] = [
  {
    id: "feat-auth-roles",
    title: "Autenticación Segura & Firma Electrónica",
    description: "OAuth 2.0, tokens seguros, roles RBAC y firma digital de documentos.",
    priceUSD: 850,
    category: "Backend/Cloud",
  },
  {
    id: "feat-payments-stripe",
    title: "Conciliación Bancaria & Pagos",
    description: "Integración con plataformas bancarias, cobros, cierres normales y forzados.",
    priceUSD: 1200,
    category: "Backend/Cloud",
  },
  {
    id: "feat-ai-chat",
    title: "Sincronización de Inventarios Multisede",
    description: "Triggers automáticos en SQL Server, importación Excel y actualización real-time.",
    priceUSD: 1100,
    category: "AI/Automation",
  },
  {
    id: "feat-dark-glass",
    title: "Interfaz Web Moderna & DevExtreme",
    description: "Sistemas web interactivos con UI responsive, tablas dinámicas y accesibilidad.",
    priceUSD: 950,
    category: "Frontend",
  },
  {
    id: "feat-i18n",
    title: "Reportes Detallados & RDLC",
    description: "Módulos de reportes consolidados por período, categoría y exportación.",
    priceUSD: 700,
    category: "Frontend",
  },
  {
    id: "feat-devops-cicd",
    title: "Tuning SQL Server & Stored Procedures",
    description: "Optimización de consultas lentas, índices y procedimientos almacenados.",
    priceUSD: 900,
    category: "DevOps",
  },
];

export const CLIENTS_LIST = [
  {
    name: "SERVICIO DE DIAGNOSTICO DE ATENCION PRIMARIA",
    sector: "Salud & Diagnóstico Clínico",
    tag: "Sector Salud",
  },
  {
    name: "INVERSIONES PLATCO, C.A",
    sector: "Comercial & Distribución Corporativa",
    tag: "Corporativo",
  },
  {
    name: "ALIMENTOS LAS CLAVELLINAS, C.A",
    sector: "Industria de Alimentos & Manufactura",
    tag: "Alimentos",
  },
  {
    name: "DISTRIBUIDORA AQUA PRESS, C.A.",
    sector: "Tratamiento de Agua & Distribución",
    tag: "Distribución",
  },
  {
    name: "LACTEOS LA GUANOTA, C.A.",
    sector: "Producción Agroindustrial & Lácteos",
    tag: "Agroindustria",
  },
  {
    name: "BUFITO C.A",
    sector: "Manufactura & Productos Alimenticios",
    tag: "Manufactura",
  },
  {
    name: "DISTRIBUIDORA GERMOCA 2022, C.A.",
    sector: "Distribución Comercial y Logística",
    tag: "Logística",
  },
  {
    name: "ASOCIACION CIVIL CLUB BAHIA DE LOS PIRATAS",
    sector: "Gestión Recreacional & Administrativa",
    tag: "Gestión & Clubes",
  },
  {
    name: "INVERSIONES FERREMAYOR DE VENEZUELA, C.A",
    sector: "Ferretería Industrial & Suministros",
    tag: "Ferretería Industrial",
  },
  {
    name: "FULL CREAM HELADOS",
    sector: "Producción & Franquicias de Alimentos",
    tag: "Consumo Masivo",
  },
  {
    name: "IMPORTADORA IREGUA, C.A.",
    sector: "Importación, Comercio Exterior & Aduanas",
    tag: "Comercio Exterior",
  },
  {
    name: "PINTU IMPER COLORS, C.A",
    sector: "Químicos, Pinturas & Revestimientos",
    tag: "Industria Química",
  },
  {
    name: "INVERSIONES FONTANOL, C.A.",
    sector: "Inversiones Comerciales & Servicios",
    tag: "Comercial",
  },
  {
    name: "PUREX DE VENEZUELA, C.A.",
    sector: "Manufactura & Productos Químicos/Higiene",
    tag: "Manufactura",
  },
  {
    name: "UNIKERT DE VENEZUELA, C.A.",
    sector: "Comercio, Suministros y Logística",
    tag: "Suministros",
  },
  {
    name: "Monrys",
    sector: "Comercial & Retail Empresarial",
    tag: "Retail",
  },
];

