/**
 * GA4 Analytics Setup & Tracking
 * JOUR 5 Implementation: Core events + UTM tracking
 * 
 * Required setup:
 * 1. Add GA_ID env var: "G-XXXXXXXXXXXX" (from GA4 property)
 * 2. Deploy gtag in _app.tsx or layout.tsx
 * 3. Track 4 core events: signup_source, checkin_completed, subscription_started, meditation_started
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Core tracking functions
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

// Track signup with source attribution (Reddit, Creator, Direct)
export const trackSignup = (source: string, variant?: string) => {
  const utmSource = new URLSearchParams(window.location.search).get('utm_source') || source || 'direct';
  
  trackEvent('signup_source', {
    utm_source: utmSource,
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'organic',
    variant: variant || 'control',
    timestamp: new Date().toISOString(),
  });

  // Store in localStorage for Week 1 manual export
  const signups = JSON.parse(localStorage.getItem('signups') || '[]');
  signups.push({ source: utmSource, variant, timestamp: new Date().toISOString() });
  localStorage.setItem('signups', JSON.stringify(signups));
};

// Track check-in completion
export const trackCheckinCompleted = (streakCount: number) => {
  trackEvent('checkin_completed', {
    streak_count: streakCount,
    timestamp: new Date().toISOString(),
  });
};

// Track meditation started
export const trackMeditationStarted = (meditationId: string, meditationType: string) => {
  trackEvent('meditation_started', {
    meditation_id: meditationId,
    meditation_type: meditationType,
    timestamp: new Date().toISOString(),
  });
};

// Track subscription started (free→premium conversion)
export const trackSubscriptionStarted = (planType: string, price: number) => {
  trackEvent('subscription_started', {
    plan_type: planType,
    price: price,
    currency: 'EUR',
    timestamp: new Date().toISOString(),
  });
};

// Utility: Parse UTM parameters
export const getUTMParams = () => {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source'),
    utm_campaign: params.get('utm_campaign'),
    utm_medium: params.get('utm_medium'),
  };
};

// Type augmentation for gtag
declare global {
  interface Window {
    gtag: (command: string, id: string, config?: Record<string, any>) => void;
  }
}
