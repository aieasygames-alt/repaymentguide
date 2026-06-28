/**
 * Standard repayment calculation
 * Monthly payment = P * [r(1+r)^n] / [(1+r)^n - 1]
 * P = principal, r = monthly rate, n = months
 */
export function calculateStandardRepayment(
  principal: number,
  annualRate: number,
  years: number
): {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
} {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;

  if (monthlyRate === 0) {
    const monthlyPayment = principal / months;
    return {
      monthlyPayment,
      totalPayment: principal,
      totalInterest: 0,
    };
  }

  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
  };
}

/**
 * Graduated repayment calculation (simplified)
 * Starts at lower payment, increases every 2 years
 */
export function calculateGraduatedRepayment(
  principal: number,
  annualRate: number,
  years: number
): {
  initialPayment: number;
  finalPayment: number;
  totalPayment: number;
  totalInterest: number;
} {
  const standard = calculateStandardRepayment(principal, annualRate, years);

  // Graduated starts lower (typically ~50% of standard) and ends higher (~150%)
  const initialPayment = standard.monthlyPayment * 0.5;
  const finalPayment = standard.monthlyPayment * 1.5;

  // Approximate total using average of initial and final
  const avgPayment = (initialPayment + finalPayment) / 2;
  const totalPayment = avgPayment * years * 12;
  const totalInterest = totalPayment - principal;

  return {
    initialPayment,
    finalPayment,
    totalPayment,
    totalInterest,
  };
}

/**
 * Extended repayment (25 years, fixed rate)
 */
export function calculateExtendedRepayment(
  principal: number,
  annualRate: number
): {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
} {
  return calculateStandardRepayment(principal, annualRate, 25);
}

export type RepaymentPlan = 'standard-10' | 'standard-20' | 'graduated' | 'extended';

export function getReaymentPlanLabel(plan: RepaymentPlan): string {
  const labels = {
    'standard-10': 'Standard 10-Year',
    'standard-20': 'Standard 20-Year',
    'graduated': 'Graduated 10-Year',
    'extended': 'Extended 25-Year',
  };
  return labels[plan];
}
