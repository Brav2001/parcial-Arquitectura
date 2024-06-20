import { Router } from "express";
import productoController from "../controllers/producto.controller.js";
import { validate } from "../middleware/validator.middleware.js";
import { idProductoValidator, postProductoValidator } from "../validators/producto.validator.js";

const routerProducto= Router();

routerProducto.get("/",productoController.getProducto);
routerProducto.get("/:id",validate(idProductoValidator), productoController.getProductoUnico);
routerProducto.post("/", validate(postProductoValidator),productoController.postProducto);
routerProducto.put("/:id",validate(idProductoValidator),validate(postProductoValidator), productoController.updateProducto);
routerProducto.delete("/:id",validate(idProductoValidator), productoController.deleteProducto);


export default routerProducto;