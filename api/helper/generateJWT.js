import jwt from "jsonwebtoken"

const generateJWT = ( uid = '') => {
    
    return new Promise( (resolve, reject) => {

        const payLoad = { uid };

        jwt.sign( payLoad, process.env.SECRETORPRIVATEKEY || '3356uw87994ser', {
            expiresIn: '1h'
        }, ( err, token ) => {
            if ( err ) {
                console.log(err);
                reject('no se pudo generar el token');
            } else {
                resolve( token );
            }
        })
    })
}

export { generateJWT };