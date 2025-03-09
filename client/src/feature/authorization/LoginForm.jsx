import { useState } from "react";
import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

function LoginForm() {
  const { login } = useLogin();
  const [value, setValue] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    if (!value.email || !value.password) return;
    login(value);
  };

  return (
    <form
      onSubmit={handleLoginForm}
      className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        ورود به حساب
      </h2>
      <Input
        type="text"
        placeholder="ایمیل"
        name="email"
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
      <Button type="contained" extraStyle="w-full py-3">
        ورود
      </Button>
    </form>
  );
}

export default LoginForm;
