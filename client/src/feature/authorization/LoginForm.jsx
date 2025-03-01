import { useState } from "react";
import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

function LoginForm() {
  const { login } = useLogin();
  const [value, setValue] = useState({ phone: "", password: "" });

  const handleOnChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    if (!value.phone || !value.password) return;
    login(value);
  };

  return (
    <form
      onSubmit={handleLoginForm}
      className="w-88 mx-auto p-8 bg-white rounded-lg shadow-xl flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        ورود به حساب
      </h2>
      <Input
        type="text"
        placeholder="شماره موبایل"
        name="phone"
        onChange={handleOnChange}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Input
        type="password"
        placeholder="رمز عبور"
        name="password"
        onChange={handleOnChange}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="contained" extraStyle="mt-4">
        ورود
      </Button>
    </form>
  );
}

export default LoginForm;
