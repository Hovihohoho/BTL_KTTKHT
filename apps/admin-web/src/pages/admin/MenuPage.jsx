import { useState, useMemo } from "react";
import { menuData } from "../../data/mockData.js";
import Header from "../../components/admin/Header.jsx";
import useDebounce from "../../hooks/admin/useDebounce.js";
import MenuForm from "../../components/admin/MenuForm.jsx";

export default function MenuPage() {
  const [menus, setMenus] = useState(menuData);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const debouncedKeyword = useDebounce(keyword, 300);

  const handleSaveMenu = (formData) => {
    if (editingItem) {
      setMenus(menus.map((m) => (m.id === formData.id ? formData : m)));
    } else {
      const tempNum = Math.floor(Math.random() * 1000);
      const newItem = {
        ...formData,
        id: "M" + tempNum,
        code:
          (formData.category === "Đồ uống" ? "D" : "F") +
          String(tempNum).padStart(3, "0"),
      };
      setEmployees([...menus, newItem]);
      setMenus([...menus, newItem]);
    }
    setShowForm(false);
    setEditingItem(null);
  };

  const filteredMenus = useMemo(() => {
    return menus.filter((m) => {
      const matchSearch = m.name
        .toLowerCase()
        .includes(debouncedKeyword.toLowerCase());
      const matchCate = category === "Tất cả" || m.category === category;
      return matchSearch && matchCate;
    });
  }, [debouncedKeyword, category, menus]);

  const categories = [
    "Tất cả",
    "Khai vị",
    "Món chính",
    "Đồ uống",
    "Tráng miệng",
  ];

  return (
    <div className="main">
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#2d3748", fontSize: "18px", fontWeight: "bold" }}>
          QUẢN LÝ THỰC ĐƠN
        </h2>
        <button
          className="btn btn-add"
          onClick={() => {
            setEditingItem(null);
            setShowForm(true);
          }}
        >
          + Thêm món
        </button>
      </div>

      <div
        className="card"
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "15px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          className="filter-tabs"
          style={{ display: "flex", gap: "10px", flex: 1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${category === cat ? "btn-active-tab" : "btn-tab"}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="search-box" style={{ position: "relative" }}>
          <input
            className="search-input"
            placeholder="Tìm món ăn..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

      <div className="employee-layout">
        {showForm && (
          <div className="form-side">
            <MenuForm
              editingData={editingItem}
              onSubmit={handleSaveMenu}
              onCancel={() => {
                setShowForm(false);
                setEditingItem(null);
              }}
            />
          </div>
        )}

        <div className="table-side">
          <div className="menu-grid">
            {filteredMenus.map(
              (
                item, // BIẾN 'item' ĐƯỢC ĐỊNH NGHĨA Ở ĐÂY
              ) => (
                <div
                  key={item.id}
                  className="card menu-card-styled"
                  onClick={() => {
                    setEditingItem(item);
                    setShowForm(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div className="menu-info">
                    <span className="id-badge" style={{ marginBottom: "5px" }}>
                      {item.code || "F000"}
                    </span>
                    <h4>{item.name}</h4>
                    <p className="price">{item.price.toLocaleString()} VNĐ</p>
                  </div>
                  <div className="menu-img-wrapper">
                    <img
                      src={item.img || "https://via.placeholder.com/100"}
                      alt={item.name}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
