'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="RepaymentGuide Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-primary-700">RepaymentGuide</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/student-loan-payment-calculator" className="text-gray-700 hover:text-primary-600">
              Payment Calculator
            </Link>
            <Link href="/save-plan-calculator" className="text-gray-700 hover:text-primary-600">
              SAVE Alternatives
            </Link>
            <Link href="/income-driven-repayment-calculator" className="text-gray-700 hover:text-primary-600">
              IDR Plans
            </Link>
            <Link href="/pslf-calculator" className="text-gray-700 hover:text-primary-600">
              PSLF Calculator
            </Link>
            <Link href="/student-loan-changes-2026" className="text-gray-700 hover:text-primary-600">
              2026 Changes
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600">
              Blog
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t mt-4">
            <Link href="/student-loan-payment-calculator" className="block text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
              Payment Calculator
            </Link>
            <Link href="/save-plan-calculator" className="block text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
              SAVE Alternatives
            </Link>
            <Link href="/income-driven-repayment-calculator" className="block text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
              IDR Plans
            </Link>
            <Link href="/pslf-calculator" className="block text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
              PSLF Calculator
            </Link>
            <Link href="/student-loan-changes-2026" className="block text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
              2026 Changes
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
