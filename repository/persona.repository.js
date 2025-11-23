import cnx from '../config/config.js';
export const r_obtenerPersona = async()=>{
    let sql = `SELECT * FROM PERSONA`;
    const [rows] = await cnx.query(sql);
    return rows;
}
    
export const r_obtenerPersonaPorId = async(id)=>{
    const sql = `SELECT * FROM PERSONA WHERE id =?`;
    const [row] = await cnx.query(sql, [id]);
    return row.length ? row[0]: null;
}

const r_existe_id = async(id)=>{
    const sql = `SELECT * FROM PERSONA WHERE id =?`;
    const [row] = await cnx.query(sql, [id]);
    return row.length ? true: false;
}

const r_existe = async(dni)=>{
    const sql = `SELECT * FROM PERSONA WHERE dni =?`;
    const [row] = await cnx.query(sql, [dni]);
    return row.length ? true: false;
}

export const r_guardarPersona = async(persona)=>{
    console.log(await r_existe(persona.dni));
    if (!await r_existe(persona.dni)) {
        const sql = `INSERT INTO PERSONA (dni, nombres, apellidos, telefono, email, direccion, genero, tipo_persona, estado) VALUES (?,?,?,?,?,?,?,?,?)`;
        const parametros = [persona.dni, persona.nombres, persona.apellidos, persona.telefono, persona.email, persona.direccion, persona.genero, persona.tipo_persona, persona.estado];
        const result = await cnx.query(sql, parametros);
        return {id: result[0].insertId, ...persona};
    }
    return {mensaje:'Persona ya Existe', ...persona}
}

export const r_actualizarPersona = async(persona)=>{
    const sql = `UPDATE PERSONA SET dni=?, nombres=?, apellidos=?, telefono=?, email=?, direccion=?, genero=?, tipo_persona=?, estado=? WHERE id=?`;
    const parametros = [persona.dni, persona.nombres, persona.apellidos, persona.telefono, persona.email, persona.direccion, persona.genero, persona.tipo_persona, persona.estado, persona.id];
    if(await r_existe(persona.dni)){
        const result = await cnx.query(sql, parametros);
        return {id: result[0].insertId, ...persona};
    }
    return {mensaje:'Persona no Existe para Actualizar', ...persona}
}

export const r_eliminarPersona = async(id)=>{
    const sql = `DELETE FROM PERSONA WHERE id=?`;
    if(await r_existe_id(id)){
        const result = await cnx.query(sql, [id]);
        return {id: result[0].insertId, mensaje: 'Persona Eliminado '};
    }
    return {mensaje:'Persona no Existe para Eliminar'}
}