"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react"
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

// Datos de ejemplo para favoritos
const initialFavorites = [
    {
        id: 1,
        name: "Rosa Roja Premium",
        price: 25.99,
        image: "/flor.jpg",
        description:
            "Elegante rosa roja de tallo largo, símbolo de amor y pasión. Cultivada en nuestros invernaderos especiales.",
    },
    {
        id: 2,
        name: "Ramo Primaveral Deluxe",
        price: 65.99,
        image: "/flor2.jpg",
        description: "Colorido ramo con flores de temporada, ideal para regalar en ocasiones especiales.",
    },
    {
        id: 3,
        name: "Orquídea Blanca",
        price: 45.0,
        image: "/flor3.webp",
        description: "Delicada orquídea blanca, símbolo de pureza y elegancia. Ideal para regalos especiales.",
    },
    {
        id: 4,
        name: "Bonsái Decorativo Tradicional",
        price: 125.0,
        image: "/flor.jpg",
        description: "Elegante bonsái para decoración de interiores o exteriores. Un toque de zen para tu espacio.",
    },
    {
        id: 5,
        name: "Arreglo Tropical Exótico",
        price: 110.25,
        image: "/flor2.jpg",
        description: "Exótico arreglo con flores tropicales de colores vibrantes. Trae un toque de paraíso a tu espacio.",
    },
]

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState(initialFavorites)

    // Función para eliminar un item de favoritos
    const removeFromFavorites = (id: number) => {
        setFavorites(favorites.filter((item) => item.id !== id))
    }

    return (
        <>
            <NavbarComponent />
            <main className="min-h-screen bg-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Mis Favoritos</h1>
                            <p className="text-gray-600 mt-2">
                                {favorites.length} {favorites.length === 1 ? "producto" : "productos"} guardados
                            </p>
                        </motion.div>

                        {favorites.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {favorites.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                                    >
                                        <div className="relative">
                                            <div className="relative h-64 overflow-hidden">
                                                <Image
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover transition-transform hover:scale-105 duration-500"
                                                />
                                            </div>
                                            <button
                                                onClick={() => removeFromFavorites(item.id)}
                                                className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full text-red-500 hover:text-red-600 transition-colors"
                                                aria-label="Eliminar de favoritos"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>

                                        <div className="p-5">
                                            <Link href={`/producto/${item.id}`}>
                                                <h3 className="font-semibold text-lg text-gray-800 hover:text-[#e05780] transition-colors">
                                                    {item.name}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>

                                            <div className="mt-4 flex items-center justify-between">
                                                <span className="text-xl font-bold text-[#ff9ebb]">${item.price.toFixed(2)}</span>
                                                <button className="bg-[#b9375e] hover:bg-[#ff9ebb] text-white p-2 rounded-full transition-colors flex items-center gap-2">
                                                    <ShoppingCart size={18} />
                                                    <span className="pr-1">Añadir</span>
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                variants={itemVariants}
                                className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100"
                            >
                                <div className="max-w-md mx-auto">
                                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Heart size={32} className="text-gray-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">No tienes favoritos</h2>
                                    <p className="text-gray-600 mb-8">
                                        Explora nuestra tienda y guarda tus productos favoritos para encontrarlos fácilmente más tarde.
                                    </p>
                                    <Link
                                        href="/"
                                        className="bg-[#b9375e] hover:bg-[#ff9ebb] text-white py-3 px-8 rounded-full font-bold transition-colors inline-flex items-center"
                                    >
                                        <ArrowLeft size={16} className="mr-2" />
                                        Explorar productos
                                    </Link>
                                </div>
                            </motion.div>
                        )}

                        {favorites.length > 0 && (
                            <motion.div variants={itemVariants} className="mt-8 text-center">
                                <Link
                                    href="/"
                                    className="text-[#b9375e] hover:text-[#ff9ebb] transition-colors inline-flex items-center"
                                >
                                    <ArrowLeft size={16} className="mr-2" />
                                    Continuar comprando
                                </Link>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </main>
            <FooterComponent />
        </>
    )
}
