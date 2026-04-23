export const metadata = {
  title: "Terms of Service",
  description:
    "Growvix Terms of Service - Please read these terms carefully before using our services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Growvix services, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>

          <h2>Services</h2>
          <p>
            Growvix provides digital agency services including web development,
            mobile app development, SaaS development, SEO, and digital
            marketing.
          </p>

          <h2>User Responsibilities</h2>
          <p>
            You agree to provide accurate information and use our services in
            compliance with applicable laws and regulations.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services are owned
            by Growvix and are protected by copyright, trademark, and other
            intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Growvix shall not be liable for any indirect, incidental, special,
            or consequential damages arising out of or in connection with the
            use of our services.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at
            hello@growvix.com.
          </p>
        </div>
      </div>
    </div>
  );
}
