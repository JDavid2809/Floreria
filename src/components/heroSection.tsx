"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const carouselItems = [
  {
    id: 1,
    title: "Belleza Natural en Cada Flor",
    description:
      "Descubre nuestra colección de flores frescas, arreglos exclusivos y plantas decorativas para cada ocasión especial.",
    image: "/flor.jpg",
    buttonText: "Ver Catálogo",
    buttonLink: "#flores",
  },
  {
    id: 2,
    title: "Arreglos Florales Exclusivos",
    description: "Diseños únicos creados por nuestros expertos floristas para hacer de tu ocasión algo inolvidable.",
    image: "/flor2.jpg",
    buttonText: "Ver Arreglos",
    buttonLink: "#arreglos",
  },
  {
    id: 3,
    title: "Ramos para Cada Momento",
    description: "Expresiones florales que transmiten tus sentimientos en cualquier ocasión especial.",
    image: "/flor3.webp",
    buttonText: "Ver Ramos",
    buttonLink: "#ramos",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current) => (current === carouselItems.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? carouselItems.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Carrusel de imágenes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={carouselItems[current].image || "/placeholder.svg"}
            alt={carouselItems[current].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay de color */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff9ebb]/80 to-transparent z-20" />

      {/* Contenido */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              {carouselItems[current].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              {carouselItems[current].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={carouselItems[current].buttonLink}
                className="bg-white text-[#e05780] px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors flex items-center justify-center"
              >
                {carouselItems[current].buttonText} <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/contacto"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Contactar
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex items-center gap-6"
            >
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles de navegación */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 z-30">
        <button
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-white w-10" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => {
            next()
            setAutoplay(false)
          }}
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Decoración floral */}
      <div
        className="absolute bottom-0 right-0 w-full h-24 bg-white z-20"
        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
      ></div>
    </div>
  )
}
