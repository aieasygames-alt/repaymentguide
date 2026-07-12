import Link from 'next/link';

export type SourceLink = {
  label: string;
  url: string;
  note?: string;
};

type CalculatorDisclosureProps = {
  title?: string;
  assumptions: string[];
  sources?: SourceLink[];
};

type ArticleTrustSummaryProps = {
  published: string;
  updated?: string;
  reviewedBy?: string;
  policyReviewed?: string;
};

type OfficialSourcesProps = {
  sources: SourceLink[];
  title?: string;
};

export const officialStudentLoanSources = {
  studentAidRepaymentPlans: {
    label: 'Federal Student Aid repayment plans',
    url: 'https://studentaid.gov/manage-loans/repayment/plans',
    note: 'Official federal repayment plan overview.',
  },
  idrApplication: {
    label: 'Federal Student Aid IDR application',
    url: 'https://studentaid.gov/idr',
    note: 'Official application path for income-driven repayment.',
  },
  pslfHelpTool: {
    label: 'Federal Student Aid PSLF Help Tool',
    url: 'https://studentaid.gov/pslf',
    note: 'Official PSLF employment certification and application tool.',
  },
  loanSimulator: {
    label: 'Federal Student Aid Loan Simulator',
    url: 'https://studentaid.gov/loan-simulator/',
    note: 'Official payment comparison and repayment planning tool.',
  },
  consolidation: {
    label: 'Federal Student Aid loan consolidation',
    url: 'https://studentaid.gov/manage-loans/consolidation',
    note: 'Official guidance on Direct Consolidation Loans.',
  },
  defaultResolution: {
    label: 'Federal Student Aid default resolution',
    url: 'https://studentaid.gov/manage-loans/default',
    note: 'Official options for borrowers in default.',
  },
  edRapFactSheet: {
    label: 'U.S. Department of Education RAP fact sheet',
    url: 'https://www.ed.gov/about/news/press-release/fact-sheet-trump-administration-simplifying-student-loan-repayment',
    note: 'Department guidance on the Repayment Assistance Plan.',
  },
  edRateUpdate: {
    label: 'U.S. Department of Education repayment update',
    url: 'https://www.ed.gov/about/news/press-release/us-department-of-education-announces-student-loan-interest-rate-reduction',
    note: 'Department announcement covering 2026 repayment changes.',
  },
  irsStudentLoans: {
    label: 'IRS student loan interest deduction guidance',
    url: 'https://www.irs.gov/taxtopics/tc456',
    note: 'Official IRS guidance for student loan interest deduction basics.',
  },
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function ArticleTrustSummary({
  published,
  updated,
  reviewedBy = 'RepaymentGuide Editorial Team',
  policyReviewed,
}: ArticleTrustSummaryProps) {
  return (
    <div className="rounded-2xl border border-primary-100 bg-white/95 p-5 text-sm shadow-sm">
      <div className="grid gap-3 text-gray-700 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-gray-900">Published:</span> {formatDate(published)}
        </p>
        <p>
          <span className="font-semibold text-gray-900">Last updated:</span> {formatDate(updated || published)}
        </p>
        <p>
          <span className="font-semibold text-gray-900">Reviewed by:</span> {reviewedBy}
        </p>
        {policyReviewed && (
          <p>
            <span className="font-semibold text-gray-900">Policy info reviewed:</span> {formatDate(policyReviewed)}
          </p>
        )}
      </div>
      <p className="mt-4 border-t pt-4 text-gray-600">
        RepaymentGuide is independent and is not affiliated with the U.S. Department of Education, Federal Student Aid, or any loan servicer.
      </p>
    </div>
  );
}

export function CalculatorDisclosure({
  title = 'Calculator assumptions and limits',
  assumptions,
  sources = [
    officialStudentLoanSources.studentAidRepaymentPlans,
    officialStudentLoanSources.loanSimulator,
  ],
}: CalculatorDisclosureProps) {
  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
      <h2 className="text-2xl font-bold text-amber-950">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed">
        These tools provide planning estimates only. Your loan servicer and StudentAid.gov determine your final eligibility, payment amount, due date, and forgiveness credit.
      </p>
      <details className="mt-4 rounded-xl bg-white/70 p-4">
        <summary className="cursor-pointer font-semibold text-amber-950">Show calculation assumptions</summary>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed">
          {assumptions.map((assumption) => (
            <li key={assumption} className="flex gap-2">
              <span aria-hidden="true">-</span>
              <span>{assumption}</span>
            </li>
          ))}
        </ul>
      </details>
      <OfficialSources sources={sources} title="Official sources to verify before acting" />
    </section>
  );
}

export function OfficialSources({ sources, title = 'Official sources' }: OfficialSourcesProps) {
  if (!sources.length) {
    return null;
  }

  return (
    <div className="mt-6 rounded-xl border bg-white p-5">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 space-y-3 text-sm">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-700 underline hover:text-primary-800"
            >
              {source.label}
            </a>
            {source.note && <p className="mt-1 text-gray-600">{source.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FinancialDisclaimer() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-700">
      <p className="font-semibold text-gray-900">Important disclaimer</p>
      <p className="mt-2">
        This content is educational and does not provide legal, tax, or individualized financial advice. Confirm deadlines, eligibility, and payment amounts with{' '}
        <a href="https://studentaid.gov/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-700 underline">
          StudentAid.gov
        </a>
        , your loan servicer, or a qualified advisor before making a repayment decision.
      </p>
      <p className="mt-2">
        If you are comparing next steps, start with the{' '}
        <Link href="/repayment-plan-recommendation" className="font-medium text-primary-700 underline">
          repayment recommendation flow
        </Link>{' '}
        and then verify the result through official channels.
      </p>
    </div>
  );
}
