import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateJWT } from "../helper/generateJWT.js";


const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Verificar si el email existe
    const user = await User.findOne({ email });    
    if (!user) {
      return res.status(400).json({
        msg: "Usuario / Contraseña no son correctos - correo",
      });
    }

    //Verificar si el usuario está activo
    if (!user.state) {
      return res.status(400).json({
        msg: "Usuario / Contraseña no son correctos - estado",
      });
    }

    //Verificar contraseña
    const validPassword = bcrypt.compareSync( password, user.passwordHash );
    if (!validPassword) {
        return res.status(400).json({
          msg: "Usuario / Contraseña no son correctos - password",
        });
    }

    //Generar JWT
    const token = await generateJWT( user.uid ); 
    res.json({
      user,
      token,
    });

   
  } catch (error) {
    console.log(error);
  }
};

export { login };
