'use client';

import { useMemo, useState } from 'react';

function addCalendarDays(dateValue: string, days: number): Date | null {
  if (!dateValue) return null;
  const date = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(date.getTime())) return null;
  date.setDate(date.getDate() + days);
  return date;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

function formatShortDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export default function SaveDeadlineCalculator() {
  const [noticeDate, setNoticeDate] = useState('2026-07-01');
  const [windowDays, setWindowDays] = useState('90');

  const result = useMemo(() => {
    const days = Number.parseInt(windowDays, 10) || 90;
    const deadline = addCalendarDays(noticeDate, days);
    const reminder45 = addCalendarDays(noticeDate, Math.max(0, days - 45));
    const reminder14 = addCalendarDays(noticeDate, Math.max(0, days - 14));
    const reminder7 = addCalendarDays(noticeDate, Math.max(0, days - 7));

    return { days, deadline, reminder45, reminder14, reminder7 };
  }, [noticeDate, windowDays]);

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">Calculate your SAVE transition deadline</h2>
          <p className="mb-6 text-gray-600">
            Enter the date your servicer notice was sent. If your notice gives a specific due date, use that date as the final authority.
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="noticeDate" className="mb-2 block text-sm font-medium text-gray-700">
                Servicer notice sent date
              </label>
              <input
                id="noticeDate"
                type="date"
                value={noticeDate}
                onChange={(event) => setNoticeDate(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="windowDays" className="mb-2 block text-sm font-medium text-gray-700">
                Response window in calendar days
              </label>
              <select
                id="windowDays"
                value={windowDays}
                onChange={(event) => setWindowDays(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
              >
                <option value="90">90 days</option>
                <option value="60">60 days</option>
                <option value="45">45 days</option>
                <option value="30">30 days</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-primary-50 p-6">
          {result.deadline ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Estimated deadline</p>
              <p className="mt-2 text-3xl font-bold text-primary-950">{formatDate(result.deadline)}</p>
              <p className="mt-3 text-sm text-primary-900">
                This is {result.days} calendar days after the notice date. Servicer-provided due dates override this estimate.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { label: 'Compare repayment plans by', date: result.reminder45 },
                  { label: 'Submit your plan choice by', date: result.reminder14 },
                  { label: 'Verify servicer processing by', date: result.reminder7 },
                ].map((item) => (
                  item.date && (
                    <div key={item.label} className="rounded-lg bg-white p-4 ring-1 ring-primary-100">
                      <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                      <p className="text-gray-700">{formatShortDate(item.date)}</p>
                    </div>
                  )
                ))}
              </div>
            </>
          ) : (
            <p className="text-gray-700">Enter a notice date to calculate your planning timeline.</p>
          )}
        </div>
      </div>
    </div>
  );
}
