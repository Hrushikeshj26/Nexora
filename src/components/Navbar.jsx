import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { User, ShoppingCart, Menu, X } from "lucide-react";

export default function NexoraNavbar() {
  const [open, setOpen] = useState(false);

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
        <div className="hidden md:flex items-center gap-10 text-[1rem] font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2"
                : "text-violet-100 hover:text-white transition font-normal"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2"
                : "text-violet-100 hover:text-white transition font-normal"
            }
          >
            All Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2"
                : "text-violet-100 hover:text-white transition font-normal"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2"
                : "text-violet-100 hover:text-white transition font-normal"
            }
          >
            Contact
          </NavLink>

          {/* Icon Section */}
          <div className="flex items-center gap-6 ml-4">
            <Link
              to="/user"
              className="hover:text-white text-violet-200 transition"
            >
              <User size={22} />
            </Link>

            <Link
              to="/cart"
              className="hover:text-white text-violet-200 transition"
            >
              <ShoppingCart size={22} />
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
        <div className="md:hidden bg-violet-700/90 px-6 py-4 space-y-4 text-violet-100 border-t border-violet-400/40">
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
          <div className="flex items-center gap-6 pt-4 border-t border-violet-400/40">
            <Link
              to="/user"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              <User size={22} />
            </Link>

            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              <ShoppingCart size={22} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
