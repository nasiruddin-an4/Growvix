import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Thank You",
  description: "Thank you for contacting Growvix. We'll get back to you soon.",
};

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8">
          Your message has been sent successfully. We'll get back to you within
          24 hours.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-brand-purple px-6 py-3 text-white font-semibold hover:bg-brand-purple-dark transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
