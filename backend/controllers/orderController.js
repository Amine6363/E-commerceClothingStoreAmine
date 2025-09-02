// controllers/orderController.js (safe version: COD works, payments stubbed)

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Globals
const currency = "eur";
const deliveryCharge = 10;

// =========================
// COD: Place order (works)
// =========================
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // clear user's cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// ==========================================
// Stripe: stubbed (keeps routes/UI unchanged)
// ==========================================
const placeOrderStripe = async (_req, res) => {
  return res.json({
    success: false,
    message: "Stripe payments not available yet",
  });
};

const verifyStripe = async (_req, res) => {
  return res.json({
    success: false,
    message: "Stripe verification not available yet",
  });
};

// ============================================
// Razorpay: stubbed (keeps routes/UI unchanged)
// ============================================
const placeOrderRazorpay = async (_req, res) => {
  return res.json({
    success: false,
    message: "Razorpay payments not available yet",
  });
};

const verifyRazorpay = async (_req, res) => {
  return res.json({
    success: false,
    message: "Razorpay verification not available yet",
  });
};

// =======================================
// Admin: list all orders (works)
// =======================================
const allOrders = async (_req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// =======================================
// User: list user's orders (works)
// =======================================
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// =======================================
// Admin: update order status (works)
// =======================================
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  // Working endpoints
  placeOrder,
  allOrders,
  userOrders,
  updateStatus,
  // Stubbed payment endpoints (UI intact, no crash)
  placeOrderStripe,
  verifyStripe,
  placeOrderRazorpay,
  verifyRazorpay,
};
