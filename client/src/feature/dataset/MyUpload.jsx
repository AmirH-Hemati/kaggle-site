import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../service/axiosInstance";
import Button from "../../ui/Button";
import { toast } from "react-toastify";

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
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        کاربری مدلی ارسال نکرده است .
      </h2>
    );
  }
  return (
    <div className="w-full h-full   overflow-auto mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        کاربرانی که مدل خود را ارسال کرده‌اند:
      </h2>
      <ul className="grid grid-cols-4 gap-4 w-full">
        {datasets?.map((dataset) => (
          <li
            key={dataset?._id}
            className="bg-white  shadow-xl  box-border  items-center rounded-sm w-full"
          >
            <img
              src="https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex flex-col w-full gap-2 justify-between p-3">
              <p className="font-semibold">
                ایمیل ارسال کننده :{dataset.user.email}
              </p>
              <p className="font-semibold ">
                نام کاربری ارسال کننده: {dataset.user.userName}
              </p>
              <Button
                type={`contained`}
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
                دانلود مدل{" "}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyUpload;
// {dataset && (
//     <div>
//       <h1 className="text-3xl font-bold text-center mb-8">
//         {dataset.title}
//       </h1>
//       <p className="text-center mb-4">{dataset.description}</p>
//       <h2 className="text-2xl font-semibold mt-8 mb-4">
//         کاربرانی که مدل خود را ارسال کرده‌اند:
//       </h2>

//       {submissions.length === 0 ? (
//         <p>هیچ مدلی ارسال نشده است.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {submissions.map((submission) => (
//             <div
//               key={submission._id}
//               className="bg-white p-4 rounded-lg shadow-md"
//             >
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {submission.user.name}
//               </h3>
//               <p className="text-sm text-gray-600">
//                 {submission.user.email}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
