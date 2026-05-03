import { useState, useEffect } from "react";

export default function EmployeeForm({ onSubmit, editingData, onCancel }) {
  const initialState = {
    id: "", name: "", birthYear: "", gender: "Nam",
    role: "", status: "working", phone: "", email: "", address: ""
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i).reverse();

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

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Tên không được để trống";
    if (!form.birthYear) newErrors.birthYear = "Vui lòng chọn năm sinh";
    if (!form.role) newErrors.role = "Vui lòng chọn chức vụ";
    if (!form.address.trim()) newErrors.address = "Địa chỉ không được để trống";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) newErrors.phone = "SĐT phải có 10 chữ số";
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    if (!emailRegex.test(form.email)) newErrors.email = "Email sai định dạng";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="form-card">
      <h3>{editingData ? `CHỈNH SỬA: ${form.id}` : "THÊM MỚI NHÂN VIÊN"}</h3>

      <div className="form-grid">
        <div className="form-group">
          <label>Tên nhân viên</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nhập họ tên..." />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Năm sinh</label>
          <select name="birthYear" value={form.birthYear} onChange={handleChange}>
            <option value="">-- Chọn năm --</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          {errors.birthYear && <span className="error-msg">{errors.birthYear}</span>}
        </div>

        <div className="form-group">
          <label>Giới tính</label>
          <div className="radio-group">
            <label className="radio-item">
              <input type="radio" name="gender" value="Nam" checked={form.gender === "Nam"} onChange={handleChange} /> Nam
            </label>
            <label className="radio-item">
              <input type="radio" name="gender" value="Nữ" checked={form.gender === "Nữ"} onChange={handleChange} /> Nữ
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Chức vụ</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="">-- Chọn chức vụ --</option>
            <option value="QUANLY">Quản lý</option>
            <option value="PHUCVU">Phục vụ</option>
            <option value="BEP">Bếp</option>
          </select>
          {errors.role && <span className="error-msg">{errors.role}</span>}
        </div>

        <div className="form-group">
          <label>Số điện thoại</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className="form-group full-width">
          <label>Địa chỉ</label>
          <input name="address" value={form.address} onChange={handleChange} />
          {errors.address && <span className="error-msg">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label>Trạng thái</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="working">Đang làm việc</option>
            <option value="off">Đã nghỉ</option>
          </select>
        </div>

        <div className="form-actions">
          <button className="btn-cancel" onClick={onCancel}>Hủy</button>
          <button className="btn-save" onClick={() => validate() && onSubmit(form)}>
            {editingData ? "Cập nhật" : "Lưu tạm"}
          </button>
        </div>
      </div>
    </div>
  );
}