"use client"

import { motion } from "framer-motion"
import SectionTitle from "./sectionTitle"
import ProductCard from "./productCard"


// Variantes de animación para las tarjetas
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export default function ArreglosSectionComponent() {
  const arreglos = [
    {
      id: 1,
      name: "Centro de Mesa Elegante",
      price: 85.0,
      image: "/placeholder.svg?height=400&width=400",
      description: "Arreglo floral para centro de mesa, perfecto para eventos especiales y celebraciones.",
      discount: 5,
    },
    {
      id: 2,
      name: "Canasta de Flores Mixtas",
      price: 78.5,
      image: "/placeholder.svg?height=400&width=400",
      description: "Canasta decorativa con variedad de flores frescas de temporada. Un regalo perfecto.",
    },
    {
      id: 3,
      name: "Arreglo Corporativo Premium",
      price: 95.0,
      image: "/placeholder.svg?height=400&width=400",
      description: "Arreglo formal para oficinas y eventos corporativos. Elegancia y profesionalismo en cada detalle.",
      isNew: true,
    },
    {
      id: 4,
      name: "Arreglo Tropical Exótico",
      price: 110.25,
      image: "/placeholder.svg?height=400&width=400",
      description: "Exótico arreglo con flores tropicales de colores vibrantes. Trae un toque de paraíso a tu espacio.",
    },
  ]

  return (
    <section>
      <SectionTitle title="Arreglos" id="arreglos" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {arreglos.map((arreglo, index) => (
          <motion.div
            key={arreglo.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <ProductCard
              name={arreglo.name}
              price={arreglo.price}
              image={arreglo.image}
              description={arreglo.description}
              isNew={arreglo.isNew}
              discount={arreglo.discount}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
