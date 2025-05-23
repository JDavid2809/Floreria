"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X, Heart, User } from "lucide-react"
import { useState, useEffect } from "react"

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
        className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
            scrolled ? "bg-white text-[#ff9ebb] shadow-lg" : "bg-transparent text-white"
        }`}
        >
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
            <Link href="/" className="font-bold text-2xl flex items-center">
                <span className="text-[#ff9ebb]">FLOWER</span>
                <span className={scrolled ? "text-gray-800" : "text-white"}>Rosa</span>
            </Link>

            {/* Menú para móvil */}
            <div className="md:hidden">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full ${scrolled ? "bg-[#ff9ebb]/10" : "bg-white/10"}`}
                >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Menú para desktop */}
            <div className="hidden md:flex items-center space-x-8">
                <Link href="#flores" className="hover:text-[#ff9ebb] transition-colors font-medium">
                Flores
                </Link>
                <Link href="#ramos" className="hover:text-[#ff9ebb] transition-colors font-medium">
                Ramos
                </Link>
                <Link href="#arreglos" className="hover:text-[#ff9ebb] transition-colors font-medium">
                Arreglos
                </Link>
                <Link href="#plantas" className="hover:text-[#ff9ebb] transition-colors font-medium">
                Plantas
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <Link
                href="/favoritos"
                className={`p-2 rounded-full transition-colors ${
                    scrolled ? "hover:bg-[#ff9ebb]/10" : "hover:bg-white/10"
                }`}
                >
                <Heart size={20} />
                </Link>
                <Link
                href="/user"
                className={`p-2 rounded-full transition-colors ${
                    scrolled ? "hover:bg-[#ff9ebb]/10" : "hover:bg-white/10"
                }`}
                >
                <User size={20} />
                </Link>
                <Link
                href="/carrito"
                className={`p-2 rounded-full flex items-center space-x-1 transition-colors ${
                    scrolled ? "bg-[#ff9ebb] text-white hover:bg-[#e05780]" : "bg-white text-[#ff9ebb] hover:bg-white/90"
                }`}
                >
                <ShoppingCart size={20} />
                <span className="font-medium">Carrito</span>
                </Link>
            </div>

            <Link
                href="/carrito"
                className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled ? "hover:bg-[#ff9ebb]/10" : "hover:bg-white/10"
                }`}
            >
                <ShoppingCart size={24} />
            </Link>
            </div>

            {/* Menú móvil desplegable */}
            {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 pb-6 bg-white text-gray-800 rounded-b-xl shadow-lg">
                <Link
                href="#flores"
                className="block hover:text-[#ff9ebb] transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
                >
                Flores
                </Link>
                <Link
                href="#ramos"
                className="block hover:text-[#ff9ebb] transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
                >
                Ramos
                </Link>
                <Link
                href="#arreglos"
                className="block hover:text-[#ff9ebb] transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
                >
                Arreglos
                </Link>
                <Link
                href="#plantas"
                className="block hover:text-[#ff9ebb] transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
                >
                Plantas
                </Link>
                
                <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-100">
                    
                <Link href={"/favoritos"} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart size={20} />
                </Link>
                <Link href={"/user"} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <User size={20} />
                </Link>
                </div>
            </div>
            )}
        </div>
        </nav>
    )
}
