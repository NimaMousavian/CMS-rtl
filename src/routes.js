import Home from "./pages/Home";
import Products from "./pages/Products";
import Comments from "./pages/Comments";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Discounts from "./pages/Discounts";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/discounts", element: <Discounts /> },
];

export default routes;
