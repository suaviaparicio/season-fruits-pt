# Season Fruits - Landing Page  

## Tabla de Contenidos  
1. [Tecnologías utilizadas](#tecnologías-utilizadas)  
2. [Instalación y ejecución](#instalación-y-ejecución)  
3. [Mejoras propuestas](#mejoras-propuestas)  

---

## Descripción  

**Season Fruits** es una landing page diseñada para mostrar información sobre frutas de temporada, incluyendo su valor nutricional y características principales. Los usuarios pueden explorar los productos y obtener detalles específicos según los requisitos funcionales de la aplicación.  

---

## Tecnologías utilizadas  

- React.js 18.3
- Bootstrap 5.3  
- Vite ^6.0.5  
- Node.js 22  
- npm  

---

## Instalación y ejecución  

Sigue los siguientes pasos para configurar el proyecto en tu entorno local:  

### 1️. Clonar el repositorio  
```bash
git clone git@github.com:suaviaparicio/season-fruits-pt.git
```

### 2. Configurar la variable de entorno

Para acceder a las imágenes almacenadas en Google Drive y visualizarlas correctamente en la landing page, es necesario configurar una clave de API siguiendo estos pasos:  

#### Obtener clave de API de Google Drive  
1. **Acceder a Google Cloud Console**  
   - Inicia sesión en [Google Cloud Console](https://console.cloud.google.com/).  
   - Crea un nuevo proyecto o selecciona uno existente.  

2. **Habilitar la API de Google Drive**  
   - En el menú de navegación, ve a **"APIs y servicios" > "Biblioteca"**.  
   - Busca **Google Drive API** y haz clic en **"Habilitar"**.  

3. **Generar una clave de API**  
   - Ve a **"APIs y servicios" > "Credenciales"**.  
   - Haz clic en **"Crear credenciales" > "Clave de API"**.  
   - Copia la clave generada.  

4. **Agregar la clave al archivo `.env.example`**  
   - En la raíz del proyecto, localiza el archivo .env.example y añade la clave en la variable correspondiente:  
   ```env
   VITE_GOOGLE_DRIVE_API_KEY=
   ```


### 3️. Instalar las dependencias y ejecutar la app  

#### **Método 1: Instalación con npm**  
1. Instalar las dependencias:  
   ```bash
   npm install
   ```
2. Ejecutar la aplicación:  
   ```bash
   npm run dev
   ```

#### **Método 2: Instalación con Docker**  
Si prefieres ejecutar la aplicación con Docker, sigue estos pasos.  

> **⚠️ Importante:** Antes de proceder, asegúrate de haber configurado la variable de entorno en el archivo `.env.example` para que la landing page funcione correctamente.  

1. **Instalar Docker** en tu sistema.  
2. **Ubicarse en la raíz del proyecto**.  
3. **Construir la imagen de Docker**:  
   ```bash
   docker build . -t fruits
   ```
4. **Ejecutar el contenedor**:  
   ```bash
   docker run -p 5173:5173 fruits
   ```

---

## Mejoras propuestas para la landing page

- **Corrección de la sumatoria en la tabla "General Information"**: Ajustar el cálculo automático para que solo contemple los productos visibles en la paginación actual.  
- **Persistencia del botón "Me gusta"**: Mantener el estado del botón incluso después de recargar la página.  
- **Modo oscuro/claro**: Agregar un selector para mejorar la experiencia del usuario.  
- **Mejoras en accesibilidad**: Optimizar estilos para garantizar la inclusión de todos los usuarios.  
- **Soporte multilingüe**: Implementar una opción para cambiar el idioma de la aplicación.  