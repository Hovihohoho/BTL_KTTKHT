import Button from "../components/ui/Button.jsx";
import homeDesign from "../assets/images/home-design.png";
import { Link } from "react-router-dom";

function HeroCard({ title, description, image }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-line">
      <img src={image} alt={title} className="h-[270px] w-full object-cover md:h-[320px]" />
      <div className="absolute inset-0 bg-mint/35" />
      <div className="absolute inset-0 flex flex-col justify-center space-y-4 p-8 text-gray-800 md:p-12">
        <h2 className="max-w-lg text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
        <p className="max-w-md text-base md:text-lg">{description}</p>
        <Link to="/booking">
          <Button variant="secondary" className="px-8 py-3">
            Đặt bàn ngay
          </Button>
        </Link>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="space-y-8 pb-4">
      <HeroCard
        title="Không gian tinh tế cho những phút giây thư giãn"
        description="Trải nghiệm ẩm thực trong không gian nhẹ nhàng, ấm áp và đầy cảm hứng."
        image={homeDesign}
      />
      <HeroCard
        title="Thưởng thức theo cách của bạn"
        description="Những món ăn được chuẩn bị với sự tinh tế về cảm xúc và hương vị."
        image={homeDesign}
      />
      <section className="grid gap-6 rounded-2xl border border-line bg-softGray p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold">Về nhà hàng Chillout</h3>
          <p className="text-gray-600">
            Chillout là điểm đến hoàn hảo để bạn thư giãn và thưởng thức ẩm thực. Chúng tôi cam kết
            mang đến những món ăn ngon miệng và đồ uống tinh tế trong không gian ấm cúng.
          </p>
        </div>
        <img src={homeDesign} alt="Không gian Chillout" className="h-full rounded-xl object-cover" />
      </section>
    </div>
  );
}

export default HomePage;
