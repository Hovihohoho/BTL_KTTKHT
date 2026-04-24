import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import BookingPage from "../pages/BookingPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import MenuPage from "../pages/MenuPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "booking", element: <BookingPage /> },
    ],
  },
]);
