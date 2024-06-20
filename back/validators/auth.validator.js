import { checkSchema } from "express-validator";

export const bodyAuthValidator = checkSchema(
    {
        username:{
            errorMessage : "Nombre de usuario no valido",
            notEmpty: true,
            isLength: {
                errorMessage: "El tamaño debe ser minimo de 1 caracter",
                options: {
                    min: 1,
                    max: 100
                }
            },

        },
        password:{
            errorMessage : "Contraseña no valida",
            notEmpty: true,
            isLength: {
                errorMessage: "El tamaño debe ser minimo de 1 caracter",
                options: {
                    min: 1,
                    max: 100
                }
            },

        },

    },["body"]
);
