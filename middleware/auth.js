// npm i jsonwebtoken
// npm i bcryptjs
// OR
// npm i jsonwebtoken bcryptjs
import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next)=>{
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({message: 'Token no proporcinado'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
        res.user = decoded;
        next();        
    } catch (error) {
        return res.status(401).json({message: 'Token Invalido'});
    }

}

export default authMiddleware;