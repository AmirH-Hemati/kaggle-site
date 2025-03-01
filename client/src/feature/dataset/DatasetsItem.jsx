import { Link } from "react-router-dom";
import { datasets } from "../../../../server/controllers/dataset";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";

function DatasetsItem({ dataset, route }) {
  console.log(dataset);
  const { role } = useAuth();
  const date = new Date(dataset?.deadline) - new Date();
  const [first, setFirst] = useState(date > 0 ? date : 0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (first > 0) {
        setFirst((t) => t - 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [first]);

  const days = Math.floor(first / (1000 * 60 * 60 * 24));
  const hours = Math.floor((first / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((first / (1000 * 60)) % 60);
  const seconds = Math.floor((first / 1000) % 60);

  return (
    <Link
      to={`/${role == "uploader" ? "datasets" : "datasetsAnalyze"}/${
        dataset?._id
      }`}
    >
      <li className="relative flex flex-col h-full rounded-3xl shadow-lg hover:shadow-2xl p-4 text-sm border border-gray-200 bg-white transition-all transform hover:scale-105">
        <img
          src="https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/661d7f89ca4074cb868c6542_Screenshot%202024-04-16%20at%2012.54.52%20AM.png"
          alt="Dataset Thumbnail"
          className="rounded-2xl w-full h-48 object-cover mb-4 shadow-md"
        />
        <p
          className={`text-sm font-semibold ${
            first > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {first > 0
            ? `زمان باقی مانده: ${days}:${hours}:${minutes}:${seconds}`
            : "زمان به پایان رسیده"}
        </p>
        <p className="font-semibold text-xl text-gray-800 mt-2">
          {dataset?.title}
        </p>
        <p className="text-xs text-gray-600 mt-2">
          انتشار یافت: {dataset?.uploadedBy?.userName}
        </p>
        <p className="text-xs text-gray-600">
          {datasets?.createdAt} تاریخ آپلود
        </p>
        <p className="text-xs font-medium text-gray-700 mt-2">
          جایزه: {dataset?.prize}
        </p>
        {/* <div className="">
          <Button>ویرایش</Button>
          <Button>حذف</Button>
        </div> */}
      </li>
    </Link>
  );
}

export default DatasetsItem;
