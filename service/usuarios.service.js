
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import { obtenerUsuarios, obtenerUsuarioPorId, guardarUsuario, actualizarUsuario, eliminarUsuario, authLogin } from "../repository/usuarios.repository.js";

export const s_obtenerUsuarios = () => obtenerUsuarios();
export const s_obtenerUsuarioPorId = (id) => obtenerUsuarioPorId(id);
export const s_eliminarUsuario=(id)=> eliminarUsuario(id);

// Guardar Usando Bcryptjs
export const s_guardarUsuario = async (usuario) =>{
    if (usuario.password) {
        usuario.password = await bcrypt.hash(usuario.password, 10)
    }
    return guardarUsuario(usuario);
}
// Actualizar Usando Bcryptjs
export const s_actualizarUsuario= async (usuario)=>{
     if (usuario.password) {
        usuario.password = await bcrypt.hash(usuario.password, 10)
    }
    return actualizarUsuario(usuario);
};

// Auth con  Usando Bcryptjs y generar el JWT
export const s_authLogin= async (email, password)=>{
    const user = await authLogin(email);
    if(!user){
        throw new Error('Usuario o contraseña incorrecto');
    }
    // Comparar Contraseña Incriptada
    const validarPassword = await bcrypt.compare(password, user.password);
    // Validar contraseña
    if (!validarPassword) {
        throw new Error('Usuario o contraseña incorrecto');
    }
    //Generar JWT
    const token = jwt.sign({id: user.id, email: user.email, user: user.usuario}, 
                process.env.JWT_SECRET || 'secretkey', {expiresIn: '1h'}
    );
    return {token, user:{id: user.id, email: user.email, user: user.usuario}}

} 