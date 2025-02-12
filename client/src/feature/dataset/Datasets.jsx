import UploadFile from "../../page/UploadFile";
import Modal from "../../ui/Modal";
import AllDatasets from "./AllDatasets";

function Datasets() {
  return (
    <div className="w-full h-full">
      <div className="flex  justify-between">
        <div className="flex flex-col gap-2">
          <h1>مجموعه داده ها</h1>
          <p>
            مجموعه داده های با کیفیت را بارگزاری ,کاوش , تماشا یا آنالـــــِز
            کنید
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white text-xs font-semibold p-2 rounded-3xl">
              مجموعه داده جدید +
            </button>
            <button className="bg-black text-white text-xs font-semibold p-2 rounded-3xl">
              داده های شما
            </button>
          </div>
        </div>
        <img
          src="	https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
          alt=""
        />
      </div>
      <input type="text" placeholder="search" className="border-2 w-full p-3" />
      <p>مجموعه داده های پر طرفدار</p>
      <AllDatasets />
      <Modal>
        <Modal.Open openies={"createDataset"}>
          <button>open modal</button>
        </Modal.Open>
        <Modal.Window name={"createDataset"}>
          <UploadFile />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Datasets;
