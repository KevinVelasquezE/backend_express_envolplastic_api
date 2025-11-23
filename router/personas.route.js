import e from "express";
import { c_actualizarPersona, c_eliminarPersona, c_guardarPersona, c_obtenerPersonaPorId, c_obtenerPersonas } from "../controller/personas.controller.js";
import authMiddleware from "../middleware/auth.js";
const router = e.Router();

router.get('/', authMiddleware, c_obtenerPersonas);
router.get('/:id', authMiddleware, c_obtenerPersonaPorId);
router.post('/', authMiddleware, c_guardarPersona);
router.put('/', authMiddleware, c_actualizarPersona);
router.delete('/:id', authMiddleware, c_eliminarPersona);

export default router;
