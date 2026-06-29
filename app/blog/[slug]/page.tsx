import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArticleSchema } from '@/components/ArticleSchema';
import Image from 'next/image';
import { getBlogImage } from '@/lib/blog-images';

const blogPosts: Record<string, {
  title: string;
  date: string;
  excerpt: string;
  content: string;
}> = {
  'save-plan-alternatives': {
    title: 'Understanding SAVE Plan Alternatives',
    date: '2025-06-01',
    excerpt: 'With the SAVE plan blocked by court orders as of 2024, learn about your alternative IDR options.',
    content: `
# Understanding SAVE Plan Alternatives

With the **SAVE plan blocked by court orders** as of 2024, many borrowers are wondering what their options are. This guide explains the alternative income-driven repayment (IDR) plans available.

## What Happened to SAVE?

The **SAVE (Saving on a Valuable Education)** plan was introduced as the most generous IDR plan, offering:

- 5% of discretionary income for undergraduate loans
- 10% for graduate loans
- 100% unpaid interest subsidy
- Forgiveness after 10-20 years

However, legal challenges have blocked its implementation, leaving borrowers in need of alternatives.

## Your IDR Options

### PAYE (Pay As You Earn)

**Best for newer borrowers** with loans after October 2007 and October 2011.

- 10% of discretionary income payments
- Payment cap protects high earners
- No interest capitalization if staying in plan
- Forgiveness after 20 years

### IBR (Income-Based Repayment)

**Available to all borrowers** regardless of loan date.

- 10-15% of discretionary income
- Good option for those with older loans who don't qualify for PAYE
- Spouse income excluded if filing separately
- Forgiveness after 20-25 years

### ICR (Income-Contingent Repayment)

**The only option for Parent PLUS loan borrowers** after consolidation into Direct Loans.

- 20% of discretionary income (highest percentage)
- Always counts spouse income
- Forgiveness after 25 years

## What Should You Do?

1. **Check your eligibility** – Each plan has different requirements
2. **Compare payments** – Use our [IDR Calculator](/income-driven-repayment-calculator) to see estimates
3. **Consider your timeline** – How long until forgiveness?
4. **Apply** – Submit your IDR application through [StudentAid.gov](https://studentaid.gov/idr)

> **The right plan depends on your loan type, income, and forgiveness timeline.**

## Quick Comparison

| Plan | Monthly Payment | Forgiveness | Best For |
|------|----------------|-------------|----------|
| SAVE | 5-10% | 10-20 years | Most borrowers (when available) |
| PAYE | 10% | 20 years | Newer borrowers with high debt |
| IBR | 10-15% | 20-25 years | Older loans, separate filers |
| ICR | 20% | 25 years | Parent PLUS loans |

---

**Need help deciding?** Use our [IDR Plan Calculator](/income-driven-repayment-calculator) to compare plans based on your specific situation.
    `,
  },
  'pslf-application-guide': {
    title: 'PSLF Application Guide',
    date: '2025-05-15',
    excerpt: 'Step-by-step guide to applying for Public Service Loan Forgiveness.',
    content: `
# PSLF Application Guide

**Public Service Loan Forgiveness (PSLF)** can forgive your remaining student loan balance after 120 qualifying payments. Here's exactly how to apply.

## Step 1: Verify Eligibility

Before applying, make sure you meet these requirements:

- ✅ **Direct Loans only** (consolidate FFEL/Perkins if needed)
- ✅ **Full-time employment** (30+ hours/week)
- ✅ **Government or 501(c)(3) nonprofit employer**
- ✅ **120 qualifying monthly payments**

## Step 2: Enroll in Qualifying Repayment Plan

You must be enrolled in an **income-driven repayment plan**:

- SAVE (when available)
- PAYE
- IBR
- ICR

> **Tip:** Standard repayment plans don't qualify for PSLF!
>
> **Not sure which IDR plan to choose?** Use our [IDR Calculator](/income-driven-repayment-calculator) to compare plans and see which works best for your situation.

## Step 3: Submit Employment Certification

Use the [PSLF Help Tool](https://studentaid.gov/pslf/) to:

- Certify your employment
- Track qualifying payments
- Ensure you're on the right track

**Submit this form:**
- Annually
- When changing employers
- As soon as you start working for a qualifying employer

## Step 4: Make 120 Qualifying Payments

Your payments must be:

- ✅ Made in full and on time
- ✅ Made after Oct 1, 2007
- ✅ Made while employed full-time by qualifying employer
- ✅ Made under a qualifying repayment plan

## Step 5: Apply for Forgiveness

After 120 payments, submit the PSLF application through:

- Your loan servicer
- [StudentAid.gov](https://studentaid.gov/)

### Important: IDR Account Adjustment

**Many borrowers received payment count adjustments in 2024.** This means past payments that didn't qualify may now count toward your 120.

**Check your payment count at** [StudentAid.gov](https://studentaid.gov) – you might be closer than you think!

> **Have FFEL or Perkins loans?** You may need to consolidate first. Read our [Student Loan Consolidation Guide](/blog/student-loan-consolidation-guide) to understand the process.

## Common Mistakes to Avoid

❌ **Wrong repayment plan** – Standard/graduated plans don't qualify
❌ **Missing payments** – Late or partial payments don't count
❌ **Not certifying employment** – Track your progress annually
❌ **Wrong loan type** – FFEL/Perkins need consolidation first

## Timeline Overview

**Month 1** → (10 years) → **Month 120** → **Apply for PSLF**

- 120 qualifying payments
- Full-time employment throughout
- Annual employment certification

---

**Ready to track your progress?** Use our [PSLF Calculator](/pslf-calculator) to estimate your forgiveness timeline.
    `,
  },
  'idr-plan-comparison': {
    title: 'IDR Plan Comparison: Which Saves You the Most?',
    date: '2025-05-01',
    excerpt: 'Compare SAVE, PAYE, IBR, and ICR to find your best option.',
    content: `
# IDR Plan Comparison: Which Saves You the Most?

Choosing the right **income-driven repayment plan** can save you thousands of dollars. Here's how the four main plans compare.

## Quick Overview

| Plan | Payment % | Forgiveness | Monthly Cap | Spouse Income |
|------|-----------|-------------|-------------|---------------|
| SAVE | 5-10% | 10-20 years | No | Separate |
| PAYE | 10% | 20 years | Yes | Separate |
| IBR | 10-15% | 20-25 years | No | Separate |
| ICR | 20% | 25 years | No | Counted |

## Deep Dive: Each Plan

### 🎯 SAVE Plan (When Available)

**Lowest payments, most generous terms**

- **5%** of discretionary income for undergraduate loans
- **10%** for graduate loans
- **100%** interest subsidy (no unpaid interest capitalization)
- Forgiveness after **10-20 years**

⚠️ **Currently blocked by courts as of 2024**

> **Need alternatives while SAVE is blocked?** Our [SAVE Plan Alternatives Guide](/blog/save-plan-alternatives) explains your options in detail.

### 🔰 PAYE Plan

**Best for newer borrowers with high debt**

- **10%** of discretionary income
- Payment cap protects high earners
- No interest capitalization if staying in plan
- Forgiveness after **20 years**

**Requirements:** Loans after October 2007 and October 2011

### 📊 IBR Plan

**Available to all borrowers**

- **10%** (newer borrowers) or **15%** (older borrowers)
- Spouse income excluded if filing taxes separately
- Forgiveness after **20-25 years**

**Best for:** Older loans, married filing separately

### 👨‍👩‍👧 ICR Plan

**Only option for Parent PLUS borrowers**

- **20%** of discretionary income (highest!)
- Always counts spouse income
- Forgiveness after **25 years**

**Requirements:** Parent PLUS loans must be consolidated into Direct Loans first

> **Have Parent PLUS loans?** Read our complete [Parent PLUS Loan Repayment Guide](/blog/parent-plus-loan-repayment-options) for detailed strategies and options.

## How to Choose: Decision Tree

**Do you have Parent PLUS loans?**
- → Yes: ICR (after consolidation)
- → No: Are your loans after Oct 2007 & Oct 2011?
    - → Yes: SAVE (if available) or PAYE
    - → No: IBR

## Payment Examples

**Borrower:** $50,000 debt, $40,000 income, single

| Plan | Monthly Payment | Total Paid (20 yrs) | Forgiveness |
|------|----------------|---------------------|-------------|
| SAVE | ~$158 | ~$38,000 | ~$12,000 |
| PAYE | ~$317 | ~$76,000 | ~$0 |
| IBR | ~$317 | ~$76,000 | ~$0 |
| ICR | ~$633 | ~$151,000 | ~$0 |

## Key Factors to Consider

### 1. **Loan Type**
- Parent PLUS? → ICR only
- Direct Loans? → All options available

### 2. **Income Level**
- Low income → SAVE/IBR (lower payments)
- High income → PAYE (payment cap)

### 3. **Forgiveness Timeline**
- Want fastest forgiveness → SAVE (10 years for public service)
- Need flexibility → IBR (available to all)

### 4. **Marital Status**
- Married filing separately → IBR/PAYE/SAVE (exclude spouse income)
- Married filing jointly → All plans count spouse income

## Pro Tips

💡 **Strategic move:** If SAVE becomes available, switch immediately for the interest subsidy alone.

💡 **Payment cap matters:** PAYE protects you if your income spikes – payments never exceed 10-year standard repayment amount.

💡 **Consolidation warning:** Consolidating older loans resets your forgiveness clock – only do this if necessary.

---

**Still unsure?** Use our [IDR Calculator](/income-driven-repayment-calculator) to see personalized comparisons for your situation.
    `,
  },
  'student-loan-refinancing-vs-consolidation': {
    title: 'Student Loan Refinancing vs Consolidation: What\'s the Difference?',
    date: '2025-04-15',
    excerpt: 'Understand the key differences between refinancing and consolidating student loans, and which option makes sense for your situation.',
    content: `
# Student Loan Refinancing vs Consolidation

When managing student loan debt, two options often get confused: **refinancing** and **consolidation**. While both can simplify your payments, they serve very different purposes.

## Quick Definition

- **Consolidation**: Combining multiple federal loans into ONE federal Direct Consolidation Loan
- **Refinancing**: Taking out a NEW loan (usually private) to pay off existing loans at a new rate

## Federal Loan Consolidation

### What It Is
A Direct Consolidation Loan combines your federal student loans into a single loan with one servicer and one monthly payment.

> **Need to consolidate?** Read our complete [Student Loan Consolidation Guide](/blog/student-loan-consolidation-guide) for detailed steps and best practices.

### Key Benefits
- ✅ **Single payment** instead of multiple
- ✅ **Access to IDR plans** you couldn't use before
- ✅ **Access to PSLF** (if you have FFEL or Perkins loans)
- ✅ **Fixed interest rate** (weighted average of your loans + 1-2%)
- ✅ **No credit check** required

### When to Consolidate Federal Loans
- You have FFEL or Perkins loans and want PSLF eligibility
- You want to switch repayment plans
- You want a single monthly payment
- You're seeking loan rehabilitation after default

### What Doesn't Change
- Your total balance (stays the same)
- Interest rate usually increases (weighted average + rounding up)
- No lower interest rate

---

## Private Loan Refinancing

### What It Is
A private lender pays off your existing loans and issues you a new loan with new terms, usually at a lower interest rate.

### Key Benefits
- ✅ **Lower interest rate** (if you have good credit)
- ✅ **Lower monthly payments**
- ✅ **Choose your repayment term** (5-20 years)
- ✅ **Release cosigner** (if applicable)
- ✅ **Better customer service** (often)

### The Trade-offs
- ❌ **Lose federal benefits** (IDR, forgiveness, PSLF)
- ❌ **Variable rates** can increase over time
- ❌ **No deferment/forbearance** protections
- ❌ **Credit-based** approval

### When to Refinance
- You have **private loans** at high rates
- You have **good credit** (650+)
- You're **NOT** pursuing PSLF or IDR forgiveness
- You want to pay off debt faster

---

## Side-by-Side Comparison

| Feature | Federal Consolidation | Private Refinancing |
|---------|----------------------|---------------------|
| Interest Rate | Weighted average + ~1% | Potentially much lower |
| Federal Benefits | ✅ Preserved | ❌ Lost |
| Repayment Options | IDR, PSLF available | Private lender terms |
| Credit Check | Not required | Required |
| Forgiveness | Eligible | Not eligible |
| Best For | PSLF, IDR access | Lower payments (private loans) |

---

## Decision Framework

### Keep Federal Loans (Don't Refinance) If:
- You're pursuing **PSLF** (120 payments → forgiveness)
- You need **income-driven payments** (PAYE, IBR, SAVE)
- You have **low income** relative to debt
- Your loans are in **forgiveness programs**

> **Considering PSLF?** Use our [PSLF Calculator](/pslf-calculator) to track your progress and estimate your forgiveness amount.

### Refinance If:
- You have **private student loans** at high rates
- You're **NOT** pursuing PSLF
- You have **good credit** (680+)
- You want to pay off debt **faster**

### Consolidate Federal Loans If:
- You have **FFEL/Perkins loans** and want PSLF
- You want **simplified payments** (one servicer)
- You're seeking **rehabilitation** after default

---

## Real-World Example

### Borrower A: $70,000 federal loans, pursuing PSLF
- ❌ **Should NOT refinance** → Loses PSLF eligibility
- ✅ **Should consolidate FFEL loans** → Gains PSLF eligibility
- ✅ **Enroll in IDR plan** → Low payments while working toward forgiveness

### Borrower B: $30,000 private loans at 9%, good credit
- ✅ **Should refinance** → Could get 5-6%
- ✅ **Savings**: $3,000-$5,000 in interest over loan life
- ❌ **Irrelevant**: Consolidation doesn't apply to private loans

---

## Common Mistakes to Avoid

❌ **Refinancing federal loans before understanding PSLF**
- Many borrowers refinance, then discover they're no longer eligible for forgiveness

❌ **Consolidating to "reset" the 10-year timeline**
- Consolidation resets your PSLF clock to zero

❌ **Assuming refinancing always saves money**
- If you lose PSLF, you could pay $50,000+ MORE overall

---

## Bottom Line

- **Consolidation** simplifies and protects access to federal benefits
- **Refinancing** can lower rates but sacrifices protections
- The right choice depends on your goals (forgiveness vs. savings)

> **Before refinancing federal loans, calculate total cost under current plan vs. refinanced loan.** Forgiveness could be worth tens of thousands of dollars.

---

**Unsure about your loans?** Use our [IDR Calculator](/income-driven-repayment-calculator) to see your options, or our [Payment Calculator](/student-loan-payment-calculator) to compare costs.
    `,
  },
  'parent-plus-loan-repayment-options': {
    title: 'Parent PLUS Loan Repayment Options: Complete Guide',
    date: '2025-04-01',
    excerpt: 'Everything you need to know about repaying Parent PLUS loans, from standard repayment to ICR and PSLF strategies.',
    content: `
# Parent PLUS Loan Repayment Options: Complete Guide

Parent PLUS loans have **unique repayment rules** that differ from other federal student loans. Understanding your options can save you thousands of dollars.

## What Are Parent PLUS Loans?

Parent PLUS loans are federal loans that parents take out to pay for their child's undergraduate education. Unlike student loans, these loans:
- Are in the **parent's name** (not the student's)
- Have **higher interest rates** (currently 8.05%)
- Have **limited IDR options**
- Require **parent responsibility** for repayment

---

## Standard Repayment Options

### Standard 10-Year Repayment
- **Fixed payments** for 10 years
- **Highest monthly payment** but least total interest
- **Default plan** unless you choose otherwise

### Graduated Repayment
- Payments start **lower** and increase every 2 years
- 10-year term
- Good if you expect **income to increase**

### Extended Repayment
- **25-year term** (if balance >$30,000)
- **Lower monthly payments** but more total interest
- Fixed or graduated options available

---

## Income-Driven Options: The ICR Route

**The Challenge**: Parent PLUS loans don't qualify for SAVE, PAYE, or IBR.

**The Solution**: Consolidate into Direct Loans, then enroll in **ICR (Income-Contingent Repayment)**.

### How to Get ICR for Parent PLUS Loans

**Step 1: Consolidate Parent PLUS Loans**
- Apply at [StudentAid.gov](https://studentaid.gov)
- Select "Direct Consolidation Loan"
- Include all Parent PLUS loans
- Wait 4-6 weeks for processing

**Step 2: Enroll in ICR**
- After consolidation, you're eligible for ICR
- Apply through StudentAid.gov
- ICR uses **20% of discretionary income**
- Forgiveness after **25 years**

### ICR Payment Example

**Parent borrowers**: $80,000 income, $100,000 PLUS loans, married filing jointly

- **Discretionary income**: ~$50,000 (income - poverty guideline)
- **ICR payment**: 20% × $50,000 = **$10,000/year** ($833/month)

> **Note**: ICR payments are usually HIGHER than standard 10-year for PLUS borrowers due to the 20% calculation.

---

## PSLF for Parent PLUS Loans

**The Strategy**: Parent PLUS loans CAN qualify for PSLF, but ONLY after consolidation + ICR.

### Requirements
- ✅ **Direct Loans** (after consolidation)
- ✅ **ICR repayment plan** (required)
- ✅ **120 qualifying payments**
- ✅ **Full-time employment** at qualifying employer

### Timeline
1. **Consolidate** Parent PLUS loans → Direct Loans
2. **Enroll in ICR** repayment plan
3. **Certify employment** annually via PSLF form
4. **Make 120 payments** (10 years)
5. **Apply for forgiveness** of remaining balance

### Important Considerations
- **Payments before consolidation DON'T count** toward PSLF
- **Consolidation resets your payment clock** to zero
- **Only payments in ICR count** (not standard/graduated)

---

## Alternatives to Consider

### 1. Transfer Loan to Child
- Some private lenders allow refinancing to child's name
- Requires child's creditworthiness
- Removes parent obligation

### 2. Refinance with Private Lender
- **Lower rates** if you have good credit
- **Flexible terms** (5-20 years)
- **Lose federal benefits** (PSLF, forgiveness)

### 3. Standard Repayment + Aggressive Payoff
- **Pay more than minimum** when possible
- **No fees** for prepayment
- **Fastest path** to debt freedom

---

## Tax Implications

### Current Law (2026)
- **No student loan interest deduction** for many taxpayers (phase-out limits)
- Deduction phased out above MAGI $70,000 single/$140,000 joint
- **No deduction** after 2025 (provision expires)

### Loan Forgiveness
- **Forgiven debt typically taxable**
- **PSLF forgiveness is tax-free** (under current law)
- **IDR forgiveness may be taxable** after 2025

---

## Real-World Scenarios

### Scenario 1: High-Income Parent ($150,000)
- **Parent PLUS loans**: $100,000 at 8.05%
- **Goal**: Minimize total cost
- **Best option**: **Refinance** to private loan at 5-6% (if credit good)
- **Avoid ICR**: Payments would be higher than standard 10-year

### Scenario 2: Public Sector Parent ($60,000)
- **Parent PLUS loans**: $80,000
- **Goal**: PSLF forgiveness
- **Best option**: **Consolidate → ICR → PSLF**
- **Timeline**: 120 payments (10 years) → potential $50,000+ forgiveness

### Scenario 3: Low-Income Retiree ($40,000)
- **Parent PLUS loans**: $50,000
- **Goal**: Lower payments
- **Best option**: **Consolidate → ICR** (if payment manageable) OR **deferment**
- **Last resort**: Consider income-based hardship options

---

## Common Questions

**Q: Can my child make payments on my Parent PLUS loans?**
A: Yes! Your child can make payments on your behalf, but the legal responsibility remains yours.

**Q: Can I discharge Parent PLUS loans in bankruptcy?**
A: Very difficult. Parent PLUS loans have same bankruptcy protections as other federal loans (undue hardship standard).

**Q: What happens if I die?**
A: Parent PLUS loans are **discharged** (forgiven) if the parent (not the student) dies.

**Q: Should I refinance Parent PLUS loans?**
A: Only if:
- You're **NOT pursuing PSLF**
- You have **good credit** (680+)
- You can get a **significantly lower rate**
- You understand you're **losing federal protections**

---

## Bottom Line

Parent PLUS loans have **limited flexibility** compared to other federal loans:

- **Standard/Graduated**: Best for minimizing total cost
- **ICR**: Only IDR option (after consolidation)
- **PSLF**: Possible but requires ICR
- **Refinancing**: Consider only if you don't need federal benefits

> **Before choosing a plan, calculate your total cost** under each option. The "lowest payment" isn't always the cheapest path.

---

**Need help calculating your payments?** Use our [Payment Calculator](/student-loan-payment-calculator) for standard plans, or explore IDR options with our [IDR Calculator](/income-driven-repayment-calculator).
    `,
  },
  'student-loan-default-rehabilitation': {
    title: 'Student Loan Default Rehabilitation: How to Recover',
    date: '2025-03-20',
    excerpt: 'Step-by-step guide to getting out of student loan default through rehabilitation and consolidation options.',
    content: `
# Student Loan Default Rehabilitation: How to Recover

**Student loan default** is serious, but it's not permanent. Rehabilitation and consolidation offer two paths to recovery.

---

## What Is Student Loan Default?

### Default Triggers
- **Federal loans**: 270 days past due (9 months)
- **Private loans**: Varies (often 120 days)

### Consequences of Default
- ❌ **Wage garnishment** (up to 15% of disposable pay)
- ❌ **Tax refund seizure**
- ❌ **Social Security benefit offset**
- ❌ **Loss of repayment plan options**
- ❌ **Damage to credit score**
- ❌ **Collection fees** (up to 18% added to balance)

---

## Recovery Path 1: Loan Rehabilitation

### What It Is
Make **9 voluntary payments** within 20 days of due date over 10 consecutive months.

### Key Benefits
- ✅ **Default status removed** from credit report
- ✅ **Wage garnishment stopped**
- ✅ **Regains eligibility** for IDR, PSLF, deferment
- ✅ **Collection fees waived**
- ✅ **Credit report update**: Default removed

### Rehabilitation Rules
- **9 payments in 10 consecutive months**
- **Voluntary payments** (wage garnishment doesn't count)
- **Agreed amount** (often reasonable, based on income)
- **One-time only**: You can rehabilitate each loan ONCE

### How to Start Rehabilitation

**Step 1: Contact Your Loan Holder**
- Find who holds your defaulted loans via [StudentAid.gov](https://studentaid.gov)
- Call to request rehabilitation
- **Don't ignore** collection calls

**Step 2: Agree on Payment Amount**
- Amount is based on your income (usually reasonable)
- Can be as low as **$5/month** if income is very low
- **Get agreement in writing**

**Step 3: Make 9 Payments**
- Set up **automatic payments** to avoid missing
- Mark your calendar for each due date
- **Don't miss ANY payment** (restarts the clock)

**Step 4: Complete Rehabilitation**
- After 9th payment, default status removed
- Loans transferred to new servicer
- Choose new repayment plan

---

## Recovery Path 2: Loan Consolidation

### What It Is
Combine your defaulted loans into a **Direct Consolidation Loan** to immediately exit default.

### Key Benefits
- ✅ **Immediate default removal**
- ✅ **Fast** (no 9-month waiting period)
- ✅ **Single payment** instead of multiple

### The Trade-offs
- ❌ **Default remains on credit report** (7 years)
- ❌ **Collection fees added** to balance
- ❌ **Higher balance** (interest + fees capitalized)

### Consolidation Process

**Step 1: Apply at StudentAid.gov**
- Select "Direct Consolidation Loan"
- Include defaulted loans

**Step 2: Choose Repayment Plan**
- Must select **income-driven plan** (IDR)
- Or agree to **reasonable payments**

**Step 3: Consolidation Complete**
- Default status removed
- New servicer assigned
- Choose IDR plan

---

## Rehabilitation vs Consolidation: Which Is Better?

### Choose Rehabilitation If:
- You want **default removed from credit report**
- You have **9 months** to complete process
- You want **collection fees waived**
- You haven't rehabilitated before

### Choose Consolidation If:
- You need **immediate relief** (wage garnishment, tax offset)
- You don't care about credit report (default already reported)
- You want **faster resolution**
- You've already rehabilitated once

---

## Special Situations

### Total and Permanent Disability Discharge
- If you're **permanently disabled**, loans may be discharged
- Apply via [StudentAid.gov](https://studentaid.gov)
- **VA documentation** or **physician certification** required
- **All federal loans** eligible

### Borrower Defense to Repayment
- If your school **misled you** or violated state law
- Loans may be **discharged**
- Application via [StudentAid.gov](https://studentaid.gov)
- **Documentation of fraud** required

### Closed School Discharge
- If your school **closed while enrolled**
- **100% discharge** if you didn't complete program
- **Partial discharge** if you didn't receive all coursework

### Bankruptcy
- **Very difficult** but not impossible
- Must prove **undue hardship**
- Requires **adversary proceeding** in bankruptcy court
- **Success rate <1%** of cases

---

## Fresh Start Program (2022-2024)

### What It Was
The **Fresh Start** initiative helped borrowers in default recover from pandemic-era default.

### Benefits (No Longer Available)
- ✅ Automatic **default removal**
- ✅ **Transfer** to new servicer
- ✅ **Access to IDR plans** immediately
- ✅ **No rehabilitation required**

### Current Status
Program ended in **2024**, but borrowers who received Fresh Start:
- Were transferred to new servicers
- Regained access to IDR plans
- Can now pursue **PSLF** with payment count adjustments

---

## Preventing Future Default

### 1. Enroll in IDR Plan
- **PAYE/IBR/SAVE**: Payments based on income
- **$0 payments** if income is very low
- **Forgiveness** after 20-25 years

### 2. Switch to Graduated Repayment
- **Lower initial payments**
- **Increases over time** as income grows
- **Better than default**

### 3. Apply for Deferment/Forbearance
- **Unemployment deferment**: Up to 3 years
- **Economic hardship deferment**: Up to 3 years
- **General forbearance**: Up to 12 months

### 4. Consolidate Early
- **Before default** (270 days past due)
- **Simplifies payments** into one
- **Access to IDR plans**

---

## Real-World Timeline

### Rehabilitation Path
- **Day 1**: Contact loan holder
- **Month 1**: Payment 1 (agreement reached)
- **Month 2**: Payment 2
- **Month 3**: Payment 3
- **...**
- **Month 10**: Payment 9 (complete)
- **Month 11**: Default removed, transferred to new servicer
- **Month 12**: Choose IDR plan, get back on track

### Consolidation Path
- **Day 1**: Submit consolidation application
- **Week 4-6**: Consolidation complete
- **Week 6**: Choose IDR plan

---

## Bottom Line

**Default isn't the end**, but you must act:

- **Rehabilitation**: Best for credit recovery (9 months)
- **Consolidation**: Fastest option (4-6 weeks)
- **Both options**: Restore access to IDR and PSLF
- **Avoid waiting**: Wage garnishment can start anytime

> **Start the process immediately**. The longer you wait, the more you'll pay in collection fees and garnished wages.

---

**Need help calculating post-rehabilitation payments?** Use our [IDR Calculator](/income-driven-repayment-calculator) to see your options once you're out of default.
    `,
  },
  'deferment-vs-forbearance': {
    title: 'Deferment vs Forbearance: When to Use Each Option',
    date: '2025-03-10',
    excerpt: 'Understand the differences between student loan deferment and forbearance to make the right choice for your situation.',
    content: `
# Deferment vs Forbearance: When to Use Each Option

When you can't make student loan payments, two main options pause your obligation: **deferment** and **forbearance**. Here's how they differ and when to use each.

---

## Quick Comparison

| Feature | Deferment | Forbearance |
|---------|-----------|-------------|
| **Who pays interest?** | Gov't pays (subsidized) | YOU pay always |
| **Eligibility** | Strict requirements | Easy to get |
| **Duration** | Varies by type | Up to 12 months |
| **Best for** | Specific situations | Temporary hardship |

---

## What Is Deferment?

### Definition
A temporary **pause on loan payments** where the government may pay interest on subsidized loans.

### Types of Deferment

#### 1. Unemployment Deferment
- **Duration**: Up to 3 years
- **Eligibility**: Unemployed or underemployed (working <30 hrs/week)
- **Documentation**: Proof of unemployment benefits
- **Best for**: Job loss or reduced hours

#### 2. Economic Hardship Deferment
- **Duration**: Up to 3 years
- **Eligibility**: Receiving public assistance OR
  - Monthly income <150% of poverty guideline
  - Peace Corps service
- **Best for**: Low income, public assistance recipients

#### 3. In-School Deferment
- **Duration**: While enrolled at least half-time
- **Eligibility**: Enrolled in college/graduate school
- **Documentation**: Enrollment verification
- **Best for**: Returning to school

#### 4. Graduate Fellowship Deferment
- **Duration**: During fellowship program
- **Eligibility**: Graduate fellowship program
- **Best for**: Graduate students

#### 5. Military Service Deferment
- **Duration**: During active duty + 13 months
- **Eligibility**: Active duty military
- **Best for**: Service members

#### 6. Cancer Treatment Deferment
- **Duration**: During treatment
- **Eligibility**: Undergoing cancer treatment
- **Best for**: Medical treatment

---

## What Is Forbearance?

### Definition
A temporary **pause or reduction** of payments where **YOU pay all interest** that accrues.

### Types of Forbearance

#### 1. General Forbearance
- **Duration**: Up to 12 months at a time, 3 years total
- **Eligibility**: Financial hardship, medical expenses, other acceptable reasons
- **Documentation**: Proof of hardship (optional but recommended)
- **Best for**: Temporary financial difficulty

#### 2. Mandatory Forbearance
- **Duration**: Up to 12 months at a time
- **Eligibility** (servicer MUST grant if you qualify):
  - Monthly payment >20% of monthly income
  - Medical/dental expenses >20% of income
  - Serving in AmeriCorps/Peace Corps
  - Teaching in qualifying low-income school
  - Department of Defense repayment
- **Best for**: High debt-to-income ratio

#### 3. Administrative Forbearance
- **Duration**: Varies
- **Eligibility**: Servicer discretion
- **Best for**: Processing delays, disasters

---

## Interest Costs: The Critical Difference

### Subsidized Loans (Deferment)
- **Government pays interest** during deferment
- **No extra cost** to you
- **Best option** if eligible

### Unsubsidized Loans (Deferment or Forbearance)
- **YOU pay all interest**
- **Interest capitalizes** (added to principal)
- **Balance grows** even while paused

### Interest Capitalization Example
- Starting balance: $30,000
- Interest rate: 6%
- Interest accrued during 1-year forbearance: $1,800
- New balance after forbearance: $31,800

> **Capitalization means you pay interest on interest** going forward.

---

## When to Choose Deferment

### Choose Deferment If You:
- Have **subsidized loans** (government pays interest)
- Are **unemployed** or **underemployed**
- Are **returning to school**
- Have a **specific qualifying reason** (military, medical, etc.)
- Want **longer protection** (up to 3 years)

### Deferment Application Process
1. Contact your **loan servicer**
2. Request **specific deferment type**
3. Submit **documentation** (employment, enrollment, etc.)
4. Wait for **approval** (typically 2-4 weeks)

---

## When to Choose Forbearance

### Choose Forbearance If You:
- Don't qualify for deferment
- Need **quick approval** (easier to get)
- Have **short-term hardship** (<12 months)
- Can't provide documentation
- Want **payment reduction** (not just pause)

### Forbearance Application Process
1. Contact your **loan servicer**
2. Request **forbearance** (general or mandatory)
3. Explain hardship (briefly)
4. Get **approval** (often immediate)

---

## Better Alternatives to Consider

### 1. Income-Driven Repayment (IDR)
- **$0 payments** if income is low enough
- **Interest subsidies** (SAVE plan)
- **Forgiveness** after 20-25 years
- **Better than deferment/forbearance** for most

### 2. Graduated Repayment
- **Lower initial payments**
- **Increases over time**
- **No pause required**

### 3. Extended Repayment
- **25-year term** for loans >$30,000
- **Lower monthly payments**
- **Fixed or graduated**

---

## Real-World Scenarios

### Scenario 1: Laid Off, $25,000 Subsidized Loans
- **Best option**: **Unemployment deferment**
- **Why**: Government pays interest on subsidized loans
- **Duration**: Up to 3 years while job searching

### Scenario 2: Medical Emergency, $50,000 Unsubsidized Loans
- **Best option**: **IDR plan** (if income low) OR **general forbearance**
- **Why**: IDR offers $0 payments + forgiveness path
- **Duration**: IDR until recovery

### Scenario 3: Returning to Graduate School
- **Best option**: **In-school deferment**
- **Why**: Automatic while enrolled
- **Duration**: Throughout program

### Scenario 4: Temporary Income Drop (3 Months)
- **Best option**: **General forbearance**
- **Why**: Quick approval, short-term solution
- **Duration**: 3 months (then resume payments)

---

## How to Apply

### Step 1: Contact Your Servicer
- Log in to your **servicer website**
- Call **customer service**
- Request **deferment or forbearance**

### Step 2: Complete Application
- **Online form** (most servicers)
- **Paper form** (if preferred)
- **Documentation** (for deferment)

### Step 3: Wait for Approval
- **Deferment**: 2-4 weeks
- **Forbearance**: Often immediate
- **Confirmation**: Email or letter

### Step 4: Resume Payments
- **End date** specified in approval
- **Contact servicer** if still struggling
- **Consider IDR** if hardship continues

---

## Common Mistakes to Avoid

❌ **Using forbearance when you qualify for deferment**
- Deferment is cheaper for subsidized loans

❌ **Ignoring interest capitalization**
- Your balance grows even while paused

❌ **Not exploring IDR options**
- IDR offers $0 payments + forgiveness

❌ **Waiting until you miss payments**
- Apply BEFORE due date to avoid delinquency

❌ **Assuming automatic renewal**
- Most deferments/forbearances require renewal

---

## Bottom Line

**Deferment** is best if you have **subsidized loans** or qualify for specific reasons (unemployment, school, military).

**Forbearance** is easier to get but **more expensive** (you pay all interest).

**IDR plans** are usually better than either option for long-term hardship.

> **Apply for deferment/forbearance BEFORE missing payments**. Once you're delinquent, options narrow.

---

**Exploring your options?** Use our [IDR Calculator](/income-driven-repayment-calculator) to see if income-driven repayment might be better than deferment or forbearance.
    `,
  },
  'student-loan-forgiveness-programs': {
    title: 'Student Loan Forgiveness Programs: Complete Guide',
    date: '2025-02-28',
    excerpt: 'Explore all student loan forgiveness programs from PSLF to IDR forgiveness and borrower options.',
    content: `
# Student Loan forgiveness Programs: Complete Guide

Student loan forgiveness can **eliminate your remaining balance** after meeting specific requirements. Here's every major program explained.

---

## Major Forgiveness Programs

### 1. Public Service Loan Forgiveness (PSLF)
- **Forgiveness amount**: **100%** of remaining balance
- **Timeline**: 120 qualifying payments (10 years)
- **Employment requirement**: Government or 501(c)(3) nonprofit
- **Best for**: Public sector employees

### 2. IDR Forgiveness (SAVE, PAYE, IBR, ICR)
- **Forgiveness amount**: 100% of remaining balance
- **Timeline**: 20-25 years of payments
- **Employment requirement**: **None** (any job)
- **Best for**: High debt-to-income borrowers

### 3. Teacher Loan Forgiveness
- **Forgiveness amount**: Up to **$17,500**
- **Timeline**: 5 consecutive years
- **Employment requirement**: Low-income school
- **Best for**: Teachers in high-need fields

### 4. Perkins Loan Cancellation
- **Forgiveness amount**: **100%** of Perkins loans
- **Timeline**: Up to 5 years
- **Employment requirement**: Teaching, public service, etc.
- **Best for**: Perkins loan borrowers

### 5. Closed School Discharge
- **Forgiveness amount**: **100%**
- **Timeline**: Immediate
- **Requirement**: School closed while enrolled
- **Best for**: Students at closed schools

---

## Public Service Loan Forgiveness (PSLF)

### Requirements
- ✅ **Direct Loans** (consolidate FFEL/Perkins if needed)
- ✅ **120 qualifying monthly payments**
- ✅ **Full-time employment** (30+ hrs/week)
- ✅ **Government or 501(c)(3) nonprofit**
- ✅ **IDR repayment plan** (SAVE, PAYE, IBR, ICR)

### What Counts as Qualifying Employment
- **Federal, state, local government** agencies
- **501(c)(3) nonprofit organizations**
- **Public service organizations** (Peace Corps, AmeriCorps)
- **Public universities/colleges**

### Payment Tracking
- **Submit PSLF form annually** (or when changing jobs)
- **Employment Certification Form** via [StudentAid.gov](https://studentaid.gov/pslf)
- **Servicer tracks** qualifying payments
- **Check payment count** regularly

### Common Mistakes
- ❌ Wrong repayment plan (standard/graduated don't qualify)
- ❌ Missing payments (late payments don't count)
- ❌ Not certifying employment (can't track progress)
- ❌ Wrong loan type (FFEL/Perkins need consolidation)

### IDR Account Adjustment (2024)
- **Past payments** may now count toward PSLF
- **Check payment count** at StudentAid.gov
- **Many borrowers closer** to forgiveness than expected

---

## IDR Forgiveness

### Plans and Timelines
| Plan | Forgiveness Timeline |
|------|---------------------|
| SAVE | 10-20 years |
| PAYE | 20 years |
| IBR | 20-25 years |
| ICR | 25 years |

### SAVE Plan Special Rules
- **10 years**: If original loan balance <$12,000 (plus $1,000 per additional $1,000 borrowed)
- **20 years**: All other borrowers
- **Interest subsidy**: 100% of unpaid interest covered

### Tax Implications
- **Through 2025**: IDR forgiveness is **tax-free**
- **After 2025**: May be **taxable** (law expires)
- **Plan ahead**: Could face large tax bill

### Who Benefits Most
- **High debt-to-income ratio**
- **Graduate/professional degrees**
- **Not eligible for PSLF**

---

## Teacher Loan Forgiveness

### Eligibility
- **Full-time teacher** for 5 consecutive years
- **Low-income school** (title I directory)
- **Highly qualified** in state

### Forgiveness Amounts
- **Up to $5,000**: General education teachers
- **Up to $17,500**: Math/science/special education in high-need schools

### Requirements
- **Not in default** on loans
- **Made on-time payments**
- **Loans after 1998**
- **Direct Loans or FFEL** (subsidized/unsubsidized)

### Can Combine with PSLF?
- **Yes, but carefully**
- Teacher forgiveness years **don't count** toward PSLF
- Choose one program per payment period

---

## Perkins Loan Cancellation

### Cancellation Rates
- **15%** per year (years 1-2)
- **20%** per year (years 3-4)
- **30%** year 5
- **100%** after 5 years

### Eligible Professions
- Teachers (low-income schools, special ed)
- Firefighters
- Law enforcement
- Nurses/medical technicians
- Librarians (low-income schools)
- Public defense attorneys

### Special Cases
- **100% cancellation**: Death or total disability
- **50% cancellation**: Volunteer service (Peace Corps, AmeriCorps)

---

## Other Discharge Programs

### Total and Permanent Disability Discharge
- **100% forgiveness**
- **VA certification** OR **physician certification**
- **3-year monitoring period**
- Apply via [StudentAid.gov](https://studentaid.gov)

### Borrower Defense to Repayment
- **100% forgiveness**
- **School misconduct** (fraud, misrepresentation)
- **Documentation required**
- Apply via [StudentAid.gov](https://studentaid.gov)

### False Certification Discharge
- **100% forgiveness**
- **Identity theft** OR
- ** ineligible borrower** (no high school diploma)
- Apply via [StudentAid.gov](https://studentaid.gov)

### Unpaid Refund Discharge
- **100% forgiveness** of amount school should have refunded
- **School closed** OR
- **Withdrawal** but school didn't refund

---

## Strategic Program Selection

### If You Work in Public Service
- **PSLF** is your best bet (10-year forgiveness)
- **Combine with IDR** for lowest payments
- **Submit employment form** annually

### If You're a Teacher
- **Teacher Loan Forgiveness** ($5,000-$17,500 after 5 years)
- **PSLF** (100% after 10 years)
- **Can use both** (but not for same years)

### If You Have High Debt-to-Income
- **IDR forgiveness** (20-25 years)
- **SAVE plan** (most generous, when available)
- **PSLF** if public sector (faster)

### If You Have Perkins Loans
- **Perkins cancellation** (up to 100% in 5 years)
- **Consolidate carefully** (loses Perkins benefits)

---

## Application Process

### Step 1: Verify Eligibility
- Check **loan type** (Direct Loans for PSLF)
- Check **employment** (qualifying employer for PSLF)
- Check **repayment plan** (IDR required for PSLF)

### Step 2: Choose Program
- **PSLF**: Submit employment certification
- **IDR**: Enroll in IDR plan
- **Teacher**: Complete Teacher Loan Forgiveness application
- **Perkins**: Apply through school or servicer

### Step 3: Track Progress
- **PSLF**: Check payment count at StudentAid.gov
- **IDR**: Track years in repayment
- **Certify employment** annually

### Step 4: Apply for Forgiveness
- **PSLF**: After 120 payments
- **IDR**: After 20-25 years
- **Teacher**: After 5 years
- **Perkins**: After each year (pro-rated)

---

## Tax Considerations

### Tax-Free Forgiveness
- ✅ **PSLF** (always tax-free)
- ✅ **IDR forgiveness** (through 2025)
- ✅ **Total disability discharge**

### Potentially Taxable
- ⚠️ **IDR forgiveness** (after 2025)
- ⚠️ **Perkins cancellation** (if not employment-related)

### Plan Ahead
- **Save for tax bill** if forgiveness after 2025
- **Consult tax professional**
- **Consider tax implications** in forgiveness planning

---

## Common Mistakes

❌ **Wrong repayment plan for PSLF**
- Standard/graduated plans **don't qualify**

❌ **Not certifying employment**
- Can't track progress without PSLF forms

❌ **Consolidating without understanding impact**
- **Resets PSLF clock** to zero
- **Loses Perkins cancellation** benefits

❌ **Assuming automatic forgiveness**
- Must **submit application** when eligible

❌ **Missing payments**
- **Late payments don't count** toward 120

---

## Bottom Line

**PSLF** = Public service employees (10 years)
**IDR Forgiveness** = High debt-to-income (20-25 years)
**Teacher Programs** = Educators (5 years, $17,500 max)
**Perkins Cancellation** = Specific professions (5 years)

> **Track your payments carefully** and submit required forms annually. Many borrowers lose forgiveness due to paperwork errors.

---

**Calculate your forgiveness timeline:** Use our [PSLF Calculator](/pslf-calculator) or [IDR Calculator](/income-driven-repayment-calculator) to estimate your path to forgiveness.
    `,
  },
  'student-loan-consolidation-guide': {
    title: 'Student Loan Consolidation Guide: When and How to Consolidate',
    date: '2025-02-15',
    excerpt: 'Complete guide to federal student loan consolidation, including when it makes sense, the process, and what to watch out for.',
    content: `
# Student Loan Consolidation Guide: When and How to Consolidate

Student loan consolidation combines multiple federal loans into one Direct Consolidation Loan. Here's when it helps and when it hurts.

---

## What Is Direct Consolidation?

A **Direct Consolidation Loan** combines your federal student loans into one loan with one servicer and one monthly payment.

### What It Does
- Combines multiple loans into one
- Simplifies to one monthly payment
- Fixed interest rate (weighted average + 0.125%)
- Resets repayment clock to zero

### What It Doesn't Do
- Lower your interest rate
- Reduce your total balance
- Remove late payment history from credit report

---

## When Consolidation Makes Sense

### 1. You Have FFEL or Perkins Loans

**Best Reason**: Consolidation is required to make FFEL and Perkins loans eligible for PSLF.

- **Without consolidation**: Ineligible for PSLF
- **With consolidation**: Eligible for PSLF (after enrolling in IDR)

### 2. You Want to Switch Repayment Plans

Some loans (like older FFEL loans) can't access IDR plans until consolidated.

- Consolidate → Enroll in SAVE/PAYE/IBR/ICR → Get lower payments

### 3. You're in Default and Want Rehabilitation

Consolidation can immediately exit default (faster than 9-month rehabilitation).

### 4. You Want Simplified Payments

If you have 8+ loans with different servicers, consolidation simplifies to one payment.

---

## When Consolidation Hurts

### 1. You're Close to PSLF Forgiveness

**Danger**: Consolidation **resets your payment count to zero**.

- If you have 100+ qualifying payments, DON'T consolidate
- You'll lose all progress toward forgiveness

### 2. You Have Low Interest Rates

Consolidation's rounded-up rate might increase your overall rate.

- Example: 6.8% and 7.2% → weighted average 7.01% → **7.13%** after rounding

### 3. You Want Perks or Benefits

Some loans have benefits lost through consolidation:
- Interest rate discounts
- Principal rebates
- Loan cancellation benefits (Perkins)

---

## Consolidation Process

### Step 1: Review Your Loans

Log in to [StudentAid.gov](https://studentaid.gov) and review:
- Loan types (Direct, FFEL, Perkins)
- Current servicers
- Interest rates
- Balances

### Step 2: Apply Online

1. Go to [StudentAid.gov](https://studentaid.gov)
2. Select "Complete Consolidation Loan Application"
3. Choose loans to consolidate (or select all)
4. Select repayment plan (IDR recommended)
5. Review and submit

### Step 3: Wait for Processing

- **Processing time**: 4-8 weeks
- During processing: Continue making payments on old loans
- After consolidation: New servicer contacts you

### Step 4: Enroll in IDR Plan

After consolidation, enroll in SAVE, PAYE, IBR, or ICR for income-driven payments.

---

## Interest Rate Calculation

Your new rate is the **weighted average** of your loans, rounded up to the nearest 0.125%.

### Example Calculation

**Loan A**: $10,000 at 6.8%
**Loan B**: $20,000 at 7.2%
**Loan C**: $5,000 at 5.0%

**Weighted average**:
- (10,000 × 6.8% + 20,000 × 7.2% + 5,000 × 5.0%) / 35,000
- = (680 + 1,440 + 250) / 35,000
- = 2,370 / 35,000
- = 6.77%

**After rounding**: **6.875%** (rounded up to 6.875%)

---

## Bottom Line

**Consolidate if**:
- You have FFEL/Perkins loans and want PSLF
- You need IDR access but can't get it
- You want simplified payments
- You're rehabilitating from default

**Don't consolidate if**:
- You're close to PSLF forgiveness
- You have low interest rates that might increase
- You have loan-specific benefits you'd lose

> **Calculate your new rate before consolidating** to ensure it doesn't increase significantly.

---

**Ready to consolidate?** Use our [IDR Calculator](/income-driven-repayment-calculator) to see your post-consolidation payments under different plans.
    `,
  },
  'married-borrowers-repayment-strategy': {
    title: 'Married Borrowers: Student Loan Repayment Strategies',
    date: '2025-02-01',
    excerpt: 'How marriage affects student loan repayment, from tax filing strategies to IDR plan options for married couples.',
    content: `
# Married Borrowers: Student Loan Repayment Strategies

Marriage changes your student loan repayment options. Here's how to optimize your strategy as a married borrower.

---

## How Marriage Affects IDR Payments

### The Big Picture

Your spouse's income affects your IDR payments **unless** you file taxes separately.

### Plans That Allow Spouse Exclusion

**PAYE, IBR, and SAVE**: Can exclude spouse income if filing separately
- **Joint filing**: Spouse income counted
- **Separate filing**: Spouse income excluded

**ICR**: Always counts spouse income
- No exclusion available

---

## Tax Filing Strategies

### Filing Jointly

**Advantages**:
- Lower overall tax rate (usually)
- Higher standard deduction
- Eligible for more tax credits
- Simplified filing

**Disadvantages**:
- Higher IDR payments (spouse income counted)
- Both spouses responsible for tax debt

**Best for**: Couples with similar incomes or where joint filing provides significant tax benefits.

### Filing Separately

**Advantages**:
- Lower IDR payments (spouse income excluded)
- Only responsible for your own tax debt
- Protection from spouse's tax issues

**Disadvantages**:
- Higher overall tax rate (usually)
- Lower standard deduction
- Ineligible for some tax credits
- More complex filing

**Best for**: One spouse has high income and loans, other has low/no income.

---

## Payment Comparison Example

**Scenario**:
- **Borrower**: $50,000 income, $75,000 loans
- **Spouse**: $150,000 income, $0 loans
- **Family size**: 2

### PAYE Plan

**Joint Filing**:
- Combined income: $200,000
- Discretionary income: ~$91,000
- Monthly payment: **~$758**

**Separate Filing**:
- Your income: $50,000
- Your discretionary income: ~$8,000
- Monthly payment: **~$67**

**Savings**: $691/month by filing separately

---

## Bottom Line

**File jointly if**:
- Tax savings exceed payment increase
- Both have similar incomes
- Not pursuing IDR or PSLF

**File separately if**:
- Payment savings exceed tax cost
- One spouse has high income, other has loans
- Pursuing IDR or PSLF with high debt-to-income ratio

> **Calculate both scenarios** before choosing. The "right" choice depends on your specific income, debt, and tax situation.

---

**Calculate your payments as a married borrower:** Use our [IDR Calculator](/income-driven-repayment-calculator) to compare joint vs. separate filing scenarios.
    `,
  },
  'student-loan-tax-implications': {
    title: 'Student Loan Tax Implications: What You Need to Know',
    date: '2025-01-20',
    excerpt: 'Understanding the tax consequences of student loan forgiveness, interest deductions, and employer repayment assistance.',
    content: `
# Student Loan Tax Implications: What You Need to Know

Student loans have significant tax implications, from interest deductions to forgiveness taxation. Here's what you need to know.

---

## Student Loan Interest Deduction

### Current Status (2024)

**Important**: The student loan interest deduction is set to expire after 2025 unless Congress extends it.

### How It Works

- **Maximum deduction**: $2,500 per year
- **Income limits**: Phase-out begins at $70,000 single ($140,000 joint)
- **Complete phase-out**: $85,000 single ($170,000 joint)
- **Loan types**: Federal and private student loans

---

## Taxation of Forgiven Debt

### PSLF Forgiveness

**Tax-free**: PSLF forgiveness is **always tax-free** under current law.

- No tax on any amount forgiven
- No income reported to IRS
- No surprise tax bill

### IDR Forgiveness

**Through 2025**: IDR forgiveness is **tax-free** due to temporary legislation.

**After 2025**: IDR forgiveness **may be taxable** unless Congress extends the exemption.

**Potential Tax Impact**:
- Forgive $50,000 → Could add $50,000 to taxable income
- Tax bracket impact: Could push you into higher bracket
- State taxes: Some states don't conform to federal exemption

---

## Bottom Line

**Key dates to remember**:
- **2025**: Interest deduction expires (unless extended)
- **2025**: IDR forgiveness becomes taxable (unless extended)
- **2025**: Employer benefit becomes taxable (unless extended)

**Action items**:
- Track all interest paid
- Plan for potential IDR forgiveness tax
- Maximize employer benefits before 2025
- Consult tax professional for specific situation

> **Stay updated** on tax law changes. Congress may extend these provisions, but don't count on it.

---

**Calculate your forgiveness timeline:** Use our [IDR Calculator](/income-driven-repayment-calculator) or [PSLF Calculator](/pslf-calculator) to understand when you might face forgiveness taxation.
    `,
  },
  'recent-graduate-repayment-guide': {
    title: 'Recent Graduate Guide to Student Loan Repayment',
    date: '2025-01-10',
    excerpt: 'Complete guide for new graduates on managing student loans, from grace period to choosing the right repayment plan.',
    content: `
# Recent Graduate Guide to Student Loan Repayment

Graduating with student loans? Here's everything you need to know to manage your debt effectively from day one.

---

## Understanding Your Grace Period

### What Is the Grace Period?

**Federal loans**: 6-month period after graduation before first payment due
- **Purpose**: Time to find employment and get financially settled
- **Interest accrual**: Varies by loan type

### Grace Period by Loan Type

| Loan Type | Grace Period | Interest Accrual? |
|-----------|-------------|-------------------|
| Direct Subsidized | 6 months | No (government pays) |
| Direct Unsubsidized | 6 months | Yes (you pay) |
| PLUS Loans | No grace period | Yes (you pay) |
| Perkins Loans | 9 months | No (subsidized) |

---

## Choosing Your First Repayment Plan

### Standard 10-Year Repayment

**Best for**: Graduates with good jobs and low debt-to-income ratio

- **Pros**: Fastest payoff, least interest
- **Cons**: High payments, less flexibility

### Income-Driven Repayment (IDR)

**Best for**: High debt-to-income ratio or uncertain employment

- **Pros**: Payments based on income, forgiveness option
- **Cons**: Longer repayment, possible taxation

---

## Action Checklist

### Before Graduation
- [ ] Exit counseling (required)
- [ ] Understand all loan types
- [ ] Know grace period length
- [ ] Set up StudentAid.gov account

### Month 1-2 of Grace Period
- [ ] Choose repayment plan
- [ ] Set up autopay discount
- [ ] Create budget with loan payments
- [ ] Check PSLF eligibility

---

## Bottom Line

**Default plan**: Choose based on debt-to-income ratio
- **Low ratio (<1)**: Standard repayment
- **High ratio (>1.5)**: IDR plan
- **Public service**: IDR + PSLF

**Most important**:
- Never miss payments
- Choose right plan early
- Reassess as income changes

> **Start planning before grace period ends**. The right repayment strategy saves thousands over the life of your loans.

---

**Calculate your payments:** Use our [Payment Calculator](/student-loan-payment-calculator) to compare repayment options, or [IDR Calculator](/income-driven-repayment-calculator) to see income-driven plans.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | RepaymentGuide Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

// Markdown parser components
function parseMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let inList = false;
  let tableRows: string[][] = [];
  let inTable = false;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-2 my-4">
          {currentList.map((item, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">
              {parseInline(item.replace(/^\d+\.\s*/, '').replace(/^-\s*/, '').replace(/^\*+/, '').trim())}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-6 border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableRows[0]?.map((cell, i) => (
                  <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableRows.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-sm text-gray-700">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
  };

  lines.forEach((line, index) => {
    // Code block
    if (line.startsWith('```')) {
      flushList();
      flushTable();
      // Simple code block handling - skip for now
      return;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      flushList();
      flushTable();
      elements.push(
        <blockquote key={index} className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-primary-50 italic text-gray-700">
          {parseInline(line.slice(2))}
        </blockquote>
      );
      return;
    }

    // Horizontal rule
    if (line.match(/^---+$/)) {
      flushList();
      flushTable();
      elements.push(<hr key={index} className="my-8 border-gray-300" />);
      return;
    }

    // Headers
    if (line.startsWith('### ')) {
      flushList();
      flushTable();
      elements.push(
        <h3 key={index} className="text-xl font-semibold mt-8 mb-4 text-gray-900">
          {parseInline(line.slice(4))}
        </h3>
      );
      return;
    }

    if (line.startsWith('## ')) {
      flushList();
      flushTable();
      elements.push(
        <h2 key={index} className="text-2xl font-bold mt-10 mb-5 text-gray-900">
          {parseInline(line.slice(3))}
        </h2>
      );
      return;
    }

    if (line.startsWith('# ')) {
      flushList();
      flushTable();
      elements.push(
        <h1 key={index} className="text-3xl font-bold mt-12 mb-6 text-gray-900">
          {parseInline(line.slice(2))}
        </h1>
      );
      return;
    }

    // Table
    if (line.includes('|')) {
      if (!inTable) {
        flushList();
        inTable = true;
      }
      const cells = line.split('|').filter(c => c.trim() || c === '');
      if (cells.length > 1) {
        tableRows.push(cells);
      }
      return;
    }

    if (inTable && line.trim() === '') {
      flushTable();
      inTable = false;
      return;
    }

    // List items
    if (line.match(/^\s*[-*+]\s/) || line.match(/^\s*\d+\.\s/)) {
      if (!inList) {
        inList = true;
      }
      currentList.push(line);
      return;
    }

    // Regular paragraph
    if (inList) {
      flushList();
      inList = false;
    }
    if (inTable) {
      flushTable();
      inTable = false;
    }

    if (line.trim()) {
      elements.push(
        <p key={index} className="text-gray-700 leading-relaxed my-4">
          {parseInline(line)}
        </p>
      );
    }
  });

  // Flush remaining content
  flushList();
  flushTable();

  return elements;
}

function parseInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining) {
    // Bold
    const boldMatch = remaining.match(/^(.*?)\*\*(.+?)\*\*(.*)/);
    if (boldMatch) {
      parts.push(<span key={key++}>{boldMatch[1]}</span>);
      parts.push(<strong key={key++} className="font-semibold text-gray-900">{boldMatch[2]}</strong>);
      remaining = boldMatch[3];
      continue;
    }

    // Italic
    const italicMatch = remaining.match(/^(.*?)_(.+?)_(.*)/);
    if (italicMatch) {
      parts.push(<span key={key++}>{italicMatch[1]}</span>);
      parts.push(<em key={key++} className="italic">{italicMatch[2]}</em>);
      remaining = italicMatch[3];
      continue;
    }

    // Inline code
    const codeMatch = remaining.match(/^(.*?)`(.+?)`(.*)/);
    if (codeMatch) {
      parts.push(<span key={key++}>{codeMatch[1]}</span>);
      parts.push(<code key={key++} className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-red-600">{codeMatch[2]}</code>);
      remaining = codeMatch[3];
      continue;
    }

    // Links
    const linkMatch = remaining.match(/^(.*?)\[(.+?)\]\((.+?)\)(.*)/);
    if (linkMatch) {
      parts.push(<span key={key++}>{linkMatch[1]}</span>);
      parts.push(
        <a key={key++} href={linkMatch[3]} className="text-primary-600 hover:text-primary-700 underline font-medium" target="_blank" rel="noopener noreferrer">
          {linkMatch[2]}
        </a>
      );
      remaining = linkMatch[4];
      continue;
    }

    // No more special formatting
    parts.push(<span key={key++}>{remaining}</span>);
    break;
  }

  return <>{parts}</>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
            <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([s]) => s !== slug)
    .slice(0, 2);

  const articleUrl = `https://repaymentguide.com/blog/${slug}`;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        date={post.date}
        url={articleUrl}
      />
      <Header />
      <article className="flex-1">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src={getBlogImage(slug)}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/75 to-primary-800/75" />
          </div>

          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <Link href="/blog" className="inline-flex items-center text-white hover:text-white/80 font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-white/90">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {parseMarkdown(post.content)}
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to optimize your repayment?</h3>
              <p className="text-primary-100 mb-6">Use our free calculators to find your best plan and estimate your savings.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/income-driven-repayment-calculator" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
                  Compare IDR Plans
                </Link>
                <Link href="/pslf-calculator" className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition text-center">
                  Check PSLF Eligibility
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map(([relatedSlug, relatedPost]) => (
                    <Link key={relatedSlug} href={`/blog/${relatedSlug}`} className="block bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
                      <div className="relative h-40">
                        <Image
                          src={getBlogImage(relatedSlug)}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-2 text-gray-900">{relatedPost.title}</h4>
                        <p className="text-gray-600 mb-3">{relatedPost.excerpt}</p>
                        <span className="text-sm text-primary-600 font-medium">Read more →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
