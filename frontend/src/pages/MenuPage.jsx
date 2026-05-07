import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import CategorySidebar from "../components/menu/CategorySidebar.jsx";
import ProductCard from "../components/menu/ProductCard.jsx";
import InputField from "../components/ui/InputField.jsx";
import menuDesign from "../assets/images/menu-design.png";
import { useCart } from "../context/CartContext.jsx";
import { categories, menuItems } from "../data/mockMenu.js";

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [keyword, setKeyword] = useState("");
  const { addToCart, getCartItemCount } = useCart();
  const cartCount = getCartItemCount();

  const filteredItems = useMemo(
    () =>
      menuItems.filter((item) => {
        const passCategory = activeCategory === "Tất cả" || item.category === activeCategory;
        const passKeyword = item.name.toLowerCase().includes(keyword.trim().toLowerCase());
        return passCategory && passKeyword;
      }),
    [activeCategory, keyword]
  );

  return (
    <div className="space-y-6">
      <PageBanner
        image={menuDesign}
        title="Thực đơn Chillout"
        subtitle="-Tinh hoa trong từng hương vị-"
      />
      <Breadcrumb items={[{ label: "Trang chủ", to: "/" }, { label: "Thực đơn" }]} />
      <div className="grid gap-6 rounded-xl bg-[#f5f5f5] p-4 md:grid-cols-[220px_1fr] md:p-6">
        <CategorySidebar categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
        <div className="space-y-5">
          <div className="flex flex-col gap-3 md:flex-row">
            <InputField
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Tìm món..."
              className="md:flex-1"
            />
            <Link
              to="/cart"
              className="inline-flex items-center justify-center rounded-md border border-[#d6ccaf] bg-[#efe7d2] px-6 py-2 text-base font-semibold text-gray-700 hover:bg-[#e7ddc6]"
            >
              Món đã chọn ({cartCount})
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
