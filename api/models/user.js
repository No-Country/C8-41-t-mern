import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  state: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, passwordHash, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

const userModel = mongoose.model("User", UserSchema);

export default userModel;
