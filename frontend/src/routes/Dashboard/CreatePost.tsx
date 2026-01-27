import { Plus } from "lucide-react";

interface ICreateProps {
  setModalCreate: (value: boolean) => void;
}
export default function CreatePost({ setModalCreate }: ICreateProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-xl shadow-sm bg-white">
      <div className="w-10 h-10 rounded-full bg-purple-200"></div>
      <div
        className="bg-gray-100 rounded-md p-2 outline-none flex flex-1"
        onClick={() => setModalCreate(true)}
      >
        <span className="text-sm text-gray-500">What's?</span>
      </div>
      <button
        className="flex items-center justify-center w-10 h-10 bg-purple-200 rounded-full"
        onClick={() => setModalCreate(true)}
      >
        <Plus />
      </button>
    </div>
  );
}
