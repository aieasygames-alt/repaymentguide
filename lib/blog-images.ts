// Blog post image mapping
export const blogImages: Record<string, string> = {
  'save-ending-rap-vs-save-2026': '/images/save-ending-rap-vs-save-2026.png',
  'save-plan-alternatives': '/images/save-plan-alternatives.png',
  'pslf-application-guide': '/images/pslf-application-guide.png',
  'idr-plan-comparison': '/images/idr-plan-comparison.png',
  'student-loan-refinancing-vs-consolidation': '/images/student-loan-refinancing.png',
  'parent-plus-loan-repayment-options': '/images/parent-plus-loan-options.png',
  'student-loan-default-rehabilitation': '/images/student-loan-rehabilitation.png',
  'deferment-vs-forbearance': '/images/deferment-vs-forbearance.png',
  'student-loan-forgiveness-programs': '/images/student-loan-forgiveness.png',
  'student-loan-consolidation-guide': '/images/student-loan-consolidation.png',
  'married-borrowers-repayment-strategy': '/images/married-borrowers-strategy.png',
  'student-loan-tax-implications': '/images/student-loan-tax.png',
  'recent-graduate-repayment-guide': '/images/recent-graduate-guide.png',
};

export const getBlogImage = (slug: string): string => {
  return blogImages[slug] || '/images/og-image.png';
};
