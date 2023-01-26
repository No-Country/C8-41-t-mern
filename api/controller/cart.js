import userModel from "../models/user.js";
import User from "../models/user.js";

const addCart = async (req, res) => {
  const { id } = req.params;
  const { cart } = req.body;

  const user = await User.findByIdAndUpdate(
    {
      _id: id,
    },
    { $push: { cart: cart } }
  );
  const updateUser = await User.findById({ _id: id });
  res.json(updateUser);
};

const deleteCart = async (req, res) => {
  const { id } = req.params;
  const { idProduct } = req.body;

  console.log(req.body, id);
  // const updateUser = await User.updateOne(
  //   { id },
  //   { $pull: { cart: { _id: idProduct } } }
  // );

  const user = await User.findByIdAndUpdate(
    {
      _id: id,
    },
    { $pull: { cart: { _id: idProduct } } }
  );
   
  const updateUser = await User.findById({ _id: id });

   
  res.json(updateUser);
};

const updateCartQuantity= async (req, res) => {
  
    const { id } = req.params;
  const { idProduct, quantity } = req.body;
  if (quantity>0) {
    const user = await User.findById(id);
    const updateUser = (user.cart.id(idProduct).quantity = quantity);
    
    user.save();
    res.json(updateUser.cart);  
  }else{
    const user = await User.findById(id);
    res.json(user);
  }
  
  
  
};

export { addCart, deleteCart, updateCartQuantity };
