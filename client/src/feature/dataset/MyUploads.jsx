import { Link } from "react-router-dom";
import { useMyUpload } from "./useMyUpload";
import Button from "../../ui/Button";

function MyUploads() {
  const { uploads } = useMyUpload();
  const datasets = uploads?.data;
  console.log(datasets);
  return (
    <div className="w-full p-4 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">مجموعه فایل های اپلود شده شما</h1>
      <div className="grid grid-cols-4 gap-2">
        {datasets?.map((dataset) => (
          <Link key={dataset._id} to={`/myUploads/${dataset?._id}`}>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="mb-4">
                <img
                  src="https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
                  alt={dataset.title}
                  className="w-full aspect-square  rounded-md"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  نام فایل : {dataset.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  جایزه : {dataset.prize}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-semibold text-sm">
                    سایز : {dataset.size} KB
                  </span>
                </div>
              </div>
              <Button extraStyle={`text-xs`} type={`contained`}>
                جهت دیدن مدل ها کلیک کنید
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyUploads;
