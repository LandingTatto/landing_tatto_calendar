# Daniel Body Modification — guía del proyecto

Landing estática construida con Astro, Tailwind CSS, Three.js y la integración externa de Google Calendar.

## Cómo funciona la aplicación

La página principal se renderiza desde `src/pages/index.astro`. Esa página compone la interfaz usando componentes Astro:

```text
index.astro
└── Layout.astro
    ├── Header.astro        navegación y botón de Google Calendar
    ├── Hero.astro          portada e imágenes principales
    ├── Materials.astro     materiales, animación 3D y acabados
    ├── Gallery.astro       galería automática y lightbox
    ├── InfoInteractive.astro
    │                         guía de zonas y preguntas frecuentes
    └── Footer.astro        enlaces de contacto y navegación inferior
```

Astro genera HTML estático durante el build. La interactividad se añade únicamente donde hace falta mediante bloques `<script>` dentro de los componentes. No existe backend, base de datos ni API propia.

## Instalación y comandos

Se requiere Node.js `>=22.23.4`, según `package.json`.

```bash
npm install
npm run dev
npm run build
npm run preview
```

En este proyecto, el servidor de desarrollo debe iniciarse en segundo plano:

```bash
astro dev --background
```

Y puede administrarse con:

```bash
astro dev status
astro dev logs
astro dev stop
```

El build de producción se genera en `dist/`. No se necesita Docker para este proyecto: es una aplicación estática y plataformas como Vercel pueden instalar las dependencias y ejecutar `npm run build` directamente.

## Tecnologías y responsabilidades

- `Astro`: estructura de páginas, layouts, componentes y generación estática.
- `Tailwind CSS`: clases utilitarias para layout, espaciado, colores y responsive design.
- CSS local en cada componente: animaciones, pseudo-elementos, estados visuales y detalles que serían incómodos de expresar solo con Tailwind.
- `Three.js`: renderizado de la muestra 3D en `Materials.astro`.
- `astro:assets`: optimización y transformación de las imágenes importadas desde `src/assets`.
- Google Calendar: servicio externo para las reservas; la landing solo enlaza y carga su botón.

## Dónde cambiar cada cosa

- Texto, navegación y botón de reserva: `src/components/Header.astro`.
- Imágenes de portada: `src/components/Hero.astro` y `src/assets/hero/`.
- Materiales y especificaciones: el array `materials` en `src/components/Materials.astro`.
- Modelo, luces y colores 3D: funciones `createSample` y `setSample` en `Materials.astro`.
- Galería: arrays `galleryItems` y `secondGalleryItems` en `src/components/Gallery.astro`.
- Zonas y niveles orientativos: array `painZones` en `src/components/InfoInteractive.astro`.
- Colores y tipografías globales: `src/styles/global.css`.
- Política de privacidad: `src/pages/privacidad.astro`.
- Enlaces de Instagram, WhatsApp, email y reserva: las constantes al comienzo de `Footer.astro`.

## Integraciones externas

`Header.astro` carga el script oficial del botón de Google Calendar. La reserva solicita los datos configurados en Google Calendar y se gestiona allí; esta aplicación no almacena reservas.

La tipografía Playfair Display se carga desde Google Fonts en `global.css`. Si en el futuro se añade analítica, un formulario propio, una base de datos o un nuevo proveedor, hay que actualizar la política de privacidad.

## Notas de mantenimiento

- `dist/`, `.astro/` y `node_modules/` son archivos generados y están incluidos en `.gitignore`.
- No editar los archivos generados dentro de `.astro/`.
- Los comentarios de los componentes explican la intención de cada bloque. Si se modifica una interacción, actualizar también su comentario para mantener la documentación sincronizada.
- La página usa enlaces y datos de prueba en algunos puntos; revisar las constantes de `Footer.astro` antes de publicar.
