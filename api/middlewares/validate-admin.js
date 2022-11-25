
const isAdminRole = ( req, res, next ) => {

    if ( !req.user ) {
        return res.status(500).json({
            msg: "Se quiere verificar sin validar primero el token"
        });
    }

    const { isAdmin, name } = req.user;

    if ( !isAdmin ) {
        return res.status(401).json({
            msg: `${ name } no es un usuario con rol administrador`
        });
    }

    next();
}

export { isAdminRole };