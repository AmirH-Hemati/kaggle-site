import { useState } from "react";
import { useGetArticle } from "./useGetArticle";
import AddCommnet from "../../ui/AddCommnet";
import Comments from "../../ui/Comments";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { Star1 } from "iconsax-react";
import { useAddCommentArticle } from "../comment/useAddCommentArticle";
import { useGetCommentsArticle } from "../comment/useGetCommentsArticle";

function ArticleDetails() {
  const { article } = useGetArticle();
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);
  const { addComment } = useAddCommentArticle();
  const { comments } = useGetCommentsArticle();
  const popularArticles = [
    { title: "مقاله پرطرفدار 1", link: "#" },
    { title: "مقاله پرطرفدار 2", link: "#" },
    { title: "مقاله پرطرفدار 3", link: "#" },
    { title: "مقاله پرطرفدار 4", link: "#" },
  ];
  return (
    <div className="w-full  h-full overflow-auto bg-gray-100  p-6 flex gap-6">
      <div className="w-1/4 bg-white p-6 rounded-lg shadow-xl">
        <Heading>مقالات پرطرفدار</Heading>{" "}
        <ul className="space-y-4">
          {popularArticles.map((article, index) => (
            <li key={index}>
              <a
                href={article.link}
                className="text-lg text-blue-600 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 h-full space-y-4  p-6 rounded-lg ">
        <div>
          <img
            src={article?.image}
            alt={article?.title}
            className="w-full aspect-video object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md  space-y-6">
          {/* عنوان مقاله */}
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight text-center">
            {article?.title}
          </h1>

          <div className="flex justify-between text-sm text-gray-600 mt-4">
            <span>
              دسته‌بندی:{" "}
              <span className="font-semibold">{article?.category}</span>
            </span>
            <span>
              تاریخ انتشار:{" "}
              <span className="font-semibold">
                {new Date(article?.createdAt).toLocaleDateString("fa-IR")}
              </span>
            </span>
          </div>

          <div className="text-lg text-gray-700 leading-relaxed mt-6">
            {article?.content}
          </div>

          <div className="text-sm text-gray-500 mt-4">
            <span>
              نویسنده:
              <span className="font-semibold">{article?.author?.userName}</span>
            </span>
          </div>

          <Button type={`contained`} extraStyle={``}>
            اشتراک گذاری
          </Button>
        </div>

        {/* بخش امتیازدهی */}
        <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center justify-center">
          <Heading>امتیازدهی مقاله</Heading>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star1
                size={32}
                variant={rating >= star || ratingHover >= star ? "Bold" : ""}
                color={rating >= star || ratingHover >= star ? "green" : "gray"}
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setRatingHover(star)}
                onMouseLeave={() => setRatingHover(0)}
                className={`text-3xl ${
                  rating >= star ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </Star1>
            ))}
          </div>
          <p className="text-sm text-gray-600  text-center">امتیاز: {rating}</p>
        </div>

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
