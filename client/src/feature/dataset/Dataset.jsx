import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useGetDataset } from "./useGetDataset";
import DatasetInformation from "./DatasetInformation";
import Tabs from "../../ui/Tabs";
import AddCommnet from "../../ui/AddCommnet";
import Comments from "../../ui/Comments";
import Contact from "../../ui/Contact";

function Dataset() {
  const { dataset } = useGetDataset();
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
    <div className="w-full h-full bg-gray-50 flex flex-col gap-6 items-center p-4 justify-center ">
      <DatasetInformation dataset={dataset?.data} />
      <div className="flex flex-col w-full h-full sm:w-4/5 md:w-3/4 lg:w-3/4 border-2 border-gray-200 p-6 rounded-lg shadow-md bg-white">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* تب کامنت‌ها */}
        {activeTab === "comments" && <Comments />}

        {/* تب ارسال کامنت */}
        {activeTab === "addComment" && <AddCommnet />}

        {/* تب ارتباط با سازنده */}
        {activeTab === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default Dataset;
