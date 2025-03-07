function Input({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  extraStyle,
  id,
}) {
  const baseStyles =
    "p-3 w-full border-2 rounded-sm text-black focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white";

  if (type === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        name={name}
        rows={6}
        minLength={0}
        maxLength={100}
        className={`${baseStyles} border-[#2563EB]`}
        value={value}
        onChange={onChange}
        id={id}
      ></textarea>
    );
  }

  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${extraStyle} ${baseStyles} border-[#2563EB]`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
