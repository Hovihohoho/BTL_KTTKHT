import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import MenuPage from "../pages/MenuPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import BookingPage from "../pages/BookingPage.jsx";

// Các trang bạn phụ trách trực tiếp
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

// Giả lập các trang của các bạn khác để test điều hướng
const CustomerDashboard = () => <div className="p-10">Giao diện Khách hàng (Duy làm)</div>;
const WaiterPage = () => <div className="p-10">Giao diện Phục vụ (Nhàn làm)</div>;
const KitchenPage = () => <div className="p-10">Giao diện Bếp (An làm)</div>;

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "customer", element: <CustomerDashboard /> },
    ],
  },
  { path: "/waiter", element: <WaiterPage /> },
  { path: "/kitchen", element: <KitchenPage /> },
]);