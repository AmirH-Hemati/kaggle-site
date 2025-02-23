import { useState } from "react";
import Button from "../../ui/Button";
import { useSubmitModel } from "./useSubmitModel";

function SubmitModel() {
  const { submitModel } = useSubmitModel();
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  function handelSubmitFile(e) {
    console.log("test");
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("submitFile", file);
    submitModel(formData);
  }
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-4">ارسال مدل</h1>
        <form onSubmit={handelSubmitFile} className="flex flex-col gap-4">
          <div>
            <label className="block text-lg font-semibold mb-2">
              توضیحات مدل
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              آپلود فایل مدل
            </label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <Button type="contained">ارسال مدل</Button>
        </form>
      </div>
    </div>
  );
}

export default SubmitModel;
