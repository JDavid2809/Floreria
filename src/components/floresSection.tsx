import ProductCard from "./productCard"
import SectionTitle from "./sectionTitle"

export default function FloresSectionComponent() {
    const flores = [
        {
        id: 1,
        name: "Rosa Roja Premium",
        price: 25.99,
        image: "/placeholder.svg?height=400&width=400",
        description:
            "Elegante rosa roja de tallo largo, símbolo de amor y pasión. Cultivada en nuestros invernaderos especiales.",
        isNew: true,
        },
        {
        id: 2,
        name: "Tulipán Holandés",
        price: 18.5,
        image: "/placeholder.svg?height=400&width=400",
        description:
            "Tulipán importado de Holanda, disponible en varios colores. Perfecto para decorar cualquier espacio.",
        discount: 15,
        },
        {
        id: 3,
        name: "Girasol Grande",
        price: 15.99,
        image: "/placeholder.svg?height=400&width=400",
        description: "Girasol de gran tamaño, perfecto para alegrar cualquier espacio. Cultivado con técnicas orgánicas.",
        },
        {
        id: 4,
        name: "Orquídea Blanca",
        price: 45.0,
        image: "/placeholder.svg?height=400&width=400",
        description: "Delicada orquídea blanca, símbolo de pureza y elegancia. Ideal para regalos especiales.",
        isNew: true,
        },
    ]

    return (
        <section>
        <SectionTitle title="Flores" id="flores" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {flores.map((flor) => (
            <ProductCard
                key={flor.id}
                name={flor.name}
                price={flor.price}
                image={flor.image}
                description={flor.description}
                isNew={flor.isNew}
                discount={flor.discount}
            />
            ))}
        </div>
        </section>
    )
}
