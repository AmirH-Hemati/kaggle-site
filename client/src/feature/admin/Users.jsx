import { Edit2 } from "iconsax-react";
import Button from "../../ui/Button";
import { useGetUsers } from "./useGetUsers";
import Modal from "../../ui/Modal";
import EditUsers from "./EditUsers";
import Search from "../../ui/Search";

function Users() {
  const { users } = useGetUsers();
  return (
    <div className="w-full p-6  overflow-auto h-full bg-gray-50">
      <div>
        <Search
          placeholder="جستجو بر اساس ایمیل کاربر"
          filedSearch={`searchUsers`}
        />
      </div>
      <ul className="w-full space-y-4 p-4">
        {users?.map((user) => (
          <li
            key={user._id}
            className="w-full relative bg-white shadow-md rounded-xl p-4 flex flex-col gap-2  border-l-6 border-[#1E40AF]"
          >
            <Modal>
              <Modal.Open>
                <Button type={`primary`} extraStyle={`absolute left-2 `}>
                  <Edit2 size="22" color="#1E40AF" />
                  <p>ویرایش</p>
                </Button>
              </Modal.Open>
              <Modal.Window>
                <EditUsers userId={user?._id} />
              </Modal.Window>
            </Modal>

            <div className="flex gap-10">
              <div className="text-lg font-semibold text-gray-800">
                <p className="text-gray-400 text-sm">نام کاربری :</p>
                <p>{user.userName}</p>
              </div>
              <div className="text-lg font-semibold text-gray-800">
                <p className="text-gray-400 text-sm">ایمیل کاربری : </p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-800">
              <p className="text-gray-400 text-sm">شماره موبایل : </p>
              <p>{user.phone}</p>
            </div>
            <div className="  text-blue-700 font-semibold  text-sm ">
              <p className="text-gray-400 text-sm">نقش کاربر</p>
              <p className="bg-blue-100 px-3 py-2 rounded-full">{user.role}</p>
            </div>
            <div className="flex gap-10 font-semibold">
              <div className="text-gray-800 text-sm">
                <p className="text-gray-400 text-sm">زمان ساخت اکانت : </p>
                <p>{new Date(user.createdAt).toLocaleDateString("fa-IR")}</p>
              </div>
              <div className="text-gray-800 text-sm">
                <p className="text-gray-400 text-sm">
                  آخرین زمان ورود به حساب :
                </p>
                <p>{new Date(user.createdAt).toLocaleDateString("fa-IR")}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
