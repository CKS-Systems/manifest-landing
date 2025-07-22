export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Debug function to check if GA is loaded
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && !!window.gtag && !!GA_TRACKING_ID;
};

// Debug function to log GA status
export const debugGA = () => {
  if (typeof window !== 'undefined') {
    console.log('GA Debug:', {
      gtag: !!window.gtag,
      trackingId: GA_TRACKING_ID,
      dataLayer: window.dataLayer?.length || 0,
      loaded: isGALoaded(),
    });
  }
};

// Declare gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track CTA button clicks
export const trackCTA = (buttonName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'landing_page',
    label: `${buttonName}_${location}`,
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  event({
    action: 'section_view',
    category: 'landing_page',
    label: sectionName,
  });
};