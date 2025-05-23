"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
    User,
    Package,
    MapPin,
    CreditCard,
    Settings,
    LogOut,
    ChevronRight,
    Edit,
    ShoppingBag,
    Trash2,
} from "lucide-react"
import NavbarComponent from "@/components/navbar"
import FooterComponent from "@/components/footer"

// Variantes de animación
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

// Datos de ejemplo para el perfil
const userProfile = {
    name: "María García",
    email: "maria.garcia@ejemplo.com",
    phone: "+52 123 456 7890",
    avatar: "/placeholder.svg?height=200&width=200",
    memberSince: "Enero 2023",
}

// Datos de ejemplo para pedidos recientes
const recentOrders = [
    {
        id: "ORD-2023-001",
        date: "15 Mayo, 2023",
        total: 156.99,
        status: "Entregado",
        items: 3,
    },
    {
        id: "ORD-2023-002",
        date: "28 Junio, 2023",
        total: 89.5,
        status: "En camino",
        items: 2,
    },
    {
        id: "ORD-2023-003",
        date: "10 Julio, 2023",
        total: 210.75,
        status: "Procesando",
        items: 4,
    },
]

// Datos de ejemplo para direcciones
const addresses = [
    {
        id: 1,
        type: "Casa",
        address: "Calle Flores 123, Col. Jardines, Ciudad de México, CP 12345",
        isDefault: true,
    },
    {
        id: 2,
        type: "Oficina",
        address: "Av. Reforma 456, Piso 8, Col. Centro, Ciudad de México, CP 06000",
        isDefault: false,
    },
]

// Componente para la página de perfil
export default function UserProfilePage() {
    const [activeTab, setActiveTab] = useState("perfil")

    // Función para renderizar el contenido según la pestaña activa
    const renderTabContent = () => {
        switch (activeTab) {
            case "perfil":
                return <ProfileTab />
            case "pedidos":
                return <OrdersTab />
            case "direcciones":
                return <AddressesTab />
            case "metodos-pago":
                return <PaymentMethodsTab />
            case "configuracion":
                return <SettingsTab />
            default:
                return <ProfileTab />
        }
    }

    return (
        <>
            <NavbarComponent />
            <main className="min-h-screen bg-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Mi Cuenta</h1>
                            <p className="text-gray-600 mt-2">Gestiona tu perfil, pedidos y preferencias</p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Sidebar de navegación */}
                            <motion.div variants={itemVariants} className="lg:col-span-1">
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="p-6 border-b border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-800">{userProfile.name}</h3>
                                                <p className="text-gray-500 text-sm">{userProfile.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <nav className="p-2">
                                        <ul className="space-y-1">
                                            <li>
                                                <button
                                                    onClick={() => setActiveTab("perfil")}
                                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "perfil" ? "bg-[#ff9ebb] text-white" : "text-gray-700 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <User size={18} className="mr-3" />
                                                    <span>Perfil</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => setActiveTab("pedidos")}
                                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "pedidos" ? "bg-[#ff9ebb] text-white" : "text-gray-700 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <Package size={18} className="mr-3" />
                                                    <span>Mis Pedidos</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => setActiveTab("direcciones")}
                                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "direcciones" ? "bg-[#ff9ebb] text-white" : "text-gray-700 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <MapPin size={18} className="mr-3" />
                                                    <span>Direcciones</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => setActiveTab("metodos-pago")}
                                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "metodos-pago" ? "bg-[#ff9ebb] text-white" : "text-gray-700 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <CreditCard size={18} className="mr-3" />
                                                    <span>Métodos de Pago</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => setActiveTab("configuracion")}
                                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "configuracion" ? "bg-[#ff9ebb] text-white" : "text-gray-700 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <Settings size={18} className="mr-3" />
                                                    <span>Configuración</span>
                                                </button>
                                            </li>
                                            <li className="border-t border-gray-100 mt-2 pt-2">
                                                <button className="w-full text-left px-4 py-3 rounded-lg flex items-center text-red-500 hover:bg-red-50">
                                                    <LogOut size={18} className="mr-3" />
                                                    <span>Cerrar Sesión</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </motion.div>

                            {/* Contenido principal */}
                            <motion.div
                                variants={itemVariants}
                                className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                            >
                                {renderTabContent()}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <FooterComponent />
        </>
    )
}

