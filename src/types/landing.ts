import type { IconName } from '@/components/ui/Icon';

export interface FeatureItem {
    name: string;
    icon: IconName;
    desc: string;
    color: string;
}

export interface SectorItem {
    name: string;
    icon: IconName;
}

export interface SolutionItem {
    id: string;
    title: string;
    description: string;
    features: string[];
    color: string;
    icon: IconName;
    image?: string;
}

export interface PricingPlan {
    name: string;
    tagline?: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    highlight?: boolean;
    cta: string;
    variant?: "secondary" | "primary" | "outline";
}
