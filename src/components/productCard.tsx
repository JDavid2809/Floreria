"use client"

import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
  name: string
  price: number
  image: string
  description: string
  isNew?: boolean
  discount?: number
}

export default function ProductCard({
  name,
  price,
  //image,
  description,
  isNew = false,
  discount = 0,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price

  return (
    <div
      className="bg-white rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-xl border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={"/flor.jpg"}
          alt={name}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />

        {isNew && (
          <div className="absolute top-4 left-4 bg-[#ff7aa2] text-white text-xs font-bold px-3 py-1 rounded-full">
            NUEVO
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            -{discount}%
          </div>
        )}

        <div
          className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <button className="bg-white text-[#ff9ebb] p-3 rounded-full hover:bg-[#e05780] hover:text-white transition-colors">
            <Heart size={20} />
          </button>
          <button className="bg-[#ff9ebb] text-white p-3 rounded-full hover:bg-white hover:text-[#e05780] transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#e05780] transition-colors">{name}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>

        <div className="mt-4 flex items-center">
          {discount > 0 ? (
            <>
              <span className="text-xl font-bold text-[#ff9ebb]">${discountedPrice.toFixed(2)}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-xl font-bold text-[#ff9ebb]">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
