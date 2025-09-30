import type { Metadata } from "next";
import Link from "next/link";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
    title: "CashTrackr - Forgot my password",
    description: "CashTrackr - Forgot my password"
};

export default function ForgotPasswordPage() {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center text-center">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-purple-950">
                Forgot your password
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
                You can <span className="text-amber-500">reset it</span> here
            </p>

            <div className="w-full max-w-md mt-6">
                <ForgotPasswordForm />
            </div>

            <nav className="mt-10 flex flex-col space-y-4 w-full max-w-md">
                <Link
                    href='/auth/login'
                    className="text-center text-gray-500"
                >
                    Already have an account? Log in
                </Link>

                <Link
                    href='/auth/register'
                    className="text-center text-gray-500"
                >
                    Don't have an account? Sign up
                </Link>
            </nav>
        </div>
    );
}