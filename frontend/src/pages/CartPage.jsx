import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import CartItemRow from "../components/cart/CartItemRow.jsx";
import Button from "../components/ui/Button.jsx";
import cartDesign from "../assets/images/cart-design.png";
import { useCart } from "../context/CartContext.jsx";
import { formatVnd } from "../utils/format.js";

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  return (
    <div className="space-y-6">
      <PageBanner image={cartDesign} title="Thực đơn Chillout" subtitle="-Tinh hoa trong từng hương vị-" />
      <Breadcrumb
        items={[
          { label: "Trang chủ", to: "/" },
          { label: "Thực đơn", to: "/menu" },
          { label: "Món đã chọn" },
        ]}
      />
      <div className="space-y-6 rounded-xl bg-softGray p-4 md:p-6">
        <h1 className="text-center text-4xl font-semibold md:text-5xl">Danh sách chọn món</h1>
        <div className="space-y-3">
          {cartItems.length === 0 ? (
            <p className="rounded-md bg-white p-8 text-center text-gray-500">Chưa có món nào được chọn.</p>
          ) : (
            cartItems.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onIncrease={updateQuantity}
                onDecrease={updateQuantity}
                onRemove={removeFromCart}
              />
            ))
          )}
        </div>
        <div className="border-y border-line py-4 text-right text-xl font-semibold md:text-2xl">
          Tổng cộng: {formatVnd(getCartTotal())}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/menu">
            <Button variant="secondary" className="px-10 py-3">
              Quay lại thực đơn
            </Button>
          </Link>
          <Link to="/booking">
            <Button className="px-10 py-3">Đặt bàn</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
