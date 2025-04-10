import type { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
    title: "CashTrackr - Crear cuenta",
    description: "CashTrackr - Crear cuenta"
};

export default function RegisterPage() {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-purple-950">
                Crea una cuenta
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
                y controla tus <span className="text-amber-500">finanzas</span>
            </p>

            <div className="w-full max-w-md mt-6">
                <RegisterForm />
            </div>

            <nav className="mt-10 flex flex-col space-y-4 w-full max-w-md">
                <Link
                    href='/auth/login'
                    className="text-center text-gray-500"
                >Ya tienes cuenta? Inicia sesión</Link>

                <Link
                    href='/auth/forgot-password'
                    className="text-center text-gray-500"
                >Olvidaste tu contraseña? Reestablecer</Link>
            </nav>
        </div>
    );
}
