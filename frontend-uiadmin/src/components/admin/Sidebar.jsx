import logo from "../../assets/img/logochillout.jpg"; 

export default function Sidebar({ setPage, page }) {
  // Giả sử sau này lấy data từ Context hoặc LocalStorage
  const user = {
    name: "Nguyễn Văn Chill",
    role: "QUANLY"
  };

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      console.log("Đã đăng xuất");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo-container">
          <img src={logo} alt="logoChillout" className="logo-img" />
        </div>

        <nav className="menu-list">
          <div
            className={`menu-item ${page === "employee" ? "active" : ""}`}
            onClick={() => setPage("employee")}
          >
            <span className="icon"></span> Nhân viên
          </div>

          <div
            className={`menu-item ${page === "menu" ? "active" : ""}`}
            onClick={() => setPage("menu")}
          >
            <span className="icon"></span> Thực đơn
          </div>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="user-info">
          <span className="icon"></span>
          <div className="user-text">
            <span className="user-name">{user.name}</span>
            <span className="user-role"> - {user.role}</span>
          </div>
        </div>

        <div className="menu-item logout-item" onClick={handleLogout}>
          <span className="icon">↪</span> Đăng xuất
        </div>
      </div>
    </div>
  );
}