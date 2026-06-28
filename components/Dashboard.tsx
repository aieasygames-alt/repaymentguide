'use client';

import { useState, useEffect } from 'react';
import { getCurrentUser, signOut, onAuthStateChange, signInWithGoogle } from '@/lib/auth';
import { getCalculations, deleteCalculation } from '@/lib/calculations';
import type { Database } from '@/lib/supabase';

type Calculation = Database['public']['Tables']['calculations']['Row'];

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [calculations, setCalculations] = useState<Calculation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial auth state
    getCurrentUser().then(setUser).finally(() => setLoading(false));

    // Listen for auth changes
    const subscription = onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        loadCalculations();
      } else {
        setCalculations([]);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadCalculations = async () => {
    try {
      const data = await getCalculations();
      setCalculations(data);
    } catch (error) {
      console.error('Failed to load calculations:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteCalculation(id);
      setCalculations(calcs => calcs.filter(c => c.id !== id));
    } catch (error) {
      console.error('Failed to delete calculation:', error);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    setCalculations([]);
  };

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Failed to sign in:', error);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCalculationTypeLabel = (type: string) => {
    const labels = {
      'payment': 'Payment Calculator',
      'idr': 'IDR Comparison',
      'pslf': 'PSLF Calculator',
    };
    return labels[type as keyof typeof labels] || type;
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-6">Sign In Required</h1>
        <p className="text-gray-600 mb-8">
          Sign in to save your calculations and track your progress.
        </p>
        <button
          onClick={handleSignIn}
          className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Sign In with Google
        </button>
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
          <p className="font-semibold mb-2">Note: Supabase Setup Required</p>
          <p>To enable authentication, configure your Supabase project in the .env.local file:</p>
          <ul className="mt-2 text-left list-disc list-inside">
            <li>NEXT_PUBLIC_SUPABASE_URL</li>
            <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
            <li>Enable Google OAuth in Supabase Dashboard</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="text-gray-600 hover:text-gray-900"
        >
          Sign Out
        </button>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Account</h2>
        <p className="text-gray-600">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-600 text-sm mt-1">
          <strong>Member since:</strong> {new Date(user.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Saved Calculations</h2>
        {calculations.length === 0 ? (
          <p className="text-gray-500">No saved calculations yet. Use our calculators to get started!</p>
        ) : (
          <div className="space-y-4">
            {calculations.map((calc) => (
              <div key={calc.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">
                      {getCalculationTypeLabel(calc.calculation_type)}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(calc.created_at).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(calc.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Delete
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <details className="bg-gray-50 p-3 rounded">
                    <summary className="cursor-pointer font-medium">View Details</summary>
                    <pre className="mt-2 overflow-x-auto text-xs">
                      {JSON.stringify(calc.results, null, 2)}
                    </pre>
                  </details>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Calculations are saved securely</strong> in your Supabase account.
          Sign in across devices to access your saved calculations.
        </p>
      </div>
    </div>
  );
}
