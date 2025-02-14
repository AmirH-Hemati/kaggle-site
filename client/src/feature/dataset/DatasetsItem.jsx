import { Link } from "react-router-dom";
import { datasets } from "../../../../server/controllers/dataset";

function DatasetsItem({ dataset }) {
  return (
    <Link to={`/datasets/${dataset._id}`}>
      <li className=" flex flex-col h-full rounded-3xl shadow-sm hover:shadow-2xl p-2 text-sm  border-2 border-black/20">
        <img
          src="	https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
          alt=""
          className="rounded-3xl w-full  aspect-square"
        />
        <p className="font-semibold text-sm">{dataset.title}</p>

        <p className="text-xs">انتشار یافت: {dataset.uploadedBy.userName}</p>
        <p className="text-xs"> {datasets.createdAt}تاریخ اپلود : </p>
        <p className="text-xs">یک فایل جیسون</p>
      </li>
    </Link>
  );
}

export default DatasetsItem;
