import mongoose from "mongoose";
const Schema = mongoose.Schema;
const types = Schema.Types;
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
  cart: [
    {
      productID: types.ObjectId,
      productName: String,
      quantity: Number, 
    },
  ],
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

UserSchema.virtual("uid").get(function () {
  return this._id.toHexString();
});

UserSchema.set("toJSON", {
  virtuals: true,
});

UserSchema.methods.toJSON = function () {
  const { __v, passwordHash, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

const userModel = mongoose.model("User", UserSchema);

export default userModel;
