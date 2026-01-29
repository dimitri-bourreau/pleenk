import Link from "next/link";

interface ResultPageProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function PaymentResult({ searchParams }: ResultPageProps) {
  const { status } = await searchParams;
  const success = status === "success";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="text-8xl">{success ? "✅" : "❌"}</span>
        <h1 className="text-2xl font-bold text-gray-800">
          {success ? "Paiement réussi !" : "Paiement échoué"}
        </h1>
        <p className="text-sm text-gray-500">
          {success
            ? "Merci pour votre achat."
            : "Une erreur est survenue. Veuillez réessayer."}
        </p>
        <Link
          href="/"
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white shadow-md transition-all hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg"
        >
          Retour à la boutique
        </Link>
      </div>
    </div>
  );
}
