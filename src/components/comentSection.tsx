import Image from "next/image"

export default function ComentSection() {
  const testimonials = [
    {
      id: 1,
      name: "María Rodríguez",
      role: "Cliente Frecuente",
      quote:
        "Los arreglos florales de Bella Rosa siempre superan mis expectativas. La frescura de sus flores y la creatividad en sus diseños es incomparable.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "Organizador de Eventos",
      quote:
        "Hemos trabajado con Bella Rosa en múltiples eventos y siempre entregan a tiempo y con la calidad prometida. Son nuestro proveedor de confianza.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Laura Sánchez",
      role: "Novia Satisfecha",
      quote:
        "Mi ramo de novia fue exactamente como lo soñé. El equipo entendió perfectamente mi visión y la hicieron realidad. ¡Totalmente recomendados!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          Lo Que Dicen Nuestros Clientes
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ff9ebb] rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-[#ff9ebb]">
                <Image
                  src={"/user.jpg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <svg className="w-10 h-10 text-[#ff9ebb]/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v6a6 6 0 01-6 6H8a4 4 0 104 4v1a5 5 0 01-5 5H6a6 6 0 01-6-6v-6a10 10 0 0110-10zm20 0v6a6 6 0 01-6 6h4a4 4 0 104 4v1a5 5 0 01-5 5h-1a6 6 0 01-6-6v-6a10 10 0 0110-10z"></path>
              </svg>

              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>

              <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
              <p className="text-[#ff9ebb]">{testimonial.role}</p>

              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
