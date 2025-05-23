interface SectionTitleProps {
    title: string
    id: string
}

export default function SectionTitle({ title, id }: SectionTitleProps) {
    return (
        <div id={id} className="mb-12 pt-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            {title}
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#b9375e] rounded-full"></span>
        </h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Descubre nuestra selección de {title.toLowerCase()} frescas y de la mejor calidad, cultivadas con cuidado para
            brindarte belleza natural.
        </p>
        </div>
    )
}
