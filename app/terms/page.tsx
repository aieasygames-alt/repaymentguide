import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - RepaymentGuide',
  description: 'Terms of service for RepaymentGuide.com',
  alternates: {
    canonical: '/terms/',
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <div className="prose prose-lg">
            <p>Last updated: June 2024</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Disclaimer</h2>
            <p>
              RepaymentGuide provides calculators and information for educational purposes only.
              Results are estimates and should not be considered financial advice. Consult with a
              financial professional or student loan servicer for personalized guidance.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Accuracy</h2>
            <p>
              While we strive to provide accurate information, student loan policies change
              frequently. We make no guarantees about the completeness or accuracy of any
              information on this site.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Use of Site</h2>
            <p>
              By using this site, you agree that RepaymentGuide shall not be liable for any
              decisions or actions taken based on the information provided.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">External Links</h2>
            <p>
              This site may contain links to external websites, including StudentAid.gov. We are not
              responsible for the content or policies of external sites.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
