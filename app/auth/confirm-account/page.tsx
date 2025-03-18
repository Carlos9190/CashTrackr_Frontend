import ConfirmAccountForm from "@/components/auth/ConfirmAccountForm";

export default function ConfirmAccountPage() {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center text-center">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-purple-950">
                Confirma tu cuenta
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
                Ingresa el código que recibiste <span className="text-amber-500">por e-mail</span>
            </p>
            <div className="w-full max-w-md mt-6">
                <ConfirmAccountForm />
            </div>
        </div>
    );
}
