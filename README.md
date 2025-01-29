# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Requisitos funcionales:

Debe consumir la API de uso gratuita fruityvice para obtener la información de cada producto ---> OK

Las imágenes de producto no vienen suministradas por la API, en el material suministrado encontrará una carpeta de imágenes nombradas con el nombre del producto suministrado por el endpoint, debe encontrar la forma de mostrar la imagen correspondiente a cada producto. Dado que no exista la imagen del producto, debe mostrar la imagen nombrada “not-available.webp” ---> OK

Cada tarjeta de producto debe mostrar la imagen y las propiedades e información nutricional descrita en el diseño. ---> OK

Cada tarjeta tiene un botón de “me gusta”, que al hacer clic en él debe guardar la preferencia del usuario.---> PENDIENTE

Se deben mostrar en una primera instancia 8 productos, al final del módulo hay un botón de “See more” el cual al hacer clic, debe cargar 4 productos más. ---> OK

El usuario podrá filtrar los productos dependiendo de su categoría (Family, Order, Genus) y el valor del dato a buscar. ---> OK

El usuario podrá organizar las tarjetas por el nombre del producto en orden alfabético, de la A a la Z o de la Z a la A en un solo clic. ---> OK

La tabla de “General information” debe actualizarse con el número de productos filtrados / encontrados y mostrar la suma de los valores de las propiedades nutricionales de dichos productos. ---> OK


NO OLVIDAR PARA LA ENTREGA:
Generar la API_KEY como variable de entorno con el paso a paso 

Pendientes:
- Optimización de imágenes
- Separar los componentes
- Responsive cuando hay un filtro y solo sale una card... no está conservando todo el espacio de la card
- Cuando haga la busqueda y no encuentre resultados, los botones de los filtros deben permanecer en el mismo sitio. Se están yendo para el centro
- Mejorar el icono de search
- Borrar el archivo 'frutas.txt'
- Cambiar la tabla de 'General information' para que cuando esté pequeña la imagen, quede en la parte superior y no en la inferior
- Cambiar la font por una que se parezca más

Instalaciones:
- Bootstrap: npm install bootstrap (Validar si es necesario hacer esta instalación para que funcione el dropdown de los filtros)
