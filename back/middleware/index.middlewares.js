import { Router } from "express";
import { verifyToken } from "./token.middleware.js";

const middleware = Router();

middleware.use("/producto", verifyToken);
middleware.use("/usuario", verifyToken);


export default middleware;