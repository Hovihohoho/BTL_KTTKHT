import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import Button from "../ui/Button.jsx";
import logoImg from "../../assets/images/logochillout.png";

const linkClass = ({ isActive }) =>
  `text-sm font-medium ${isActive ? "text-mintDark underline" : "text-gray-700 hover:text-mintDark"}`;

function Header() {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <header className="border-b border-line bg-white/95">
      <div className="mx-auto flex w-full max-w-page items-center justify-between px-4 py-4 md:px-6">
        <NavLink to="/" className="flex items-center text-mintDark">
          <img src={logoImg} alt="Chillout Logo" className="h-16 w-auto object-contain md:h-20" />
        </NavLink>
        <nav className="flex items-center gap-4 md:gap-8">
          <NavLink to="/" className={linkClass}>
            Trang chủ
          </NavLink>
          <NavLink to="/menu" className={linkClass}>
            Thực đơn
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Món đã chọn {itemCount > 0 ? `(${itemCount})` : "(0)"}
          </NavLink>
          <NavLink to="/booking">
            <Button className="px-4 md:px-8">Đặt bàn</Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
