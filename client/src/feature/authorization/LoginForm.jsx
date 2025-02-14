import { useState } from "react";
import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

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
      <Input
        type="text"
        placeholder="User Name"
        className="border-2 border-black/50 p-2 rounded-sm"
        onChange={handelOnChange}
        name="email"
      />
      <Input
        type="password"
        placeholder="Password"
        className="border-2 border-black/50 p-2 rounded-sm"
        onChange={handelOnChange}
        name="password"
      />
      <Button type="contained" extraStyle={`p-4`}>
        ورود
      </Button>
    </form>
  );
}

export default LoginForm;
