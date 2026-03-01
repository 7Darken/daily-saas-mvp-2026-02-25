/**
 * A/B Test Variant Management
 * JOUR 5 Implementation: CTA + Mobile UX A/B variants
 * 
 * Variants:
 * A: "Commencer ma série" + SE-friendly modal (stacked buttons, simple UX)
 * B: "Commencer gratuitement" + Current modal (feature-focused)
 * 
 * Assignment: Based on URL param or random split
 */

export type VariantType = 'A' | 'B';

// Get variant assignment (50/50 split, sticky per user via localStorage)
export const getVariant = (): VariantType => {
  if (typeof window === 'undefined') return 'A';

  // Check URL param first (for manual testing)
  const urlParams = new URLSearchParams(window.location.search);
  const urlVariant = urlParams.get('variant') as VariantType;
  if (urlVariant && ['A', 'B'].includes(urlVariant)) {
    return urlVariant;
  }

  // Check localStorage for sticky assignment
  const storedVariant = localStorage.getItem('ab_variant') as VariantType | null;
  if (storedVariant) {
    return storedVariant;
  }

  // Random 50/50 assignment
  const randomVariant: VariantType = Math.random() > 0.5 ? 'A' : 'B';
  localStorage.setItem('ab_variant', randomVariant);
  localStorage.setItem('ab_variant_timestamp', new Date().toISOString());

  return randomVariant;
};

// Get variant-specific CTA text
export const getCTAText = (variant: VariantType): string => {
  return variant === 'A' 
    ? 'Commencer ma série' 
    : 'Commencer gratuitement';
};

// Get variant-specific CTA description
export const getCTADescription = (variant: VariantType): string => {
  return variant === 'A'
    ? 'Débute ta habitude quotidienne'
    : 'Essayer gratuitement (pas de paiement requis)';
};

// Mobile modal styles by variant
export const getModalStyle = (variant: VariantType): string => {
  return variant === 'A'
    ? 'modal-variant-a' // SE-friendly: stacked layout
    : 'modal-variant-b'; // Current: feature-focused
};

// Track variant assignment
export const trackVariantAssignment = (variant: VariantType) => {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('variantAssigned', { detail: { variant } });
    window.dispatchEvent(event);
  }
};

// Variant B CTA messaging backup (for comparison)
export const getVariantCopySet = (variant: VariantType) => {
  if (variant === 'A') {
    return {
      primary: 'Commencer ma série',
      secondary: 'Build your daily check-in streak',
      hero: 'Le remote work tue votre santé mentale',
      subhero: '1 minute par jour pour construire votre streak. Pas de motivation vide. Juste du support qui marche.',
      cta_icon: '🔥', // Streak emoji
    };
  } else {
    return {
      primary: 'Commencer gratuitement',
      secondary: 'Essayer sans engagement',
      hero: 'MentalClear: Votre coach de bien-être IA',
      subhero: 'Accès illimité aux check-ins, 5 méditations IA, dashboard 7 jours. Pas de carte bancaire requise.',
      cta_icon: '✨', // Features emoji
    };
  }
};
