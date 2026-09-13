import TopNavBar from "@/components/TopNavBar";
import Hero from "./sections/Hero";
import Categories from "./sections/Categories";

function Home() {
    return (
        <div className="relative w-full h-screen">
            <div
                style={{ backgroundImage: "url('/bg.png')" }}
                className="absolute top-0 left-0 inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0"
            />

            <div className="relative z-10 w-full h-full flex flex-col">
                <div className="bg-primary py-1 text-center text-primary-foreground font-semibold font-serif space-x-2.5 tracking-widest">
                    <span>STAND WITH FAITH AND PURITY</span>
                    <span>•</span>
                    <span>MADE WITH CARE IN BANGLADESH</span>
                </div>

                <TopNavBar />
                <div className="mx-auto w-full max-w-7xl">
                    <Hero />
                    <Categories />
                </div>
            </div>
        </div>
    );
}

export default Home;
