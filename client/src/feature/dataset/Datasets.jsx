import { Link } from "react-router-dom";
import UploadFile from "../../page/UploadFile";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AllDatasets from "./AllDatasets";
import Search from "../../ui/Search";

function Datasets() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4">
      <div className="flex h-50 justify-between items-center">
        <div className="flex h-full  flex-col justify-evenly gap-2">
          <h1 className="text-3xl font-semibold">مجموعه داده ها</h1>
          <p className="text-gray-800">
            مجموعه داده های با کیفیت را بارگزاری ,کاوش , تماشا یا آنالـــــِز
            کنید
          </p>
          <div className="flex gap-4">
            <Link to={`/myUpload`}>
              <Button type={`primary`}>داده های شما</Button>
            </Link>
            <Modal>
              <Modal.Open openies={"createDataset"}>
                <Button type={`contained`}>مجموعه داده جدید</Button>
              </Modal.Open>
              <Modal.Window name={"createDataset"}>
                <UploadFile />
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <img
          src="	https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
          alt=""
          className="object-cover h-full"
        />
      </div>
      <Search />
      <h2 className="font-semibold text-lg">مجموعه داده های پر طرفدار</h2>
      <AllDatasets />
    </div>
  );
}

export default Datasets;
