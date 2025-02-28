import { useSignIn } from "./useSIgnIn";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useAuth } from "../../context/AuthContext";

function SignIn() {
  const { value, setValue } = useAuth();
  const { signIn } = useSignIn();
  function handelOnChange(e) {
    setValue((value) => ({ ...value, [e.target.name]: e.target.value }));
  }
  function handelSignIn(e) {
    e.preventDefault();
    if (!value.phone || !value.role || !value.password) return;
    console.log("create account ");
    signIn(value);
  }
  return (
    <form
      onSubmit={handelSignIn}
      className="w-96 h-72 p-6 shadow-md flex flex-col rounded-sm justify-evenly gap-2 "
    >
      <div className="w-full flex divide-x-2">
        <div className=" w-1/2 p-4 text-xl flex gap-2 items-center shadow-md ">
          <label htmlFor="uploader">آپلود کننده</label>
          <input
            type="radio"
            id="uploader"
            name="role"
            value="uploader"
            onChange={(e) =>
              setValue((value) => ({ ...value, role: e.target.value }))
            }
          />
        </div>
        <div className=" w-1/2 p-4 text-xl flex gap-2 items-center shadow-md">
          <label htmlFor="analyzer">آنالیزگر</label>

          <input
            type="radio"
            value="analyzer"
            id="analyzer"
            name="role"
            onChange={(e) =>
              setValue((value) => ({ ...value, role: e.target.value }))
            }
          />
        </div>
      </div>

      <Input
        type="number"
        placeholder="شماره تلفن همراه خود را وارد کنید"
        className="border-2 border-black/50 p-2 rounded-sm"
        name="phone"
        onChange={handelOnChange}
      />
      <Input
        type="password"
        placeholder="رمز عبور"
        className="border-2 border-black/50 p-2 rounded-sm"
        name="password"
        onChange={handelOnChange}
      />
      <Button type={`contained`}>ثبت نام</Button>
    </form>
  );
}

export default SignIn;
{
  /* <Input
        type="text"
        placeholder="User Name"
        className="border-2 border-black/50 p-2 rounded-sm"
        name="userName"
        onChange={handelOnChange}
      /> */
}
{
  /* <Input
        type="password"
        placeholder="Password"
        className="border-2 border-black/50 p-2 rounded-sm"
        name="password"
        onChange={handelOnChange}
      /> */
}
{
  /* <select name="role" onChange={handelOnChange}>
        <option value="">select</option>
        <option value="uploader">uploader</option>
        <option value="analyzer">analyzer</option>
      </select> */
}
