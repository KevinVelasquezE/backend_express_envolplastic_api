import connection from "../config/config.js";

export const obtenerUsuarios = async () =>{
    const sql = "SELECT * FROM USUARIOS";
    const [rows] = await connection.query(sql);
    return rows;
}

export const obtenerUsuarioPorId = async(id) =>{
    const sql = "select * from usuarios where id = ?";
    const [row] = await connection.query(sql, [id]);
    return row.length ? row[0]:null;
}

export const guardarUsuario = async(usuario)=>{
    const sql = "INSERT INTO USUARIOS(usuario, email, password, tipo_usuario, estado)VALUES(?,?,?,?,?)";
    const parametros = [usuario.usuario,usuario.email,usuario.password,usuario.tipo_usuario,usuario.estado];
    const result = await connection.query(sql,parametros);
    return {id: result[0].insertId,...usuario};
}

// Una funcion para consultar si el usuario existe
const userExist = async(id) =>{
    const [result] = await connection.query('SELECT * FROM USUARIOS WHERE ID=?', [id]);
    return result.length ? true : false;
}

// Actualizar
export const actualizarUsuario = async(usuario) => {
    let sql = "UPDATE USUARIOS SET usuario=?, email=?, password=?, tipo_usuario=?, estado=? WHERE ID=?";
    const parametros = [usuario.usuario,usuario.email,usuario.password,usuario.tipo_usuario,usuario.estado, usuario.id];
    const existe = await userExist(usuario.id);
    if (existe) {
        const result = await connection.query(sql, parametros);
        return {id: result[0].insertId,respuesta: 'Usuario Actualizado',...usuario};  
    } else {
      return {respuesta: 'Usuario no existe para actualizar'};
    }
}

// Eliminar
export const eliminarUsuario = async(id) =>{
    let sql = "DELETE FROM USUARIOS WHERE ID=?";
    const existe = await userExist(id);
    if (existe) {
        const result = await connection.query(sql, [id]);
        return {result: result,respuesta: 'Usuario Elimnado'};  
    } else {
      return {respuesta: 'Usuario no existe para eliminar'};
    }
}

// export const authLogin = async(email, password) =>{
//     console.log(email, password);
    
//     let sql ="SELECT * FROM USUARIOS WHERE email=? and password=?";
//     const [row] = await connection.query(sql, [email, password]);
//     return row.length? row[0]: null;
// }

// AuthLogin
// -20 DASH 29/09/2025
// -5 Chavez
// -5 Sherin
export const authLogin = async(email) =>{
    let sql ="SELECT * FROM USUARIOS WHERE email=?";
    const [row] = await connection.query(sql, [email]);
    return row.length? row[0]: null;
}