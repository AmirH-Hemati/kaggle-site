import { useEffect, useState } from "react";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";
import { useGetUser } from "./useGetUser";
import Button from "../../ui/Button";

function EditUsers({ userId, onClose }) {
  const { user } = useGetUser(userId);
  const [value, setValue] = useState({
    email: "",
    userName: "",
    phone: "",
    role: "",
  });
  useEffect(() => {
    if (user) {
      setValue({
        email: user?.email,
        userName: user?.userName,
        phone: user?.phone,
        role: user?.role,
      });
    }
  }, [user]);

  function handelChangeValue(e) {
    setValue((value) => ({ ...value, [e.target.name]: e.target.value }));
  }
  function handelEditUser(e) {
    e.preventDefault();
    console.log("test");
  }
  return (
    <form onSubmit={handelEditUser} className="flex flex-col">
      <p className="font-semibold text-lg"> ویرایش حساب : {user?.email}</p>

      <FormLabel label={`ایمیل`}>
        <Input
          value={value.email}
          name={`email`}
          onChange={handelChangeValue}
        />
      </FormLabel>
      <FormLabel label={`نام کاربری`}>
        <Input
          value={value?.userName}
          name={`userName`}
          onChange={handelChangeValue}
        />
      </FormLabel>
      <FormLabel label={`شماره موبایل`}>
        <Input
          value={value?.phone}
          name={`phone`}
          onChange={handelChangeValue}
        />
      </FormLabel>
      <div className=" w-full flex flex-col gap-3 p-4 bg-blue-100 rounded-lg shadow-md">
        {["admin", "writer", "user"].map((role) => (
          <label key={role} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="role"
              value={role}
              checked={value?.role === role}
              onChange={handelChangeValue}
              className="hidden"
            />
            <div
              className={`w-5 h-5 border-2   rounded-full flex items-center justify-center ${
                value?.role === role && "bg-blue-600"
              } `}
            ></div>
            <span className="text-black font-semibold capitalize">{role}</span>
          </label>
        ))}
      </div>
      <div className="flex gap-2 self-end mt-4 ">
        <Button type={`primary`} onClick={onClose}>
          لغو{" "}
        </Button>
        <Button type={`contained`}>ذخیره</Button>
      </div>
    </form>
  );
}

export default EditUsers;
