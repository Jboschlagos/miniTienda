# MiniTienda

Aplicación web de tienda ficticia desarrollada con Node.js, Express y Handlebars como proyecto de aprendizaje.

## Tecnologías
- Node.js
- Express
- Handlebars (express-handlebars)
- Bootstrap 5
- Font Awesome

## Funcionalidades
- Catálogo de productos con indicador de disponibilidad
- Página "Sobre Nosotros"
- Formulario de contacto funcional
- Helper personalizado para mayúsculas
- Diseño responsive con Bootstrap

## Instalación

1. Clona el repositorio

git clone https://github.com/tu-usuario/miniTienda.git
cd miniTienda
Instala dependencias

bash
npm install
Ejecuta la aplicación

bash
node app.js
Abre http://localhost:3000 en tu navegador

```
miniTienda/
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
└── package.json
```
Rutas
/ - Página de inicio con productos

/about - Información de la tienda

/contact - Formulario de contacto (GET y POST)

Personalización
Los productos se pueden modificar en el archivo app.js dentro del array productos.

Licencia
Proyecto educativo - libre uso

