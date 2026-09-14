"use client";

import { Category, getProductsByCategory } from "@/app/server/products";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import * as React from "react";
import SectionHeader from "../components/sectionHeader";

interface FeaturedClientProps {
    initialProducts: Product[];
    categories: Category[];
}

const FeaturedClient = ({
    initialProducts,
    categories,
}: FeaturedClientProps) => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(
        categories[0]?.id || "01",
    );
    const [products, setProducts] = React.useState<Product[]>(initialProducts);
    const [isPending, startTransition] = React.useTransition();

    const handleCategoryChange = (catId: string) => {
        setSelectedCategoryId(catId);
        startTransition(async () => {
            const fetched = await getProductsByCategory(catId);
            setProducts(fetched);
        });
    };

    return (
        <section className="px-4 py-6 sm:px-6 lg:px-8">
            {/* Header with Eyebrow and Filter Tabs */}
            <SectionHeader
                eyebrow="The Good Stuff"
                header="Our Favourites"
                action={
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {categories.map((cat) => {
                            const isActive = selectedCategoryId === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                            : "bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900"
                                    }`}
                                >
                                    {cat.categoryName}
                                </button>
                            );
                        })}
                    </div>
                }
            />

            {/* Responsive Grid */}
            <div
                className={`mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5 lg:gap-6 transition-opacity duration-200 ${
                    isPending ? "opacity-60 pointer-events-none" : "opacity-100"
                }`}
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {products.length === 0 && !isPending && (
                <div className="py-12 text-center text-stone-500">
                    <p>No products found in this category.</p>
                </div>
            )}
        </section>
    );
};

export default FeaturedClient;
