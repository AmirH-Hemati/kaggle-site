function Comments({ comments }) {
  console.log(comments);
  return (
    <div>
      {comments?.data?.length > 0 ? (
        <div className="space-y-4">
          {comments?.data?.map((c, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md border space-y-4 border-gray-200"
            >
              {/* اطلاعات کامنت اصلی */}
              <div className="flex gap-4 text-gray-600 items-center">
                <p className="font-semibold text-lg text-gray-800">
                  {c?.user?.email || "کاربر"}
                </p>
                <p className="text-sm">
                  {new Date(c?.createdAt).toLocaleDateString("fa-IR")}
                </p>
              </div>
              <p className="text-gray-600 font-semibold text-md">{c?.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">کامنتی هنوز ثبت نشده است.</p>
      )}
    </div>
  );
}

export default Comments;
