import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import Button from "../components/ui/Button.jsx";
import InputField from "../components/ui/InputField.jsx";
import bookingDesign from "../assets/images/booking-design.png";
import { useCart } from "../context/CartContext.jsx";
import { formatVnd } from "../utils/format.js";

const tableTypes = ["Bàn đơn", "Bàn tròn", "Bàn VIP"];

function BookingPage() {
  const { cartItems, getCartTotal } = useCart();
  const [form, setForm] = useState({
    date: "",
    startTime: "",
    guests: "",
    tableType: tableTypes[0],
  });
  const [message, setMessage] = useState("");

  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.date || !form.startTime || !form.guests) {
      setMessage("Vui lòng nhập đầy đủ thông tin đặt bàn.");
      return;
    }
    setMessage("Đặt bàn thành công! Nhà hàng sẽ liên hệ xác nhận sớm.");
  };

  return (
    <div className="space-y-5">
      <PageBanner
        image={bookingDesign}
        title="Đặt bàn Chillout"
        subtitle="-Cam kết mang đến trải nghiệm đáng nhớ-"
      />
      <Breadcrumb
        items={[
          { label: "Trang chủ", to: "/" },
          { label: "Thực đơn", to: "/menu" },
          { label: "Món đã chọn", to: "/cart" },
          { label: "Đặt bàn" },
        ]}
      />
      <div className="space-y-5 rounded-xl bg-softGray p-4 md:p-6">
        <h1 className="text-center text-4xl font-semibold">Thông tin đặt bàn</h1>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-[#dde8e6] p-4">
          <div className="grid gap-3 md:grid-cols-3">
            <InputField type="date" value={form.date} onChange={(e) => updateField("date", e.target.value)} />
            <InputField
              type="time"
              value={form.startTime}
              onChange={(e) => updateField("startTime", e.target.value)}
            />
            <InputField
              type="number"
              min="1"
              placeholder="Số lượng người"
              value={form.guests}
              onChange={(e) => updateField("guests", e.target.value)}
            />
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {tableTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => updateField("tableType", type)}
                className={`rounded-md border px-4 py-6 text-center font-medium ${
                  form.tableType === type
                    ? "border-mintDark bg-mint/30 text-mintDark"
                    : "border-gray-300 bg-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          {message && <p className="text-sm font-medium text-mintDark">{message}</p>}
          <div className="flex gap-3">
            <Link to="/cart">
              <Button variant="secondary">Quay lại chọn món</Button>
            </Link>
            <Button type="submit">Đặt bàn ngay</Button>
          </div>
        </form>

        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-2xl font-semibold">Danh sách chọn món</h2>
          <div className="space-y-2">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Bạn chưa chọn món. Vui lòng quay lại thực đơn.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded bg-[#f4eee3] px-3 py-2">
                  <p>{item.name}</p>
                  <p>
                    {item.quantity} x {formatVnd(item.price)}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="mt-4 border-t border-line pt-3 text-right text-xl font-semibold">
            Tổng cộng: {formatVnd(getCartTotal())}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BookingPage;
