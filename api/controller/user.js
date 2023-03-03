//import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateJWT } from "../helper/generateJWT.js";
import { enviar } from "../utils/sengridMail.js";

//Obtener usuarios activos en la DB
const getUsers = async (req, res) => {
  const users = await User.find({ state: true });
  res.send(users);
};

//Crear usuario
const createUser = async (req, res) => {
  const body = req.body;
  const { name, email, passwordHash, street, phone, zip, isAdmin } = body;

  const user = new User({
    name,
    email,
    passwordHash,
    street,
    phone,
    zip,
    isAdmin,
  });

  //Verificar si el correo existe
  const repeatedEmail = await User.findOne({ email });

  if (repeatedEmail) {
    return res.status(400).json({
      msg: "El correo ya está registrado",
    });
  }

  //Encriptar contraseña
  const salt = bcrypt.genSaltSync();
  user.passwordHash = bcrypt.hashSync(passwordHash, salt);

  const userSave = await user.save();
  if (!userSave) return res.status(500).send("El usuario no pudo ser creado");
  enviar(user, "bienvenida");
  return res.status(200).json(userSave);
};

//Actualizar usuario
const updateUser = async (req, res) => {
  const { id } = req.params;

  const { email, passwordHash, ...others } = req.body;

  if (passwordHash) {
    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    others.passwordHash = bcrypt.hashSync(passwordHash, salt);
  }

  const user = await User.findByIdAndUpdate({ _id: id }, others, { new: true });
  res.json(user);
};

//Borrar usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  res.json({
    user,
  });
};

//Cambiar contraseña

const changePass = async (req, res) => {
  const { id } = req.params;
  const { password, before } = req.body;

  //Verificar contraseña
  const useR = await User.findById(id);
  const validPassword = bcrypt.compareSync(before, useR.passwordHash);

  if (!validPassword) {
    return res.status(400).json({
      msg: " Contraseña actual no es correcta - password",
    });
  }

  if (password) {
    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    let passwordHash = bcrypt.hashSync(password, salt);
    const user = await User.findByIdAndUpdate(
      { _id: id },
      { passwordHash },
      { new: true }
    );
    res.status(200).json(user);
  }
};

//Envío de correo para recuperar contraseña
const passwordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        msg: "El email no se encuentra registrado en la base de datos",
      });
    }

    // const message =
    //   "Si el correo está registrado, se enviarán a este las instrucciones de recuperación";
    // if (!user) {
    //   return res.status(400).send(message);
    // }

    //Crear Token
    const token = await generateJWT(user.uid);
    if (!token) return res.status(400).send("Token inválido o expirado");

    //Enlace que recibirá el usuario
    const link = `${process.env.BASE_URL}password-reset/${user.uid}/${token}`;
    console.log(link);
    //Envío de correo con link de recuperación
    enviar(user, "psReset", token);

    res.send({ user: "ok" });
  } catch (error) {
    res.send("Ocurrió un error");
    console.log(error);
  }
};

//Cambio de contraseña en usuario con token válido
const passwordResetUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const token = req.params;
    console.log;
    if (!user) return res.status(400).send("Enlace inválido o expirado");

    //Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    let userPassword = req.body.password;
    userPassword = bcrypt.hashSync(userPassword, salt);
    user.passwordHash = userPassword;
    user.token = token;
    await user.save();

    res.json({
      msg: "La contraseña ha sido actualizada",
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  createUser,
  getUsers,
  updateUser,
  passwordReset,
  passwordResetUser,
  changePass,
  deleteUser,
};
