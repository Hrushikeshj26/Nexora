import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE - IMAGE & INFO */}
        <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-violet-700 to-violet-500 text-white p-10 gap-8">
          <h1 className="text-4xl font-extrabold">Welcome to Nexora</h1>
          <p className="text-violet-100 text-lg">
            Your trusted smartphone e-commerce store.  
            Login or create an account to unlock exclusive deals, fast checkout, and premium support.
          </p>

          <ul className="space-y-4 text-violet-100 text-lg">
            <li>📱 Latest Smartphones</li>
            <li>⚡ Fast Delivery</li>
            <li>🔒 Secure Payments</li>
            <li>🎁 Exclusive Member Offers</li>
          </ul>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-10 flex flex-col justify-center">

          {/* TABS */}
          <div className="flex mb-10 border-b border-violet-300">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-3 text-lg font-semibold ${
                isLogin ? "text-violet-700 border-b-4 border-violet-700" : "text-gray-400"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-3 text-lg font-semibold ${
                !isLogin ? "text-violet-700 border-b-4 border-violet-700" : "text-gray-400"
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
                className="p-4 rounded-xl border border-violet-300 focus:border-violet-500 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-4 rounded-xl border border-violet-300 focus:border-violet-500 outline-none"
              />

              <div className="flex justify-between text-sm mt-1">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>
                <button className="text-violet-600 hover:underline">
                  Forgot Password?
                </button>
              </div>

              <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl text-lg transition-all">
                Login
              </button>

              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <span
                  className="text-violet-600 font-semibold cursor-pointer"
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
                className="p-4 rounded-xl border border-violet-300 focus:border-violet-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-xl border border-violet-300 focus:border-violet-500 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-4 rounded-xl border border-violet-300 focus:border-violet-500 outline-none"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="p-4 rounded-xl border border-violet-300 focus:border-violet-500 outline-none"
              />

              <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl text-lg transition-all">
                Create Account
              </button>

              <p className="text-center text-sm">
                Already have an account?{" "}
                <span
                  className="text-violet-600 font-semibold cursor-pointer"
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
