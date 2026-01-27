import { LogOut } from "lucide-react";
import { useView } from "../../global-state/view";

export default function Header() {
  const { setView } = useView();
  return (
    <header className="flex justify-between items-center w-full bg-gray-50 p-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md p-1 bg-purple-200"></div>
          <h2>Social-network</h2>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            setView("login");
          }}
        >
          <LogOut />
        </button>
      </div>
    </header>
  );
}
