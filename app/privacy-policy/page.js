export const metadata = {
  title: "Privacy Policy",
  description:
    "Growvix Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            contact us through our website forms.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries,
            provide our services, and improve our website.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at hello@growvix.com.
          </p>
        </div>
      </div>
    </div>
  );
}
