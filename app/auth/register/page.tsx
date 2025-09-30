import type { Metadata } from "next"
import Link from "next/link"
import RegisterForm from "@/components/auth/RegisterForm"

export const metadata: Metadata = {
    title: "CashTrackr - Create Account",
    description: "CashTrackr - Create Account"
};

export default function RegisterPage() {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-purple-950">
                Create an account
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
                and take control of your <span className="text-amber-500">finances</span>
            </p>

            <div className="w-full max-w-md mt-6">
                <RegisterForm />
            </div>

            <nav className="mt-10 flex flex-col space-y-4 w-full max-w-md">
                <Link
                    href='/auth/login'
                    className="text-center text-gray-500"
                >
                    Already have an account? Log in
                </Link>

                <Link
                    href='/auth/forgot-password'
                    className="text-center text-gray-500"
                >
                    Forgot your password? Reset it
                </Link>
            </nav>
        </div>
    );
}