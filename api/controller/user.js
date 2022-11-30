//import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcrypt";

//Obtener usuarios activos en la DB
const getUsers = async (req, res) => {
  const users = await User.find({ state: true });
  res.send(users);
};

//Crear usuario
const createUser = async (req, res) => {
  const body = req.body;
  const { name, email, passwordHash, street, phone, zip } = body;

  const user = new User({
    name,
    email,
    passwordHash,
    street,
    phone,
    zip,
  });

  //Verificar si existe el correo existe
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
  return res.status(200).json(userSave);
};

//Actualizar usuario
const updateUser = async (req, res) => {
  const { id } = req.params;

  const { email, passwordHash, ...others } = req.body;

  if (passwordHash) {
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    others.passwordHash = bcryptjs.hashSync(passwordHash, salt);
  }

  const user = await User.findByIdAndUpdate({ _id: id }, others, { new: true });
  res.json(user);
};

//Borrar usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate();

  res.json({
    user,
  });
};

export { createUser, getUsers, updateUser, deleteUser };
