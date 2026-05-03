import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer.jsx";
import Header from "../components/layout/Header.jsx";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-page flex-1 px-4 py-6 md:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
