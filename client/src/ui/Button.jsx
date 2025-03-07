function Button({ children, type, onClick, extraStyle, disabled }) {
  const baseStyle =
    "cursor-pointer flex gap-2 items-center py-2 px-5 rounded-lg font-medium transition duration-300 ease-in-out focus:outline-none";
  let style = "";

  if (type === "contained") {
    style =
      "bg-[#2563EB] text-white hover:bg-[#1E40AF] shadow-md active:scale-95";
  } else if (type === "primary") {
    style =
      "bg-white text-[#2563EB] border-2 border-[#2563EB]/50 hover:border-[#2563EB] hover:shadow-md active:scale-95";
  } else if (type === "danger") {
    style = "bg-red-600 text-white hover:bg-red-700 shadow-md active:scale-95";
  }

  return (
    <button
      className={`${baseStyle} ${style} ${extraStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
