const Order = require("../models/Order");
const Product = require("../models/Product");

// Place an Order
const placeOrder = async (req, res) => {
  const { products } = req.body;

  try {
    let totalPrice = 0;

    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) return res.status(404).json({ message: `Product not found: ${item.product}` });

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Not enough stock for ${product.name}` });
      }

      product.stock -= item.quantity;
      await product.save();

      totalPrice += product.price * item.quantity;
    }

    const order = new Order({
      user: req.user._id,
      products,
      totalPrice,
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Orders for Admin
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Export functions using CommonJS
module.exports = { placeOrder, getOrders };
