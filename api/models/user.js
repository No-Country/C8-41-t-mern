import mongoose, { isObjectIdOrHexString, isValidObjectId } from "mongoose";
const Schema = mongoose.Schema;

const UserScheam = new Schema(
  {
    name: String,
    email: String,
    password: String,
    carrito: [String],
    admin: Boolean,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", UserScheam);

export default userModel;
