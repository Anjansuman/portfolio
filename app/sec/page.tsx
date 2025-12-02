'use client';
import Experience from "@/components/sec/Experience";
import GithubContributions from "@/components/sec/GithubContributions";
import Overview from "@/components/sec/Overview";
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
                    <Overview />
                    <Line />
                    <Experience />
                    <Line />
                    <Tech />
                </div>
                <DustParticles particleColor={0xfdf9f0} />
            </div>
        </LenisProvider>
    );

}