import {generarOrdenDeVenta} from '../repository/cabecera.repository.js';

export const s_generarOrdenDeVenta = async (cabecera, detalles)=>{
    try {
        return await generarOrdenDeVenta(cabecera, detalles);
    } catch (error) {
        throw new Error(`Error al generar Venta: ${error.message}`);
    }
}