// Componente para la pestaña de perfil
function ProfileTab() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Información Personal</h2>
                <button className="text-[#ff9ebb] hover:text-[#b9375e] transition-colors flex items-center">
                    <Edit size={16} className="mr-1" />
                    Editar
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Nombre Completo</label>
                            <p className="text-gray-800">{userProfile.name}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Correo Electrónico</label>
                            <p className="text-gray-800">{userProfile.email}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Teléfono</label>
                            <p className="text-gray-800">{userProfile.phone}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Miembro desde</label>
                            <p className="text-gray-800">{userProfile.memberSince}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#b9375e] mb-4">
                        <Image
                            src={"/user.jpg"}
                            alt={userProfile.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Preferencias de Comunicación</h3>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="newsletter"
                            className="w-4 h-4 text-[#679436] border-gray-300 rounded focus:ring-[#679436]"
                            defaultChecked
                        />
                        <label htmlFor="newsletter" className="ml-2 text-gray-700">
                            Recibir boletín con ofertas y novedades
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="order-updates"
                            className="w-4 h-4 text-[#679436] border-gray-300 rounded focus:ring-[#679436]"
                            defaultChecked
                        />
                        <label htmlFor="order-updates" className="ml-2 text-gray-700">
                            Recibir actualizaciones de pedidos por SMS
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="special-offers"
                            className="w-4 h-4 text-[#679436] border-gray-300 rounded focus:ring-[#679436]"
                            defaultChecked
                        />
                        <label htmlFor="special-offers" className="ml-2 text-gray-700">
                            Recibir ofertas especiales y promociones
                        </label>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// Componente para la pestaña de pedidos
function OrdersTab() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Mis Pedidos</h2>
                <Link href="/pedidos" className="text-[#679436] hover:text-[#5a8230] transition-colors flex items-center">
                    Ver todos
                    <ChevronRight size={16} className="ml-1" />
                </Link>
            </div>

            {recentOrders.length > 0 ? (
                <div className="space-y-4">
                    {recentOrders.map((order, index) => (
                        <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div>
                                    <div className="flex items-center mb-2">
                                        <h3 className="font-semibold text-gray-800">{order.id}</h3>
                                        <span
                                            className={`ml-3 px-2 py-1 text-xs rounded-full ${order.status === "Entregado"
                                                    ? "bg-green-100 text-green-800"
                                                    : order.status === "En camino"
                                                        ? "bg-blue-100 text-blue-800"
                                                        : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        {order.date} • {order.items} {order.items === 1 ? "producto" : "productos"}
                                    </p>
                                </div>
                                <div className="mt-3 md:mt-0 flex items-center">
                                    <span className="font-bold text-[#679436]">${order.total.toFixed(2)}</span>
                                    <Link
                                        href={`/pedidos/${order.id}`}
                                        className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm transition-colors"
                                    >
                                        Ver detalles
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No tienes pedidos aún</h3>
                    <p className="text-gray-600 mb-6">Cuando realices un pedido, aparecerá aquí.</p>
                    <Link
                        href="/"
                        className="bg-[#679436] hover:bg-[#5a8230] text-white px-6 py-2 rounded-full transition-colors inline-block"
                    >
                        Explorar productos
                    </Link>
                </div>
            )}
        </motion.div>
    )
}

// Componente para la pestaña de direcciones
function AddressesTab() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Mis Direcciones</h2>
                <button className="bg-[#679436] hover:bg-[#5a8230] text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center">
                    <Plus size={16} className="mr-1" />
                    Añadir dirección
                </button>
            </div>

            {addresses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map((address, index) => (
                        <motion.div
                            key={address.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow relative"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-gray-800 flex items-center">
                                    {address.type}
                                    {address.isDefault && (
                                        <span className="ml-2 bg-[#679436]/10 text-[#679436] text-xs px-2 py-1 rounded-full">
                                            Predeterminada
                                        </span>
                                    )}
                                </h3>
                                <div className="flex space-x-2">
                                    <button className="text-gray-500 hover:text-[#679436] transition-colors">
                                        <Edit size={16} />
                                    </button>
                                    <button className="text-gray-500 hover:text-red-500 transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">{address.address}</p>
                            {!address.isDefault && (
                                <button className="mt-3 text-[#679436] hover:text-[#5a8230] text-sm transition-colors">
                                    Establecer como predeterminada
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No tienes direcciones guardadas</h3>
                    <p className="text-gray-600 mb-6">Añade una dirección para agilizar tus compras.</p>
                    <button className="bg-[#679436] hover:bg-[#5a8230] text-white px-6 py-2 rounded-full transition-colors inline-flex items-center">
                        <Plus size={16} className="mr-1" />
                        Añadir dirección
                    </button>
                </div>
            )}
        </motion.div>
    )
}

// Componente para la pestaña de métodos de pago
function PaymentMethodsTab() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Métodos de Pago</h2>
                <button className="bg-[#679436] hover:bg-[#5a8230] text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center">
                    <Plus size={16} className="mr-1" />
                    Añadir método de pago
                </button>
            </div>

            <div className="text-center py-10">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No tienes métodos de pago guardados</h3>
                <p className="text-gray-600 mb-6">Añade un método de pago para agilizar tus compras.</p>
                <button className="bg-[#679436] hover:bg-[#5a8230] text-white px-6 py-2 rounded-full transition-colors inline-flex items-center">
                    <Plus size={16} className="mr-1" />
                    Añadir método de pago
                </button>
            </div>
        </motion.div>
    )
}

// Componente para la pestaña de configuración
function SettingsTab() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Configuración de la Cuenta</h2>
            </div>

            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Cambiar Contraseña</h3>
                    <div className="space-y-4 max-w-md">
                        <div>
                            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                                Contraseña Actual
                            </label>
                            <input
                                type="password"
                                id="current-password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#679436] focus:border-[#679436]"
                            />
                        </div>
                        <div>
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                                Nueva Contraseña
                            </label>
                            <input
                                type="password"
                                id="new-password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#679436] focus:border-[#679436]"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirmar Nueva Contraseña
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#679436] focus:border-[#679436]"
                            />
                        </div>
                        <button className="bg-[#679436] hover:bg-[#5a8230] text-white px-6 py-2 rounded-lg transition-colors">
                            Actualizar Contraseña
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Notificaciones</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-800">Notificaciones por Email</p>
                                <p className="text-sm text-gray-500">Recibe actualizaciones sobre tus pedidos y ofertas</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#679436]"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-800">Notificaciones por SMS</p>
                                <p className="text-sm text-gray-500">Recibe alertas sobre el estado de tus pedidos</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#679436]"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-semibold text-red-600 mb-4">Zona de Peligro</h3>
                    <p className="text-gray-600 mb-4">
                        Una vez que elimines tu cuenta, todos tus datos serán eliminados permanentemente. Esta acción no se puede
                        deshacer.
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
                        Eliminar mi cuenta
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

// Componente Plus para el botón de añadir
function Plus({ size = 24, className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    )
}
