import { useUploadFile } from "../feature/dataset/useUploadFile";
import Button from "../ui/Button";
import Input from "../ui/Input";

function UploadFile({ onClose }) {
  const { createFile } = useUploadFile();

  function handelCreateFile(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("description", e.target.description.value);
    formData.append("prize", e.target.prize.value);
    formData.append(
      "deadline",
      new Date(e.target.deadline.value).toISOString()
    );
    formData.append("file", e.target.file.files[0]);
    createFile(formData);
    onClose();
  }

  return (
    <form
      onSubmit={handelCreateFile}
      className="flex flex-col gap-6 rounded-2xl "
    >
      <h2 className="text-2xl font-bold text-[#2563EB] text-center">
        ایجاد مجموعه داده جدید
      </h2>

      <Input type="text" placeholder="نام فایل" name="title" />
      <textarea
        placeholder="توضیحات مجموعه داده"
        name="description"
        className="border border-[#2563EB] rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
      ></textarea>
      <Input type="text" placeholder="جایزه" name="prize" />

      <Input type="date" name="deadline" />

      <label
        htmlFor="file"
        className="w-full cursor-pointer flex flex-col justify-center items-center h-40 border-2 border-dashed border-[#2563EB] bg-[#F0F9FF] rounded-lg hover:bg-[#DBEAFE] transition p-4"
      >
        <p className="font-semibold text-2xl text-[#2563EB]">+</p>
        <p className="font-medium text-[#2563EB]">
          فایل مجموعه داده را انتخاب کنید
        </p>
        <input id="file" className="hidden" type="file" name="file" />
      </label>

      <Button type="contained">ایجاد مجموعه داده جدید</Button>
    </form>
  );
}

export default UploadFile;
