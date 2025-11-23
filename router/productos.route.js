import e from "express";
import { c_actualizarProducto, c_eliminarProducto, c_guardarProducto, c_obtenerProductoPorId, c_obtenerProductos } from "../controller/productos.controller.js";
import authMiddleware from "../middleware/auth.js";
const router = e.Router();

router.get('/',authMiddleware, c_obtenerProductos);
router.get('/:id',authMiddleware, c_obtenerProductoPorId);
router.post('/',authMiddleware, c_guardarProducto);
router.put('/', authMiddleware,c_actualizarProducto);
router.delete('/:id', authMiddleware,c_eliminarProducto);

export default router;
