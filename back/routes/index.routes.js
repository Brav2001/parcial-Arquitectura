import { Router } from "express";
import authRouter from "./auth.routes.js";
import routerProducto from "./producto.routes.js";
import routerUsuario from "./usuario.routes.js";

const route= Router();

route.use("/producto", routerProducto)
route.use("/auth", authRouter)
route.use("/usuario", routerUsuario)

export default route;
