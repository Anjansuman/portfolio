"use client";

import { IconX } from "@tabler/icons-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface WalletPanelProps {
  close: () => void;
}

export const WalletPanel = ({ close }: WalletPanelProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Wait for client to mount
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40">
      <div className="w-[600px] h-96 bg-rose-400 rounded-2xl p-5 flex justify-end items-start">
        <IconX onClick={close} className="cursor-pointer text-white" />
        
      </div>
    </div>,
    document.body
  );
};
