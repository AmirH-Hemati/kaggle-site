import { useGetInActiveUsers } from "./useGetInActiveUsers";

function ReportInActiveUsers() {
  const { users } = useGetInActiveUsers();
  return (
    <div className="w-full h-full overflow-auto mx-auto p-6 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        گزارش نویسندگان غیر فعال امروز
      </h2>
      <ul className="space-y-4">
        {users?.length === 0 ? (
          <p className="text-gray-500">تمامی افراد امروز فعال بوده اند .</p>
        ) : (
          users?.map((user) => (
            <li
              key={user._id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm border-l-6 border-blue-800"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  {user.userName}
                </h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                <p>{user.count} مقاله</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ReportInActiveUsers;
