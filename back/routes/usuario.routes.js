import { Router } from "express";
import usuarioController from "../controllers/usuario.controller.js";
import { validate } from "../middleware/validator.middleware.js";
import { idUsuarioValidator, usuarioValidator } from "../validators/usuario.validator.js";


const routerUsuario= Router();

routerUsuario.get("/",usuarioController.getUsuario);
routerUsuario.get("/:id",validate(idUsuarioValidator), usuarioController.getUsuarioUnico);
routerUsuario.put("/:id",validate(idUsuarioValidator),validate(usuarioValidator), usuarioController.updateUsuario);
routerUsuario.delete("/:id",validate(idUsuarioValidator), usuarioController.deleteUsuario);


export default routerUsuario;