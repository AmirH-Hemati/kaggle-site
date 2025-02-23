function Button({ children, type, onClick, extraStyle }) {
  const rootStyle = " py-2 px-4 rounded-lg mt-4 cursor-pointer ";
  let style;
  if (type === "contained") {
    style = rootStyle + "bg-black text-white";
  } else if (type === "primary") {
    style = rootStyle + " bg-white text-black border-2 border-black/50";
  }

  return (
    <button className={` ${extraStyle} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
