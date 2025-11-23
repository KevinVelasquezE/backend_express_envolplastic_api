//require('dotenv').config();
// const express = require('express');
// const bodyParse = require('body-parser');
//const bd = require('./config/config');
import 'dotenv/config';
import express from 'express';
import bodyParse from 'body-parser';
import connection from './config/config.js';
const app = express();
async function pruebaConexion() {
    try {
        await connection.getConnection();
        console.log('Success');
    } catch (error) {
        console.error('Error: ', error.message);
    }
}
pruebaConexion();
//Variables 
// console.log(process.env.SERVER_PUERT);
const puerto =process.env.SERVER_PORT;
const apiUrl =process.env.SERVER_API_NAME;



app.use(bodyParse.json());
// Metodos: GET, POST, DELETE, UPDATE

// Declarar un Metodo get 
app.get(`${apiUrl}/obtenerlistado`,(req, res)=>{
    res.json({respuesta:'true', mensaje: 'Hola soy un Mensaje'});
});

// ==============EJERCICIO 1
// Implementar un metodo post, donde permita imprimir resultado del request del producto
app.post(`${apiUrl}/guardar`, (req,res)=>{
    const {id, codigo} = req.body;
    console.log(id);
    res.json(req.body);
});

// ==============EJERCICIO 2 ventas
// Implementar un metodo post donde calcule el precio del siguiente json
// {id:1, producto: 'Bolsas', precioUnitario: 14, cantidad: 5}
app.post(`${apiUrl}/calcularPrecio`,(req,res)=>{
    // Retornar como mensaje de respuesta el precio total: 
    // {respuesta: true, mensaje: 'el precio total es: 123'}
    const {precioUnitario, cantidad} = req.body;
    const precioTotal = (precioUnitario*cantidad);
    res.json({mensaje: true, respuesta: `El precio total es:${precioTotal}`})
});


// PUT   
app.put(`${apiUrl}/actualizarPrecio`, (req, res)=>{
    const jsonData = {
        id: 1,
        codigo: 123,
        descripcion: 'Producto 1',
        precio: 152
    }
    const {id, codigo, descripcion,precio} = req.body;
    jsonData.id=id;
    jsonData.codigo=codigo;
    jsonData.descripcion=descripcion;
    jsonData.precio=precio;
    // jsonData=req.body;
    //const datareq = req.body;
    // const dataActualizada={}
    // res.json(datareq);
    res.json(jsonData)
});

// DELETE


//POST   Ejercicio Practico: Implementar una api de metodo post 
// Donde adicione datos de una array de persona, en una variable persona.


app.listen(puerto||8083, ()=>{
    console.log('Se inicio el servidor');
});

// SEMANA 2
// Ayvar
// Josep
// Kevin
// Roberth
// Sherin
// Hector
// Edwar
// Jhon
// Milthon
// Chavez
// Guillermo

// SEMANA 2.1
// Ayvar
// Josep
// Roberth
// Sherin
// Hector
// Edwar
// Jhon
// Milthon
// Chavez
// 
