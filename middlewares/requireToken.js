import jwt from 'jsonwebtoken'
import { tokenVerificationErrors } from '../utils/tokenManager.js';

export const requireToken = (req, res, next) =>{ // Next es para que siga con el siguiente Middleware
    try {
        let token = req.headers?.authorization; // Obtenemos el token del header authorization
        
        if(!token) throw new Error('No Bearer');
        
        token = token.split(" ")[1];        

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = uid      
        
        next(); // Si no existe el Next, nunca va a llegar al infoUser en la ruta

    } catch (error) {        
        console.log(error.message)
        return res
                .status(401)
                .send({ error: tokenVerificationErrors[error.message]})
        
    }
}


