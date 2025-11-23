import { actualizarCategoria, eliminarCategoria, guardarCategoria, obtenerCategoria, obtenerCategoriaPorId } from "../repository/categoria.repository.js";

export const s_obtenerCategoria = ()=> obtenerCategoria();
export const s_obtenerCategoriaPorId = (id)=> obtenerCategoriaPorId(id);
export const s_guardarCategoria = (cat)=> guardarCategoria(cat);
export const s_actualizarCategoria = (cat)=> actualizarCategoria(cat);
export const s_eliminarCategoria = (id)=> eliminarCategoria(id);
