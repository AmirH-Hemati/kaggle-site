import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";
import { useGetArticle } from "./useGetArticle";

function EditArticle({ articleId }) {
  const [values, setValues] = useState({ title: "", content: "", image: "" });
  const [preview, setPreview] = useState("");
  const { article } = useGetArticle(articleId);
  useEffect(() => {
    if (article) {
      setValues({
        title: article.title,
        content: article.content,
        image: article.image,
      });
      setPreview(article.image);
    }
  }, [article]);
  function handelEditArticle(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("image", values.image);
    console.log(e.target.title.value);
  }
  function handelOnChange(e) {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }
  return (
    <div className="w-full flex flex-col h-full overflow-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        ویرایش مقاله{" "}
      </h2>

      <form onSubmit={handelEditArticle} className="space-y-5">
        <FormLabel label="عنوان مقاله">
          <Input
            name={`title`}
            value={values.title}
            onChange={handelOnChange}
          />
        </FormLabel>

        <FormLabel label="توضیحات مقاله">
          <Input
            type="textarea"
            name={`content`}
            value={values.content}
            onChange={handelOnChange}
          />
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
            onChange={(e) => {
              setValues((values) => ({
                ...values,
                image: e.target.files[0],
              }));
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </label>

        <Button type="contained" extraStyle={``}>
          ذخیره کردن
        </Button>
      </form>
    </div>
  );
}

export default EditArticle;
