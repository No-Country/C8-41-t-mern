import userModel from "../models/user.js";

const getUser = async (req, res) => {
  const user = await userModel.find();
  res.send(user);
};

const createUser = async (req, res) => {
  const { name, email, password, admin } = req.body;
  console.log(name);
  const user = new userModel({ name, email, password, admin });
  const resultado = await user.save();
  res.send({ resultado });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { ...data } = req.body;

  const userUpdate = await userModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  res.status(200).json(userUpdate);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deleteUser = await userModel.findByIdAndDelete(id);
  res.status(200).json(deleteUser);
};
export { createUser, getUser, updateUser, deleteUser };
