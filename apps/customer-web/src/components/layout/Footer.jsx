function Footer() {
  return (
    <footer className="mt-12 border-t border-line bg-[#f3f5f4]">
      <div className="mx-auto grid w-full max-w-page grid-cols-2 gap-6 px-4 py-8 text-sm md:grid-cols-4 md:px-6">
        <div>
          <p className="text-lg font-semibold text-mintDark">Chillout</p>
          <p className="text-xs text-gray-500">Địa chỉ: xxx, xxx, xxx</p>
        </div>
        <div>
          <p className="font-semibold">Đặt bàn</p>
          <p className="text-xs text-gray-500">Liên hệ</p>
          <p className="text-xs text-gray-500">Đặt bàn online</p>
        </div>
        <div>
          <p className="font-semibold">Hỗ trợ</p>
          <p className="text-xs text-gray-500">Chính sách</p>
          <p className="text-xs text-gray-500">FAQ</p>
        </div>
        <div>
          <p className="font-semibold">Kết nối</p>
          <p className="text-xs text-gray-500">Facebook - Instagram - Zalo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
