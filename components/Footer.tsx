import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Calculators</h3>
            <ul className="space-y-2">
              <li><Link href="/student-loan-payment-calculator" className="text-gray-600 hover:text-primary-600">Payment Calculator</Link></li>
              <li><Link href="/save-plan-calculator" className="text-gray-600 hover:text-primary-600">SAVE Plan Calculator</Link></li>
              <li><Link href="/income-driven-repayment-calculator" className="text-gray-600 hover:text-primary-600">IDR Calculator</Link></li>
              <li><Link href="/pslf-calculator" className="text-gray-600 hover:text-primary-600">PSLF Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-600 hover:text-primary-600">Blog</Link></li>
              <li><Link href="/student-loan-changes-2026" className="text-gray-600 hover:text-primary-600">2026 Changes Guide</Link></li>
              <li><Link href="/news" className="text-gray-600 hover:text-primary-600">News & Updates</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary-600">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary-600">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <p className="text-gray-600 text-sm mb-2">
              Questions? <Link href="/contact" className="text-primary-600 hover:text-primary-700">Get in touch</Link>
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RepaymentGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
