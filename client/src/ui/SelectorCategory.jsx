function SelectorCategory({ value, onChange }) {
  const categories = [
    { key: "skills", label: "مهارت و سرگرمی" },
    { key: "programming", label: "برنامه‌نویسی" },
    { key: "security", label: "امنیت و شبکه" },
    { key: "art", label: "هنر و طراحی" },
    { key: "health", label: "سلامت و تناسب اندام" },
    { key: "research", label: "پژوهش و توسعه" },
  ];
  return (
    <>
      <label htmlFor="category" className="block text-lg font-semibold ">
        انتخاب دسته‌بندی
      </label>
      <select
        value={value}
        onChange={onChange}
        id="category"
        name="category"
        className="w-full p-3 bg-white border border-blue-600 rounded-sm shadow-md focus:outline-none focus:blue-2 focus:blue-blue-500"
      >
        <option disabled>انتخاب کنید</option>
        {categories.map((category) => (
          <option key={category.key} value={category.key}>
            {category.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectorCategory;
