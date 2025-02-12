import UploadFile from "../../page/UploadFile";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
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
            <Button type={`contained`}>مجموعه داده جدید</Button>
            <Button type={`primary`}>داده های شما</Button>
          </div>
        </div>
        <img
          src="	https://www.kaggle.com/static/images/datasets/landing-header-light.svg"
          alt=""
        />
      </div>
      <Input type="text" placeholder="جستجو کنید ..." />
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
