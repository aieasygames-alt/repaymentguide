'use client';

import { useState } from 'react';
import { saveCalculation } from '@/lib/calculations';
import { getCurrentUser } from '@/lib/auth';

interface SaveCalculationButtonProps {
  calculationType: 'payment' | 'idr' | 'pslf';
  inputs: any;
  results: any;
}

export default function SaveCalculationButton({
  calculationType,
  inputs,
  results,
}: SaveCalculationButtonProps) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setError(null);

    try {
      const user = await getCurrentUser();
      if (!user) {
        setError('Please sign in to save your calculations');
        return;
      }

      await saveCalculation({
        calculation_type: calculationType,
        inputs,
        results,
      });

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleSave}
        disabled={saving || saved}
        className={`w-full py-3 rounded-lg font-semibold transition ${
          saved
            ? 'bg-green-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {saving ? 'Saving...' : saved ? '✓ Saved!' : 'Save Calculation'}
      </button>
      {error && (
        <p className="text-sm text-red-600 mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
