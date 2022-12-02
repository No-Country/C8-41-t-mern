import mongoose from "mongoose";
const Types = Schema.Types;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: [
    {
      productID: Types.ObjectId,
      require: true,
    },
  ],
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
