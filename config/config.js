import 'dotenv/config';
import mysql from "mysql2/promise";

const connection = mysql.createPool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    database: process.env.BD_DATABASE,
    password: process.env.BD_PASSWORD,
    port: process.env.BD_PORT
});

connection.getConnection()
.then(()=>console.log(`Se ha Conectado a Mysql`))
.catch((e)=>console.error(`Error al conectar a la Base de datos`, e.message))

export default connection;