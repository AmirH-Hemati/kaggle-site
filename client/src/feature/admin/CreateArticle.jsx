import { useState } from "react";
import Button from "../../ui/Button";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";
import { useCreateArticle } from "./useCreateArticle";
import Heading from "../../ui/Heading";
import SelectorCategory from "../../ui/SelectorCategory";

function CreateArticle() {
  const { createArticle } = useCreateArticle();
  const [preview, setPreview] = useState("");
  function handleCreateArticle(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    createArticle(formData);
  }

  return (
    <div className="w-full flex flex-col h-full overflow-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <Heading>اضافه کردن مقاله جدید</Heading>

      <form onSubmit={handleCreateArticle} className="space-y-5">
        <FormLabel label="عنوان مقاله">
          <Input name={`title`} />
        </FormLabel>

        <FormLabel label="توضیحات مقاله">
          <Input type="textarea" name={`content`} />
        </FormLabel>
        <label
          htmlFor="image"
          className="cursor-pointer font-semibold w-full h-80 border-2 border-dashed  rounded-sm flex items-center justify-center"
        >
          {preview ? (
            <img
              src={preview}
              alt=""
              className="w-full h-full aspect-video  object-cover
            "
            />
          ) : (
            <span>عکس خود را انتخاب کنید</span>
          )}

          <Input
            type="file"
            extraStyle="hidden"
            id={`image`}
            name={`image`}
            onChange={(e) =>
              setPreview(URL.createObjectURL(e?.target?.files[0]))
            }
          />
        </label>
        <SelectorCategory />
        <Button type="contained">ساخت مقاله جدید</Button>
      </form>
    </div>
  );
}

export default CreateArticle;
