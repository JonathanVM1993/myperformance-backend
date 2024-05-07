import { validationResult } from "express-validator";
import { body } from 'express-validator';

export const validationResultExpress = (req,res, next) =>{ // Next -> Nos permite decir siga con el código
    const errors = validationResult(req)

    if(!errors.isEmpty()){ //Pregunta si no está vacío
        return res.status(400).json({errors: errors.array()});
    }

    next()

}

export const bodyRegisterValidator = [
    body('correo', 'Formato de email incorrecto')
    .trim()
    .isEmail()
    .normalizeEmail(),
    body("password", "Mínimo 6 carácteres")
    .trim()
    .isLength({min: 6}),
    body("password", "Formato de password incorrecta")
    .trim()
    .isLength({min: 6}),
    validationResultExpress
]

export const bodyLoginValidator =  [
    body('correo', 'Formato de email incorrecto')
    .trim()
    .isEmail()
    .normalizeEmail(),
    validationResultExpress
]
    

