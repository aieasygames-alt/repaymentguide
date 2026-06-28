export interface IdrPlan {
  id: string;
  name: string;
  fullName: string;
  monthlyPayment: string; // % of discretionary income
  paymentCap: string; // % of standard 10-year payment
  forgivenessYears: string;
  marriedFiling: 'separate' | 'joint';
  eligibility: string[];
  pros: string[];
  cons: string[];
}

export const idrPlans: IdrPlan[] = [
  {
    id: 'save',
    name: 'SAVE',
    fullName: 'Saving on a Valuable Education',
    monthlyPayment: '5% of discretionary income (undergrad), 10% (grad)',
    paymentCap: 'None (undergrad), 100% of standard (grad)',
    forgivenessYears: '10 (undergrad), 20 (grad) or 25 if grad + undergrad',
    marriedFiling: 'separate',
    eligibility: [
      'Any federal student loan borrower',
      'No income requirement',
      'No loan date requirement',
    ],
    pros: [
      'Lowest monthly payments (5% for undergrad loans)',
      '100% unpaid interest subsidy',
      'Forgiveness after 10-20 years',
      'Spouse income excluded if filing separately',
    ],
    cons: [
      'Currently blocked by court orders (as of 2024)',
      'Capitalization if you leave the plan',
      'Graduate loans have 10% payment rate',
    ],
  },
  {
    id: 'paye',
    name: 'PAYE',
    fullName: 'Pay As You Earn',
    monthlyPayment: '10% of discretionary income',
    paymentCap: '10% of standard 10-year payment',
    forgivenessYears: '20',
    marriedFiling: 'separate',
    eligibility: [
      'First loan disbursement after October 1, 2007',
      'Received a disbursement after October 1, 2011',
      'Partial financial hardship required',
    ],
    pros: [
      '10% of discretionary income',
      'Payment cap protects high earners',
      'No interest capitalization if staying in plan',
      'Forgiveness after 20 years',
    ],
    cons: [
      'Stricter eligibility requirements',
      'Newer borrowers only',
      'Spouse income counted if filing jointly',
    ],
  },
  {
    id: 'ibr',
    name: 'IBR',
    fullName: 'Income-Based Repayment',
    monthlyPayment: '10% of discretionary income (new) or 15% (old)',
    paymentCap: '15% of standard 10-year payment',
    forgivenessYears: '20 (new) or 25 (old)',
    marriedFiling: 'separate',
    eligibility: [
      'Any federal student loan borrower',
      'Partial financial hardship required',
      'No loan date requirement',
    ],
    pros: [
      'Available to all borrowers',
      'Payment cap protects high earners',
      'Spouse income excluded if filing separately',
      'Good for borrowers with older loans',
    ],
    cons: [
      'Higher payment percentage (10-15%)',
      'Interest capitalization occurs',
      'Longer forgiveness term for some (25 years)',
    ],
  },
  {
    id: 'icr',
    name: 'ICR',
    fullName: 'Income-Contingent Repayment',
    monthlyPayment: '20% of discretionary income OR fixed amount over 12 years',
    paymentCap: 'None',
    forgivenessYears: '25',
    marriedFiling: 'joint',
    eligibility: [
      'Any federal student loan borrower',
      'Parent PLUS loans (after consolidation)',
      'No income requirement',
    ],
    pros: [
      'Only option for Parent PLUS loans',
      'No income requirement',
      'Always available',
    ],
    cons: [
      'Highest payment percentage (20%)',
      'Always counts spouse income',
      'Longest forgiveness term (25 years)',
    ],
  },
];

/**
 * Federal Poverty Line (2024, contiguous US)
 */
export const federalPovertyLine2024: Record<string, number> = {
  '1': 15180,
  '2': 20580,
  '3': 25920,
  '4': 31280,
  '5': 36640,
  '6': 42000,
  '7': 47360,
  '8': 52720,
};

export function getPovertyLine(householdSize: number): number {
  if (householdSize <= 8) {
    return federalPovertyLine2024[String(householdSize)] || federalPovertyLine2024['1'];
  }
  return federalPovertyLine2024['8'] + (householdSize - 8) * 5360;
}

/**
 * Calculate discretionary income
 * SAVE: AGI - 225% of poverty line
 * Others: AGI - 150% of poverty line
 */
export function calculateDiscretionaryIncome(
  agi: number,
  householdSize: number,
  planType: 'save' | 'paye' | 'ibr' | 'icr'
): number {
  const multiplier = planType === 'save' ? 2.25 : 1.5;
  const povertyLine = getPovertyLine(householdSize);
  const threshold = povertyLine * multiplier;
  return Math.max(0, agi - threshold);
}

/**
 * Estimate IDR monthly payment
 */
export function calculateIdrPayment(
  agi: number,
  householdSize: number,
  planType: 'save' | 'paye' | 'ibr' | 'icr'
): {
  monthlyPayment: number;
  annualPayment: number;
  discretionaryIncome: number;
} {
  const discretionaryIncome = calculateDiscretionaryIncome(agi, householdSize, planType);

  let paymentPercentage = 0.1; // 10% default
  if (planType === 'save') {
    paymentPercentage = 0.05; // 5% for undergrad
  } else if (planType === 'icr') {
    paymentPercentage = 0.2; // 20%
  }

  const annualPayment = discretionaryIncome * paymentPercentage;
  const monthlyPayment = Math.max(0, annualPayment / 12);

  return {
    monthlyPayment: Math.round(monthlyPayment),
    annualPayment: Math.round(annualPayment),
    discretionaryIncome: Math.round(discretionaryIncome),
  };
}
