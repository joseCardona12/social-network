import "./App.css";
import LoginForm from "./routes/Login/Login";
import ModalMessage from "./components/ModalMessage";
import { useView } from "./global-state/view";
import { getRoute, IRoute } from "./routes/route";

function App() {
  const { view } = useView();
  const route: IRoute = getRoute(view);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 relative">
      {route.component}
      <ModalMessage />
    </div>
  );
}

export default App;
