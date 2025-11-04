import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ProgramsSection from "@/components/home/ProgramsSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection />
            <TrustSection />
            <ProgramsSection />
        </main>
    );
}
