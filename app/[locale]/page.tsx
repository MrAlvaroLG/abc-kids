import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import CtaSection from "@/components/home/CtaSection";
import LocationSection from "@/components/home/LocationSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection />
            <TrustSection />
            <ProgramsSection />
            <LocationSection />
            <CtaSection />
            <Footer />
        </main>
    );
}
