"use client";

import { Product } from "@/types/product";
import {
    IconCheck,
    IconHeart,
    IconHeartFilled,
    IconMinus,
    IconPlus,
    IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export type { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product, quantity: number) => void;
    onToggleWishlist?: (product: Product, isWishlisted: boolean) => void;
}

export default function ProductCard({
    product,
    onAddToCart,
    onToggleWishlist,
}: ProductCardProps) {
    const [isWishlisted, setIsWishlisted] = React.useState(false);
    const [quantity, setQuantity] = React.useState(0);
    const [isAdding, setIsAdding] = React.useState(false);

    const discountPercentage =
        product.originalPrice && product.originalPrice > product.price
            ? Math.round(
                  ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100,
              )
            : null;

    const handleWishlistToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const nextState = !isWishlisted;
        setIsWishlisted(nextState);
        onToggleWishlist?.(product, nextState);
    };

    const handleInitialAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (product.inStock === false) return;

        setIsAdding(true);
        setQuantity(1);
        onAddToCart?.(product, 1);

        setTimeout(() => {
            setIsAdding(false);
        }, 1200);
    };

    const handleIncrement = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const newQty = quantity + 1;
        setQuantity(newQty);
        onAddToCart?.(product, newQty);
    };

    const handleDecrement = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const newQty = Math.max(0, quantity - 1);
        setQuantity(newQty);
        onAddToCart?.(product, newQty);
    };

    return (
        <article
            className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200/80 bg-white/90 p-3 sm:p-4 shadow-sm backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:bg-white"
            aria-label={product.productName}
        >
            {/* Top Media Section */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl bg-linear-to-b from-[#F9F6F0] to-[#F1ECE1] p-3 flex items-center justify-center">
                {/* Floating Badges */}
                <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5 items-start">
                    {product.badge && (
                        <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-xs">
                            {product.badge}
                        </span>
                    )}
                    {discountPercentage && (
                        <span className="rounded-full bg-red-600 text-white px-2 py-0.5 text-[10px] font-bold tracking-tight shadow-xs">
                            -{discountPercentage}%
                        </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button
                    type="button"
                    onClick={handleWishlistToggle}
                    aria-label={
                        isWishlisted
                            ? `Remove ${product.productName} from wishlist`
                            : `Add ${product.productName} to wishlist`
                    }
                    className="absolute top-2.5 right-2.5 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/85 text-stone-600 backdrop-blur-md shadow-xs transition-all duration-200 hover:scale-110 hover:bg-white hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
                >
                    {isWishlisted ? (
                        <IconHeartFilled className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 transition-transform animate-in zoom-in-50" />
                    ) : (
                        <IconHeart className="h-4 w-4 sm:h-5 sm:w-5 transition-colors" />
                    )}
                </button>

                {/* Product Image */}
                <div className="relative h-full w-full flex items-center justify-center">
                    <Link href={`/products/${product.slug}`}>
                        <Image
                            src={product.productImage.src}
                            alt={product.productImage.alt}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-contain rounded-xl p-2 transition-transform duration-500 ease-out group-hover:scale-108"
                            priority={false}
                        />
                    </Link>
                </div>

                {/* Out of Stock Overlay */}
                {product.inStock === false && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-stone-900/40 backdrop-blur-[2px]">
                        <span className="rounded-full bg-stone-900/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Product Meta & Information */}
            <div className="mt-3.5 flex flex-1 flex-col justify-between">
                <div>
                    {/* Category & Weight line */}
                    <div className="flex items-center justify-between text-xs text-stone-700 font-medium">
                        <span className="uppercase tracking-wider">
                            {product.category || "Organic"}
                        </span>
                        {product.weight && (
                            <span className="rounded-md bg-stone-100 px-1.5 py-0.5 text-[11px] font-semibold text-stone-700">
                                {product.weight}
                            </span>
                        )}
                    </div>

                    {/* Product Name */}
                    <h3 className="mt-1 font-serif text-base sm:text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary line-clamp-1">
                        {product.slug ? (
                            <Link href={`/products/${product.slug}`}>
                                {product.productName}
                            </Link>
                        ) : (
                            product.productName
                        )}
                    </h3>

                    {/* Short Subtitle */}
                    {product.subtitle && (
                        <p className="mt-0.5 text-xs text-stone-700 line-clamp-1 leading-relaxed">
                            {product.subtitle}
                        </p>
                    )}

                    {/* Rating Bar */}
                    {product.rating && (
                        <div className="mt-1.5 flex items-center gap-1.5">
                            <div className="flex items-center text-amber-500">
                                <IconStarFilled className="h-3.5 w-3.5 fill-amber-500" />
                            </div>
                            <span className="text-xs font-semibold text-stone-800">
                                {product.rating.toFixed(1)}
                            </span>
                            {product.reviewsCount && (
                                <span className="text-[11px] text-stone-700">
                                    ({product.reviewsCount})
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Price and Cart Actions */}
                <div className="mt-3 flex items-center justify-between gap-2 border-t border-stone-100 pt-3">
                    {/* Pricing */}
                    <div className="flex flex-col">
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-serif text-lg sm:text-xl font-bold text-foreground">
                                ৳ {product.price.toLocaleString("en-BD")}
                            </span>
                            {product.originalPrice &&
                                product.originalPrice > product.price && (
                                    <span className="text-xs text-stone-700 line-through">
                                        ৳{" "}
                                        {product.originalPrice.toLocaleString(
                                            "en-BD",
                                        )}
                                    </span>
                                )}
                        </div>
                    </div>

                    {/* Quick Add / Quantity Controls */}
                    {product.inStock === false ? (
                        <span className="text-xs font-medium text-stone-700">
                            Unavailable
                        </span>
                    ) : quantity === 0 ? (
                        <button
                            type="button"
                            onClick={handleInitialAdd}
                            aria-label={`Add ${product.productName} to cart`}
                            className="group/btn relative flex h-9 items-center gap-1.5 rounded-full bg-primary/10 px-3 text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            {isAdding ? (
                                <>
                                    <IconCheck className="h-4 w-4 stroke-[2.5]" />
                                    <span className="text-xs font-medium">
                                        Added
                                    </span>
                                </>
                            ) : (
                                <>
                                    <IconPlus className="h-4 w-4 stroke-[2.5] transition-transform duration-200 group-hover/btn:rotate-90" />
                                    <span className="hidden text-xs font-medium sm:inline">
                                        Add
                                    </span>
                                </>
                            )}
                        </button>
                    ) : (
                        <div className="flex items-center rounded-full border border-primary/20 bg-primary/5 p-0.5 shadow-xs">
                            <button
                                type="button"
                                onClick={handleDecrement}
                                aria-label="Decrease quantity"
                                className="flex h-7 w-7 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none"
                            >
                                <IconMinus className="h-3.5 w-3.5 stroke-[2.5]" />
                            </button>
                            <span className="min-w-6 text-center text-xs font-bold text-primary">
                                {quantity}
                            </span>
                            <button
                                type="button"
                                onClick={handleIncrement}
                                aria-label="Increase quantity"
                                className="flex h-7 w-7 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none"
                            >
                                <IconPlus className="h-3.5 w-3.5 stroke-[2.5]" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
