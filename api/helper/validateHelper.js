import {validationResult} from "express-validator";

const validateResult = (req,res,next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        res.status(403)
        res.send({error: err.array()})
    }
}

export {validateResult}