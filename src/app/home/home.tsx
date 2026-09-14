import TopNavBar from "@/components/TopNavBar";
import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import Featured from "./sections/Featured";
import Newsletter from "./sections/Newsletter";
import Footer from "@/components/Footer";

function Home() {
    return (
        <div className="relative w-full min-h-screen">
            <div
                style={{ backgroundImage: "url('/bg.png')" }}
                className="fixed top-0 left-0 inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0 pointer-events-none"
            />

            <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
                <div className="bg-primary py-1 text-center text-primary-foreground font-semibold font-serif space-x-2.5 tracking-widest text-xs sm:text-sm">
                    <span>STAND WITH FAITH AND PURITY</span>
                    <span>•</span>
                    <span>MADE WITH CARE IN BANGLADESH</span>
                </div>

                <TopNavBar />
                <main className="mx-auto w-full max-w-7xl space-y-6 sm:space-y-10 flex-1">
                    <Hero />
                    <Categories />
                    <Featured />
                    <Newsletter />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
