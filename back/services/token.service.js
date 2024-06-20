import jwt from "jsonwebtoken";
import { env } from "../config/default.js";

export const generateToken = (data)=>{
    return jwt.sign(
        {
            data:data
        },env.secretKey,{expiresIn: "1h"}
    )     
}