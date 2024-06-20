import { getUsuario, postUsuario } from "../models/auth.models.js"
import { generateToken } from "../services/token.service.js";


export const login = async (req,res)=>{

    try {
        const { username, password } = req.body;
        const data = await getUsuario(username, password);

        if(!data){
            throw new Error("Los datos son incorrectos");
        }

        res.status(200).json({
            succes: true,
            token: generateToken(data),
            msn: "logueado"
        })
    } catch (error) {
        res.status(401).json({
            succes: false,
            msn: error.message
            
        })
    }
    
}

export const register = async (req, res) =>{
    try {
        const { username, password } = req.body;
        const data = await postUsuario(username, password);

        if(!data){
            throw new Error("Los datos son incorrectos");
        }

        res.status(200).json({
            succes: true,
            token: generateToken(data),
            msn: "registro exitoso"
        })
    } catch (error) {
        res.status(401).json({
            succes: false,
            msn: error.message
            
        })
    }
}