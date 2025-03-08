import { Edit2, Trash } from "iconsax-react";
import { useGetAllArticles } from "../articles/useGetAllArticles";
import { useRemoveArticle } from "./useRemoveArticle";
import Modal from "../../ui/Modal";
import EditArticle from "./EditArticle";
function AllArticles() {
  const { articles } = useGetAllArticles();
  const { removeArticle } = useRemoveArticle();
  return (
    <div className="w-full h-full bg-gray-50 p-6 flex flex-col font-semibold">
      <li className="grid grid-cols-[1fr_2fr_2fr_3fr_0.5fr]  text-white items-center bg-blue-600 p-5 w-full rounded-tl-sm rounded-tr-sm">
        <p>عکس</p>
        <p>عنوان مقاله</p>
        <p>اخرین تاریخ آپدیت</p>
        <p>نویسنده</p>
        <p></p>
      </li>
      <ul
        className="w-full bg-white shadow-md overflow-auto flex-1 divide-y-2 divide-black/10
      "
      >
        {articles?.map((article) => (
          <li
            key={article._id}
            className="grid grid-cols-[1fr_2fr_1fr_3fr_0.5fr] w-full p-4 items-center"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-18  h-18  object-cover rounded-sm "
            />
            <p>{article.title}</p>
            <p>{new Date(article.updatedAt).toLocaleDateString("fa-IR")}</p>
            <p>{article?.author?.email}</p>

            <div className="flex gap-4 mr-auto">
              <Modal>
                <Modal.Open openies={`editArticle`}>
                  <Edit2 size="32" color="black" className="cursor-pointer" />
                </Modal.Open>
                <Modal.Window name={`editArticle`}>
                  <EditArticle articleId={article?._id} />
                </Modal.Window>
              </Modal>

              <Trash
                size="32"
                color="black"
                className="cursor-pointer"
                onClick={() => removeArticle(article._id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllArticles;
