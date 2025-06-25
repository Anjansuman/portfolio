"use client";

import { IconX } from "@tabler/icons-react";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Roboto } from "next/font/google";

import { WalletOptions } from "./WalletOptions";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config';

import { RightContent } from "./RightContent";

const queryClient = new QueryClient();


const roboto = Roboto({
  subsets: ["latin"]
});

interface WalletPanelProps {
  close: () => void;
}

export const WalletPanel = ({ close }: WalletPanelProps) => {
  const [mounted, setMounted] = useState(false);
  const walletPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true); // Ensure DOM is ready
  }, []);

  useEffect(() => {
    if (!mounted || !walletPanelRef.current) return;

    const el = walletPanelRef.current;

    // Immediately hide the element before DOM paints
    gsap.set(el, {
      y: 50,
      opacity: 0,
    });

    // Run animation after one frame to avoid jump
    requestAnimationFrame(() => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-[#D8CFBC] ${roboto.className} `}>
      <WagmiProvider config={config} >
        <QueryClientProvider client={queryClient} >
          <div
            ref={walletPanelRef}
            className="w-[700px] h-[500px] bg-[#0f0f0f] rounded-3xl overflow-hidden shadow-2xl flex border border-[#565449] opacity-0 "
          >
            {/* Left Sidebar */}
            <div className="w-[240px] h-full border-r border-[#3d3932] p-5 flex flex-col gap-4">

              <div className="w-full text-left px-3 flex justify-start items-start text-lg font-semibold ">
                Connect a Wallet
              </div>

              <WalletOptions />

            </div>

            {/* Right Content */}
            <div className="flex-1 h-full p-5 relative">
              {/* Close Icon */}
              <div className="absolute top-5 right-5">
                <IconX
                  onClick={close}
                  className="cursor-pointer bg-[#565449] p-1 rounded-full hover:bg-[#3d3932] transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* Main content */}
              <RightContent />
            </div>
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
    ,
    document.body
  );
};

