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

- **Frontend:** React.js 18.3, Bootstrap 5.3  
- **Herramienta de construcción:** Vite ^6.0.5  
- **Backend:** Node.js 22  
- **Gestor de paquetes:** npm  

---

## Instalación y ejecución  

Sigue estos pasos para configurar el proyecto en tu entorno local:  

### 1️. Clonar el repositorio  
```bash
git clone git@github.com:suaviaparicio/season-fruits-pt.git
```

### 2️. Instalar dependencias  
```bash
npm install
```

### 3️. Configurar variables de entorno  

Para acceder a las imágenes almacenadas en Google Drive, es necesario configurar una clave de API siguiendo estos pasos:  

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
   - En la raíz del proyecto, hay un archivo que se llama `.env.example`, agrega allí la clave generada en los pasos anteriores:  
   ```env
   VITE_GOOGLE_DRIVE_API_KEY=
   ```

### 4️. Ejecutar la aplicación  
```bash
npm run dev
```

---

## Mejoras propuestas  

- **Sumatoria en la tabla "General Information"**: Implementar el cálculo automático de la suma de los productos visibles en la paginación.  
- **Persistencia del botón "Me gusta"**: Mantener el estado del botón incluso después de recargar la página.  
- **Modo oscuro/claro**: Agregar un selector para mejorar la experiencia del usuario.  
- **Mejoras en accesibilidad**: Aplicar estilos optimizados para garantizar la inclusión de todos los usuarios.  
- **Soporte multilingüe**: Implementar una opción para cambiar el idioma de la aplicación.