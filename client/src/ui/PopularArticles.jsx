import { Link } from "react-router-dom";
import Heading from "./Heading";
import ArticleCard from "../feature/articles/ArticleCard";
import { useGetPopularArticles } from "../feature/articles/useGetPopularArticles";

function PopularArticles() {
  const { articles } = useGetPopularArticles();
  return (
    <div className="w-full space-y-6">
      <div className="w-full flex justify-between items-center">
        <Heading>معروف ترین مقالات هوش مصنوعی</Heading>
        <Link className=" text-blue-600  font-semibold" to={`/articles`}>
          مقالات بیشتر ...
        </Link>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-5  gap-5">
        {articles?.map((article) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </ul>
    </div>
  );
}

export default PopularArticles;
