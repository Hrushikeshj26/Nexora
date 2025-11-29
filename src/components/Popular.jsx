import React from 'react'
import Card from './Card'
import { useProducts } from "../context/ProductContext";
import { Link } from 'react-router-dom';

function Popular() {

  const { products } = useProducts();

  return (
    <div className='w-full my-20 flex flex-col gap-15 justify-center items-center'>
        <h2 className='text-4xl font-bold underline'>Popular Models</h2>
        <div className='flex gap-8 justify-center items-center flex-wrap'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.slice(9, 15).map((item) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className=" rounded-xl overflow-hidden 
                     shadow-md hover:shadow-2xl hover:-translate-y-2 
                     transition-all duration-300 cursor-pointer group w-96 p-2 bg-(--color-bg-card)"
        >
          {/* IMAGE AREA */}
          <div className="w-full bg-white h-64 flex items-center justify-center overflow-hidden rounded-b-xl">
            <img
              src={item.img}
              alt={item.model}
              className="object-contain h-full w-full group-hover:scale-110 transition-all duration-300"
            />
          </div>

          {/* CONTENT */}
          <div className="p-5 flex flex-col gap-2">

            {/* Product Name */}
            <h2 className="text-lg font-bold text-black">
              {item.brand}{" "}
              <span className="font-medium">{item.model}</span>
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <p className="line-clamp-3 text-gray-700">{item.short_info}</p>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-black">${item.price}</p>

            {/* Button */}
            <button
              className="mt-3 w-full py-2 rounded-lg border-2 border-(--color-border) 
                         font-semibold text-black 
                         transition-all duration-300
                         group-hover:bg-(--color-primary-hover) group-hover:text-white"
            >
              View Details
            </button>

          </div>
        </Link>
      ))}
    </div>
        </div>
    </div>
  )
}

export default Popular