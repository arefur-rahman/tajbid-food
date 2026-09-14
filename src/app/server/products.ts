"use server";
import { Product } from "@/types/product";

const products: Product[] = [
    {
        id: "01",
        slug: "black-seed-honey-1kg",
        productName: "Black Seed Honey (কালিজিরার মধু)",
        bengaliName: "খাঁটি কালিজিরার মধু",
        subtitle: "Collected from pristine blooms of nigella flower fields",
        categoryId: "02",
        tags: ["honey", "black-seed", "organic", "raw", "bestseller"],
        sku: "TJB-HON-BS-1KG",
        price: 1250,
        originalPrice: 1450,
        weight: "1 KG",
        badge: "BESTSELLER",
        rating: 4.9,
        reviewsCount: 128,
        inStock: true,
        stockQuantity: 45,
        origin: "Magura & Natore, Bangladesh",
        productImage: {
            src: "/products/blackseed_honey.jpeg",
            alt: "Tajbid Black Seed Honey 1KG jar",
        },
        productDetails: {
            description:
                "Our pure Black Seed Honey is naturally harvested from the nectar of nigella (kalijira) blossoms. Unheated, unfiltered, and 100% raw, preserving all natural enzymes, pollens, and therapeutic virtues revered for centuries.",
            benefits: [
                "Rich in active thymoquinone and natural antioxidants",
                "Natural immune booster and respiratory wellness aid",
                "Assists digestive balance and sustained natural vitality",
                "Free from synthetic sugar feeding, chemicals, or additives",
            ],
            ingredients: ["100% Pure Raw Black Seed Flower Honey"],
            origin: "Locally collected from monitored apiaries across Bangladesh",
            storageInstructions:
                "Store in a dry, cool place at room temperature. Avoid direct sunlight. Do not refrigerate.",
            howToUse:
                "Consume 1-2 teaspoons directly on an empty stomach every morning, or blend into warm water/tea.",
            harvestSeason: "Winter (November – January)",
            nutrition: {
                servingSize: "1 tbsp (21g)",
                calories: 64,
                carbohydrates: "17g",
                sugar: "16g",
                protein: "0.1g",
                fat: "0g",
            },
        },
    },
    {
        id: "02",
        slug: "mustard-flower-honey-500g",
        productName: "Mustard Flower Honey (সরিষা মধু)",
        bengaliName: "সরিষা ফুলের খাঁটি মধু",
        subtitle: "Golden harvest, 100% cold-extracted pure organic honey",
        categoryId: "02",
        tags: ["honey", "mustard", "cold-extracted", "special-offer"],
        sku: "TJB-HON-MF-500G",
        price: 650,
        originalPrice: 800,
        weight: "500g",
        badge: "SPECIAL OFFER",
        rating: 4.8,
        reviewsCount: 94,
        inStock: true,
        stockQuantity: 60,
        origin: "Manikganj & Sirajganj, Bangladesh",
        productImage: {
            src: "/products/mustard_honey.jpeg",
            alt: "Tajbid Mustard Flower Honey jar",
        },
        productDetails: {
            description:
                "Golden, creamy, and gentle on the palate. Our mustard blossom honey is harvested in early winter when yellow mustard blooms carpet the riverine delta. It naturally crystallizes over time into a rich spreadable texture.",
            benefits: [
                "Natural glucose-rich energy source for active lifestyles",
                "Soothes sore throats, colds, and seasonal irritations",
                "Contains natural vitamins, bee pollen, and minerals",
                "Gentle mild sweetness loved by both kids and adults",
            ],
            ingredients: ["100% Raw Unpasteurized Mustard Flower Honey"],
            origin: "Riverine delta alluvial farms in Bangladesh",
            storageInstructions:
                "Keep tightly sealed in a cool environment. Natural crystallization is normal and indicates purity.",
            howToUse:
                "Ideal as a natural spread on toast, sweetener in morning warm lemon water, or cereal topping.",
            harvestSeason: "December – January",
            nutrition: {
                servingSize: "1 tbsp (20g)",
                calories: 60,
                carbohydrates: "16g",
                sugar: "15g",
                protein: "0g",
                fat: "0g",
            },
        },
    },
    {
        id: "03",
        slug: "cold-pressed-black-seed-oil-250ml",
        productName: "Cold-Pressed Black Seed Oil",
        bengaliName: "কোল্ড-প্রেসড কালিজিরার তেল",
        subtitle: "Extra-virgin cold-press, 100% pure & unprocessed elixir",
        categoryId: "03",
        tags: ["oil", "black-seed", "cold-pressed", "virgin", "wellness"],
        sku: "TJB-OIL-BS-250ML",
        price: 750,
        originalPrice: 850,
        weight: "250 ml",
        badge: "PURE & RAW",
        rating: 5.0,
        reviewsCount: 86,
        inStock: true,
        stockQuantity: 32,
        origin: "Pabna, Bangladesh",
        productImage: {
            src: "/products/cold_pressed_blackseed_oil.jpeg",
            alt: "Tajbid Cold-Pressed Black Seed Oil",
        },
        productDetails: {
            description:
                "Extracted once using traditional cold expeller presses below 40°C. Virgin, unrefined, and chemical-free, retaining the strong aromatic pungency and therapeutic density of authentic Nigella Sativa seeds.",
            benefits: [
                "Superior concentration of thymoquinone (TQ)",
                "Supports joint flexibility and healthy immune response",
                "Promotes hair follicle strength and skin nourishment",
                "100% first single-press virgin oil without solvents",
            ],
            ingredients: [
                "100% Pure Virgin Cold-Pressed Nigella Sativa Seed Oil",
            ],
            origin: "Prime agricultural plains of North Bengal",
            storageInstructions:
                "Store in an amber glass bottle in a cool, dark cupboard away from direct heat and light.",
            howToUse:
                "Take half a teaspoon daily with warm honey water, or massage gently into scalp and skin.",
            harvestSeason: "Spring Harvest",
            nutrition: {
                servingSize: "1 tsp (5ml)",
                calories: 45,
                fat: "5g",
                protein: "0g",
                carbohydrates: "0g",
            },
        },
    },
    {
        id: "04",
        slug: "premium-ajwa-dates-500g",
        productName: "Premium Ajwa Dates (আজওয়া) 500g",
        bengaliName: "মদিনার প্রিমিয়াম আজওয়া খেজুর",
        subtitle: "Soft, naturally sweet & sun-ripened Madinah harvest",
        categoryId: "04",
        tags: ["dates", "ajwa", "madinah", "superfood", "favourite"],
        sku: "TJB-DAT-AJ-500G",
        price: 950,
        originalPrice: 1100,
        weight: "500g",
        badge: "FAVOURITE",
        rating: 4.9,
        reviewsCount: 112,
        inStock: true,
        stockQuantity: 50,
        origin: "Al-Madinah Al-Munawwarah, Saudi Arabia",
        productImage: {
            src: "/products/dates.jpeg",
            alt: "Tajbid Premium Ajwa Dates",
        },
        productDetails: {
            description:
                "Authentic Grade-A Ajwa dates sourced directly from the blessed oasis farms of Al-Madinah. Recognizable by their dark prune shade, delicate white lines, and delightful soft-chewy prune texture.",
            benefits: [
                "Revered sunnah food packed with essential fiber and potassium",
                "Natural heart health and cardiovascular support",
                "Gentle natural energy with low glycemic impact",
                "Carefully graded, cleaned, and vacuum sealed for freshness",
            ],
            ingredients: ["100% Authentic Whole Ajwa Dates"],
            origin: "Madinah, Kingdom of Saudi Arabia",
            storageInstructions:
                "Keep in an airtight container in a cool place or refrigerator for prolonged chewiness.",
            howToUse:
                "Enjoy 5-7 dates daily in the morning or as an invigorating sunnah snack throughout the day.",
            harvestSeason: "Late Summer (August – September)",
            nutrition: {
                servingSize: "3-4 dates (40g)",
                calories: 110,
                carbohydrates: "30g",
                sugar: "26g",
                fiber: "3g",
                protein: "1g",
                fat: "0g",
            },
        },
    },
    {
        id: "05",
        slug: "california-raw-almonds-500g",
        productName: "California Raw Almonds",
        bengaliName: "ক্যালিফোর্নিয়া কাঠবাদাম",
        subtitle: "Handpicked, crunchy & wholesome premium nutritious nuts",
        categoryId: "04",
        tags: ["nuts", "almonds", "raw", "healthy-snack", "new-arrival"],
        sku: "TJB-NUT-AL-500G",
        price: 720,
        originalPrice: 800,
        weight: "500g",
        badge: "NEW ARRIVAL",
        rating: 4.7,
        reviewsCount: 64,
        inStock: true,
        stockQuantity: 40,
        origin: "Central Valley, California, USA",
        productImage: {
            src: "/products/almonds.jpeg",
            alt: "Tajbid California Raw Almonds",
        },
        productDetails: {
            description:
                "Non-pareil supreme grade raw California almonds. Plump, clean, and naturally sweet with an appetizing fresh snap. Unsalted and unroasted to preserve essential plant proteins and delicate omega fats.",
            benefits: [
                "Excellent source of natural Vitamin E and healthy monounsaturated fats",
                "Supports cognitive function, memory, and sustained focus",
                "Promotes healthy skin complexion and satiety between meals",
                "Zero trans-fats, zero preservatives, unbleached skins",
            ],
            ingredients: ["100% Whole Raw Shelled Almonds"],
            origin: "California, USA",
            storageInstructions:
                "Store in an airtight container in the pantry or refrigerator to maintain crunch and freshness.",
            howToUse:
                "Soak overnight in water and peel in the morning, or blend into nutrient-rich homemade almond milk.",
            harvestSeason: "Autumn (August – October)",
            nutrition: {
                servingSize: "1 oz / 28g (~23 almonds)",
                calories: 160,
                protein: "6g",
                fat: "14g",
                carbohydrates: "6g",
                fiber: "3.5g",
                sugar: "1g",
            },
        },
    },
    {
        id: "06",
        slug: "traditional-herbal-kodu-oil-200ml",
        productName: "Traditional Herbal Kodu Oil",
        bengaliName: "ভেষজ কদু তেল",
        subtitle: "Infused with cooling organic herbs for natural nourishment",
        categoryId: "03",
        tags: ["oil", "kodu", "herbal", "haircare", "ayurvedic"],
        sku: "TJB-OIL-KD-200ML",
        price: 450,
        originalPrice: 500,
        weight: "200 ml",
        badge: "ORGANIC",
        rating: 4.8,
        reviewsCount: 52,
        inStock: true,
        stockQuantity: 30,
        origin: "Sylhet, Bangladesh",
        productImage: {
            src: "/square_banner.jpeg",
            alt: "Tajbid Traditional Herbal Kodu Oil",
        },
        productDetails: {
            description:
                "A centuries-old traditional Bengali botanical oil prepared by slow-infusing fresh bottle gourd (kodu) extracts with organic sesame and nourishing native herbal roots. Renowned for its soothing, relaxing, and cooling properties.",
            benefits: [
                "Naturally cools the scalp, helping soothe headaches and mental stress",
                "Promotes restful sleep when gently massaged into temple and crown",
                "Strengthens hair follicles, minimizes dryness, and enhances lustre",
                "Crafted purely without mineral oils, artificial coloring, or parabens",
            ],
            ingredients: [
                "Fresh Bottle Gourd (Kodu) Extract",
                "Pure Cold-Pressed Sesame Oil",
                "Amla",
                "Bhringraj",
                "Brahmi",
            ],
            origin: "Locally wildcrafted in Sylhet tea garden regions",
            storageInstructions:
                "Store in a cool and dry spot. Protect from prolonged sunlight exposure.",
            howToUse:
                "Massage into scalp with fingertips before sleeping or 1 hour prior to bathing.",
            harvestSeason: "Year-round preparation",
        },
    },
    {
        id: "07",
        slug: "raw-forest-honey-sundarbans-1kg",
        productName: "Raw Forest Honey (সুন্দরবন)",
        bengaliName: "সুন্দরবনের খলিসা ও গরান ফুলের মধু",
        subtitle:
            "Wild honey collected with care from deep Sundarbans mangroves",
        categoryId: "02",
        tags: ["honey", "sundarbans", "wild", "kholisa", "rare-harvest"],
        sku: "TJB-HON-SB-1KG",
        price: 1150,
        originalPrice: 1300,
        weight: "1 KG",
        badge: "RARE HARVEST",
        rating: 5.0,
        reviewsCount: 140,
        inStock: true,
        stockQuantity: 28,
        origin: "Sundarbans Biosphere Reserve, Bangladesh",
        productImage: {
            src: "/products/forest_honey.jpeg",
            alt: "Tajbid Raw Forest Honey",
        },
        productDetails: {
            description:
                "Wild honey collected by traditional honey hunters (Mawals) from the untamed mangrove canopies of the Sundarbans. Sourced from wild giant Asian honeybees (Apis dorsata) gathering nectar from Kholisa, Goran, and Keora flowers.",
            benefits: [
                "Uniquely pungent, tangy-sweet floral taste found nowhere else",
                "High natural enzyme count and potent antimicrobial properties",
                "Ethically gathered supporting traditional coastal beekeeping communities",
                "100% natural, raw, and unboiled straight from deep tidal forests",
            ],
            ingredients: ["100% Wild Sundarbans Mangrove Blossom Honey"],
            origin: "Sundarbans National Forest, Bangladesh",
            storageInstructions:
                "Store at ambient room temperature in a dry pantry. Keep jar securely sealed.",
            howToUse:
                "Take a spoonful daily to strengthen gut microbiome and vitality, or pair with warm herbal teas.",
            harvestSeason: "Spring (March – May)",
            nutrition: {
                servingSize: "1 tbsp (21g)",
                calories: 65,
                carbohydrates: "17g",
                sugar: "16g",
                protein: "0.1g",
                fat: "0g",
            },
        },
    },
    {
        id: "08",
        slug: "artisanal-pure-cow-ghee-500g",
        productName: "Artisanal Pure Cow Ghee (গাওয়া ঘি)",
        bengaliName: "ঘিয়ের সুঘ্রাণে খাঁটি গাওয়া ঘি",
        subtitle: "Traditional bilona churned grass-fed rich golden aroma",
        categoryId: "03",
        tags: ["ghee", "clarified-butter", "grass-fed", "artisanal", "bilona"],
        sku: "TJB-GHE-CW-500G",
        price: 1350,
        originalPrice: 1500,
        weight: "500g",
        badge: "ARTISANAL",
        rating: 4.9,
        reviewsCount: 78,
        inStock: true,
        stockQuantity: 25,
        origin: "Pabna & Sirajganj Milk Belt, Bangladesh",
        productImage: {
            src: "/products/ghee.jpeg",
            alt: "Tajbid Pure Cow Ghee",
        },
        productDetails: {
            description:
                "Traditional Vedic Bilona method ghee churned slowly from whole curd of free-grazing, grass-fed cows. Simmered over gentle flame to yield golden granular (danedar) texture and unforgettable nutty fragrance.",
            benefits: [
                "Rich in butyric acid, Vitamin A, D, E, K, and Omega-3 fats",
                "High smoke point (~250°C), making it the healthiest cooking medium",
                "Aids nutrient absorption, gut lining integrity, and joint lubricity",
                "Zero palm oil adulteration, no synthetic coloring, 100% pure cow fat",
            ],
            ingredients: [
                "100% Pure Grass-Fed Cow Milk Fat (Clarified Butter)",
            ],
            origin: "Pasture dairy farms of North Bengal",
            storageInstructions:
                "Store at room temperature in a dry spot. Always use a clean, dry spoon to preserve shelf life.",
            howToUse:
                "Drizzle over steaming hot rice and dal, use for traditional cooking, or enjoy 1 tsp on empty stomach.",
            harvestSeason: "Year-round artisanal batches",
            nutrition: {
                servingSize: "1 tbsp (14g)",
                calories: 120,
                fat: "14g",
                saturatedFat: "9g",
                carbohydrates: "0g",
                protein: "0g",
            },
        },
    },
];

