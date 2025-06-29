# 💧 Agua Máxima - Sitio Web Corporativo

[![Astro](https://img.shields.io/badge/Astro-5.9.3-orange?style=flat-square&logo=astro)](https://astro.build/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.10-blue?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-2.9.0-purple?style=flat-square&logo=clerk)](https://clerk.com/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-green?style=flat-square&logo=netlify)](https://www.netlify.com/)

Sitio web moderno y responsivo para **Agua Máxima**, empresa de purificación y entrega de agua. Desarrollado con **Astro**, **TailwindCSS**, **Clerk** (autenticación) y desplegado en **Netlify**.

## ✨ Características Principales

### 🔐 **Sistema de Autenticación**
- ✅ **Clerk Integration** - Autenticación segura y moderna
- ✅ **Gestión de usuarios** - Registro, login y perfiles
- ✅ **Panel de administración** - Gestión de usuarios registrados
- ✅ **Protección de rutas** - Páginas privadas para usuarios autenticados

### 💼 **Funcionalidades de Negocio**
- ✅ **Sistema de pedidos** - Solicitudes rápidas y con cuenta
- ✅ **Catálogo de productos** - Garrafones, botellas, servicio a domicilio
- ✅ **Proceso de purificación** - Explicación detallada del proceso de calidad
- ✅ **Contacto multicanal** - WhatsApp, email y formulario web
- ✅ **Confirmaciones automáticas** - Flujo completo de confirmación de pedidos

### 📱 **Diseño y UX**
- ✅ **Diseño 100% responsivo** - Optimizado para todos los dispositivos
- ✅ **Interfaz moderna** - UI/UX profesional con animaciones fluidas
- ✅ **Navegación intuitiva** - Menú claro y páginas bien organizadas
- ✅ **Tipografía optimizada** - Fuente Onest Variable para mejor legibilidad

### 🏗️ **Arquitectura Técnica**
- ✅ **Astro 5.9** - Framework moderno con renderizado estático
- ✅ **TailwindCSS 4.1** - Sistema de diseño utilitario
- ✅ **TypeScript** - Tipado estático para desarrollo robusto
- ✅ **Componentes modulares** - Arquitectura escalable y mantenible
- ✅ **API Routes** - Endpoints para contacto y procesamiento

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Astro** | 5.9.3 | Framework principal |
| **TailwindCSS** | 4.1.10 | Estilos y diseño |
| **Clerk** | 2.9.0 | Autenticación y usuarios |
| **Nodemailer** | 7.0.3 | Envío de emails |
| **TypeScript** | Latest | Tipado estático |
| **Netlify** | - | Hosting y despliegue |

## 📁 Estructura del Proyecto

```
📦 agua-maxima/
├── 📁 public/                    # Archivos estáticos
│   ├── favicon.svg              # Icono del sitio
│   ├── logo.webp                # Logo de la empresa
│   └── awkward-seal-awkward.gif # Recursos adicionales
├── 📁 src/
│   ├── 📁 components/           # Componentes reutilizables
│   │   ├── AboutUs.astro        # Sección "Sobre nosotros"
│   │   ├── ContactMap.astro     # Mapa y contacto
│   │   ├── FinalCTA.astro       # Call-to-action final
│   │   ├── Footer.astro         # Pie de página
│   │   ├── Header.astro         # Navegación principal
│   │   ├── Hero.astro           # Sección hero
│   │   ├── MissionVisionValues.astro # Misión, visión y valores
│   │   ├── Products.astro       # Catálogo de productos
│   │   ├── PurificationProcess.astro # Proceso de purificación
│   │   ├── SectionContainer.astro # Contenedor base
│   │   ├── Testimonials.astro   # Testimonios
│   │   └── WhyChooseUs.astro    # Ventajas competitivas
│   ├── 📁 layouts/
│   │   └── Layout.astro         # Layout principal
│   ├── 📁 lib/
│   │   └── models/              # Modelos de datos
│   ├── 📁 pages/
│   │   ├── index.astro          # Página principal
│   │   ├── contacto.astro       # Página de contacto
│   │   ├── nosotros.astro       # Página sobre nosotros
│   │   ├── productos.astro      # Página de productos
│   │   ├── politicas.astro      # Políticas de la empresa
│   │   ├── solicitar.astro      # Página de solicitudes
│   │   ├── 404.astro            # Página de error 404
│   │   ├── 📁 api/
│   │   │   └── contact.js       # API de contacto
│   │   ├── 📁 contacto/
│   │   │   ├── exito-correo.astro   # Confirmación por email
│   │   │   └── exito-whatsapp.astro # Confirmación por WhatsApp
│   │   └── 📁 solicitar/
│   │       ├── confirmacion-whatsapp.astro # Confirmación de pedido
│   │       ├── cuenta.astro            # Pedido con cuenta
│   │       └── rapido.astro            # Pedido rápido
│   ├── 📁 styles/
│   │   └── global.css           # Estilos globales
│   └── middleware.ts            # Middleware de Astro
├── astro.config.mjs             # Configuración de Astro
├── package.json                 # Dependencias del proyecto
└── tsconfig.json                # Configuración de TypeScript
```

## 🚀 Instalación y Desarrollo

### **Prerrequisitos**
- Node.js 18+
- npm o yarn
- Git
- Cuenta de Clerk (para autenticación)

### **1. Clonar el repositorio**
```bash
git clone https://github.com/JavierMNew/agua-maxima.git
cd agua-maxima
```

### **2. Instalar dependencias**
```bash
npm install
```

### **3. Configurar variables de entorno**
Crea un archivo `.env` en la raíz del proyecto:

```env
# Clerk - Autenticación
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Email (Nodemailer)
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación

# Otros
PUBLIC_SITE_URL=http://localhost:4321
```

### **4. Ejecutar en desarrollo**
```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:4321**

### **5. Construir para producción**
```bash
npm run build
```

### **6. Vista previa de producción**
```bash
npm run preview  
```

## 📋 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en localhost:4321 |
| `npm run build` | Construye el proyecto para producción |
| `npm run preview` | Vista previa del build de producción |
| `npm run astro` | Ejecuta comandos CLI de Astro |

## 🔐 Configuración de Clerk

### **1. Crear cuenta en Clerk**
1. Ve a [clerk.com](https://clerk.com) y crea una cuenta
2. Crea una nueva aplicación
3. Obtén las claves de API

### **2. Configurar las claves**
```env
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_tu_clave_publica
CLERK_SECRET_KEY=sk_test_tu_clave_secreta
```

### **3. Funcionalidades implementadas**
- ✅ **Registro de usuarios** - Sign up con email/social
- ✅ **Inicio de sesión** - Sign in seguro
- ✅ **Gestión de perfil** - Edición de datos personales
- ✅ **Protección de rutas** - Middleware de autenticación

## 📧 Sistema de Contacto

### **Formulario Web**
El formulario de contacto (`/api/contact.js`) utiliza **Nodemailer** para envío de emails:

```javascript
// Configuración en .env
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación
```

### **WhatsApp Directo**
Botones de WhatsApp configurados para contacto inmediato:
- 📱 **Número:** +52 993 115 6969
- 🕒 **Horario:** 8:00 AM - 6:00 PM

## 🛒 Sistema de Pedidos

### **Dos tipos de solicitud:**
1. **Pedido Rápido** (`/solicitar/rapido`) - Sin registro
2. **Pedido con Cuenta** (`/solicitar/cuenta`) - Con autenticación

### **Flujo de confirmación:**
1. Usuario completa formulario
2. Selecciona método de confirmación (Email/WhatsApp)
3. Redirección a página de éxito correspondiente
4. Procesamiento automático del pedido

## 🌐 Páginas del Sitio

| Ruta | Descripción | Autenticación |
|------|-------------|---------------|
| `/` | Página principal | Pública |
| `/nosotros` | Información de la empresa | Pública |
| `/productos` | Catálogo de productos | Pública |
| `/contacto` | Formulario de contacto | Pública |
| `/solicitar` | Página de solicitudes | Pública |
| `/solicitar/rapido` | Pedido rápido | Pública |
| `/solicitar/cuenta` | Pedido con cuenta | Privada |
| `/politicas` | Políticas de la empresa | Pública |

## 🚀 Despliegue en Netlify

### **Configuración automática**
1. Conecta tu repositorio de GitHub a Netlify
2. Configuración detectada automáticamente
3. Deploy automático en cada push

### **Variables de entorno en Netlify**
Agrega en el panel de Netlify:
```
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña
PUBLIC_SITE_URL=https://tu-sitio.netlify.app
```

### **Build Settings**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

## 🎨 Personalización

### **Colores de la marca**
Los colores están definidos en TailwindCSS. Para personalizarlos, edita la configuración:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'agua-blue': '#0ea5e9',
        'agua-dark': '#0c4a6e',
        // Agrega tus colores personalizados
      }
    }
  }
}
```

### **Fuente tipográfica**
El proyecto usa **Onest Variable** de Google Fonts:
```javascript
import "@fontsource-variable/onest";
```

## 📈 Optimizaciones

### **Performance**
- ✅ **Renderizado estático** - Páginas pre-generadas
- ✅ **Imágenes optimizadas** - Formatos modernos
- ✅ **CSS optimizado** - Purga automática de clases no utilizadas
- ✅ **JavaScript mínimo** - Solo componentes interactivos necesarios

### **SEO**
- ✅ **Meta tags** - Configuración completa en Layout.astro
- ✅ **Estructura semántica** - HTML5 correcto
- ✅ **URLs amigables** - Rutas descriptivas
- ✅ **Sitemap automático** - Generado por Astro

## 🔧 Desarrollo

### **Estructura de componentes**
- **Componentes** (`/src/components/`) - Reutilizables y modulares
- **Layouts** (`/src/layouts/`) - Plantillas de página
- **Páginas** (`/src/pages/`) - Rutas del sitio
- **Estilos** (`/src/styles/`) - CSS global

### **Convenciones de código**
- **Nombres de archivos:** PascalCase para componentes (ej: `ContactMap.astro`)
- **Nombres de rutas:** kebab-case para URLs (ej: `/solicitar/cuenta`)
- **Imports:** Rutas relativas desde `src/`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -am 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 🙏 Agradecimientos

- **Astro Team** - Por el framework excepcional
- **Clerk** - Por la autenticación sencilla y segura
- **Tailwind Labs** - Por el sistema de diseño
- **Netlify** - Por el hosting confiable

---

**Desarrollado con ❤️ para Agua Máxima**

*¿Necesitas ayuda? Contacta al desarrollador o abre un issue en GitHub.*
