import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useEditProfile } from "./useEditProfile";
import { useCurrentUser } from "./useCurrentUser";

function Profile() {
  const { editProfile } = useEditProfile();
  const { currentUser } = useCurrentUser();
  const user = currentUser?.data;
  const [userEdit, setUserEdit] = useState({
    userName: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    setUserEdit({
      phone: user?.phone,
      userName: user?.userName,
      email: user?.email,
    });
  }, [user?.phone, user?.userName, user?.email]);

  const handleChange = (e) => {
    setUserEdit((userEdit) => ({
      ...userEdit,
      [e.target.name]: e.target.value,
    }));
  };

  const handelEditProfile = (e) => {
    e.preventDefault();
    console.log(userEdit);
    editProfile(userEdit);
  };

  return (
    <form
      onSubmit={handelEditProfile}
      className="p-6 bg-white rounded-lg shadow-md w-full max-w-lg mx-auto "
    >
      <div className="flex justify-center mb-4">
        <img
          src={""}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-center mb-2">پروفایل من</h2>
        <div className="mb-4">
          <label className="block text-gray-700">نام کاربری</label>
          <Input
            type="text"
            name="userName"
            value={userEdit.userName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">شماره موبایل</label>
          <Input
            type="tel"
            name="phone"
            value={userEdit.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">ایمیل</label>
          <Input
            type="email"
            name="email"
            value={userEdit.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="mt-4">
        <Button type="contained" extraStyle="w-full">
          ذخیره تغییرات
        </Button>
      </div>
    </form>
  );
}

export default Profile;
