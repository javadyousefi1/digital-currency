import HomePage from "../pages/home.jsx";
import exchangeRate from "../pages/exchangeRate.jsx";
import Notfound from "../pages/not-found";
import About from "../pages/about";

export const route = [
  { path: "/", exact: true, component: HomePage },
  { path: "/exchangRate", exact: false, component: exchangeRate },
  { path: "/about", exact: false, component: About },
  { path: "", exact: false, component: Notfound },
];
