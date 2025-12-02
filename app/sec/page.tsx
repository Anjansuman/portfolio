'use client';
import GithubContributions from "@/components/sec/GithubContributions";
import Overview from "@/components/sec/Overview";
import Piechart from "@/components/sec/Piechart";
import Title from "@/components/sec/Title";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export default function Page() {

    return (
        <div className={`h-screen w-full font-[${quicksand.className}] bg-[#121212] text-white flex justify-center `}>
            <div className="h-full max-w-[45vw] py-20 flex flex-col items-center gap-y-3">
                <Title />
                <GithubContributions />
                <Overview />
                <Piechart />
            </div>
        </div>
    );

}