interface Category {
    id: string;
    categoryName: string;
}

const categories: Category[] = [
    { id: "01", categoryName: "All" },
    { id: "02", categoryName: "Honey" },
    { id: "03", categoryName: "Oils" },
    { id: "04", categoryName: "Dates & Nuts" },
];

async function getAllProducts(): Promise<Product[]> {
    const allProducts = products.map((p) => {
        const categoryInfo = categories.find((cat) => p.categoryId === cat.id);
        return { ...p, category: categoryInfo?.categoryName };
    });

    return allProducts;
}

async function getCategories(): Promise<Category[]> {
    return categories;
}

async function getProductsByCategory(categoryId: string): Promise<Product[]> {
    const categoryWithProvidedId = categories.find(
        (cat) => cat.id === categoryId,
    );

    if (!categoryWithProvidedId) return [];

    if (categoryWithProvidedId.categoryName === "All" || categoryId === "01") {
        return products.map((p) => {
            const categoryInfo = categories.find(
                (cat) => p.categoryId === cat.id,
            );
            return { ...p, category: categoryInfo?.categoryName };
        });
    }

    return products
        .filter((product) => product.categoryId === categoryId)
        .map((product) => ({
            ...product,
            category: categoryWithProvidedId.categoryName,
        }));
}

export { getAllProducts, getCategories, getProductsByCategory };
export type { Category };
