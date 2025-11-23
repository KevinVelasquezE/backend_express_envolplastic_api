import { s_obtenerUsuarios, s_obtenerUsuarioPorId, s_guardarUsuario, s_actualizarUsuario, s_eliminarUsuario, s_authLogin } from "../service/usuarios.service.js";

export const c_obtenerUsuarios = async (req, res)=>{
    try {
        const usuarios = await s_obtenerUsuarios();
        res.json(usuarios);
    } catch (e) {
        res.status(500).json({error: 'Error al obtener usuario', e});
    }
}

export const c_obtenerUsuarioPorId = async (req, res)=>{
    try {
        const {id} = req.params;
        const usuario = await s_obtenerUsuarioPorId(id);
        res.json(usuario);
    } catch (e) {
    console.error("ERROR SQL:", e);
    res.status(500).json({error: 'Error al guardar nuevo usuario', detalle: e});
}
}

export const c_guardarUsuario = async (req, res)=>{
    try {
        const usuario = req.body;
        const nuevo_usuario = await s_guardarUsuario(usuario);
        console.log(nuevo_usuario);
        res.json(nuevo_usuario);
    } catch (e) {
        res.status(500).json({error: 'Error al guardar nuevo usuario', e:e.message}); 
    }
}

export const c_actualizarUsuario = async(req, res)=>{
    try {
        const usuario = req.body;
        const actualizarUsuario = await s_actualizarUsuario(usuario);
        res.json(actualizarUsuario);
    } catch (e) {
        res.status(500).json({error: 'Error al actualizar usuario', e:e.message}); 
    }
}

export const c_eliminarUsuario = async(req, res)=>{
    try {
        const {id} = req.params;
        const usuario = await s_eliminarUsuario(id);
        res.json(usuario);
    } catch (e) {
        res.status(500).json({error: 'Error al eliminar usuario', e:e.message}); 
    }
}

export const c_authLogin = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const usuario = await s_authLogin(email, password);
        res.json(usuario);
    } catch (e) {
        res.status(500).json({error: 'Error al iniciar sesion', e:e.message}); 
    }
}