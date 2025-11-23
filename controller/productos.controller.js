import { s_actualizarProducto, s_eliminarProducto, s_guardarProducto, s_obtnerProductoId, s_obtnerProductos } from "../service/productos.service.js";

export const c_obtenerProductos = async (req, res) => {
    try {
        const productos = await s_obtnerProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

export const c_obtenerProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await s_obtnerProductoId(id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

export const c_guardarProducto = async (req, res) => {
    try {
        const nuevoProducto = req.body;
        const productoGuardado = await s_guardarProducto(nuevoProducto);
        res.status(201).json(productoGuardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el producto', details: error.message});
    }
};
export const c_actualizarProducto = async (req, res) => {
    try {
        const datosActualizados = req.body;
        const productoActualizado = await s_actualizarProducto(datosActualizados);
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};
export const c_eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const filasAfectadas = await s_eliminarProducto(id);
        console.log(filasAfectadas);
        if (filasAfectadas > 0) {
            res.json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};