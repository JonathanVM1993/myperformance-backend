import { Router } from 'express';
import { infoUser, login, register, refreshToken, logout } from '../controllers/auth.controller.js';
import { requireToken } from '../middlewares/requireToken.js';
import { requireRefreshToken } from '../middlewares/requireRefreshToken.js';
import { bodyLoginValidator, bodyRegisterValidator } from '../middlewares/validatorManager.js';
const router = Router(); // middleware para gestionar nuestras rutas en los sitios web

router.post(
    '/register',
    bodyRegisterValidator, // Middleware, antes de que se ejecute registro, ejecuta esta funcion de validación con express, es importante el Next para decirle que continue
    register
); // Validar Email

router.post('/login', 
        bodyLoginValidator,
        login
);

router.get('/protected', requireToken, infoUser);
router.get('/refresh', requireRefreshToken ,refreshToken)
router.get('/logout', logout)


export default router; //Export default le podemos asignar el nombre que necesitamos

