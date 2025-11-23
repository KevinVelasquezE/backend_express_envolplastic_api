import { r_actualizarProducto, r_eliminarProducto, r_getProductoById, r_getProductos, r_guardarProducto } from "../repository/productos.repository.js";

export const s_obtnerProductos = async () => r_getProductos();
export const s_obtnerProductoId = async (id) => r_getProductoById(id);
export const s_guardarProducto = async (persona) => r_guardarProducto(persona);
export const s_actualizarProducto = async (persona) => r_actualizarProducto(persona);
export const s_eliminarProducto = async (id) => r_eliminarProducto(id);
