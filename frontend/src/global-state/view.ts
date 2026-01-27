import { create } from "zustand";

interface IViewState {
  view: string;
  setView: (value: string) => void;
}

export const useView = create<IViewState>((set) => ({
  view: "",
  setView: (value) => set((state) => ({ ...state, view: value })),
}));
