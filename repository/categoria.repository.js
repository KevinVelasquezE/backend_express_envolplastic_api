import cnx from '../config/config.js';

export const obtenerCategoria = async()=>{
    const sql = `SELECT * FROM CATEGORIA`;
    console.log(sql);
    
    // obtenerCategoria
    const [rows] = await cnx.query(sql);
    return rows;
}

export const obtenerCategoriaPorId = async(id)=>{
    const sql = `SELECT * FROM CATEGORIA WHERE id =?`;
    const [row] = await cnx.query(sql, [id]);
    return row.length ? row[0]: null;
}

const existe = async(id)=>{
    const sql = `SELECT * FROM CATEGORIA WHERE id =?`;
    const [row] = await cnx.query(sql, [id]);
    return row.length ? true: false;
}

export const guardarCategoria = async(categoria)=>{
    const sql = `INSERT INTO CATEGORIA (codigo, descripcion, estado) VALUES (?,?,?)`;
    const parametros = [categoria.codigo, categoria.descripcion, categoria.estado];
    const result = await cnx.query(sql, parametros);
    return {id: result[0].insertId, ...categoria};
}

export const actualizarCategoria = async(categoria)=>{
    const sql = `UPDATE CATEGORIA SET codigo=?, descripcion=?, estado=? WHERE id=?`;
    const parametros = [categoria.codigo, categoria.descripcion, categoria.estado, categoria.id];
    if(await existe(categoria.id)){
        const result = await cnx.query(sql, parametros);
        return {id: result[0].insertId, ...categoria};
    }
    return {mensaje:'Categoria no Existe para Actualizar', ...categoria}
}


export const eliminarCategoria = async(id)=>{
    const sql = `DELETE FROM CATEGORIA WHERE id=?`;
    if(await existe(id)){
        const result = await cnx.query(sql, [id]);
        return {id: result[0].insertId, mensaje: 'Categoria Eliminado '};
    }
    return {mensaje:'Categoria no Existe para Eliminar'}
}