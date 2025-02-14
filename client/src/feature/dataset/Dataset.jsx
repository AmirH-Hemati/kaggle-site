import Button from "../../ui/Button";
import { useGetDataset } from "./useGetDataset";

function Dataset() {
  const { dataset } = useGetDataset();

  return (
    <div className="w-full flex  flex-col items-center  mt-10">
      <div className="flex flex-col border-2 w-2/3 h-[90%] border-black/40 p-4 rounded-sm">
        <img
          src="	https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
          alt=""
          className="self-center aspect-square  "
        />
        <div className="flex flex-col border-2 border-black/10 rounded-sm  p-4 gap-7">
          <h1 className="text-2xl font-semibold text-black ">
            <span className="font-semibold">نام فایل : </span>{" "}
            {dataset?.data?.name}
          </h1>
          <p className="text-gray-500">
            <span className="font-semibold">توضیحات : </span>
            {dataset?.data?.description}
          </p>

          <p>
            <span className="font-semibold">نام سازنده : </span>
            {dataset?.data?.uploadedBy.userName}
          </p>
          <p>
            <span className="font-semibold">ایمیل سازنده : </span>
            {dataset?.data?.uploadedBy.email}
          </p>

          <div className="flex justify-between">
            <p>
              <span className="font-semibold">اندازه فایل : </span>

              {dataset?.data?.size}
            </p>
            <Button type={`contained`}>دانلود فایل</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dataset;
