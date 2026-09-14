export interface ProductImage {
    src: string;
    alt: string;
    gallery?: string[];
}

export interface ProductNutrition {
    servingSize?: string;
    calories?: number;
    protein?: string;
    carbohydrates?: string;
    fat?: string;
    saturatedFat?: string;
    sugar?: string;
    fiber?: string;
    sodium?: string;
}

export interface ProductDetails {
    description: string;
    benefits?: string[];
    ingredients?: string[];
    origin?: string;
    storageInstructions?: string;
    howToUse?: string;
    harvestSeason?: string;
    nutrition?: ProductNutrition;
}

export interface Product {
    id: string;
    slug: string;
    productName: string;
    bengaliName?: string;
    subtitle: string;
    categoryId: string;
    category?: string;
    tags?: string[];
    sku?: string;
    price: number;
    originalPrice?: number;
    weight: string;
    badge?: string;
    rating: number;
    reviewsCount: number;
    inStock: boolean;
    stockQuantity?: number;
    origin?: string;
    productImage: ProductImage;
    productDetails: ProductDetails;
}
