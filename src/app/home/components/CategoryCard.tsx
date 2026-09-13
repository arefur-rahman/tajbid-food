import Image from "next/image";

function CategoryCard({
    imageSrc,
    imageAlt,
    categoryName,
}: {
    imageSrc: string;
    imageAlt: string;
    categoryName: string;
}) {
    return (
        <div className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-background/80 p-3 text-center cursor-pointer select-none border border-transparent transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-border/60 hover:bg-card hover:shadow-lg hover:shadow-black/5 active:scale-95 active:translate-y-0">
            <div className="relative flex items-center justify-center overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={140}
                    height={140}
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                />
            </div>
            <h3 className="text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                {categoryName}
            </h3>
        </div>
    );
}

export default CategoryCard;
