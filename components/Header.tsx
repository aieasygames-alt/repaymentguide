'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getCurrentUser, signOut } from '@/lib/auth';

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then(setUser).finally(() => setLoading(false));
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-700">
            RepaymentGuide
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
            <Link href="/blog" className="text-gray-700 hover:text-primary-600">
              Blog
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-primary-600">
              Dashboard
            </Link>
            {!loading && (
              user ? (
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-primary-600"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/dashboard"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  Sign In
                </Link>
              )
            )}
          </div>

          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
