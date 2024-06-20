import pgService from "../services/pg.service.js";

export const getUsuario = async (username, password) =>{

    try {
        const pg = new pgService();

        return await pg.connection.oneOrNone(` SELECT USERNAME FROM USUARIO WHERE USERNAME = $1 AND PASSWORD = $2`,[username,password])
    } catch (error) {
        return false
    }
   
}

export const postUsuario = async (username, password) =>{
    try {
        const pg = new pgService();

        return await pg.connection.query( `INSERT INTO USUARIO (USERNAME,PASSWORD) VALUES ($1,$2) RETURNING *`, [username,password])
    } catch (error) {
        return false
    }
}