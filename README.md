# 🚀 Portafolio Profesional & Enterprise Software Architecture - Efraín González

Bienvenido al repositorio oficial del portafolio interactivo de **Efraín González**, Principal Software Engineer & Enterprise Systems Architect con más de 15 años de trayectoria en el diseño, desarrollo e integración de plataformas empresariales críticas.

---

## 📌 Descripción del Proyecto

Este proyecto es una aplicación web moderna de alto rendimiento y arquitectura modular diseñada para presentar la trayectoria técnica, casos de éxito reales de nivel corporativo/gobierno, y facilitar la contratación o estimación de proyectos de software en tiempo récord (diseño *"Zero-Friction"*).

### ✨ Características Principales

- **Experiencia de Usuario 2026 (UI/UX Fluida):** Estética contemporánea basada en *Glassmorphism* y *Neomorfismo suave* con paleta de Verde Esmeralda y Azul Petróleo.
- **Cartera de Clientes Implementados:** Catálogo filtrable en tiempo real con 16+ empresas e industrias (Salud, Alimentos, Agroindustria, Comercio Exterior, Manufactura, Logística, etc.).
- **Proyectos Enterprise & Gobierno:** Detalle de soluciones de gran envergadura como **VUCE Costa Rica** (Ventanilla Única de Comercio Exterior), **Core Asegurador SISTRAN** (AIG, AXA, HDI), **Conciliación Bancaria**, y **Dashboards Power BI**.
- **Calculadora & Estimador Interactivo (1-Clic):** Modal paso a paso para cotizar alcances, tiempos de entrega y tecnologías en tiempo real con Zustand.
- **Formulario de Contacto Resiliente:** Canal directo a `efraingon@gmail.com` con redundancia inteligente y soporte para clientes de correo locales.
- **Rendimiento Óptimo:** Arquitectura híbrida con Server Components y Client Components de Next.js 15.

---

## 🛠️ Stack Tecnológico

| Capa / Área | Tecnologías |
| :--- | :--- |
| **Framework Base** | [Next.js 15 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Estilos & Diseño** | [Tailwind CSS](https://tailwindcss.com/), PostCSS, Clsx, Tailwind-Merge |
| **Gestión de Estado** | [Zustand](https://github.com/pmndrs/zustand) (Cliente) & [TanStack Query](https://tanstack.com/query) |
| **Iconografía** | [Lucide React](https://lucide.dev/) |
| **Backend & APIs** | Next.js API Routes (`/api/contact`) con entrega y redundancia directa |

---

## 📂 Estructura del Repositorio

```text
portafolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts       # Endpoint para recepción y procesamiento de contacto
│   │   ├── globals.css                # Sistema de tokens CSS, animaciones y glassmorphism
│   │   ├── layout.tsx                 # Shell principal con metadata SEO y providers
│   │   └── page.tsx                   # Página principal interactiva (RSC + Client Islands)
│   ├── components/
│   │   ├── contact/                   # Modales y formularios de contacto directo
│   │   ├── estimator/                 # Calculadora dinámica de estimación de proyectos
│   │   ├── layout/                    # Barra de navegación (Navbar) y pie de página (Footer)
│   │   ├── projects/                  # Filtrado y visualización de proyectos enterprise
│   │   ├── sections/                  # Hero, Servicios, Clientes y Certificaciones
│   │   └── ui/                        # Componentes atómicos (Badge, Button, Card, Modal, Input)
│   ├── hooks/                         # Custom Hooks desacoplados (useContactForm, useProjectEstimator)
│   ├── lib/                           # Datos estáticos (PROJECTS_DATA, CLIENTS_LIST, utilidades)
│   ├── store/                         # Stores globales de Zustand (usePortfolioStore, useEstimatorStore)
│   └── types/                         # Definiciones de tipos TypeScript
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Efraingon/portafolio-efrain-gonzalez.git
   cd portafolio-efrain-gonzalez
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   npm run start
   ```

---

## 👨‍💻 Autor & Contacto

**Efraín González**  
*Principal Software Engineer & Enterprise Systems Architect*  
- **LinkedIn:** [efrain-gonzalez-75854590](https://www.linkedin.com/in/efrain-gonzalez-75854590/)  
- **Email:** [efraingon@gmail.com](mailto:efraingon@gmail.com)  
- **Ubicación:** Estado Miranda, Venezuela (Disponible Remoto Global)
