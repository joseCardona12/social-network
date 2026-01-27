import { create } from "zustand";

interface IModalMessage {
  state: boolean;
  message: string;
  color: string;
  code: number;
  title: string;
}

interface IModalMessageState {
  modalMessage: IModalMessage;
  setModalMessage: (value: IModalMessage) => void;
}
export const CURRENT_MODAL_MESSAGE: IModalMessage = {
  message: "",
  code: 0,
  color: "",
  title: "",
  state: false,
};
export const useModalMessage = create<IModalMessageState>((set) => ({
  modalMessage: CURRENT_MODAL_MESSAGE,
  setModalMessage: (value) =>
    set((state) => ({ ...state, modalMessage: value })),
}));
