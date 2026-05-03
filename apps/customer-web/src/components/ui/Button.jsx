const base =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors";

const variants = {
  primary: "bg-[#95c6bb] text-white hover:bg-[#6da99c]",
  secondary: "bg-[#efe7d2] text-gray-700 hover:bg-[#e5dbc0]",
};

function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}) {
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
