import { Project } from "@/types/project";
import { ScopeOption, FeatureOption } from "@/types/estimator";

export const PORTFOLIO_OWNER = {
  name: "Efraín González",
  title: "Senior .NET / Software Engineer",
  tagline: "C# • .NET Core • ASP.NET Core • APIs REST • SQL Server • Power BI / ETL",
  bio: "Más de 20 años de experiencia en desarrollo de software empresarial, con foco en C#, .NET Core, ASP.NET Core, APIs REST y SQL Server. He trabajado en soluciones de seguros, comercio exterior, sistemas tributarios y administrativos, conciliación bancaria e inventario, con proyectos para organizaciones en Venezuela, Colombia, México, Puerto Rico, Costa Rica y España.",
  linkedinUrl: "https://www.linkedin.com/in/efra%C3%ADn-gonz%C3%A1lez-75854590/",
  email: "efraingon@hotmail.com",
  phone: "+58 04143071574",
  location: "Estado Miranda, Venezuela • Disponible en remoto",
  education: [
    {
      institution: "Universidad Central de Venezuela",
      degree: "Maestría en Computación Emergente (3.er semestre) • Matemática computacional y aplicada",
      years: "2000 - 2004",
    },
    {
      institution: "Universidad Simón Rodríguez",
      degree: "Licenciatura en Administración, mención Informática / Computer Science",
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
    { label: "Años de experiencia", value: "20+" },
    { label: "Stack principal", value: "C# • .NET Core" },
    { label: "Backend y datos", value: "APIs REST • SQL Server" },
    { label: "Cobertura", value: "Proyectos internacionales" },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-syspedido",
    title: "SysPedido — Pedidos, cotizaciones y ventas",
    subtitle: "Solución multi-tenant con API .NET 9 y panel de métricas",
    clientName: "Proyecto propio / Código público",
    category: "Enterprise Web",
    description: "Solución integral para captura, trazabilidad y facturación de pedidos y cotizaciones, con geolocalización, arquitectura multi-empresa y sincronización en tiempo real.",
    image: "https://opengraph.githubassets.com/1/Efraingon/SysPedido",
    tags: ["C#", ".NET 9", "ASP.NET Core", "Swagger", "SQL Server", "SignalR"],
    metrics: [
      { label: "Backend", value: ".NET 9 / Clean Architecture" },
      { label: "Persistencia", value: "SQL Server / EF Core" },
    ],
    featured: true,
    architectureHighlights: [
      "API REST con ASP.NET Core y documentación OpenAPI/Swagger.",
      "Arquitectura limpia por capas y persistencia con Entity Framework Core.",
      "Autenticación JWT, aislamiento multi-tenant y notificaciones con SignalR.",
    ],
    liveUrl: "https://github.com/Efraingon/SysPedido/",
  },
  {
    id: "proj-proyectyzr",
    title: "ProyectYZR — Control de proyectos y actividades",
    subtitle: "Panel web con seguimiento, indicadores y control de acceso",
    clientName: "Proyecto propio / Código público",
    category: "Full-Stack SaaS",
    description: "Aplicación web para centralizar el registro, seguimiento y análisis de proyectos y sus actividades, con autenticación, auditoría y panel de indicadores.",
    image: "https://opengraph.githubassets.com/1/Efraingon/ProyectYZR",
    tags: ["TypeScript", "Next.js", "React", "PostgreSQL", "Supabase", "Playwright"],
    metrics: [
      { label: "Datos", value: "PostgreSQL + RLS" },
      { label: "Pruebas", value: "Playwright E2E" },
    ],
    featured: true,
    architectureHighlights: [
      "Gestión de proyectos y bitácora de actividades con búsqueda y filtros.",
      "Autenticación obligatoria, cookie firmada HttpOnly y políticas RLS en Supabase/PostgreSQL.",
      "Auditoría de creación y actualización, índices y pruebas end-to-end con Playwright.",
    ],
    liveUrl: "https://proyectyrz.vercel.app/",
  },
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
      { label: "Alcance", value: "Registro transaccional" },
      { label: "Integración", value: "APIs REST y oData" },
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
    category: "Enterprise Web",
    description: "Migración y modernización a .NET Core, C# y SQL Server de los sistemas integrales de seguros de vida y generales para gigantes del sector asegurador en Latinoamérica y el Caribe.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    tags: [".NET Core", "C#", "SQL Server", "Worker Services", "REST APIs"],
    metrics: [
      { label: "Alcance", value: "Migración a .NET Core" },
      { label: "Cobertura", value: "Latinoamérica y Caribe" },
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
      { label: "Alcance", value: "Conciliación transaccional" },
      { label: "Tecnología", value: "SQL Server / T-SQL" },
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
    category: "Enterprise Web",
    description: "Sistema automatizado de sincronización de inventarios por almacén, artículos y facturación activado por notas de entrega y Triggers de base de datos.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    tags: ["C#", "ASP.NET MVC", "SQL Server T-SQL", "DevExpress", "Excel Integration"],
    metrics: [
      { label: "Disparador", value: "Notas de entrega / triggers" },
      { label: "Actualización", value: "Excel por almacén" },
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
    category: "Data & BI",
    description: "Plataforma de Business Intelligence con Power BI y SQL Server para el monitoreo operacional, ventas por categoría y comparación de periodos financieros.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["Power BI", "SQL Server", "Power Query", "C# ETL", "T-SQL"],
    metrics: [
      { label: "Visualización", value: "Comparativa histórica" },
      { label: "Modelado", value: "Facturación por período" },
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
      { label: "Integración", value: "Proveedores externos" },
      { label: "Seguridad", value: "Autenticación y validación" },
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
    id: "Optimización .NET",
    title: "Optimización SQL & Re-arquitectura .NET",
    description: "Refactorización de base de datos, tuning de Stored Procedures, Triggers y evolución de APIs.",
    basePriceUSD: 5000,
    iconName: "CloudLightning",
  },
  {
    id: "Power BI & BI",
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
    category: "Backend",
  },
  {
    id: "feat-payments-stripe",
    title: "Conciliación Bancaria & Pagos",
    description: "Integración con plataformas bancarias, cobros, cierres normales y forzados.",
    priceUSD: 1200,
    category: "Backend",
  },
  {
    id: "feat-ai-chat",
    title: "Sincronización de Inventarios Multisede",
    description: "Triggers automáticos en SQL Server, importación Excel y actualización real-time.",
    priceUSD: 1100,
    category: "Automatización",
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
    category: "Data/BI",
  },
  {
    id: "feat-sql-tuning",
    title: "Tuning SQL Server & Stored Procedures",
    description: "Optimización de consultas lentas, índices y procedimientos almacenados.",
    priceUSD: 900,
    category: "Backend",
  },
];


