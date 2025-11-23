import express from "express";
const routerUsuarios = express.Router();
import { c_obtenerUsuarios, c_obtenerUsuarioPorId, c_guardarUsuario, c_actualizarUsuario, c_eliminarUsuario, c_authLogin } from "../controller/usuarios.controller.js";
import authMiddleware from "../middleware/auth.js";

// RUTAS PROTEGIDAS
routerUsuarios.get('/',authMiddleware, c_obtenerUsuarios);
routerUsuarios.get('/:id',authMiddleware, c_obtenerUsuarioPorId);
routerUsuarios.put('/',authMiddleware, c_actualizarUsuario);
routerUsuarios.delete('/:id',authMiddleware, c_eliminarUsuario);

// RUTAS PUBLICAS
routerUsuarios.post('/', c_guardarUsuario);
routerUsuarios.post('/auth', c_authLogin);

export default routerUsuarios;
