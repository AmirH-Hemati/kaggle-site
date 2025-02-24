function Input({ type, placeholder, name, value, onChange }) {
  const styles = "p-3 w-full border-2 border-black/50 rounded-sm text-black";
  if (type == "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        name={name}
        rows={4}
        minLength={0}
        maxLength={100}
        className={styles}
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
      className={styles}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
