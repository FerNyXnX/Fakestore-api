import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Categories from "../pages/Categories/Categories";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "categories", element: <Categories /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}