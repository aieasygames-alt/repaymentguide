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
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

type ChartDataPoint = Record<string, string | number | boolean>;

interface IdrPlanData {
  name: string;
  monthlyPayment: number;
  totalPayments: number;
  forgivenessAmount: number;
  termYears: number;
  discretionaryIncome: number;
}

export function IdrPaymentComparison({ plans }: { plans: IdrPlanData[] }) {
  const data = plans.map(plan => ({
    name: plan.name,
    payment: plan.monthlyPayment,
    total: plan.totalPayments,
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip
            formatter={(value: unknown) => `$${typeof value === 'number' ? value.toFixed(0) : 0}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          <Bar dataKey="payment" name="Monthly Payment" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IdrTotalCostProjection({ plans }: { plans: IdrPlanData[] }) {
  const data = plans.map(plan => ({
    name: plan.name,
    totalCost: plan.totalPayments,
    forgiveness: plan.forgivenessAmount,
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          <Bar dataKey="totalCost" name="Total Payments" fill="#3b82f6" />
          <Bar dataKey="forgiveness" name="Forgiveness Amount" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IdrForgivenessAnalysis({ plans }: { plans: IdrPlanData[] }) {
  const data = plans.map(plan => ({
    name: plan.name,
    forgiveness: plan.forgivenessAmount,
  }));

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
            dataKey="forgiveness"
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

export function IdrIncomeSensitivity({ plans, income }: { plans: IdrPlanData[]; income: number }) {
  const incomeLevels = [income * 0.5, income * 0.75, income, income * 1.25, income * 1.5];

  const data = incomeLevels.map(inc => {
    const baseIncome = inc;
    const yearData: ChartDataPoint = { income: `$${(baseIncome / 1000).toFixed(0)}k` };

    plans.forEach(plan => {
      const discretionaryIncome = Math.max(0, baseIncome - 15000);
      yearData[plan.name] = discretionaryIncome * 0.1; // Simplified calculation
    });

    return yearData;
  });

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="income" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip
            formatter={(value: unknown) => `$${typeof value === 'number' ? value.toFixed(0) : 0}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          {plans.map((plan, index) => (
            <Line
              key={plan.name}
              type="monotone"
              dataKey={plan.name}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IdrTermComparison({ plans }: { plans: IdrPlanData[] }) {
  const data = plans.map(plan => ({
    name: plan.name,
    termYears: plan.termYears,
    monthlyPayment: plan.monthlyPayment,
  }));

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: unknown, name?: unknown) => {
              if (name === 'termYears') return [`${value} years`, 'Loan Term'];
              if (name === 'monthlyPayment') return [`$${typeof value === 'number' ? value.toFixed(0) : 0}`, 'Monthly Payment'];
              return [String(value ?? ''), String(name ?? '')];
            }}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          <Bar dataKey="termYears" name="Loan Term (Years)" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IdrDiscretionaryIncomeBreakdown({ plans, agi, householdSize }: {
  plans: IdrPlanData[];
  agi: number;
  householdSize: number;
}) {
  const povertyGuideline = 15000 + (householdSize - 1) * 4000;
  const discretionaryIncome = Math.max(0, agi - (povertyGuideline * 2.25));

  const data = plans.map(plan => ({
    name: plan.name,
    protected: povertyGuideline * 2.25,
    discretionary: discretionaryIncome,
    payment: plan.monthlyPayment,
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          <Bar dataKey="protected" name="Protected Income (225% FPG)" fill="#10b981" />
          <Bar dataKey="discretionary" name="Discretionary Income" fill="#3b82f6" />
          <Bar dataKey="payment" name="Monthly Payment" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IdrPlanRadar({ plans }: { plans: IdrPlanData[] }) {
  const data = plans.map(plan => ({
    plan: plan.name,
    affordability: Math.min(100, (100000 / plan.monthlyPayment) * 10),
    forgivenessPotential: Math.min(100, (plan.forgivenessAmount / 50000) * 100),
    termLength: Math.min(100, (30 / plan.termYears) * 100),
    paymentStability: plan.name === 'SAVE' ? 90 : plan.name === 'PAYE' ? 80 : 70,
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="plan" tick={{ fontSize: 11 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
          <Radar name="Affordability" dataKey="affordability" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
          <Radar name="Forgiveness" dataKey="forgivenessPotential" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
          <Radar name="Term Length" dataKey="termLength" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
          <Radar name="Stability" dataKey="paymentStability" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IdrPaymentTrajectory({ plans, years }: { plans: IdrPlanData[]; years: number }) {
  const trajectoryData = Array.from({ length: Math.min(years, 25) }, (_, year) => {
    const yearData: ChartDataPoint = { year: `Year ${year + 1}` };

    plans.forEach(plan => {
      // Simplified trajectory calculation
      const annualIncrease = plan.monthlyPayment * 12 * 1.03; // 3% annual income increase assumption
      yearData[plan.name] = annualIncrease * (year + 1);
    });

    return yearData;
  });

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={trajectoryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Legend />
          {plans.map((plan, index) => (
            <Area
              key={plan.name}
              type="monotone"
              dataKey={plan.name}
              stroke={COLORS[index % COLORS.length]}
              fill={COLORS[index % COLORS.length]}
              fillOpacity={0.3}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IdrCostSavingsAnalysis({ plans }: { plans: IdrPlanData[] }) {
  const lowestPaymentPlan = plans.reduce((min, plan) =>
    plan.monthlyPayment < min.monthlyPayment ? plan : min, plans[0]);

  const data = plans.map(plan => {
    const monthlySavings = plan.monthlyPayment - lowestPaymentPlan.monthlyPayment;
    const totalSavings = monthlySavings * 12 * 20; // 20-year term

    return {
      name: plan.name,
      monthlyDifference: monthlySavings,
      totalSavings: totalSavings,
      isCheapest: plan.monthlyPayment === lowestPaymentPlan.monthlyPayment,
    };
  });

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value: unknown) => `$${(typeof value === 'number' ? value : 0).toLocaleString()}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Bar dataKey="totalSavings" name="20-Year Total Cost vs Lowest">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.isCheapest ? '#10b981' : COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
