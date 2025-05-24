"use client"

import { useState, useEffect } from "react"
import LoginForm from "@/components/Login/login-form"
import RegisterForm from "@/components/Registro/register-form"
import Image from "next/image"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTab, setActiveTab] = useState("login")

  // Datos del carrusel
  const slides = [
    { title: "Arreglos Elegantes", subtitle: "Para ocasiones especiales" },
    { title: "Ramos Frescos", subtitle: "Directo del jardín" },
    { title: "Flores de Temporada", subtitle: "Siempre frescas" },
    { title: "Eventos Únicos", subtitle: "Decoración personalizada" },
  ]

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex flex-col lg:flex-row">
      {/* Panel izquierdo con carrusel */}
      <div className="hidden lg:block lg:w-3/5 relative overflow-hidden">
        {/* Carrusel con gradiente de fondo */}
        <div className="relative h-full w-full bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <Image
              width={800}
              height={900}
                src={"/flor.jpg"}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 158, 187, 0.6) 0%, rgba(236, 72, 153, 0.4) 50%, rgba(219, 39, 119, 0.6) 100%)`,
                }}
              ></div>
            </div>
          ))}

        

          {/* Indicadores del carrusel */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col justify-between p-12 text-white z-10">
          {/* Logo y título */}
          <div className="text-center mt-12">
            <div className="inline-block p-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-full mb-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <svg className="h-16 w-16 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h1 className="text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-2xl">Florería Bella</h1>
            <p className="text-xl max-w-md mx-auto leading-relaxed text-white drop-shadow-lg">
              Donde cada pétalo cuenta una historia de amor y belleza
            </p>
          </div>

          {/* Información del slide actual */}
          <div className="text-center mb-12  ">
            <div className="inline-block py-4 px-8 rounded-2xl backdrop-blur-md shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white bg-opacity-20 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-2 text-pink-300">{slides[currentSlide].title}</h3>
              <p className="text-lg text-pink-300 text-opacity-90">{slides[currentSlide].subtitle}</p>
              <div className="mt-3 text-sm text-pink-300 text-opacity-75">Sistema de Administración</div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel derecho con formularios */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-lg">
          {/* Logo móvil */}
          <div className="lg:hidden flex items-center justify-center mb-10">
            <div className="p-3 rounded-full shadow-lg bg-pink-400">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold ml-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Florería Bella
            </h1>
          </div>

          {/* Pestañas */}
          <div className="flex mb-10 bg-gray-100 rounded-2xl p-1 shadow-inner">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-4 px-8 mx-1 rounded-xl text-sm font-bold transition-all duration-500 transform ${
                activeTab === "login"
                  ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xl scale-105 -translate-y-1"
                  : "text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-60 hover:shadow-md hover:scale-102"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Iniciar Sesión</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-4 px-8 mx-1 rounded-xl text-sm font-bold transition-all duration-500 transform ${
                activeTab === "register"
                  ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xl scale-105 -translate-y-1"
                  : "text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-60 hover:shadow-md hover:scale-102"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                <span>Registrarse</span>
              </div>
            </button>
          </div>

          {/* Renderizar formularios según la pestaña activa */}
          {activeTab === "login" && <LoginForm />}
          {activeTab === "register" && <RegisterForm />}

          {/* Footer */}
          <div className="pt-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <svg className="h-6 w-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Florería Bella © 2025
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Creando momentos únicos con flores</p>
          </div>
        </div>
      </div>
    </div>
  )
}
