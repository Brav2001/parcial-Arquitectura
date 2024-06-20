import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validator.middleware.js";
import { bodyAuthValidator } from "../validators/auth.validator.js";


const authRouter= Router();

authRouter.post("/login", validate(bodyAuthValidator), login)
authRouter.post("/register", validate(bodyAuthValidator), register)

export default authRouter;