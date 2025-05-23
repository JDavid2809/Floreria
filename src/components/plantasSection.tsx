import ProductCard from "./productCard"
import SectionTitle from "./sectionTitle"


export default function PlantasSectionComponent() {
  const plantas = [
    {
      id: 1,
      name: "Planta de Interior Decorativa",
      price: 35.99,
      image: "/placeholder.svg?height=400&width=400",
      description: "Planta decorativa para interiores, fácil de cuidar y perfecta para purificar el aire de tu hogar.",
    },
    {
      id: 2,
      name: "Colección de Suculentas",
      price: 28.5,
      image: "/placeholder.svg?height=400&width=400",
      description: "Colección de suculentas en maceta decorativa. Ideales para espacios pequeños y oficinas.",
      isNew: true,
    },
    {
      id: 3,
      name: "Bonsái Decorativo Tradicional",
      price: 125.0,
      image: "/placeholder.svg?height=400&width=400",
      description: "Elegante bonsái para decoración de interiores o exteriores. Un toque de zen para tu espacio.",
      discount: 8,
    },
    {
      id: 4,
      name: "Planta de Jardín Perenne",
      price: 42.75,
      image: "/placeholder.svg?height=400&width=400",
      description: "Planta resistente ideal para jardines y exteriores. Florece año tras año con mínimo mantenimiento.",
    },
  ]

  return (
    <section>
      <SectionTitle title="Plantas" id="plantas" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plantas.map((planta) => (
          <ProductCard
            key={planta.id}
            name={planta.name}
            price={planta.price}
            image={planta.image}
            description={planta.description}
            isNew={planta.isNew}
            discount={planta.discount}
          />
        ))}
      </div>
    </section>
  )
}
