import { SubscriptionStatus } from '@prisma/client';

// DokuHR Plan Types
export enum STRIPE_PLAN_TYPE {
  FREE = 'free',
  STARTER = 'starter',
  TEAM = 'team',
  BUSINESS = 'business',
}

// Free tier limits
export const FREE_TIER_DOCUMENT_QUOTA = 5;
export const FREE_TIER_USER_QUOTA = 1;

// Subscription status mapping for display
export const SUBSCRIPTION_STATUS_MAP = {
  [SubscriptionStatus.ACTIVE]: 'Active',
  [SubscriptionStatus.INACTIVE]: 'Inactive',
  [SubscriptionStatus.PAST_DUE]: 'Past Due',
};

// Stripe Price IDs (from environment variables)
export const STRIPE_PLAN_PRICES = {
  STARTER: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || '',
  TEAM: process.env.NEXT_PUBLIC_STRIPE_TEAM_PRICE_ID || '',
  BUSINESS: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_PRICE_ID || '',
} as const;

// Plan feature limits
export const PLAN_LIMITS = {
  [STRIPE_PLAN_TYPE.FREE]: {
    documents: 5,
    users: 1,
    templates: 0,
    customBranding: false,
    apiAccess: false,
    prioritySupport: false,
  },
  [STRIPE_PLAN_TYPE.STARTER]: {
    documents: -1, // -1 = unlimited
    users: 1,
    templates: 10,
    customBranding: true,
    apiAccess: false,
    prioritySupport: false,
  },
  [STRIPE_PLAN_TYPE.TEAM]: {
    documents: -1, // unlimited
    users: 5,
    templates: -1, // unlimited
    customBranding: true,
    apiAccess: false,
    prioritySupport: true,
  },
  [STRIPE_PLAN_TYPE.BUSINESS]: {
    documents: -1, // unlimited
    users: 10,
    templates: -1, // unlimited
    customBranding: true,
    apiAccess: true,
    prioritySupport: true,
  },
} as const;

// Billing plan configurations for UI display
export const BILLING_PLANS = [
  {
    id: STRIPE_PLAN_TYPE.FREE,
    name: 'Free',
    description: 'Perfect for testing',
    price: '€0',
    priceAmount: 0,
    priceId: null,
    interval: 'month',
    features: [
      '5 documents per month',
      '1 user',
      'Basic signature types',
      'Email support',
      'Audit trails',
    ],
    limits: PLAN_LIMITS[STRIPE_PLAN_TYPE.FREE],
    cta: 'Current Plan',
    popular: false,
  },
  {
    id: STRIPE_PLAN_TYPE.STARTER,
    name: 'Starter',
    description: 'For freelancers and solopreneurs',
    price: '€5',
    priceAmount: 5,
    priceId: STRIPE_PLAN_PRICES.STARTER,
    interval: 'month',
    features: [
      'Unlimited documents',
      '1 user',
      'All signature types',
      'Up to 10 templates',
      'Custom branding',
      'Email support',
      'Complete audit trails',
    ],
    limits: PLAN_LIMITS[STRIPE_PLAN_TYPE.STARTER],
    cta: 'Upgrade to Starter',
    popular: false,
  },
  {
    id: STRIPE_PLAN_TYPE.TEAM,
    name: 'Team',
    description: 'For small teams and growing businesses',
    price: '€15',
    priceAmount: 15,
    priceId: STRIPE_PLAN_PRICES.TEAM,
    interval: 'month',
    features: [
      'Unlimited documents',
      'Up to 5 users',
      'Unlimited templates',
      'Custom branding',
      'Document folders',
      'Priority email support',
      'Advanced audit trails',
    ],
    limits: PLAN_LIMITS[STRIPE_PLAN_TYPE.TEAM],
    cta: 'Upgrade to Team',
    popular: true, // Most popular plan
  },
  {
    id: STRIPE_PLAN_TYPE.BUSINESS,
    name: 'Business',
    description: 'For established businesses',
    price: '€39',
    priceAmount: 39,
    priceId: STRIPE_PLAN_PRICES.BUSINESS,
    interval: 'month',
    features: [
      'Unlimited documents',
      'Up to 10 users',
      'Unlimited templates',
      'Custom branding',
      'API access',
      'Advanced analytics',
      'Priority support',
      'SLA guarantee',
    ],
    limits: PLAN_LIMITS[STRIPE_PLAN_TYPE.BUSINESS],
    cta: 'Upgrade to Business',
    popular: false,
  },
] as const;

// Helper function to get plan by ID
export const getPlanById = (planId: STRIPE_PLAN_TYPE | string) => {
  return BILLING_PLANS.find((plan) => plan.id === planId) || BILLING_PLANS[0];
};

// Helper function to get plan by Stripe Price ID
export const getPlanByPriceId = (priceId: string) => {
  return BILLING_PLANS.find((plan) => plan.priceId === priceId);
};

