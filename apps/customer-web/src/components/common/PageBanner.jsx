function PageBanner({ image, title, subtitle }) {
  return (
    <section className="relative mb-7 h-[190px] overflow-hidden rounded-xl">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl font-semibold drop-shadow-sm md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-1 text-lg opacity-95">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageBanner;
