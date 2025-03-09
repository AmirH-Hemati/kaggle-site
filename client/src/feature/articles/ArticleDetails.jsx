import { useGetArticle } from "./useGetArticle";
import AddCommnet from "../../ui/AddCommnet";
import Comments from "../../ui/Comments";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { Star1 } from "iconsax-react";
import { useAddCommentArticle } from "../comment/useAddCommentArticle";
import { useGetCommentsArticle } from "../comment/useGetCommentsArticle";
import Rating from "../../ui/Rating";
import PopularArticles from "./PopularArticles";

function ArticleDetails() {
  const { article } = useGetArticle();
  const { addComment } = useAddCommentArticle();
  const { comments } = useGetCommentsArticle();

  return (
    <div className="w-full  h-full overflow-auto bg-gray-100  p-6 flex gap-6">
      <PopularArticles />
      <div className="w-3/4 h-full space-y-4  p-6 rounded-lg ">
        <div>
          <img
            src={article?.image}
            alt={article?.title}
            className="w-full aspect-video object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md  space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight text-center">
            {article?.title}
          </h1>

          <div className="flex justify-between  text-gray-600 mt-4 font-semibold text-lg">
            <div>
              <p>
                <span> دسته‌بندی: </span>
                <span>{article?.category}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>امتیاز : {article?.averageRating}</span>
                <Star1 size={26} color="green" variant="Bold" />
              </p>
            </div>
            <p>
              تاریخ انتشار:
              <span className="font-semibold">
                {new Date(article?.createdAt).toLocaleDateString("fa-IR")}
              </span>
            </p>
          </div>

          <div className="text-lg text-gray-700 leading-relaxed mt-6">
            {article?.content}
          </div>

          <div className="text-lg font-semibold text-gray-500 mt-4">
            <span>
              نویسنده:
              <span className="font-semibold">{article?.author?.userName}</span>
            </span>
          </div>

          <Button type={`contained`} extraStyle={``}>
            اشتراک گذاری
          </Button>
        </div>

        <Rating article={article} />
        <div className="bg-white p-6 rounded-lg shadow-xl ">
          <Heading>کامنت‌ها</Heading>

          <AddCommnet id={article?._id} addComment={addComment} />
          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;
