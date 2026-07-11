export type IdrPlanId = 'rap' | 'save' | 'paye' | 'ibr' | 'icr';

export interface IdrPlan {
  id: IdrPlanId;
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
    id: 'rap',
    name: 'RAP',
    fullName: 'Repayment Assistance Plan',
    monthlyPayment: '1-10% of AGI, reduced by $50 per dependent',
    paymentCap: 'None',
    forgivenessYears: '30',
    marriedFiling: 'separate',
    eligibility: [
      'Direct Loan borrowers with eligible loan types',
      'Direct PLUS loans for graduate or professional students',
      'Direct Consolidation loans that do not include Parent PLUS loans',
    ],
    pros: [
      'Available beginning July 1, 2026',
      'Unpaid monthly interest subsidy after full, on-time payments',
      'Matching principal payment up to $50 when needed',
      'Counts toward PSLF if all other PSLF rules are met',
    ],
    cons: [
      '30-year forgiveness timeline',
      'No $0 monthly payment; minimum payment is $10',
      'No poverty-line income exclusion',
      'Parent PLUS consolidation loans are not eligible',
    ],
  },
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
      'Previously offered low monthly payments',
      'Previously included 100% unpaid interest subsidy',
      'Previously offered shorter forgiveness for some balances',
      'Spouse income excluded if filing separately',
    ],
    cons: [
      'Ended by court order on March 10, 2026',
      'Borrowers must choose a different plan during the 2026 transition window',
      'Not available for new repayment elections',
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
 * 2026 HHS poverty guidelines for the 48 contiguous states and DC.
 */
export const federalPovertyLine2026: Record<string, number> = {
  '1': 15960,
  '2': 21640,
  '3': 27320,
  '4': 33000,
  '5': 38680,
  '6': 44360,
  '7': 50040,
  '8': 55720,
};

export function getPovertyLine(householdSize: number): number {
  if (householdSize <= 8) {
    return federalPovertyLine2026[String(householdSize)] || federalPovertyLine2026['1'];
  }
  return federalPovertyLine2026['8'] + (householdSize - 8) * 5680;
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
  planType: IdrPlanId
): {
  monthlyPayment: number;
  annualPayment: number;
  discretionaryIncome: number;
} {
  if (planType === 'rap') {
    const dependents = Math.max(0, householdSize - 1);
    let annualPayment: number;

    if (agi <= 10000) {
      annualPayment = 120;
    } else if (agi <= 20000) {
      annualPayment = agi * 0.01;
    } else if (agi <= 30000) {
      annualPayment = agi * 0.02;
    } else if (agi <= 40000) {
      annualPayment = agi * 0.03;
    } else if (agi <= 50000) {
      annualPayment = agi * 0.04;
    } else if (agi <= 60000) {
      annualPayment = agi * 0.05;
    } else if (agi <= 70000) {
      annualPayment = agi * 0.06;
    } else if (agi <= 80000) {
      annualPayment = agi * 0.07;
    } else if (agi <= 90000) {
      annualPayment = agi * 0.08;
    } else if (agi <= 100000) {
      annualPayment = agi * 0.09;
    } else {
      annualPayment = agi * 0.1;
    }

    const monthlyPayment = Math.max(10, annualPayment / 12 - dependents * 50);

    return {
      monthlyPayment: Math.round(monthlyPayment),
      annualPayment: Math.round(monthlyPayment * 12),
      discretionaryIncome: Math.round(agi),
    };
  }

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
