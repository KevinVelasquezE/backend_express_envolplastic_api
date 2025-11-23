import { s_actualizarCategoria, s_eliminarCategoria, s_guardarCategoria, s_obtenerCategoria, s_obtenerCategoriaPorId } from "../service/categoria.service.js";


export const c_obtenerCategoria = async (req, res)=>{
    try {
        const result = await s_obtenerCategoria();
        res.json(result);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener categoria', errorMessage: error.message});
    }
}

export const c_obtenerCategoriaPorId = async (req, res)=>{
    try {
        const {id} = req.params;
        const result = await s_obtenerCategoriaPorId(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener categoria por id', errorMessage: error.message});
    }
}
export const c_guardarCategoria = async (req, res)=>{
    try {
        const categoria=req.body;
        const result = await s_guardarCategoria(categoria);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: 'Error al guardar categoria', errorMessage: error.message});
    }
}
export const c_actualizarCategoria = async (req, res)=>{
    try {
        const categoria=req.body;
        const result = await s_actualizarCategoria(categoria);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: 'Error al actualizar categoria', errorMessage: error.message});
    }
}
export const c_eliminarCategoria = async (req, res)=>{
    try {
        const {id} = req.params;
        const result = await s_eliminarCategoria(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar categoria', errorMessage: error.message});
    }
}

// -5 Hector
