## Estructura del Proyecto

MiniShop (App Fullstack)
├── Backend: Node.js + Express
├── Template Engine: Handlebars con Layouts/Partials
├── Frontend: Bootstrap 5 + CSS personalizado
└── Funcionalidades: CRUD básico (solo lectura + POST contacto)


## Etapas optimizadas de creacion de carpetas y dependencias

Se busca optimizar el proceso de creacion de carpetas mediante el aprendidaje del uso de la terminal.

1. Crear estructura de carpetas mediante Terminal "# Desde tu terminal
   *mkdir miniTienda && cd miniTienda*
   *npm init -y*

2. Instalar dependencias mediante Terminal "# Desde tu terminal 
   *npm install express express-handlebars*

3. Crear estructura de directorios mediante Terminal 
   *mkdir views\layouts*
   *mkdir views\partials*
   *mkdir public\css *
   *mkdir public\img *

4. Estructura de carpeta
    miniTienda/
 ├── node_modules/
 ├── public/
 │   ├── css/
 │   └── img/
 ├── views/
 │   ├── layouts/
 │   └── partials/
 ├── app.js
 ├── package.json
 └── package-lock.json 

5. Configuración del Servidor (app.js)
6. Vistas Handlebars con Bootstrap
 6.1 Layout principal (views/layouts/main.handlebars)
 6.2 NavBar (views/partials/navbar.handlebars)
 6.3 Footer (views/partials/footer.handlebars)
 6.4 Vista Home con productos (views/home.handlebars)
 6.5 Vista About (views/about.handlebars)
 6.6 Vista Contacto (views/contact.handlebars)
 6.7 Vista Success (views/success.handlebars)

7.  CSS Personalizado (public/css/style.css)
 
8. Ejecutar aplicacion 
    *node app.js* 


NOTA: Algunas fotos no cargan desde el link y por temas de tiempo no quise subir imagenes propias.

Para usar, hay que bajar todo y ejecutar de manera local. 