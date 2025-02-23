import { Link } from "react-router-dom";
import { datasets } from "../../../../server/controllers/dataset";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

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
      <li className="relative flex flex-col h-full rounded-3xl shadow-sm hover:shadow-2xl p-2 text-sm  border-2 border-black/20">
        <img
          src="https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
          alt=""
          className="rounded-3xl w-full  aspect-square"
        />
        <p className=" text-red-500 text-sm font-semibold">
          {first > 0
            ? ` زمان باقی مانده : ${days}:${hours}:${minutes}:${seconds} `
            : "زمان به پایان رسیده"}
        </p>
        <p className="font-semibold text-sm">{dataset?.title}</p>

        <p className="text-xs">انتشار یافت: {dataset?.uploadedBy?.userName}</p>
        <p className="text-xs"> {datasets?.createdAt}تاریخ اپلود : </p>
        <p className="text-xs">جایزه : {dataset?.prize}</p>
      </li>
    </Link>
  );
}

export default DatasetsItem;
