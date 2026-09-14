import { getAllProducts, getCategories } from "@/app/server/products";
import FeaturedClient from "./FeaturedClient";

const Featured = async () => {
    const [initialProducts, categories] = await Promise.all([
        getAllProducts(),
        getCategories(),
    ]);

    return (
        <FeaturedClient
            initialProducts={initialProducts}
            categories={categories}
        />
    );
};

export default Featured;
