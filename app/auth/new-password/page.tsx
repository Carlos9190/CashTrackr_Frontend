import PasswordResetHandler from "@/components/auth/PasswordResetHandler";

export default function NewPasswordPage() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center text-center">
      <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-purple-950">
        Reestablecer Password
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
        Ingresa el código que recibiste
        <span className="text-amber-500"> por email</span>
      </p>
      <div className="w-full max-w-md mt-6">
        <PasswordResetHandler />
      </div>
    </div>
  );
}