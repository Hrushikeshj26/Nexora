import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { Star } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const { products } = useProducts();

  const navigate = useNavigate()

  const [selectedColor, setSelectedColor] = useState("");

  const { addToCart} = useCart();

  const product = products.find((p) => p.id.toString() === id);

  if (!product)
    return (
      <div className="flex items-center justify-center h-screen text-3xl font-semibold">
        Product Not Found!!
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT IMAGE */}
        <div className="
                        w-full h-[420px] sm:h-[520px]
                        rounded-2xl flex items-center justify-center 
                        shadow-lg overflow-hidden p-6 bg-white
                        ">
          <img
            src={product.img}
            alt={product.model}
            className="object-contain w-full h-full drop-shadow-xl"
          />
        </div>

        {/* RIGHT DETAILS */}
        <div className="flex flex-col gap-8">

          {/* TITLE */}
          <div>
            <h1 className="text-4xl font-bold text-(--color-text-main)">
              {product.brand} {product.model}
            </h1>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <Star key={i} size={22} fill="gold" stroke="gold" />
            ))}
            {product.rating % 1 !== 0 && (
              <Star size={22} fill="gold" stroke="gold" className="opacity-40" />
            )}
            <span className="ml-1 text-gray-700 font-medium text-lg">
              {product.rating} / 5
            </span>
          </div>

          {/* PRICE */}
          <p className="text-5xl font-bold text-black drop-shadow-sm">
            ${product.price}
          </p>

          {/* SHORT INFO */}
          <p className="text-(--color-text-subtle) text-lg leading-relaxed">
            {product.short_info}
          </p>

          {/* COLORS */}
          <div className="flex gap-3 flex-wrap">
  {product.colors.map((color) => (
    <button
      key={color}
      onClick={() => setSelectedColor(color)}
      className={`px-5 py-2 rounded-full border ${
        selectedColor === color
          ? "border-4 border-(--color-primary)"
          : "border-2 border-(--color-secondary)"
      }`}
    >
      {color}
    </button>
  ))}
</div>


          {/* SPECIFICATIONS */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-(--color-text-subtle)">
              Specifications:
            </h2>

            <div className="bg-(--color-bg-card) shadow-lg border border-(--color-border) rounded-2xl p-6">
              <ul className="space-y-3 text-gray-700 text-[15px]">

                <li>
                  <strong className="text-(--color-text-main)">Display:</strong>{" "}
                  {product.specifications.display.description}
                </li>

                <li>
                  <strong className="text-(--color-text-main)">Processor:</strong>{" "}
                  {product.specifications.processor}
                </li>

                <li>
                  <strong className="text-(--color-text-main)">RAM / Storage:</strong>{" "}
                  {product.specifications.ram_storage}
                </li>

                <li>
                  <strong className="text-(--color-text-main)">Rear Camera:</strong>{" "}
                  {product.specifications.camera.rear}
                </li>

                <li>
                  <strong className="text-(--color-text-main)">Front Camera:</strong>{" "}
                  {product.specifications.camera.front}
                </li>

                <li>
                  <strong className="text-(--color-text-main)">Battery:</strong>{" "}
                  {product.specifications.battery}
                </li>

                <li>
                  <strong className="text-(--color-text-main)">OS:</strong>{" "}
                  {product.specifications.os}
                </li>

              </ul>
            </div>
          </div>

          {/* SPECIAL FEATURES */}
          {product.specifications.special_features && (
            <div>
              <h2 className="text-xl font-semibold mb-3 text-black">
                Special Features:
              </h2>
              <div className="bg-(--color-bg-card) shadow-lg border border-(--color-border) rounded-2xl p-6">
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {product.specifications.special_features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* BUTTON */}
          <div className="flex gap-8">
            <button className="mt-4 w-full lg:w-1/2 py-4 rounded-xl 
                             font-bold text-lg border-2
                             border-(--color-border)
                             text-black shadow-md transition-all hover:scale-95"
                             onClick={() => {
                                if (!selectedColor) return toast.error("Please select a color!");
                                addToCart({ ...product, selectedColor });
                                 navigate("/checkout");
                              }}
                             >
            Buy Now
          </button>
          <button className="mt-4 w-full lg:w-1/2 py-4 rounded-xl 
                             font-bold text-lg
                             bg-(--color-text-main) border border-(--color-border) text-white shadow-md transition-all hover:scale-95"
                  onClick={() => {
                      if (!selectedColor) {
                        toast.error("Please select a color");
                        return;
                      }

                      addToCart({ ...product, selectedColor });
                      toast.success("Added to cart!");
                    }}
          >
            Add to Cart
          </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Product;
