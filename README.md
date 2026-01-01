# 🗺️ IP Address Tracker

[![Estado del Proyecto](https://img.shields.io/badge/estado-finalizado-green)](https://github.com/iamhosto10/ip-address-tracker)
[![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Versión](https://img.shields.io/badge/versión-1.0.0-informational)](https://github.com/iamhosto10/ip-address-tracker/releases)

Una aplicación web que te permite rastrear cualquier dirección IP o dominio y visualizar su ubicación en un mapa interactivo.

## 🚀 ¿Qué es y qué problema resuelve?

Esta herramienta te permite obtener información detallada sobre cualquier dirección IP, como su ubicación geográfica, zona horaria y proveedor de servicios de Internet (ISP). Es una solución ideal para quienes necesitan identificar el origen de una conexión o simplemente explorar la geolocalización de un dominio de forma rápida y visual.

## 📸 Capturas de Pantalla / Demo

¡Aquí puedes ver cómo luce la aplicación!

![Demo de la aplicación](https://raw.githubusercontent.com/iamhosto10/ip-address-tracker/master/design/desktop-preview.jpg)

## 💻 Tecnologías Usadas

- **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
- **Leaflet.js:** Una biblioteca de mapas interactivos de código abierto.
- **React-Leaflet:** Componentes de React para Leaflet.js.
- **Tailwind CSS:** Un framework de CSS para un diseño rápido y personalizado.
- **API de Geolocalización IP de IPify:** Para obtener los datos de la dirección IP.

## ✅ Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- **Node.js:** (versión 16 o superior)
- **npm:** (generalmente viene con Node.js)

## 🛠️ Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/iamhosto10/ip-address-tracker.git
   ```

2. **Navega al directorio del proyecto:**
   ```bash
   cd ip-address-tracker
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de IPify:**
   ```
   REACT_APP_IPIFY_API_KEY=tu_clave_de_api_aqui
   ```

## ▶️ Cómo Usarlo

Una vez que hayas completado la instalación, puedes ejecutar la aplicación localmente:

```bash
npm start
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## 📂 Estructura del Proyecto

```
ip-address-tracker/
├── public/              # Archivos públicos como index.html y favicon
├── src/                 # Código fuente de la aplicación
│   ├── Components/      # Componentes de React reutilizables
│   ├── cover/           # Imágenes de fondo y otros recursos visuales
│   ├── images/          # Iconos y otras imágenes
│   ├── App.js           # Componente principal de la aplicación
│   ├── index.css        # Estilos globales
│   └── index.js         # Punto de entrada de la aplicación
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # ¡Este archivo!
```
