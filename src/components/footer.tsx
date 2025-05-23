import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Clock, CreditCard, Truck } from "lucide-react"

export default function FooterComponent() {
  return (
    <footer className="bg-gradient-to-br from-[#ff9ebb] to-[#b9375e] text-white mt-16">
      <div className="container mx-auto px-4">
        {/* Información de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-white/20">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="font-bold">Envío Gratuito</h4>
              <p className="text-sm text-white/80">En pedidos mayores a $500</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold">Entrega el Mismo Día</h4>
              <p className="text-sm text-white/80">En pedidos antes de las 2 PM</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <CreditCard size={24} />
            </div>
            <div>
              <h4 className="font-bold">Pago Seguro</h4>
              <p className="text-sm text-white/80">Múltiples métodos de pago</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Florería Bella Rosa</h3>
            <p className="mb-6 text-white/80 leading-relaxed">
              Ofrecemos las flores más frescas y arreglos florales para todas las ocasiones. Nuestro compromiso es
              brindar belleza natural y calidad en cada detalle.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#flores" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Flores
                </Link>
              </li>
              <li>
                <Link href="#ramos" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Ramos
                </Link>
              </li>
              <li>
                <Link href="#arreglos" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Arreglos
                </Link>
              </li>
              <li>
                <Link href="#plantas" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Plantas
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Ayuda & Soporte</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Política de Envíos
                </Link>
              </li>
              <li>
                <Link
                  href="/devoluciones"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>Av. de las Flores 123, Ciudad Jardín, CP 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span>+52 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span>info@bellarosa.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 flex-shrink-0" />
                <div>
                    <span className="block">Lunes a Viernes: 9 AM - 6 PM</span>
                    <span className="block">Sábados: 10 AM - 4 PM</span>
                    <span className="block">Domingos: Cerrado</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 py-6 text-center">
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} Florería Bella Rosa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
