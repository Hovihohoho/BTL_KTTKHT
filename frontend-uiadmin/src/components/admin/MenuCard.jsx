import { useState } from "react";
import { menuData } from "../../data/mockData.js";

export default function MenuPage() {
  const [menus] = useState(menuData);

  return (
    <div className="main">
      <div className="header">QUẢN LÝ THỰC ĐƠN</div>

      <div className="menu-grid">
        {menus.map((item) => (
          <div key={item.id} className="card menu-card">
            <div>
              <h4>{item.name}</h4>
              <p>{item.price.toLocaleString()} VNĐ</p>
            </div>
            <img src={item.img} width="80" style={{ borderRadius: 10 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
