import User from "../models/user.js";
//const user = import("../models/user.js");
import { response, request } from "express";
import jwt from "jsonwebtoken";

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  const secret = process.env.SECRETORPRIVATEKEY || '3355sd8sdsdsd';

  try {
    const { uid } = jwt.verify(token, secret);
    const user = await User.findById(uid);

    // Validar que el usuario exista en la BD
    if (!user) {
        return res.status(401).json({
          msg: "Token no válido - usuario no existe en la BD",
        });
      }    

    // Validar si el uid tiene estado true
    if (!user.state) {
      return res.status(401).json({
        msg: "Token no válido - usuario con estado false",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
    return;
  }
};

export { validateJWT };
