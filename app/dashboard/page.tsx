import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dashboard from '@/components/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard - RepaymentGuide',
  description: 'View your saved calculations and account settings',
};

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Dashboard />
        </div>
      </main>
      <Footer />
    </>
  );
}
