import { Star1 } from "iconsax-react";
import Heading from "../../ui/Heading";
import { useGetPopularArticles } from "./useGetPopularArticles";
import { Link } from "react-router-dom";

function PopularArticles() {
  const { articles } = useGetPopularArticles();

  return (
    <div className="w-1/4 h-full overflow-auto bg-white p-4 rounded-lg shadow-xl">
      <Heading>مقالات پرطرفدار</Heading>{" "}
      <ul className="flex flex-col gap-4">
        {articles?.map((article) => (
          <Link to={`/articles/${article._id}`} key={article._id}>
            <li className="flex items-center p-3 space-x-3 bg-gray-100 rounded-sm hover:bg-gray-200 transition">
              <img
                src={article.image}
                alt={article.title}
                className="w-18 h-18 object-cover rounded-sm"
              />
              <div className="flex flex-col">
                <h3 className="text-md font-semibold text-gray-700">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">
                  نویسنده :{article.author.userName || "ناشناس"}
                </p>
                <p className="text-xs text-gray-500">
                  تاریخ اپلود :
                  {new Date(article?.createdAt).toLocaleDateString("fa-IR")}
                </p>
                <div className="flex items-center text-gray-800 text-xs font-semibold ">
                  <span> امتیاز :</span>
                  {article?.averageRating > 0 ? (
                    <span className="flex items-center">
                      <Star1 size={20} color="green" variant="Bold" />
                      {article?.averageRating}
                    </span>
                  ) : (
                    <p> ثبت نشده است.</p>
                  )}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default PopularArticles;
