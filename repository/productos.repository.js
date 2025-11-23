import cnx from '../config/config.js';

export const r_getProductos = async () => {
    const query = 'SELECT * FROM productos';
    const [rows] = await cnx.execute(query);
    return rows;
}

export const r_getProductoById = async (id) => {
    const query = 'SELECT * FROM productos WHERE id = ?';
    const [rows] = await cnx.execute(query, [id]);
    return rows[0];
}

export const r_guardarProducto = async (producto) => {
    const query = 'INSERT INTO productos (descripcion, precio_unitario, precio_venta, stock, id_categoria, estado) VALUES (?, ?, ?, ?, ?, ?)';
    const { descripcion, precio_unitario, precio_venta, stock, id_categoria, estado } = producto;
    const result = await cnx.execute(query, [descripcion, precio_unitario, precio_venta, stock, id_categoria, estado]);
     return {id: result[0].insertId, ...producto};
}

export const r_actualizarProducto = async (producto) => {
    const query = 'UPDATE productos SET descripcion = ?, precio_unitario = ?, precio_venta = ?, stock = ?, id_categoria = ?, estado = ? WHERE id = ?';
    const { descripcion, precio_unitario, precio_venta, stock, id_categoria, estado, id } = producto;
    const result = await cnx.execute(query, [descripcion, precio_unitario, precio_venta, stock, id_categoria, estado, id]);
    return {id: result[0].insertId, ...producto};
}

export const r_eliminarProducto = async (id) => {
    const query = 'DELETE FROM productos WHERE id = ?';
    const [result] = await cnx.execute(query, [id]);
    return result.affectedRows;
}