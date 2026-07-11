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
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';

interface ChartData {
  name: string;
  monthlyPayment?: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export function RepaymentComparisonChart({ principal, rate }: { principal: number; rate: number }) {
  const data: ChartData[] = [
    {
      name: 'Standard 10-Year',
      monthlyPayment: calculateMonthlyPayment(principal, rate, 10),
      totalPayment: calculateTotalPayment(principal, rate, 10),
      totalInterest: calculateTotalInterest(principal, rate, 10),
      principal,
    },
    {
      name: 'Standard 20-Year',
      monthlyPayment: calculateMonthlyPayment(principal, rate, 20),
      totalPayment: calculateTotalPayment(principal, rate, 20),
      totalInterest: calculateTotalInterest(principal, rate, 20),
      principal,
    },
    {
      name: 'Graduated',
      monthlyPayment: calculateGraduatedPayment(principal, rate),
      totalPayment: calculateGraduatedTotal(principal, rate),
      totalInterest: calculateGraduatedInterest(principal, rate),
      principal,
    },
    {
      name: 'Extended',
      monthlyPayment: calculateExtendedPayment(principal, rate),
      totalPayment: calculateExtendedTotal(principal, rate),
      totalInterest: calculateExtendedInterest(principal, rate),
      principal,
    },
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          <Bar dataKey="totalInterest" name="Total Interest" fill="#ef4444" />
          <Bar dataKey="principal" name="Principal" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function InterestAccumulationChart({ principal, rate }: { principal: number; rate: number }) {
  const data = [
    { year: 'Year 1', interest: calculateAnnualInterest(principal, rate), balance: principal },
    { year: 'Year 5', interest: calculateAnnualInterest(principal, rate) * 5, balance: principal - calculatePrincipalPaid(principal, rate, 5, 10) },
    { year: 'Year 10', interest: calculateAnnualInterest(principal, rate) * 10, balance: 0 },
    { year: 'Year 15', interest: calculateAnnualInterest(principal, rate) * 15, balance: 0 },
    { year: 'Year 20', interest: calculateAnnualInterest(principal, rate) * 20, balance: 0 },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Area type="monotone" dataKey="interest" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="Cumulative Interest" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MonthlyPaymentComparison({ principal, rate }: { principal: number; rate: number }) {
  const data = [
    {
      name: 'Standard 10Y',
      payment: calculateMonthlyPayment(principal, rate, 10),
    },
    {
      name: 'Standard 20Y',
      payment: calculateMonthlyPayment(principal, rate, 20),
    },
    {
      name: 'Graduated',
      payment: calculateGraduatedPayment(principal, rate),
    },
    {
      name: 'Extended',
      payment: calculateExtendedPayment(principal, rate),
    },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toFixed(0)}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Bar dataKey="payment" name="Monthly Payment" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TotalCostComparison({ principal, rate }: { principal: number; rate: number }) {
  const data = [
    {
      name: 'Standard 10-Year',
      value: calculateTotalPayment(principal, rate, 10),
    },
    {
      name: 'Standard 20-Year',
      value: calculateTotalPayment(principal, rate, 20),
    },
    {
      name: 'Graduated',
      value: calculateGraduatedTotal(principal, rate),
    },
    {
      name: 'Extended',
      value: calculateExtendedTotal(principal, rate),
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
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PaymentTrendChart({ principal, rate }: { principal: number; rate: number }) {
  const years = Array.from({ length: 10 }, (_, i) => i + 1);

  const standardData = years.map(year => ({
    year: `Year ${year}`,
    standard: calculateMonthlyPayment(principal, rate, 10),
    graduated: calculateGraduatedPaymentAtYear(principal, rate, year),
  }));

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={standardData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toFixed(0)}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          <Line type="monotone" dataKey="standard" stroke="#3b82f6" name="Standard Plan" strokeWidth={2} />
          <Line type="monotone" dataKey="graduated" stroke="#10b981" name="Graduated Plan" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Helper calculation functions
function calculateMonthlyPayment(principal: number, rate: number, years: number): number {
  const monthlyRate = rate / 100 / 12;
  const n = years * 12;
  if (monthlyRate === 0) return principal / n;
  return principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
}

function calculateTotalPayment(principal: number, rate: number, years: number): number {
  return calculateMonthlyPayment(principal, rate, years) * years * 12;
}

function calculateTotalInterest(principal: number, rate: number, years: number): number {
  return calculateTotalPayment(principal, rate, years) - principal;
}

function calculateAnnualInterest(principal: number, rate: number): number {
  return principal * (rate / 100);
}

function calculatePrincipalPaid(principal: number, rate: number, years: number, totalYears: number): number {
  const monthlyPayment = calculateMonthlyPayment(principal, rate, totalYears);
  const monthlyRate = rate / 100 / 12;
  let balance = principal;

  for (let i = 0; i < years * 12; i++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    balance -= principalPayment;
  }

  return principal - balance;
}

function calculateGraduatedPayment(principal: number, rate: number): number {
  const monthlyRate = rate / 100 / 12;
  const n = 10 * 12;
  const initialPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1) * 0.7;
  return initialPayment;
}

function calculateGraduatedTotal(principal: number, rate: number): number {
  const monthlyRate = rate / 100 / 12;
  const n = 10 * 12;
  let total = 0;
  let payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1) * 0.7;

  for (let i = 0; i < n; i++) {
    total += payment;
    if (i % 12 === 11 && i < n - 12) {
      payment *= 1.05; // 5% increase every year
    }
  }

  return total;
}

function calculateGraduatedInterest(principal: number, rate: number): number {
  return calculateGraduatedTotal(principal, rate) - principal;
}

function calculateGraduatedPaymentAtYear(principal: number, rate: number, year: number): number {
  const monthlyRate = rate / 100 / 12;
  const n = 10 * 12;
  const initialPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1) * 0.7;
  return initialPayment * Math.pow(1.05, year - 1);
}

function calculateExtendedPayment(principal: number, rate: number): number {
  return calculateMonthlyPayment(principal, rate, 25);
}

function calculateExtendedTotal(principal: number, rate: number): number {
  return calculateTotalPayment(principal, rate, 25);
}

function calculateExtendedInterest(principal: number, rate: number): number {
  return calculateTotalInterest(principal, rate, 25);
}
