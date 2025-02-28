import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useGetDataset } from "./useGetDataset";

function Dataset() {
  const { dataset } = useGetDataset();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // فرض بر اینکه کامنت‌ها از API دریافت می‌شود.
  const [activeTab, setActiveTab] = useState("comments"); // برای مدیریت تب‌های نمایش

  // ارسال کامنت
  const handleCommentSubmit = () => {
    if (!comment.trim()) return;
    setComments([...comments, { userName: "کاربر ناشناس", comment }]);
    setComment(""); // فیلد کامنت پاک می‌شود
    toast.success("کامنت شما ارسال شد!");
  };

  return (
    <div className="w-full h-full bg-gray-50 flex justify-center ">
      <div className="flex flex-col w-full h-full sm:w-4/5 md:w-3/4 lg:w-2/3 border-2 border-gray-200 p-6 rounded-lg shadow-md bg-white">
        <img
          src="https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/661d7f89ca4074cb868c6542_Screenshot%202024-04-16%20at%2012.54.52%20AM.png"
          alt="Dataset Thumbnail"
          className="w-full h-56 object-cover rounded-md mb-6"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            <span className="font-semibold">نام فایل :</span>{" "}
            {dataset?.data?.title}
          </h1>

          <p className="text-gray-600">
            <span className="font-semibold">توضیحات :</span>{" "}
            {dataset?.data?.description}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">نام سازنده :</span>{" "}
            {dataset?.data?.uploadedBy?.userName}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">ایمیل سازنده :</span>{" "}
            {dataset?.data?.uploadedBy?.email}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">جایزه :</span>{" "}
            {dataset?.data?.prize}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">آخرین مهلت ارسال :</span>{" "}
            {new Date(dataset?.data?.deadline).toLocaleDateString("fa-IR")}
          </p>

          <div className="flex justify-between items-center mt-6">
            <p className="text-gray-600">
              <span className="font-semibold">اندازه فایل :</span>{" "}
              {dataset?.data?.size}
            </p>
            <div className="flex space-x-4">
              <Button
                type="contained"
                extraStyle="py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-all"
                onClick={async () => {
                  navigate(`/submitModel/${dataset?.data?._id}`);
                  const response = await fetch(dataset?.data?.fileUrl);
                  if (!response.ok)
                    toast.error("مشکلی در دانلود فایل وجود دارد!");
                  const blob = await response.blob();
                  const link = document.createElement("a");
                  link.href = URL.createObjectURL(blob);
                  link.setAttribute(
                    "download",
                    dataset?.data?.name || "dataset.json"
                  );
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                دانلود فایل
              </Button>

              <Link to={`/overView/${dataset?.data?._id}`}>
                <Button type="primary">پیش نمایش</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex  space-x-6 mb-6">
            <button
              className={`flex  items-center  py-2 px-6 text-sm font-medium transition-all ${
                activeTab === "comments"
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("comments")}
            >نظرات</button>
            <button
              className={`flex items-center py-2 px-6 text-sm font-medium transition-all ${
                activeTab === "addComment"
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("addComment")}
            >نظر جدید</button>
            <button
              className={`flex items-center py-2 px-6 text-sm font-medium transition-all ${
                activeTab === "contact"
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("contact")}
            >ارتباط با سازنده</button>
          </div>

          {/* تب کامنت‌ها */}
          {activeTab === "comments" && (
            <div>
              {comments.length > 0 ? (
                <div className="space-y-4">
                  {comments.map((c, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200"
                    >
                      <p className="font-semibold text-gray-800">
                        {c.userName}
                      </p>
                      <p className="text-gray-600">{c.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  هیچ کامنتی برای این دیتاست وجود ندارد.
                </p>
              )}
            </div>
          )}

          {/* تب ارسال کامنت */}
          {activeTab === "addComment" && (
            <div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="نظر خود را وارد کنید..."
                className="w-full p-4 border rounded-lg mt-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <Button
                type="contained"
                extraStyle="mt-4 py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-all"
                onClick={handleCommentSubmit}
              >
                ارسال کامنت
              </Button>
            </div>
          )}

          {/* تب ارتباط با سازنده */}
          {activeTab === "contact" && (
            <div className="mt-4">
              <p className="text-gray-600">
                برای ارتباط با سازنده، می‌توانید از طریق ایمیل با ایشان تماس
                بگیرید:
              </p>
              <Button
                type="contained"
                extraStyle="mt-4 py-2 px-6 text-white bg-green-600 hover:bg-green-700 transition-all"
                onClick={() =>
                  (window.location.href = `mailto:${dataset?.data?.uploadedBy?.email}`)
                }
              >
                ارسال ایمیل به سازنده
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dataset;
