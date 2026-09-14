import CategoryCard from "../components/CategoryCard";
import SectionHeader from "../components/sectionHeader";

function Categories() {
    const categories = [
        {
            id: "01",
            categoryName: "Beverage",
            imageSrc: "/category_icons/beverage.png",
            imageAlt: "tajbid food beverage",
        },
        {
            id: "02",
            categoryName: "Dates",
            imageSrc: "/category_icons/dates.png",
            imageAlt: "tajbid food dates",
        },
        {
            id: "03",
            categoryName: "Flours & Lentils",
            imageSrc: "/category_icons/flours_lentils.png",
            imageAlt: "tajbid food flours & lentils",
        },
        {
            id: "04",
            categoryName: "Honey",
            imageSrc: "/category_icons/honey.png",
            imageAlt: "tajbid food honey",
        },
        {
            id: "05",
            categoryName: "Nuts & Seeds",
            imageSrc: "/category_icons/nuts_seeds.png",
            imageAlt: "tajbid food nuts & seeds",
        },
        {
            id: "06",
            categoryName: "Oil & Ghee",
            imageSrc: "/category_icons/oil_ghee.png",
            imageAlt: "tajbid food oil & ghee",
        },
        {
            id: "07",
            categoryName: "Organic",
            imageSrc: "/category_icons/organic.png",
            imageAlt: "tajbid food organic",
        },
    ];
    return (
        <section className="px-4 py-3 sm:px-6 lg:px-8">
            <SectionHeader
                eyebrow="Curated For Your Table"
                header="Shop by Category"
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 py-3">
                {categories.map((cat) => (
                    <CategoryCard
                        key={cat.id}
                        categoryName={cat.categoryName}
                        imageSrc={cat.imageSrc}
                        imageAlt={cat.imageAlt}
                    />
                ))}
            </div>
        </section>
    );
}

export default Categories;
