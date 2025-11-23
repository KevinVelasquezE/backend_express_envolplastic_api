import { s_actualizarPersona, s_eliminarPersona, s_guardarPersona, s_obtnerPersonaPorId, s_obtnerPersonas } from "../service/personas.service.js";


export const c_obtenerPersonas = async (req, res) => {
    try {
        const personas = await s_obtnerPersonas();
        res.json(personas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener personas', error: error.message });
    }
};

export const c_obtenerPersonaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const persona = await s_obtnerPersonaPorId(id);
        if (persona) {
            res.json(persona);
        }  else {
            res.status(404).json({ mensaje: 'Persona no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener persona', error: error.message });
    }
};

export const c_guardarPersona = async (req, res) => {
    const persona = req.body;
    try {
        const nuevaPersona = await s_guardarPersona(persona);
        res.status(201).json(nuevaPersona);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al guardar persona', error: error.message });
    }
};

export const c_actualizarPersona = async (req, res) => {
    const personaActualizada = req.body;
    try {
        const resultado = await s_actualizarPersona(personaActualizada);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar persona', error: error.message });
    }
};

export const c_eliminarPersona = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await s_eliminarPersona(id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar persona', error: error.message });
    }
};