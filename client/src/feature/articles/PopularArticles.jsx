import Heading from "../../ui/Heading";
import { useGetPopularArticles } from "./useGetPopularArticles";

function PopularArticles() {
  const { articles } = useGetPopularArticles();
  console.log(articles);
  return (
    <div className="w-1/4 bg-white p-6 rounded-lg shadow-xl">
      <Heading>مقالات پرطرفدار</Heading>{" "}
      <ul className="space-y-4">
        {articles.map((article) => (
          <li
            key={article._id}
            className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-md font-semibold text-gray-700">
                {article.title}
              </h3>
              <div className="flex items-center text-yellow-500">
                {"★".repeat(article.averageRating || 0)}
                {"☆".repeat(5 - (article.averageRating || 0))}
                <span className="text-gray-600 text-sm ml-2">
                  ({article.ratingsCount || 0})
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularArticles;
