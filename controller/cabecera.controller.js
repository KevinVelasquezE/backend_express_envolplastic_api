import {s_generarOrdenDeVenta} from '../service/cabecera.service.js';

export const c_generarOrdenDeVenta = async(req, res)=>{
    const {cabecera, detalles} = req.body;
    try {
        const result = await s_generarOrdenDeVenta(cabecera, detalles);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}