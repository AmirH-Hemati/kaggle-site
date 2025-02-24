import { toast } from "react-toastify";
import Button from "../../ui/Button";
import { useGetDataset } from "./useGetDataset";
import { Link, useNavigate } from "react-router-dom";

function Dataset() {
  const { dataset } = useGetDataset();
  const navigate = useNavigate();
  return (
    <div className="w-full flex  flex-col items-center  mt-4">
      <div className="flex flex-col border-2 w-2/3  border-black/40 p-4 rounded-sm">
        <img
          src="	https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
          alt=""
          className="self-center aspect-square  "
        />
        <div className="flex flex-col border-2 border-black/10 rounded-sm  p-4 gap-5">
          <h1 className="text-2xl font-semibold text-black ">
            <span className="font-semibold">نام فایل : </span>{" "}
            {dataset?.data?.title}
          </h1>
          <p className="text-gray-500">
            <span className="font-semibold">توضیحات : </span>
            {dataset?.data?.description}
          </p>

          <p>
            <span className="font-semibold">نام سازنده : </span>
            {dataset?.data?.uploadedBy?.userName}
          </p>

          <p>
            <span className="font-semibold">ایمیل سازنده : </span>
            {dataset?.data?.uploadedBy?.email}
          </p>
          <p>
            <span className="font-semibold">جایزه : </span>
            {dataset?.data?.prize}
          </p>
          <p>
            <span className="font-semibold">اخرین مهلت ارسال : </span>
            {new Date(dataset?.data?.deadline).toLocaleDateString("fa-IR")}
          </p>
          <div className="flex justify-between">
            <p>
              <span className="font-semibold">اندازه فایل : </span>

              {dataset?.data?.size}
            </p>
            <div className="space-x-2">
              <Button
                type={`contained`}
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
                <Button type={`primary`}>پیش نمایش</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dataset;
