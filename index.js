import 'dotenv/config';
import express from "express";
import routerUsuarios from './router/usuarios.route.js';
import routerCategoria from './router/categoria.route.js';
import routerPersonas from './router/personas.route.js';
import routerProductos from './router/productos.route.js';
import routerVentas from './router/cabecera.route.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

const puertoApp = process.env.SERVER_PORT;
const apiUrl = process.env.SERVER_API_NAME;

// Endpoint(CRUD) paa Usuarios
app.use(`${apiUrl}/usuarios`, routerUsuarios);

// Crear un Endpint para categorias (CRUD)
// Repository, Services, Controller, Router, index.js
// Crear la Tabla categoria en mysql
// Probar desde Postman
app.use(`${apiUrl}/categoria`, routerCategoria);
// -5 DASH

// endpoint para personas
app.use(`${apiUrl}/personas`, routerPersonas);

//Endpint para productos
app.use(`${apiUrl}/productos`, routerProductos);

//Endpint para Ventas
app.use(`${apiUrl}/ventas`, routerVentas);


app.listen(puertoApp || 8083, ()=>{
    console.log(`Servidor iniciado correctamente `);
    console.log(`http://localhost:${puertoApp}`);
})