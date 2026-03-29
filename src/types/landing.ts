export interface FeatureItem {
    name: string;
    icon: string;
    desc: string;
    color: string;
}

export interface SectorItem {
    name: string;
    icon: string;
}

export interface SolutionItem {
    id: string;
    title: string;
    description: string;
    features: string[];
    color: string;
    icon: string;
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
