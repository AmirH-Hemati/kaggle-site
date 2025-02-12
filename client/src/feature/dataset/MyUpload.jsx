import DatasetsItem from "./DatasetsItem";
import { useMyUpload } from "./useMyUpload";

function MyUpload() {
  const { uploads } = useMyUpload();
  return (
    <div className=" p-4">
      <h1>مجموعه اپلود های شما</h1>
      <ul className="grid grid-cols-4 gap-4 p-4">
        {uploads?.data?.map((dataset) => (
          <DatasetsItem key={dataset?._id} dataset={dataset} />
        ))}
      </ul>
    </div>
  );
}

export default MyUpload;
