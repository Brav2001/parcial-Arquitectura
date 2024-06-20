import { DeleteUsuarioModel, UpdateUsuarioModel, getUsuarioModel, getUsuarioUnicoModel } from "../models/usuario.models.js";


export const getUsuario =async  (req,res)=>{
    let data =await  getUsuarioModel();
    if(!data){
        res.status(500).json({msg:"ha ocurrido un error"})
    }else {
        res.status(200).json({msg:"esto es GET", data})
    }
    
}

export const getUsuarioUnico=async(req,res)=>{
    const {id}=req.params;
    let data = await getUsuarioUnicoModel(id);
    if(data === false){
        res.status(500).json({msg:"ha ocurrido un error"})
    }
    else if(data === null){
        res.status(404).json({msg:"este usuario no está registrado"})
    }else{
        res.status(200).json({msg:"esto es GET unico", data})
    }
    
}

export const updateUsuario = async (req,res)=>{
    const {id}=req.params;
    const {username,password} = req.body;
    let data = await UpdateUsuarioModel(username,password,id);
    if(!data){
        res.status(500).json({msg:"ha ocurrido un error"})
    }else{
        res.status(200).json({msg:"esto es UPDATE", data})
    }
    
}

export const deleteUsuario = async (req, res) =>{
    const {id} =req.params;
    let data = await DeleteUsuarioModel(id);
    if(data === false){
        res.status(500).json({msg:"ha ocurrido un error"})
    
    }else if(data === null){
        res.status(404).json({msg:"este usuario ya no existe"})
    }
    else{
        res.status(200).json({msg:"usuario eliminado correctamente", data})
    }

}

export default {
    getUsuario,
    getUsuarioUnico,
    updateUsuario,
    deleteUsuario
}