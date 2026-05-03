-- Thêm dữ liệu mẫu vào bảng users (Giả sử tên bảng của bạn là users)
-- Lưu ý: Mật khẩu ở đây đang để text thường để bạn dễ test UI trước.
-- Khi làm thật, bạn cần chèn chuỗi đã mã hóa bằng BCrypt vào đây.

INSERT INTO
    users (
        username,
        password,
        full_name,
        role
    )
VALUES (
        'admin',
        '123456',
        'Quản lý Hệ thống',
        'ADMIN'
    );

INSERT INTO
    users (
        username,
        password,
        full_name,
        role
    )
VALUES (
        'waiter1',
        '123456',
        'Nhân viên Phục vụ 1',
        'WAITER'
    );

INSERT INTO
    users (
        username,
        password,
        full_name,
        role
    )
VALUES (
        'chef1',
        '123456',
        'Đầu bếp 1',
        'CHEF'
    );

INSERT INTO
    users (
        username,
        password,
        full_name,
        role
    )
VALUES (
        'khachhang1',
        '123456',
        'Khách hàng VIP',
        'CUSTOMER'
    );