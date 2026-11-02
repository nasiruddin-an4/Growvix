import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Thank You",
  description: "Thank you for contacting Growvix. We'll get back to you soon.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas px-6 pt-24">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8">
          Your message has been sent successfully. We&apos;ll get back to you within
          24 hours.
        </p>
        <Link
          href="/"
          className="btn-signal h-12 px-6"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
