import { Link } from "react-router-dom";
import { useGetLatestArticles } from "../feature/articles/useGetLatestArticles";
import Articles from "./Articles";
import Heading from "./Heading";
import ArticleCard from "../feature/articles/ArticleCard";

function LatestArticles() {
  const { articles } = useGetLatestArticles();
  return (
    <div className="w-full ">
      <div className="w-full flex justify-between items-center">
        <Heading>اخرین مقالات</Heading>
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

export default LatestArticles;
