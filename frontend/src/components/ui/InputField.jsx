function InputField({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-mint ${className}`}
      {...props}
    />
  );
}

export default InputField;
