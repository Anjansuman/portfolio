import { create } from "zustand";

interface ProviderStore {
    provider: string,
    setProvider: (provider: string) => void
}

export const useProvider = create<ProviderStore>((set) => ({
    provider: "",
    setProvider: (provider) => set({
        provider: provider
    })
}));