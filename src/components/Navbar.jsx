import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { User, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";


export default function NexoraNavbar() {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();

// Total cart items
const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="w-full bg-(--color-primary) text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide font-share text-white"
        >
          Nexora
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-[1rem] font-normal">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white"
                : "text-gray-200 hover:text-white transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white"
                : "text-gray-200 hover:text-white transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-400"
            }
          >
            All Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white"
                : "text-gray-200 hover:text-white transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-400"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white"
                : "text-gray-200 hover:text-white transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-400"
            }
          >
            Contact
          </NavLink>

          {/* Icon Section */}
          <div className="flex items-center gap-6 ml-4">
            <Link
              to="/user"
              className="hover:text-white text-gray-200 transition"
            >
              <User size={24} />
            </Link>

            <Link
              to="/cart"
              className="hover:text-white text-gray-200 transition relative"
            >
              <ShoppingCart size={24}/>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 py-4 space-y-4 border-t border-(--color-border)">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-white transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="block hover:text-white transition"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block hover:text-white transition"
          >
            Contact
          </NavLink>

          {/* Mobile Icons */}
          <div className="flex items-center gap-6 pt-4 border-t border-(--color-border)">
            <Link
              to="/user"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              <User size={23} />
            </Link>

            <Link
              to="/cart"
              className="hover:text-white text-gray-200 transition relative"
            >
              <ShoppingCart size={24}/>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
