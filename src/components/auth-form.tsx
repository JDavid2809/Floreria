"use client"

import Image from "next/image"
import type React from "react"

import { useState, useEffect } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTab, setActiveTab] = useState("login")
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [isRegisterLoading, setIsRegisterLoading] = useState(false)

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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoginLoading(true)
    setTimeout(() => setIsLoginLoading(false), 2000)
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsRegisterLoading(true)
    setTimeout(() => setIsRegisterLoading(false), 2000)
  }

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
                src={`/placeholder.svg?height=900&width=800&text=${encodeURIComponent(slide.title)}`}
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

          {/* Controles del carrusel */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-md hover:bg-white hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-md hover:bg-white hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

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
          <div className="text-center mb-12">
            <div className="inline-block py-4 px-8 rounded-2xl backdrop-blur-md shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white bg-opacity-20 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-2 text-white">{slides[currentSlide].title}</h3>
              <p className="text-lg text-white text-opacity-90">{slides[currentSlide].subtitle}</p>
              <div className="mt-3 text-sm text-white text-opacity-75">Sistema de Administración</div>
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
          <div className="flex mb-8 bg-gray-50 rounded-2xl p-2 shadow-inner">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-pink-400 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white hover:bg-opacity-50"
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "register"
                  ? "bg-pink-400 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white hover:bg-opacity-50"
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Formulario de Login */}
          {activeTab === "login" && (
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  ¡Bienvenido de nuevo!
                </h2>
                <p className="text-gray-500 text-lg">Ingresa tus credenciales para continuar</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Correo Electrónico
                  </label>
                  <div className="relative group">
                    <svg
                      className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                    <input
                      id="email"
                      type="email"
                      placeholder="tu@correo.com"
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                      Contraseña
                    </label>
                    <button
                      type="button"
                      className="text-sm font-medium text-pink-400 hover:underline transition-all duration-300 hover:scale-105"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                  <div className="relative group">
                    <svg
                      className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <input
                      id="password"
                      type="password"
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-5 w-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-pink-400 transition-all accent-pink-400"
                  />
                  <label htmlFor="remember" className="ml-3 text-gray-700 font-medium">
                    Recordar mis datos
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoginLoading}
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  {isLoginLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Iniciando sesión...
                    </>
                  ) : (
                    <>
                      Iniciar Sesión
                      <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Formulario de Registro */}
          {activeTab === "register" && (
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Crear cuenta nueva
                </h2>
                <p className="text-gray-500 text-lg">Únete a nuestra comunidad floral</p>
              </div>

              <form onSubmit={handleRegisterSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Nombre Completo
                  </label>
                  <div className="relative group">
                    <svg
                      className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <input
                      id="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="register-email" className="block text-sm font-semibold text-gray-700">
                    Correo Electrónico
                  </label>
                  <div className="relative group">
                    <svg
                      className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                    <input
                      id="register-email"
                      type="email"
                      placeholder="tu@correo.com"
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="register-password" className="block text-sm font-semibold text-gray-700">
                      Contraseña
                    </label>
                    <div className="relative group">
                      <svg
                        className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <input
                        id="register-password"
                        type="password"
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-700">
                      Confirmar
                    </label>
                    <div className="relative group">
                      <svg
                        className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <input
                        id="confirm-password"
                        type="password"
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="h-5 w-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-pink-400 transition-all accent-pink-400"
                  />
                  <label htmlFor="terms" className="ml-3 text-gray-700 font-medium">
                    Acepto los{" "}
                    <button type="button" className="font-semibold text-pink-400 hover:underline">
                      términos y condiciones
                    </button>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isRegisterLoading}
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  {isRegisterLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creando cuenta...
                    </>
                  ) : (
                    <>
                      Crear Cuenta
                      <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

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
