import { useSignIn } from "./useSIgnIn";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

function SignIn() {
  const { value, setValue } = useAuth();
  const { signIn } = useSignIn();

  const handleOnChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!value.phone || !value.role || !value.password)
      return toast.error("اینپوت ها خالی هستند");
    signIn(value);
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">ثبت نام</h2>
      <div className="flex border rounded-lg overflow-hidden">
        <label
          htmlFor="uploader"
          className={`flex-1 p-4 text-center cursor-pointer transition ${
            value.role === "uploader"
              ? "bg-[#2563EB] text-white"
              : "text-gray-700 hover:bg-blue-100"
          }`}
        >
          <input
            type="radio"
            id="uploader"
            name="role"
            value="uploader"
            className="hidden"
            onChange={handleOnChange}
          />
          آپلود کننده
        </label>
        <label
          htmlFor="analyzer"
          className={`flex-1 p-4 text-center cursor-pointer transition  ${
            value.role === "analyzer"
              ? "bg-[#2563EB] text-white"
              : "text-gray-700 hover:bg-blue-100"
          }`}
        >
          <input
            type="radio"
            id="analyzer"
            name="role"
            value="analyzer"
            className="hidden"
            onChange={handleOnChange}
          />
          آنالیزگر
        </label>
      </div>
      <Input
        type="number"
        placeholder="شماره تلفن همراه خود را وارد کنید"
        name="phone"
        onChange={handleOnChange}
      />
      <Input
        type="password"
        placeholder="رمز عبور"
        name="password"
        onChange={handleOnChange}
      />
      <Button type="contained" extraStyle="w-full py-3">
        ثبت نام
      </Button>
    </form>
  );
}

export default SignIn;
