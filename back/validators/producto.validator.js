import { checkSchema } from "express-validator";

export const postProductoValidator = checkSchema(
    {
        nombre:{
            errorMessage : "Nombre no valido",
            notEmpty: true,
            isLength: {
                errorMessage: "El tamaño debe ser minimo de 1 caracter",
                options: {
                    min: 1,
                    max: 100
                }
            },

        },
        detalle:{
            errorMessage : "Detalle no valido",
            notEmpty: true,
            isLength: {
                errorMessage: "El tamaño debe ser minimo de 1 caracter",
                options: {
                    min: 1,
                    max: 100
                }
            },

        },
        valor: {
            matches : {options: /^[0-9]+$/},
            errorMessage: "valor no valido",
            notEmpty: true
        },

    },["body"]
);

export const idProductoValidator = checkSchema(
    {
        id: {
            errorMessage: "Id no valido",
            notEmpty: true,
            isInt: true,
        }

    },["params"]
);