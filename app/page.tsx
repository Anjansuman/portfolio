'use client';
import Experience from "@/components/sec/Experience";
import Footer from "@/components/sec/Footer";
import GithubContributions from "@/components/sec/GithubContributions";
import Interested from "@/components/sec/Interested";
import Overview from "@/components/sec/Overview";
import Projects from "@/components/sec/Projects";
import Tech from "@/components/sec/Tech";
import Title from "@/components/sec/Title";
import DustParticles from "@/components/ui/DustParticles";
import LenisProvider from "@/components/ui/LenisProvider";
import Line from "@/components/ui/Line";

export default function Page() {

    return (
        <LenisProvider>
            <div className={`h-full w-full font-sans bg-[#121212] text-white flex justify-center select-none `}>
                <div className="h-full max-w-[45vw] py-20 flex flex-col items-center gap-y-6">
                    <Title />
                    <GithubContributions />
                    <Line />
                    <Overview />
                    <Line />
                    <Experience />
                    <Line />
                    <Projects />
                    <Line />
                    <Tech />
                    <Line />
                    <Interested />
                    <Footer />
                </div>
                <DustParticles particleColor={0xfdf9f0} />
            </div>
        </LenisProvider>
    );

}