import DatasetsItem from "./DatasetsItem";
import { useMyUpload } from "./useMyUpload";

function MyUpload() {
  const { uploads } = useMyUpload();
  return (
    <div className="w-full p-4 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">مجموعه فایل های اپلود شده شما</h1>
      <ul className="grid grid-cols-4 gap-4 p-4">
        {uploads?.data?.map((dataset) => (
          <DatasetsItem key={dataset?._id} dataset={dataset} />
        ))}
      </ul>
    </div>
  );
}

export default MyUpload;
