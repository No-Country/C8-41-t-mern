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

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
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
    return res.status(401).json({
      msg: "Token no válido",
    });
  }
};

export { validateJWT };
