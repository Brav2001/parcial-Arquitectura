import pgService from "../services/pg.service.js"

export const getUsuarioModel =async ()=>{
    try {
        const pg = new pgService ();
        return await pg.connection.query(
            `SELECT ID_USUARIO, USERNAME FROM USUARIO `
        )
        
    } catch (error) {
        console.log(error);
        return false;
    }
    
}

export const getUsuarioUnicoModel =async (id)=>{
    try {
        const pg = new pgService ();
        return await pg.connection.oneOrNone(
            `SELECT ID_USUARIO, USERNAME FROM USUARIO WHERE ID_USUARIO = $1`, [id]
        )
    } catch (error) {
        return false
    }
    
}

export const UpdateUsuarioModel =async (username,password,id)=>{
    try {
        const pg = new pgService ();
        return await pg.connection.oneOrNone(
            `UPDATE USUARIO SET USERNAME=$1, PASSWORD=$2 WHERE ID_USUARIO = $3 RETURNING *`, [username,password,id]
        )
    } catch (error) {
        return false
    }
    
}


export const DeleteUsuarioModel = async (id)=>{
    try {
        const pg = new pgService ();
        return await pg.connection.oneOrNone(
            `DELETE FROM USUARIO WHERE ID_USUARIO = $1 RETURNING *`, [id]
        )
    } catch (error) {
        return false
    }

}