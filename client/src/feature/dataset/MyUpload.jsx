import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../service/axiosInstance";
import Button from "../../ui/Button";
import { toast } from "react-toastify";
import { useDeleteDataset } from "./useDeleteDataset";

function MyUpload() {
  const { id } = useParams();
  const [submissions, setSubmissions] = useState([]);
  const [datasets, setDatasets] = useState(null);
  console.log(datasets);
  useEffect(() => {
    const fetchDatasetDetails = async () => {
      try {
        // دریافت اطلاعات مجموعه داده
        const datasetRes = await axiosInstance.get(`/dataset/myUploads/${id}`);
        setDatasets(datasetRes?.data?.data);
      } catch (error) {
        console.error("Error fetching dataset or submissions:", error);
      }
    };

    fetchDatasetDetails();
  }, [id]);

  if (datasets?.length === 0) {
    return (
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center text-gray-600">
        کاربری مدلی ارسال نکرده است.
      </h2>
    );
  }

  return (
    <div className="w-full h-full overflow-auto bg-gray-50 p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        کاربرانی که مدل خود را ارسال کرده‌اند:
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {datasets?.map((dataset) => (
          <li
            key={dataset?._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col gap-4 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <img
              src="https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
              alt="Dataset Thumbnail"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-gray-800">
                ایمیل ارسال کننده: {dataset.user.email}
              </p>
              <p className="text-lg font-semibold text-gray-800">
                نام کاربری ارسال کننده: {dataset.user.userName}
              </p>
              <Button
                type="contained"
                extraStyle="mt-4"
                onClick={async () => {
                  const response = await fetch(dataset?.modelFile);
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
                دانلود مدل
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyUpload;
