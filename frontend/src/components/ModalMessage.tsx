import { X } from "lucide-react";
import {
  CURRENT_MODAL_MESSAGE,
  useModalMessage,
} from "../global-state/modalMessage";

export default function ModalMessage() {
  const { modalMessage, setModalMessage } = useModalMessage();
  const bgColor = modalMessage.color === "red" ? "bg-red-200" : "bg-green-200";
  return (
    <>
      {modalMessage.state && (
        <div className={`absolute top-2 right-2 `}>
          <div
            className={`bg-white rounded-md p-4 w-[200px] relative ${bgColor}`}
          >
            <p className="text-sm tex-gray-500">{modalMessage.message}</p>
            <button
              className="p-1 rounded-md absolute top-1 right-1 bg-gray-100"
              onClick={() => {
                setModalMessage(CURRENT_MODAL_MESSAGE);
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