// Helper function to check if user can perform action based on plan
export const canPerformAction = (
  userPlan: STRIPE_PLAN_TYPE,
  action: 'createDocument' | 'addUser' | 'createTemplate' | 'useApi' | 'customBranding',
): boolean => {
  const limits = PLAN_LIMITS[userPlan];

  switch (action) {
    case 'createDocument':
      return limits.documents === -1 || limits.documents > 0;
    case 'addUser':
      return true; // User management is handled by limits.users
    case 'createTemplate':
      return limits.templates === -1 || limits.templates > 0;
    case 'useApi':
      return limits.apiAccess;
    case 'customBranding':
      return limits.customBranding;
    default:
      return false;
  }
};

// Helper function to check if plan has unlimited feature
export const hasUnlimitedFeature = (
  userPlan: STRIPE_PLAN_TYPE,
  feature: 'documents' | 'templates',
): boolean => {
  const limits = PLAN_LIMITS[userPlan];
  return limits[feature] === -1;
};

// Helper function to get remaining quota
export const getRemainingQuota = (
  userPlan: STRIPE_PLAN_TYPE,
  currentUsage: number,
  quotaType: 'documents' | 'users' | 'templates',
): number | 'unlimited' => {
  const limits = PLAN_LIMITS[userPlan];
  const limit = limits[quotaType];

  if (limit === -1) return 'unlimited';
  return Math.max(0, limit - currentUsage);
};

// Annual pricing (if you want to add annual plans later)
export const ANNUAL_DISCOUNT_PERCENTAGE = 20; // 20% off for annual

export const getAnnualPrice = (monthlyPrice: number): number => {
  const annualPrice = monthlyPrice * 12;
  const discount = (annualPrice * ANNUAL_DISCOUNT_PERCENTAGE) / 100;
  return annualPrice - discount;
};

// Stripe Customer Portal URL (optional)
export const STRIPE_CUSTOMER_PORTAL_URL = process.env.NEXT_PRIVATE_STRIPE_CUSTOMER_PORTAL_URL || '';

// Feature flags for plan comparison
export const PLAN_FEATURES = {
  UNLIMITED_DOCUMENTS: 'unlimited_documents',
  CUSTOM_BRANDING: 'custom_branding',
  TEMPLATES: 'templates',
  API_ACCESS: 'api_access',
  PRIORITY_SUPPORT: 'priority_support',
  ADVANCED_ANALYTICS: 'advanced_analytics',
  SLA_GUARANTEE: 'sla_guarantee',
} as const;

// Plan feature matrix for comparison table
export const PLAN_FEATURE_MATRIX = {
  [STRIPE_PLAN_TYPE.FREE]: {
    [PLAN_FEATURES.UNLIMITED_DOCUMENTS]: false,
    [PLAN_FEATURES.CUSTOM_BRANDING]: false,
    [PLAN_FEATURES.TEMPLATES]: false,
    [PLAN_FEATURES.API_ACCESS]: false,
    [PLAN_FEATURES.PRIORITY_SUPPORT]: false,
    [PLAN_FEATURES.ADVANCED_ANALYTICS]: false,
    [PLAN_FEATURES.SLA_GUARANTEE]: false,
  },
  [STRIPE_PLAN_TYPE.STARTER]: {
    [PLAN_FEATURES.UNLIMITED_DOCUMENTS]: true,
    [PLAN_FEATURES.CUSTOM_BRANDING]: true,
    [PLAN_FEATURES.TEMPLATES]: true,
    [PLAN_FEATURES.API_ACCESS]: false,
    [PLAN_FEATURES.PRIORITY_SUPPORT]: false,
    [PLAN_FEATURES.ADVANCED_ANALYTICS]: false,
    [PLAN_FEATURES.SLA_GUARANTEE]: false,
  },
  [STRIPE_PLAN_TYPE.TEAM]: {
    [PLAN_FEATURES.UNLIMITED_DOCUMENTS]: true,
    [PLAN_FEATURES.CUSTOM_BRANDING]: true,
    [PLAN_FEATURES.TEMPLATES]: true,
    [PLAN_FEATURES.API_ACCESS]: false,
    [PLAN_FEATURES.PRIORITY_SUPPORT]: true,
    [PLAN_FEATURES.ADVANCED_ANALYTICS]: true,
    [PLAN_FEATURES.SLA_GUARANTEE]: false,
  },
  [STRIPE_PLAN_TYPE.BUSINESS]: {
    [PLAN_FEATURES.UNLIMITED_DOCUMENTS]: true,
    [PLAN_FEATURES.CUSTOM_BRANDING]: true,
    [PLAN_FEATURES.TEMPLATES]: true,
    [PLAN_FEATURES.API_ACCESS]: true,
    [PLAN_FEATURES.PRIORITY_SUPPORT]: true,
    [PLAN_FEATURES.ADVANCED_ANALYTICS]: true,
    [PLAN_FEATURES.SLA_GUARANTEE]: true,
  },
} as const;

// Export types for TypeScript
export type BillingPlan = (typeof BILLING_PLANS)[number];
export type PlanLimits = (typeof PLAN_LIMITS)[STRIPE_PLAN_TYPE];
