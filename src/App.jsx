import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Offers from "./components/Offer";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Popular from "./components/Popular";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-(--color-bg-page) font-rubik">
      <Toaster position="top-right" reverseOrder={false} 
      containerStyle={{
        top: 80,
      }}/>
      <Navbar />
      <main className="grow flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-6">
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Discover />
                  <Offers />
                  <Popular />
                </>
              }
            />

            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<Auth />} />
            <Route path="/products" element={<AllProduct />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
