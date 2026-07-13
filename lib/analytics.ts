type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      params?: AnalyticsParams
    ) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, {
    site_area: 'repayment_tools',
    ...params,
  });
}

export function trackCalculatorAction(
  calculatorName: string,
  action: 'submit' | 'share' | 'print' | 'calendar_download',
  params: AnalyticsParams = {}
) {
  trackEvent(`calculator_${action}`, {
    calculator_name: calculatorName,
    ...params,
  });
}
