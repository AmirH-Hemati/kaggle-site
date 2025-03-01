import { Link } from "react-router-dom";
import UploadFile from "../../page/UploadFile";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import DatasetList from "./DatasetList";
import Search from "../../ui/Search";
import { useMyUpload } from "./useMyUpload";
import MyUploads from "./MyUploads";

function Datasets() {
  const { uploads } = useMyUpload();

  return (
    <div className="w-full h-full p-8 bg-gray-50 flex flex-col gap-8 ">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-800">مجموعه داده‌ها</h1>
          <p className="text-gray-600">
            مجموعه داده‌های با کیفیت را بارگزاری، کاوش، تماشا یا آنالـــــِز
            کنید
          </p>
          <div className="flex gap-4">
            <Link to="/myUploads">
              <Button type="primary" extraStyle="px-6 py-2 text-sm">
                داده‌های شما
              </Button>
            </Link>
            <Modal>
              <Modal.Open openies="createDataset">
                <Button type="contained" extraStyle="px-6 py-2 text-sm">
                  مجموعه داده جدید
                </Button>
              </Modal.Open>
              <Modal.Window name="createDataset">
                <UploadFile />
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <img
          src="https://www.velvetech.com/wp-content/uploads/2022/07/data-analytics-role.jpg"
          alt="Datasets Illustration"
          className="w-full md:w-1/2 h-64 object-cover mt-4 lg:mt-0"
        />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">
          مجموعه داده‌های شما
        </h2>
        <Link to="/myUploads" className="text-blue-600 hover:underline">
          بیشتر...
        </Link>
      </div>

      <MyUploads datasets={uploads?.data.slice(0, 3)} />
    </div>
  );
}

export default Datasets;
