import MyUploads from "./MyUploads";
import { useMyUpload } from "./useMyUpload";

function AllDatasets() {
  const { uploads } = useMyUpload();
  return (
    <div className="w-full p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center text-gray-800 my-6">
        مجموعه فایل های آپلود شده شما
      </h1>
      <MyUploads datasets={uploads?.data} />
    </div>
  );
}

export default AllDatasets;
