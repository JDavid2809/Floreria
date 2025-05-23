"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Truck } from "lucide-react"
import NavbarComponent from "@/components/navbar"
import FooterComponent from "@/components/footer"

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Datos de ejemplo para el carrito
const cartItems = [
  {
    id: 1,
    name: "Rosa Roja Premium",
    price: 25.99,
    image: "/flor.jpg",
    quantity: 2,
  },
  {
    id: 2,
    name: "Ramo Primaveral Deluxe",
    price: 65.99,
    image: "/flor2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Orquídea Blanca",
    price: 45.0,
    image: "/flor3.webp",
    quantity: 1,
  },
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)

  // Función para actualizar la cantidad
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Función para eliminar un item
  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // Cálculos
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 50
  const tax = subtotal * 0.16
  const total = subtotal + shipping + tax

  return (
    <>
      <NavbarComponent />
      <main className="min-h-screen bg-white py-10">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Tu Carrito</h1>
              <p className="text-gray-600 mt-2">
                {items.length} {items.length === 1 ? "producto" : "productos"} en tu carrito
              </p>
            </motion.div>

            {items.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Lista de productos */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="divide-y divide-gray-100">
                      {items.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-6 flex flex-col sm:flex-row items-center gap-6"
                        >
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="flex-grow text-center sm:text-left">
                            <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                            <p className="text-[#b9375e] font-medium mt-1">${item.price.toFixed(2)}</p>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center border text-2xl text-black border-[#b9375e] rounded-full">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-black hover:text-[#ff9ebb] transition-colors"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-black hover:text-[#ff9ebb] transition-colors"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus size={16} />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors p-2"
                              aria-label="Eliminar producto"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div variants={itemVariants} className="mt-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center text-[#ff9ebb] hover:text-[#b9375e] transition-colors">
                      <ArrowLeft size={16} className="mr-2" />
                      Continuar comprando
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Resumen del pedido */}
                <motion.div variants={itemVariants} className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Resumen del Pedido</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-black">Subtotal</span>
                        <span className="font-medium text-black">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-black">Envío</span>
                        <span className="font-medium text-black">{shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-black">Impuestos (16%)</span>
                        <span className="font-medium text-black">${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span className="text-[#b9375e]">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {shipping === 0 ? (
                      <div className="bg-green-50 text-green-700 p-3 rounded-lg flex items-center mb-6">
                        <Truck size={20} className="mr-2 flex-shrink-0" />
                        <span className="text-sm">¡Envío gratis en tu pedido!</span>
                      </div>
                    ) : (
                      <div className="bg-gray-50 text-gray-700 p-3 rounded-lg flex items-center mb-6">
                        <Truck size={20} className="mr-2 flex-shrink-0" />
                        <span className="text-sm">
                          Añade ${(500 - subtotal).toFixed(2)} más para obtener envío gratis
                        </span>
                      </div>
                    )}

                    <button className="w-full bg-[#b9375e] hover:bg-[#ffb3c6] text-white py-4 px-6 rounded-full font-bold transition-colors flex items-center justify-center">
                      <ShoppingBag size={20} className="mr-2" />
                      Proceder al pago
                    </button>
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div
                variants={itemVariants}
                className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag size={32} className="text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h2>
                  <p className="text-gray-600 mb-8">Parece que aún no has añadido ningún producto a tu carrito.</p>
                  <Link
                    href="/"
                    className="bg-[#ff9ebb] hover:bg-[#b9375e] text-white py-3 px-8 rounded-full font-bold transition-colors inline-flex items-center"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Volver a la tienda
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      <FooterComponent />
    </>
  )
}
