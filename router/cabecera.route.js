import e from 'express';
import {c_generarOrdenDeVenta} from '../controller/cabecera.controller.js';
import authMiddleware from "../middleware/auth.js";
const router = e.Router();

router.post('/', authMiddleware, c_generarOrdenDeVenta);

export default router;
