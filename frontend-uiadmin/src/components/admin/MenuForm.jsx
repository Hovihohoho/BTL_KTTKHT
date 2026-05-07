import { useState, useEffect } from "react";

export default function MenuForm({ onSubmit, editingData, onCancel }) {
  const initialState = {
  id: "",
  code: "",        
  name: "",        
  price: "",       
  category: "",    
  status: "Còn món",
  description: "", 
  img: ""
};

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingData) setForm(editingData);
    else setForm(initialState);
    setErrors({});
  }, [editingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  // Giả lập chọn ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Trong thực tế Microservices,sẽ upload file này lên S3/Cloudinary
      // Ở đây tạm dùng URL ảo để hiển thị
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Tên món không được để trống";
    if (!form.price || form.price <= 0) newErrors.price = "Giá phải lớn hơn 0";
    if (!form.category) newErrors.category = "Vui lòng chọn danh mục";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="form-card" style={{ position: "sticky", top: "20px" }}>
      <h3>{editingData ? `SỬA: ${form.name}` : "THÊM MÓN MỚI"}</h3>

      <div className="form-grid">
        <div className="form-group full-width" style={{ alignItems: "center" }}>
          <div
            className="menu-img-preview"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "12px",
              background: "#f1f5f9",
              marginBottom: "10px",
              overflow: "hidden",
              border: "2px dashed #cbd5e1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {form.img ? (
              <img
                src={form.img}
                alt="preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span style={{ fontSize: "10px", color: "#94a3b8" }}>
                Chưa có ảnh
              </span>
            )}
          </div>
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={handleImageChange}
            accept="image/*"
          />
          <label
            htmlFor="file-upload"
            className="btn-tab"
            style={{ cursor: "pointer", padding: "4px 10px" }}
          >
            Chọn ảnh món
          </label>
        </div>
        <div className="form-group">
          <label>Mã món ăn</label>
          <input
            name="code"
            value={form.code}
            disabled
            placeholder="Mã sẽ tự động tạo"
            style={{ opacity: 0.7, cursor: "not-allowed" }}
          />
        </div>
        <div className="form-group full-width">
          <label>Tên món ăn</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="VD: Salad cá hồi..."
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Giá (VNĐ)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="120000"
          />
          {errors.price && <span className="error-msg">{errors.price}</span>}
        </div>
        <div className="form-group">
          <label>Danh mục</label>
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="">-- Chọn --</option>
            <option value="Khai vị">Khai vị</option>
            <option value="Món chính">Món chính</option>
            <option value="Đồ uống">Đồ uống</option>
            <option value="Tráng miệng">Tráng miệng</option>
          </select>
          {errors.category && (
            <span className="error-msg">{errors.category}</span>
          )}
        </div>
        <div className="form-group">
          <label>Trạng thái</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Còn món">Còn món</option>
            <option value="Hết món">Hết món</option>
            <option value="Tạm ngưng">Tạm ngưng</option>
          </select>
        </div>
        <div className="form-group full-width">
          <label>Mô tả ngắn</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "60px",
              borderRadius: "6px",
              border: "1px solid #e2e8f0",
              padding: "8px",
              fontSize: "12px",
              backgroundColor: "#f8fafc",
            }}
            placeholder="Thành phần chính, hương vị..."
          />
        </div>
        <div className="form-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Hủy
          </button>
          <button
            className="btn-save"
            onClick={() => validate() && onSubmit(form)}
          >
            {editingData ? "Cập nhật" : "Lưu món"}
          </button>
        </div>
      </div>
    </div>
  );
}
