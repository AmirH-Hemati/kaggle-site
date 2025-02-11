import { useState } from "react";
import { useLogin } from "../useLogin";

function LoginForm() {
  const { login } = useLogin();
  const [value, setValue] = useState({ email: "", password: "" });
  function handelOnChange(e) {
    setValue((value) => ({ ...value, [e.target.name]: e.target.value }));
  }
  function handelLoginForm(e) {
    e.preventDefault();
    if (!value.email || !value.password) return;
    login(value);
  }
  return (
    <form
      onSubmit={handelLoginForm}
      className="w-96 h-80 p-6 shadow-md flex flex-col rounded-sm justify-evenly"
    >
      <input
        type="text"
        placeholder="User Name"
        className="border-2 border-black/50 p-2 rounded-sm"
        onChange={handelOnChange}
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-2 border-black/50 p-2 rounded-sm"
        onChange={handelOnChange}
        name="password"
      />
      <button className="w-full p-2 bg-red-500 text-white rounded-sm">
        submit
      </button>
    </form>
  );
}

export default LoginForm;
