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
              <li><Link href="/rap-payment-calculator" className="text-gray-600 hover:text-primary-600">RAP Payment Calculator</Link></li>
              <li><Link href="/save-plan-calculator" className="text-gray-600 hover:text-primary-600">SAVE Plan Calculator</Link></li>
              <li><Link href="/income-driven-repayment-calculator" className="text-gray-600 hover:text-primary-600">IDR Calculator</Link></li>
              <li><Link href="/income-based-repayment-calculator" className="text-gray-600 hover:text-primary-600">IBR Calculator</Link></li>
              <li><Link href="/idr-payment-estimator" className="text-gray-600 hover:text-primary-600">IDR Payment Estimator</Link></li>
              <li><Link href="/student-loan-idr-payment-calculator" className="text-gray-600 hover:text-primary-600">Student Loan IDR Calculator</Link></li>
              <li><Link href="/pslf-calculator" className="text-gray-600 hover:text-primary-600">PSLF Calculator</Link></li>
              <li><Link href="/save-90-day-deadline-calculator" className="text-gray-600 hover:text-primary-600">SAVE Deadline Tool</Link></li>
              <li><Link href="/repayment-plan-recommendation" className="text-gray-600 hover:text-primary-600">Plan Recommendation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-600 hover:text-primary-600">Blog</Link></li>
              <li><Link href="/student-loan-changes-2026" className="text-gray-600 hover:text-primary-600">2026 Changes Guide</Link></li>
              <li><Link href="/student-loan-scenarios" className="text-gray-600 hover:text-primary-600">Borrower Scenarios</Link></li>
              <li><Link href="/student-loan-payment-increase" className="text-gray-600 hover:text-primary-600">Payment Increase Guide</Link></li>
              <li><Link href="/servicer-contact-toolkit" className="text-gray-600 hover:text-primary-600">Servicer Toolkit</Link></li>
              <li><Link href="/student-loan-servicer-complaint" className="text-gray-600 hover:text-primary-600">Servicer Complaint Guide</Link></li>
              <li><Link href="/save-ending-what-should-i-do" className="text-gray-600 hover:text-primary-600">SAVE Next Steps</Link></li>
              <li><Link href="/student-loan-faq" className="text-gray-600 hover:text-primary-600">Student Loan FAQ</Link></li>
              <li><Link href="/rap-vs-save-calculator" className="text-gray-600 hover:text-primary-600">RAP vs SAVE</Link></li>
              <li><Link href="/ibr-vs-rap" className="text-gray-600 hover:text-primary-600">IBR vs RAP</Link></li>
              <li><Link href="/pslf-rap-qualifying-payments" className="text-gray-600 hover:text-primary-600">RAP and PSLF</Link></li>
              <li><Link href="/student-loan-default-rehabilitation-2026" className="text-gray-600 hover:text-primary-600">Default Rehabilitation 2026</Link></li>
              <li><Link href="/parent-plus-rap-eligibility" className="text-gray-600 hover:text-primary-600">Parent PLUS Checker</Link></li>
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
