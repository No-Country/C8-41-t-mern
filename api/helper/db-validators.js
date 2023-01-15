import User from "../models/user.js";

// Verificar si el id existe en la BD
const exitsUserById = async( id ) => {    
    const checkID = await User.findById(id);
    if ( !checkID ) {
        throw new Error(`El id no existe ${ id }`);
    }
}


export { exitsUserById };