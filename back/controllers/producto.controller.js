import { getProductoModel, getProductoUnicoModel, PostProductoModel,UpdateProductoModel, DeleteProductoModel } from "../models/producto.model.js"

export const getProducto =async  (req,res)=>{
    let data =await  getProductoModel();
    if(!data){
        res.status(500).json({msg:"ha ocurrido un error"})
    }else {
        res.status(200).json({msg:"esto es GET", data})
    }
    
}

export const getProductoUnico=async(req,res)=>{
    const {id}=req.params;
    let data = await getProductoUnicoModel(id);
    if(data === false){
        res.status(500).json({msg:"ha ocurrido un error"})
    }
    else if(data === null){
        res.status(404).json({msg:"este producto no está registrado"})
    }else{
        res.status(200).json({msg:"esto es GET unico", data})
    }
    
}

export const postProducto = async (req,res)=>{
    const {detalle,nombre,valor} = req.body;
    let data = await PostProductoModel(detalle,nombre,valor);
    if(!data){
        res.status(500).json({msg:"ha ocurrido un error"})
    }else{
        res.status(200).json({msg:"esto es POST", data})
    }
    
      
}

export const updateProducto = async (req,res)=>{
    const {id}=req.params;
    const {detalle,nombre,valor} = req.body;
    let data = await UpdateProductoModel(detalle,nombre,valor,id);
    if(!data){
        res.status(500).json({msg:"ha ocurrido un error"})
    }else{
        res.status(200).json({msg:"esto es UPDATE", data})
    }
    
}

export const deleteProducto = async (req, res) =>{
    const {id} =req.params;
    let data = await DeleteProductoModel(id);
    if(data === false){
        res.status(500).json({msg:"ha ocurrido un error"})
    
    }else if(data === null){
        res.status(404).json({msg:"este producto ya no existe"})
    }
    else{
        res.status(200).json({msg:"producto eliminado correctamente", data})
    }

}

export default {
    getProducto,
    getProductoUnico,
    postProducto,
    updateProducto,
    deleteProducto
}