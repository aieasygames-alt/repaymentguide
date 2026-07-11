'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

interface TooltipPayload {
  payload?: {
    examples?: string;
  };
}

interface PslfProgressData {
  name: string;
  payments: number;
  remaining: number;
  total: number;
}

export function PslfProgressChart({ currentPayments }: { currentPayments: number }) {
  const data: PslfProgressData[] = [
    {
      name: 'Progress',
      payments: currentPayments,
      remaining: 0,
      total: currentPayments,
    },
    {
      name: 'Remaining',
      payments: 0,
      remaining: Math.max(0, 120 - currentPayments),
      total: Math.max(0, 120 - currentPayments),
    },
  ];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="total"
          >
            <Cell key="progress" fill={currentPayments >= 120 ? '#10b981' : '#3b82f6'} />
            <Cell key="remaining" fill={currentPayments >= 120 ? '#10b981' : '#e5e7eb'} />
          </Pie>
          <Tooltip
            formatter={(value: unknown) => `${typeof value === 'number' ? value : 0} payments`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PslfTimelineChart({ currentPayments, monthlyPayment, loanBalance }: {
  currentPayments: number;
  monthlyPayment: number;
  loanBalance: number;
}) {
  const remainingPayments = Math.max(0, 120 - currentPayments);
  const yearsToGo = Math.ceil(remainingPayments / 12);

  const data = Array.from({ length: Math.min(10, yearsToGo) }, (_, i) => {
    const year = i + 1;
    const estimatedBalance = Math.max(0, loanBalance - (i + 1) * 12 * monthlyPayment);

    return {
      year: `Year ${year}`,
      paymentsMade: currentPayments + i * 12,
      estimatedBalance: Math.max(0, estimatedBalance),
      cumulativePayments: (currentPayments + i * 12) * monthlyPayment,
    };
  });

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          <Area type="monotone" dataKey="estimatedBalance" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} name="Estimated Balance" />
          <Area type="monotone" dataKey="cumulativePayments" stroke="#10b981" fill="#10b981" fillOpacity={0.3} name="Cumulative Payments" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ForgivenessProjectionChart({ currentPayments, loanBalance, monthlyPayment }: {
  currentPayments: number;
  loanBalance: number;
  monthlyPayment: number;
}) {
  const remainingPayments = Math.max(0, 120 - currentPayments);
  const estimatedForgiveness = Math.max(0, loanBalance - (monthlyPayment * remainingPayments));
  const totalPayments = monthlyPayment * remainingPayments;

  const data = [
    {
      name: 'Payments Made',
      value: monthlyPayment * currentPayments,
    },
    {
      name: 'Remaining Payments',
      value: totalPayments,
    },
    {
      name: 'Projected Forgiveness',
      value: estimatedForgiveness,
    },
  ];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Bar dataKey="value" name="Amount">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MonthlyPaymentMilestoneChart({ currentPayments }: { currentPayments: number }) {
  const milestones = [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
  const data = milestones.map(milestone => ({
    milestone: milestone === 120 ? '120 (Forgiveness)' : `${milestone}`,
    payments: milestone,
    achieved: currentPayments >= milestone,
    current: milestone === currentPayments,
  }));

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 130]} tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="milestone" width={100} tick={{ fontSize: 11 }} />
          <Tooltip
            formatter={(value: unknown) => [`${typeof value === 'number' ? value : 0} payments`, 'Payments']}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Bar dataKey="payments" name="Required Payments">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.current ? '#8b5cf6' : entry.achieved ? '#10b981' : '#e5e7eb'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function EmploymentEligibilityChart() {
  const data = [
    {
      type: 'Government',
      eligible: true,
      examples: 'Federal, state, local, tribal',
    },
    {
      type: 'Nonprofit',
      eligible: true,
      examples: '501(c)(3) organizations',
    },
    {
      type: 'Private',
      eligible: false,
      examples: 'For-profit companies',
    },
    {
      type: 'Labor Union',
      eligible: true,
      examples: 'Public service unions',
    },
    {
      type: 'Military',
      eligible: true,
      examples: 'All branches',
    },
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="category" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="type" width={80} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: unknown, _name: unknown, props: TooltipPayload) => [
              value ? 'Eligible' : 'Not Eligible',
              props?.payload?.examples || ''
            ]}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Bar dataKey="eligible" name="Eligibility">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.eligible ? '#10b981' : '#ef4444'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PaymentAcceleratorChart({ currentPayments, monthlyPayment }: {
  currentPayments: number;
  monthlyPayment: number;
}) {
  const remainingPayments = Math.max(0, 120 - currentPayments);

  const scenarios = [
    {
      name: 'Current Payment',
      monthly: monthlyPayment,
      monthsRemaining: remainingPayments,
      totalPaid: monthlyPayment * remainingPayments,
    },
    {
      name: '+20% Payment',
      monthly: monthlyPayment * 1.2,
      monthsRemaining: Math.ceil(remainingPayments / 1.2),
      totalPaid: monthlyPayment * 1.2 * Math.ceil(remainingPayments / 1.2),
    },
    {
      name: '+50% Payment',
      monthly: monthlyPayment * 1.5,
      monthsRemaining: Math.ceil(remainingPayments / 1.5),
      totalPaid: monthlyPayment * 1.5 * Math.ceil(remainingPayments / 1.5),
    },
  ];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={scenarios}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip
            formatter={(value: unknown, name?: unknown) => {
              const numericValue = typeof value === 'number' ? value : 0;
              if (name === 'monthly') return [`$${numericValue.toFixed(0)}`, 'Monthly Payment'];
              if (name === 'totalPaid') return [`$${(numericValue / 1000).toFixed(1)}k`, 'Total Remaining'];
              return [String(value ?? ''), String(name ?? '')];
            }}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          <Bar dataKey="monthly" name="Monthly Payment" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
