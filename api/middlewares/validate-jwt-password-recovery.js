import User from "../models/user.js";
//const user = import("../models/user.js");
import { response, request } from "express";
import jwt from "jsonwebtoken";

const validateJWTPass = async (req, res, next) => {
  try {
    const secret = process.env.SECRETORPRIVATEKEY;
    const token = req.params.token;

    if (!token) return res.status(401).send("Enlace inválido o expirado");

    // console.log(jwt.verify(token, secret));
    // const decoded = jwt.verify(token, secret);

    // jwt.verify(token, secret, function (err, decode) {
    //   if (err) {
    //     return res.status(401).send("Enlace inválido o expirado YOHAN");
    //   }
    // });

    jwt.verify(token, secret, function(err, decoded) {
        if (err) throw new Error(err) // Manage different errors here (Expired, untrusted...)
        req.auth = decoded // If no error, token info is returned in 'decoded'
        next()
      });

    //let decoded = jwt.verify(token, secret);
    // req.user = decode;
    // next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
    //return;
  }
};

export { validateJWTPass };

//Token viejo
/*http://localhost:3000/api/password-reset/637fb02cc14320ab954c3f9a/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzdmYjAyY2MxNDMyMGFiOTU0YzNmOWEiLCJpYXQiOjE2Njk2OTE2MzcsImV4cCI6MTY2OTcwNjAzN30.ltPHNFRu2G4H_33Rtxsh-irtz-QD1HMMVrxlKKkFv5U*/
