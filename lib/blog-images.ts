// Blog post image mapping
export const blogImages: Record<string, string> = {
  'save-ending-rap-vs-save-2026': '/images/save-ending-rap-vs-save-2026.webp',
  'save-plan-alternatives': '/images/save-plan-alternatives.webp',
  'pslf-application-guide': '/images/pslf-application-guide.webp',
  'idr-plan-comparison': '/images/idr-plan-comparison.webp',
  'student-loan-refinancing-vs-consolidation': '/images/student-loan-refinancing.webp',
  'parent-plus-loan-repayment-options': '/images/parent-plus-loan-options.webp',
  'student-loan-default-rehabilitation': '/images/student-loan-rehabilitation.webp',
  'deferment-vs-forbearance': '/images/deferment-vs-forbearance.webp',
  'student-loan-forgiveness-programs': '/images/student-loan-forgiveness.webp',
  'student-loan-consolidation-guide': '/images/student-loan-consolidation.webp',
  'married-borrowers-repayment-strategy': '/images/married-borrowers-strategy.webp',
  'student-loan-tax-implications': '/images/student-loan-tax.webp',
  'recent-graduate-repayment-guide': '/images/recent-graduate-guide.webp',
};

export const getBlogImage = (slug: string): string => {
  return blogImages[slug] || '/images/og-image.webp';
};
