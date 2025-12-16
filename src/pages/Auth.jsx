import { Bold, FastForward, GiftIcon, LockIcon, Smartphone } from "lucide-react";
import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 py-16">

      <div className="w-full mb-20 max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE - IMAGE & INFO */}
        <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-(--color-primary) to-(--color-primary-hover) text-white p-10 gap-8">
          <h1 className="text-4xl font-extrabold">Welcome to Nexora</h1>
          <p className="text-violet-100 text-lg">
            Your trusted smartphone e-commerce store.  
            Login or create an account to unlock exclusive deals, fast checkout, and premium support.
          </p>

          <ul className="space-y-4 text-violet-100 text-lg">
            <li className="flex gap-2 items-center"><Smartphone/> Latest Smartphones</li>
            <li className="flex gap-2 items-center"><FastForward/> Fast Delivery</li>
            <li className="flex gap-2 items-center"><LockIcon/> Secure Payments</li>
            <li className="flex gap-2 items-center"><GiftIcon/> Exclusive Member Offers</li>
          </ul>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-10 flex flex-col justify-center">

          {/* TABS */}
          <div className="flex mb-10 border-b border-violet-300">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-3 text-lg font-semibold ${
                isLogin ? "text-(--color-text-main) border-b-4 border-(--color-primary)" : "text-gray-400"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-3 text-lg font-semibold ${
                !isLogin ? "text-(--color-text-main) border-b-4 border-(--color-primary)" : "text-gray-400"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* LOGIN FORM */}
          {isLogin && (
            <form className="flex flex-col gap-6">

              <input
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-xl border border-(--color-primary) focus:border-(--color-text-main) outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-4 rounded-xl border border-(--color-primary) focus:border-(--color-text-main) outline-none"
              />

              <div className="flex justify-between text-sm mt-1">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>
                <button className="text-(--color-text-subtle) font-semibold hover:underline">
                  Forgot Password?
                </button>
              </div>

              <button className="bg-(--color-primary) hover:bg-(--color-primary-hover) hover:scale-95 text-white font-semibold py-3 rounded-xl text-lg transition-all">
                Login
              </button>

              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <span
                  className="text-(--color-text-subtle) font-semibold cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>
              </p>
            </form>
          )}

          {/* SIGNUP FORM */}
          {!isLogin && (
            <form className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="p-4 rounded-xl border border-(--color-primary) focus:border-(--color-text-main) outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-xl border border-(--color-primary) focus:border-(--color-text-main) outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-4 rounded-xl border border-(--color-primary) focus:border-(--color-text-main) outline-none"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="p-4 rounded-xl border border-(--color-primary) focus:border-(--color-text-main) outline-none"
              />

              <button className="bg-(--color-primary) hover:bg-(--color-primary-hover) hover:scale-95 text-white font-semibold py-3 rounded-xl text-lg transition-all">
                Create Account
              </button>

              <p className="text-center text-sm">
                Already have an account?{" "}
                <span
                  className="text-(--color-text-subtle) font-semibold cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}

export default Auth;
