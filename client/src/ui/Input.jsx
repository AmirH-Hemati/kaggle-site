function Input({ type, placeholder, name, value, onChange }) {
  const baseStyles =
    "p-3 w-full border-2 rounded-sm text-black focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white";
  
  // اگر ورودی از نوع textarea باشد
  if (type === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        name={name}
        rows={4}
        minLength={0}
        maxLength={100}
        className={`${baseStyles} border-[#2563EB]`}
        value={value}
        onChange={onChange}
      ></textarea>
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${baseStyles} border-[#2563EB]`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
