# MeteoroLed - Website

Website profesional para MeteoroLed, empresa de alquiler de pantallas LED para eventos.

## 🚀 Tecnología

- **Astro 4** - Framework web moderno
- **CSS puro** - Sin frameworks, máxima optimización
- **Vanilla JavaScript** - Sin dependencias pesadas
- **HTML estático** - Compila a HTML puro para cualquier hosting

## 📦 Estructura del proyecto

```
meteoroled-astro/
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppFloat.astro
│   │   ├── CTASection.astro
│   │   ├── PageHero.astro
│   │   └── SectionHeader.astro
│   ├── layouts/         # Layouts base
│   │   └── MainLayout.astro
│   ├── pages/           # Páginas del sitio
│   │   ├── index.astro
│   │   ├── servicios.astro
│   │   ├── pantallas.astro
│   │   ├── trabajos.astro
│   │   ├── nosotros.astro
│   │   └── contacto.astro
│   └── styles/          # Estilos globales
│       └── global.css
├── public/              # Archivos estáticos
│   └── images/
│       └── logo.png
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ Instalación

1. **Requisitos previos:**
   - Node.js 18+ instalado
   - npm o yarn

2. **Instalar dependencias:**
   ```bash
   cd meteoroled-astro
   npm install
   ```

3. **Modo desarrollo:**
   ```bash
   npm run dev
   ```
   Abre http://localhost:4321

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos se generan en la carpeta `dist/`

## 🌐 Despliegue en DonWeb

### Opción 1: Subir archivos compilados (Recomendado)

1. Ejecuta `npm run build` en tu computadora
2. Sube el contenido de la carpeta `dist/` a `public_html` en DonWeb
3. Sube el archivo `.htaccess` incluido

### Opción 2: Con Node.js (si DonWeb lo soporta)

1. Sube todo el proyecto a DonWeb
2. Ejecuta `npm install && npm run build`
3. Configura el servidor para servir desde `dist/`

## ⚙️ Configuración .htaccess

Crea un archivo `.htaccess` en `public_html` con:

```apache
# Habilitar motor de reescritura
RewriteEngine On

# Redirigir a HTTPS (descomentar si tienes SSL)
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# URLs limpias (sin .html)
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Compresión GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cache del navegador
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/webp "access plus 1 month"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
</IfModule>

# Seguridad
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Error 404 personalizado
ErrorDocument 404 /404.html
```

## 🎨 Personalización

### Cambiar información de contacto

En `src/components/Header.astro` y `src/components/Footer.astro`:
```javascript
const whatsappNumber = '5491168050177'; // Cambiar número
```

### Cambiar colores

En `src/styles/global.css`:
```css
:root {
  --primary: #0066FF;      /* Color principal */
  --secondary: #00D4FF;    /* Color secundario */
  /* ... */
}
```

### Cambiar logo

Reemplaza `public/images/logo.png` con tu logo (mantener nombre).

### Cambiar imágenes

Las imágenes actualmente vienen de Unsplash. Para usar locales:
1. Agrega imágenes a `public/images/`
2. Cambia las URLs en las páginas

## 📱 Características

- ✅ Diseño 100% responsive
- ✅ Modo oscuro elegante
- ✅ Animaciones suaves al scroll
- ✅ Botón flotante de WhatsApp
- ✅ Formulario de contacto → WhatsApp
- ✅ SEO optimizado
- ✅ Open Graph para redes sociales
- ✅ Accesibilidad (ARIA labels)
- ✅ Performance optimizada

## 📄 Páginas

| Página | Ruta | Descripción |
|--------|------|-------------|
| Inicio | `/` | Landing page principal |
| Servicios | `/servicios` | Detalle de servicios |
| Pantallas | `/pantallas` | Catálogo de pantallas LED |
| Trabajos | `/trabajos` | Portfolio de eventos |
| Nosotros | `/nosotros` | Historia y valores |
| Contacto | `/contacto` | Información de contacto |

## 📞 Contacto MeteoroLed

- **WhatsApp:** +54 9 11 6805-0177
- **Instagram:** @meteoroled
- **Ubicación:** Santos Lugares, Buenos Aires

---

Desarrollado con ❤️ para MeteoroLed
