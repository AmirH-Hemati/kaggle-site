function FormLabel({ label, children }) {
  return (
    <div
      className={` w-full flex flex-col gap-2  justify-between  py-3 md:py-6 font-semibold`}
    >
      <label
        htmlFor={children?.props?.id}
        className="flex items-center text-sm md:text-base"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormLabel;
