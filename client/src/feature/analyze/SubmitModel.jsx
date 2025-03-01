import { useState } from "react";
import Button from "../../ui/Button";
import { useSubmitModel } from "./useSubmitModel";
import Input from "../../ui/Input";

function SubmitModel() {
  const { submitModel } = useSubmitModel();
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  function handelSubmitFile(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("submitFile", file);
    submitModel(formData);
  }

  return (
    <div className="w-full mx-auto p-6 bg-gray-50 ">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ارسال مدل
        </h1>
        <form onSubmit={handelSubmitFile} className="flex flex-col gap-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              توضیحات مدل
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="توضیحات مدل خود را وارد کنید..."
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              آپلود فایل مدل
            </label>
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>

          <Button type="contained" extraStyle="w-full py-3 text-lg">
            ارسال مدل
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SubmitModel;
