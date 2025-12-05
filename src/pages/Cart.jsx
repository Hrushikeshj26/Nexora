import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash } from "lucide-react";

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="max-w-3xl mx-auto p-4 min-h-screen">
      
      {cart.length === 0 && (
        <div className="w-full mt-10 flex flex-col justify-center items-center gap-6">
          <img 
            src="/images/emptycart.png" 
            alt="" 
            className="w-75 opacity-80"
          />
          <p className="text-black font-semibold text-lg">Your cart is empty.</p>
          <p className="text-gray-700 text-center">
            Just relax, let us help you find some first-class products.
          </p>
          <Link
            to="/products"
            className="bg-(--color-primary) hover:bg-(--color-primary-hover) hover:scale-95 px-8 py-4 text-lg text-white font-semibold rounded-2xl"
          >
            Start Shopping
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 border-b py-4 sm:flex-row sm:justify-between sm:items-center"
        >
          <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between py-4 gap-6"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.model}
                  className="w-24 h-24 object-contain"
                />

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
          </div>

          {/* Price & Qty */}
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <p className="font-bold text-lg">${item.price}</p>

            <div className="flex items-center gap-2">
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

            <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash size={22} />
                </button>
          </div>
        </div>
      ))}

      {/* Summary + Offers */}
      {cart.length > 0 && (
        <div className="mt-6 p-4">

          {/* Price Summary */}
          <div className="flex justify-between text-lg font-bold">
            <span>Total Price:</span>
            <span>${totalPrice}</span>
          </div>

          <Link
            to="/checkout"
            className="bg-(--color-primary) hover:bg-(--color-primary-hover) text-white px-6 py-3 mt-4 w-full inline-block text-center text-lg rounded-lg font-semibold hover:scale-95 transition-all"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
