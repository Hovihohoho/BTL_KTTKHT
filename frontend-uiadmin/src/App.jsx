import { useState } from "react";
import Sidebar from "./components/admin/Sidebar.jsx";
import EmployeePage from "./pages/admin/EmployeePage.jsx";
import MenuPage from "./pages/admin/MenuPage.jsx";

export default function App() {
  const [page, setPage] = useState("employee");

  return (
    <div className="app">
      <Sidebar page={page} setPage={setPage} />

      {page === "employee" && <EmployeePage />}
      {page === "menu" && <MenuPage />}
    </div>
  );
}