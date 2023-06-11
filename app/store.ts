import { create } from "zustand";

type TUnlockStore = {
  vaults: string[][];
  setVaults: (vaults: string[][]) => void;
};

const useUnlockStore = create<TUnlockStore>((set) => ({
  vaults: [],
  setVaults: (vaults) => set({ vaults }),
}));

export default useUnlockStore;
