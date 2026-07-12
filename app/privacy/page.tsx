import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - RepaymentGuide',
  description: 'Privacy policy for RepaymentGuide.com',
  alternates: {
    canonical: '/privacy/',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose prose-lg">
            <p>Last updated: July 12, 2026</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>
            <p>
              RepaymentGuide collects information you provide directly to us, such as when you use our
              calculators or contact us. This may include loan balances, income information, and
              contact details.
            </p>
            <p>
              If you submit the contact form, we may collect your name, email address, selected topic,
              message, the page you submitted from, and basic anti-spam signals. Please do not send
              Social Security numbers, account numbers, Federal Student Aid login details, or other
              sensitive personal information through the contact form.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
            <p>
              We use your information to provide calculator results, improve our services, and respond
              to inquiries. We do not sell your personal data to third parties.
            </p>
            <p>
              Contact form submissions may be processed by email delivery, webhook, hosting, or spam
              prevention providers we configure to operate the site.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies and Analytics</h2>
            <p>
              We use Google Analytics to understand how visitors use our site. This helps us improve
              our content and user experience.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no
              method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p>If you have questions about this privacy policy, please contact us.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
