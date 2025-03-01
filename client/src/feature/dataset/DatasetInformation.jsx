import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { toast } from "react-toastify";

function DatasetInformation({ dataset }) {
  const navigate = useNavigate();
  console.log(dataset);
  return (
    <div className="flex flex-col w-full h-full sm:w-4/5 md:w-3/4 lg:w-3/4 border-2 border-gray-200 p-6 rounded-lg shadow-md bg-white">
      <img
        src="https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/661d7f89ca4074cb868c6542_Screenshot%202024-04-16%20at%2012.54.52%20AM.png"
        alt="Dataset Thumbnail"
        className="w-full object-cover rounded-md mb-6"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-800">
          <span className="font-semibold">نام فایل :</span> {dataset?.title}
        </h1>

        <p className="text-gray-600">
          <span className="font-semibold">توضیحات :</span>{" "}
          {dataset?.description}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">نام سازنده :</span>{" "}
          {dataset?.uploadedBy?.userName}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">ایمیل سازنده :</span>{" "}
          {dataset?.uploadedBy?.email}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">جایزه :</span> {dataset?.prize}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">آخرین مهلت ارسال :</span>{" "}
          {new Date(dataset?.deadline).toLocaleDateString("fa-IR")}
        </p>

        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-600">
            <span className="font-semibold">اندازه فایل :</span> {dataset?.size}
          </p>
          <div className="flex space-x-4">
            <Button
              type="contained"
              extraStyle="py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-all"
              onClick={async () => {
                navigate(`/submitModel/${dataset?._id}`);
                const response = await fetch(dataset?.fileUrl);
                if (!response.ok)
                  toast.error("مشکلی در دانلود فایل وجود دارد!");
                const blob = await response.blob();
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.setAttribute("download", dataset?.name || "dataset.json");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              دانلود فایل
            </Button>

            <Link to={`/overView/${dataset?._id}`}>
              <Button type="primary">پیش نمایش</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatasetInformation;
