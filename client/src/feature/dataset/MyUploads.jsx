import { Link } from "react-router-dom";
import { useMyUpload } from "./useMyUpload";
import Button from "../../ui/Button";
import { useDeleteDataset } from "./useDeleteDataset";
import Modal from "../../ui/Modal";
import EditDataset from "./EditDataset";
import ConfirmDelete from "../../ui/ConfirmDelete";

function MyUploads({ datasets }) {
  const { deleteDataset } = useDeleteDataset();

  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {datasets?.map((dataset) => (
        <li
          key={dataset._id}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105  flex flex-col justify-between"
        >
          <div className="mb-4 ">
            <img
              src="https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/661d7f89ca4074cb868c6542_Screenshot%202024-04-16%20at%2012.54.52%20AM.png"
              alt={dataset.title}
              className="w-full h-40 object-cover rounded-md transition-all group-hover:opacity-80"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                نام فایل: {dataset.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                جایزه: {dataset.prize}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-gray-700">
              <span className="font-semibold text-sm">
                سایز: {dataset.size} KB
              </span>
            </div>

            <div className="w-full mt-4 flex flex-col gap-2">
              <Link to={`/myUploads/${dataset?._id}`}>
                <Button type="contained" extraStyle="w-full text-xs">
                  مشاهده مدل‌ها
                </Button>
              </Link>
              <Modal>
                <Modal.Open openies={`editDataset`}>
                  <Button type="primary" extraStyle="w-full text-xs">
                    ویرایش فایل
                  </Button>
                </Modal.Open>
                <Modal.Window name={`editDataset`}>
                  <EditDataset />
                </Modal.Window>
              </Modal>
              <Link to={`/edit-dataset/${dataset?._id}`}></Link>
              <Modal>
                <Modal.Open>
                  <Button type="danger" extraStyle="w-full text-xs">
                    حذف فایل
                  </Button>
                </Modal.Open>
                <Modal.Window>
                  <ConfirmDelete
                    deleteDataset={() => deleteDataset(dataset?._id)}
                    resourceName={dataset?.title}
                  />
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MyUploads;
