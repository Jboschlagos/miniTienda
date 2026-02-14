# miniTienda - Aplicación Full Stack con Node.js, Express y Handlebars

miniTienda es una aplicación web de tienda ficticia desarrollada como actividad de aprendizaje para practicar Node.js, Express, Handlebars y Bootstrap. Muestra productos, un formulario de contacto y una página informativa, implementando conceptos como motor de plantillas, helpers, partials y manejo de rutas.

## Tecnologías utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **Express-Handlebars** - Motor de plantillas
- **Bootstrap 5** - Framework CSS para diseño responsive
- **Font Awesome** - Iconos

## Características

- Página de inicio con listado dinámico de productos usando `#each`.
- Indicador de disponibilidad (En stock/Agotado) con `#if`.
- Página "Sobre Nosotros" con información estática.
- Formulario de contacto que envía datos por POST y muestra una vista de éxito.
- Helper personalizado `mayusculas` para mostrar texto en mayúsculas.
- Layout principal con header y footer reutilizables mediante partials.
- Estilos personalizados con Bootstrap y CSS propio.
- Manejo de métodos no permitidos (respuesta 405).

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/miniTienda.git
   cd miniTienda
Instala las dependencias:

bash
npm install
(Opcional) Instala nodemon para desarrollo:

bash
npm install -D nodemon
Uso
Modo producción
bash
node app.js
Luego abre http://localhost:3000 en tu navegador.

Modo desarrollo (con nodemon, reinicio automático)
bash
npx nodemon app.js
Estructura del proyecto
text
miniTienda/
├── node_modules/
├── public/
│   ├── css/
│   │   └── style.css
│   └── img/
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   │   ├── navbar.handlebars
│   │   └── footer.handlebars
│   ├── home.handlebars
│   ├── about.handlebars
│   ├── contact.handlebars
│   └── success.handlebars
├── app.js
├── package.json
└── README.md
Rutas disponibles
Ruta	Método	Descripción
/	GET	Página de inicio con productos
/about	GET	Información sobre la tienda
/contact	GET	Formulario de contacto
/contact	POST	Procesa el formulario y muestra confirmación
cualquier ruta con otro método	PUT, etc.	Responde 405 (Método no permitido)
Personalización
Puedes modificar los productos y el mensaje de bienvenida editando el arreglo productos y la variable tienda dentro de app.js.

Licencia
Este proyecto es solo con fines educativos.
