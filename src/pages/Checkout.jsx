import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash, CreditCard, Wallet, Smartphone, Truck } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const navigate = useNavigate();
 

  const [formData, setFormData] = useState({
      state: "",
      city: "",
      address: "",
      pincode: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  }

  const handleOrderPlace = () => {
    if(!paymentMethod){
      toast.error('please select a payment method first!!')
      return
    }

    const labels = {
    cod: "Cash on Delivery",
    upi: "UPI Payment",
    card: "Debit / Credit Card",
    wallet: "Wallet Payment",
  };

  if(cart.length === 0){
    toast.error('Plase Select a Product First!!')
    return
  }else if (!formData.state || !formData.city || !formData.address || !formData.pincode) {
    toast.error("Please fill all fields before placing the order!");
    return;
  }else{
    toast.success(`You selected: ${labels[paymentMethod]}, Your Address is Confirmed`, {
      duration : 6000,
    });

    navigate('/orderconfirm',{
    state: formData,
  })

    setFormData({
      state: "",
      city: "",
      address: "",
      pincode: "",
    })

    clearCart();
  }
  }

  const offers = [
    "10% Instant Discount with HDFC Bank Credit Cards",
    "Flat ₹500 off on UPI Payments",
    "No-cost EMI available on orders above ₹10,000",
    "Free Delivery for Prime Members",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* CART ITEMS */}
        <div className="lg:col-span-2 bg-white shadow-lg p-6 rounded-xl">

          {cart.length === 0 ? (
            <p className="text-xl font-medium text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between py-4 border-b gap-6"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.model}
                  className="w-24 h-24 object-contain"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">
                    {item.brand} {item.model}
                  </h2>
                  <p className="text-gray-600">${item.price}</p>

                  {/* SELECTED COLOR */}
                  {item.selectedColor && (
                    <p className="mt-1 text-sm text-gray-700">
                      <span className="font-semibold">Color:</span> {item.selectedColor}
                    </p>
                  )}
                </div>

                {/* QTY CONTROL */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.qty - 1)}
                    className="p-2 bg-gray-200 rounded-md"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="text-lg font-semibold">{item.qty}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                    className="p-2 bg-gray-200 rounded-md"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {/* DELETE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash size={22} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* SUMMARY + PAYMENT */}
        <div className="lg:col-span-2 shadow-lg rounded-xl p-2 md:p-6 h-fit space-y-6">

          {/* OFFERS */}
          <div>
            <h2 className="text-xl font-bold mb-2">Available Offers</h2>
            <ul className="space-y-2 text-gray-800">
              {offers.map((offer, i) => (
                <li key={i} className="bg-(--color-bg-card) px-3 py-2 rounded-md border border-(--color-border)">
                  {offer}
                </li>
              ))}
            </ul>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-2xl font-bold border-b pb-4">Order Summary</h2>

            <div className="mt-4 space-y-3 text-lg">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-medium">FREE</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (5%):</span>
                <span className="font-medium">${(totalPrice * 0.05).toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold pt-2">
                <span>Total:</span>
                <span>${(totalPrice + totalPrice * 0.05).toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* ADDRESS FROM */}
          <div className="w-full flex flex-col my-10 rounded-2xl p-2 md:p-6 md:border">
        <h1 className="text-xl font-semibold mb-4">
          Confirm Your Address & Place Order
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* STATE */}
          <div>
            <label className="block mb-1 font-medium">Enter Your State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full bg-gray-200 rounded-md p-2 outline-none"
              required
            />
          </div>

          {/* CITY */}
          <div>
            <label className="block mb-1 font-medium">Enter Your City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full bg-gray-200 rounded-md p-2 outline-none"
              required
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block mb-1 font-medium">Full Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="House No, Area, Street"
              className="w-full bg-gray-200 rounded-md p-2 outline-none"
              required
            />
          </div>

          {/* PINCODE */}
          <div>
            <label className="block mb-1 font-medium">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="w-full bg-gray-200 rounded-md p-2 outline-none"
              required
            />
          </div>

          <hr className="my-10 border" />
          {/* PAYMENT OPTIONS */}
          <div>
            <h2 className="text-xl font-bold mb-3">Payment Options</h2>

            <div className="space-y-3">
              {/* COD */}
              <label className="flex items-center gap-3 bg-gray-100 p-3 rounded-md cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Truck size={22} />
                Cash on Delivery
              </label>

              {/* UPI */}
              <label className="flex items-center gap-3 bg-gray-100 p-3 rounded-md cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Smartphone size={22} />
                UPI Payment (GPay / PhonePe / Paytm)
              </label>

              {/* CARD */}
              <label className="flex items-center gap-3 bg-gray-100 p-3 rounded-md cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <CreditCard size={22} />
                Debit / Credit Card
              </label>

              {/* Wallet */}
              <label className="flex items-center gap-3 bg-gray-100 p-3 rounded-md cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="wallet"
                  checked={paymentMethod === "wallet"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Wallet size={22} />
                Wallet (Amazon Pay / Paytm)
              </label>
            </div>
          </div>

          <button to='/orderconfirm' className="w-full flex items-center justify-center py-3 bg-(--color-primary) hover:bg-(--color-primary-hover) hover:scale-95 text-white font-semibold rounded-xl transition-all"
            onClick={handleOrderPlace}
            type="submit"
          >
            Place Order
          </button>
        </form>
      </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
