import jwt from "jsonwebtoken";

const generateJWT = ( uid = '' ) => {
    return new Promise( (resolve, reject) => {
        
        const payload = { uid };
 
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mzg5NDM0MTY0ZjMzNTAxYzVlOGRmMjgiLCJpYXQiOjE2Njk5NDEzODcsImV4cCI6MTY2OTk1NTc4N30.z3qUxS7V2BbYubPtfy-zVfU2tLn-bGpHeD9sntnnQrY', {
            expiresIn: '4h'
        }, ( err, token ) => {
            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })
 
    })
}

export { generateJWT };