export default function EmployeeTable({ data, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="text-center">Mã (Tạm)</th>
            <th className="text-left">Tên nhân viên</th>
            <th className="text-center">Chức vụ</th>
            <th className="text-center">Trạng thái</th>
            <th className="text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((emp) => (
              <tr 
                key={emp.id} 
                onClick={() => onEdit(emp)} 
                style={{ cursor: "pointer" }}
              >
                <td className="text-center badge-id"><span>{emp.id}</span></td>
                <td className="text-left">{emp.name}</td>
                <td className="text-center">{emp.role}</td>
                <td className="text-center">
                  <span className={`badge ${emp.status === "working" ? "badge-working" : "badge-off"}`}>
                    {emp.status === "working" ? "Đang làm" : "Đã nghỉ"}
                  </span>
                </td>
                <td className="text-center">
                  <button 
                    className="btn btn-delete" 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      onDelete(emp.id);
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" className="text-center">Không tìm thấy nhân viên nào</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}