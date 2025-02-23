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
    formData.append("deadline", new Date(e.target.deadline.value).toISOString());
    formData.append("file", e.target.file.files[0]);
    createFile(formData);
    onClose();
  }
  return (
    <form onSubmit={handelCreateFile} className="flex flex-col gap-6">
      <Input type="text" placeholder="نام فایل" name="title" />
      <Input type="textarea" placeholder="توضیحات" name="description" />
      <Input type="text" placeholder="جایزه" name="prize" />

      <Input
        type="date"
        name="deadline"
        onChange={(e) => console.log(new Date(e.target.value).toISOString())}
      />
      <label
        htmlFor="file"
        className="w-full cursor-pointer flex flex-col justify-center items-center h-30 border-2 border-dashed"
      >
        <p className="font-semibold text-2xl">+</p>
        <p className="font-semibold text-lg">فایل مجموعه داده را انتخاب کنید</p>
        <input id="file" className="hidden" type="file" name="file" />
      </label>

      <Button type={`contained`}>ایجاد مجوعه داده جدید</Button>
    </form>
  );
}

export default UploadFile;
