// app.js
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// 📌 CONFIGURACIÓN HANDLEBARS
app.engine('handlebars', engine({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    defaultLayout: 'main',
    extname: '.handlebars',
    
    // 🔥 HELPERS PERSONALIZADOS
    helpers: {
        mayusculas: function(texto) {
            return texto ? texto.toUpperCase() : '';
        },
        formatoPrecio: function(precio) {
            return `$${precio.toLocaleString()}`;
        }
    }
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// 📌 MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 📌 DATOS DE LA TIENDA (BD simulada)
const tienda = {
    nombre: "MiniTienda",
    mensajeBienvenida: "Descubre las mejores prendas con estilo único",
    productos: [
        { nombre: "Camiseta Básica", precio: 15000, disponible: true, imagen: "/img/camiseta_basica.png" },
        { nombre: "Pantalón Jeans", precio: 30000, disponible: false, imagen: "/img/pantalon_jeans.png" },
        { nombre: "Zapatos Deportivos", precio: 50000, disponible: true, imagen: "/img/zapatos_deportivos.png" },
        { nombre: "Chaqueta de Cuero", precio: 80000, disponible: true, imagen: "/img/chaqueta_cuero.png" },
        { nombre: "Gorra Clásica", precio: 12000, disponible: true, imagen: "/img/gorra_clasica.png" },
        { nombre: "Bolso de Mano", precio: 45000, disponible: false, imagen: "/img/toiletri_bag.png" },
        { nombre: "Reloj Digital", precio: 60000, disponible: true, imagen: "/img/reloj_digital.png" },
        { nombre: "Bufanda de Lana", precio: 18000, disponible: true, imagen: "/img/bufanda.png" },
        { nombre: "Sudadera Hoodie", precio: 35000, disponible: false, imagen: "/img/sudadera_hoodie.png" },
        { nombre: "Gafas de Sol", precio: 25000, disponible: true, imagen: "/img/lentes_de_sol.png" }
    ]
};

// 📌 RUTAS
app.get('/', (req, res) => {
    res.render('home', {
        tienda: tienda,
        productos: tienda.productos,
        layout: 'main'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        tienda: tienda,
        layout: 'main'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        tienda: tienda,
        layout: 'main'
    });
});

app.post('/contact', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    res.render('success', {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        layout: 'main'
    });
});

// 📌 MANEJO DE MÉTODOS NO PERMITIDOS
app.put('/', (req, res) => {
    res.status(405).send('Método no permitido');
});

app.put('/about', (req, res) => {
    res.status(405).send('Método no permitido');
});

app.put('/contact', (req, res) => {
    res.status(405).send('Método no permitido');
});

// 404 para rutas no existentes
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ MiniTienda corriendo en http://localhost:${PORT}`);
});