import { r_actualizarPersona, r_eliminarPersona, r_guardarPersona, r_obtenerPersona, r_obtenerPersonaPorId } from "../repository/persona.repository.js";

export const s_obtnerPersonas = async () => r_obtenerPersona();
export const s_obtnerPersonaPorId = async (id) => r_obtenerPersonaPorId(id);
export const s_guardarPersona = async (persona) => r_guardarPersona(persona);
export const s_actualizarPersona = async (persona) => r_actualizarPersona(persona);
export const s_eliminarPersona = async (id) => r_eliminarPersona(id);
