import { useState, useMemo } from "react";
import Header from "../../components/admin/Header.jsx";
import EmployeeForm from "../../components/admin/EmployeeForm.jsx";
import EmployeeTable from "../../components/admin/EmployeeTable.jsx";
import useDebounce from "../../hooks/admin/useDebounce.js";


export default function EmployeePage() {
  // Dữ liệu mẫu ban đầu
  const [employees, setEmployees] = useState([
    { 
      id: "NEW789", 
      name: "Phan Văn Chillout", 
      role: "QUANLY", 
      status: "working", 
      phone: "0909123456", 
      email: "chillout@gmail.com", 
      address: "TP.HCM", 
      gender: "Nam", 
      birthYear: "1990" 
    }
  ]);

  const [keyword, setKeyword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingData, setEditingData] = useState(null);

  const debouncedKeyword = useDebounce(keyword, 300);

  const filteredEmployees = useMemo(() => {
    return employees.filter(e =>
      e.name.toLowerCase().includes(debouncedKeyword.toLowerCase()) ||
      e.id.toLowerCase().includes(debouncedKeyword.toLowerCase())
    );
  }, [debouncedKeyword, employees]);

  const handleSave = (formData) => {
    if (editingData) {

      setEmployees(employees.map(e => e.id === formData.id ? formData : e));
    } else {
      // Thêm mới với ID ngẫu nhiên (Giả lập logic Backend)
      const tempId = "NEW" + Math.floor(Math.random() * 1000);
      setEmployees([...employees, { ...formData, id: tempId }]);
    }
    setShowForm(false);
    setEditingData(null);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Xác nhận xóa nhân viên có mã: ${id}?`)) {
      setEmployees(employees.filter(e => e.id !== id));
      if (editingData?.id === id) {
        setShowForm(false);
        setEditingData(null);
      }
    }
  };

  return (
  <div className="main">
    <Header />
    <h2 style={{ marginBottom: '20px', color: '#2d3748', fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
      QUẢN LÝ NHÂN VIÊN
    </h2>

    <div className="card" style={{ marginBottom: '15px', padding: '10px' }}>
      <div className="search-bar" style={{ margin: 0 }}>
          <input 
            className="search-input" 
            placeholder="Tìm tên hoặc mã..." 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)} 
          />
          <button className="btn btn-add" onClick={() => { setEditingData(null); setShowForm(true); }}>
            + Thêm mới
          </button>
      </div>
    </div>

    <div className="employee-layout">
      {showForm && (
        <div className="form-side">
          <EmployeeForm 
            editingData={editingData} 
            onSubmit={handleSave} 
            onCancel={() => { setShowForm(false); setEditingData(null); }} 
          />
        </div>
      )}

      <div className="table-side">
        <div className="card">
          <EmployeeTable 
            data={filteredEmployees} 
            onEdit={(emp) => { 
              setEditingData(emp); 
              setShowForm(true); 
            }} 
            onDelete={handleDelete} 
          />
        </div>
      </div>
    </div>
  </div>
);
}