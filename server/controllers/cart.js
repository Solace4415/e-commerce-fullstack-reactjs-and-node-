import Cart from "../models/Cart.js";

//CREATE CART
export const createCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

//UPDATE USER CART
export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: false,
      }
    );

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE CART
export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET CART
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({userId: req.params.userId});
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL CARTS
export const getCarts = async (req, res) => {

  try {
    const carts = await Cart.find()

    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};