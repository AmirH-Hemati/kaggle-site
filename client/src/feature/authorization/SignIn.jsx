import { useState } from "react";
import { useSignIn } from "./useSIgnIn";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function SignIn() {
  const { signIn } = useSignIn();
  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });
  function handelOnChange(e) {
    setValue((value) => ({ ...value, [e.target.name]: e.target.value }));
  }
  function handelSignIn(e) {
    e.preventDefault();
    if (!value.password || !value.userName || !value.role || !value.email)
      return;
    console.log("create account ");
    signIn(value);
  }
  return (
    <form
      onSubmit={handelSignIn}
      className="w-96 h-80 p-6 shadow-md flex flex-col rounded-sm justify-evenly"
    >
      <Input
        type="text"
        placeholder="User Name"
        className="border-2 border-black/50 p-2 rounded-sm"
        name="userName"
        onChange={handelOnChange}
      />
      <Input
        type="text"
        placeholder="email"
        className="border-2 border-black/50 p-2 rounded-sm"
        name="email"
        onChange={handelOnChange}
      />
      <Input
        type="password"
        placeholder="Password"
        className="border-2 border-black/50 p-2 rounded-sm"
        name="password"
        onChange={handelOnChange}
      />
      <select name="role" onChange={handelOnChange}>
        <option value="">select</option>
        <option value="uploader">uploader</option>
        <option value="analyzer">analyzer</option>
      </select>
      <Button type={`contained`}>
        ثبت نام
      </Button>
    </form>
  );
}

export default SignIn;
