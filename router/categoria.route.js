import express from "express";
import { c_actualizarCategoria, c_eliminarCategoria, c_guardarCategoria, c_obtenerCategoria, c_obtenerCategoriaPorId } from "../controller/categoria.controller.js";
import authMiddleware from "../middleware/auth.js";
const router = express.Router();

router.get('/',authMiddleware, c_obtenerCategoria);
router.get('/:id',authMiddleware, c_obtenerCategoriaPorId);
router.post('/',authMiddleware, c_guardarCategoria);
router.put('/',authMiddleware, c_actualizarCategoria);
router.delete('/:id',authMiddleware, c_eliminarCategoria);

export default router;