import Dashboard from "./Dashboard/dashboard";
import LoginForm from "./Login/Login";

export interface IRoute {
  url: string;
  component: React.ReactNode;
}
export const ROUTES: IRoute[] = [
  {
    url: "dashboard",
    component: <Dashboard />,
  },
  {
    url: "login",
    component: <LoginForm />,
  },
];

export const getRoute = (url: string) => {
  const routeFound = ROUTES.find((route) => route.url === url);
  if (!routeFound) return ROUTES[1];
  return routeFound;
};
