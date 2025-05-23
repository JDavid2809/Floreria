import ProductCard from "./productCard"
import SectionTitle from "./sectionTitle"


export default function RamosSectionComponent() {
    const ramos = [
        {
        id: 1,
        name: "Ramo Primaveral Deluxe",
        price: 65.99,
        image: "/placeholder.svg?height=400&width=400",
        description: "Colorido ramo con flores de temporada, ideal para regalar en ocasiones especiales.",
        isNew: true,
        },
        {
        id: 2,
        name: "Ramo de Novia Elegance",
        price: 120.0,
        image: "/placeholder.svg?height=400&width=400",
        description:
            "Elegante ramo de novia con rosas blancas y follaje delicado. Diseñado por nuestros floristas expertos.",
        },
        {
        id: 3,
        name: "Ramo de Rosas Mixtas",
        price: 55.5,
        image: "/placeholder.svg?height=400&width=400",
        description:
            "Hermoso ramo con rosas de diferentes colores y tonalidades. Perfecto para expresar tus sentimientos.",
        discount: 10,
        },
        {
        id: 4,
        name: "Ramo Campestre Silvestre",
        price: 48.75,
        image: "/placeholder.svg?height=400&width=400",
        description: "Ramo con flores silvestres y campestres de temporada. Un toque natural para tu hogar.",
        },
    ]

    return (
        <section>
        <SectionTitle title="Ramos" id="ramos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ramos.map((ramo) => (
            <ProductCard
                key={ramo.id}
                name={ramo.name}
                price={ramo.price}
                image={ramo.image}
                description={ramo.description}
                isNew={ramo.isNew}
                discount={ramo.discount}
            />
            ))}
        </div>
        </section>
    )
}
