"use client"

import type React from "react"

import { useState } from "react"

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      {/* Mensaje de éxito */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3 animate-in slide-in-from-top duration-300">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-green-800">¡Cuenta creada exitosamente!</h3>
            <p className="text-sm text-green-600 mt-1">
              Tu cuenta ha sido registrada correctamente. Ya puedes iniciar sesión.
            </p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="flex-shrink-0 text-green-400 hover:text-green-600 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Crear cuenta nueva
        </h2>
        <p className="text-gray-500 text-lg">Únete a nuestra comunidad floral</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm text-green-600"
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
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm text-pink-600"
            />
          </div>
        </div>

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
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-lg bg-white bg-opacity-80 backdrop-blur-sm text-pink-600"
            />
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
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
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
  )
}
