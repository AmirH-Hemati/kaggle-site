import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article._id}`}>
      <li className="bg-white  shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 group">
        <img
          src={article.image}
          alt={article.title}
          className="w-full   h-56 object-cover group-hover:opacity-90 transition-all duration-300"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {article.title}
          </h3>
          <div className="w-full flex justify-between items-center text-gray-600 text-sm mt-4">
            <p>
              <span>نویسنده: </span>
              <span className="font-semibold text-gray-800">
                {article.author?.userName}
              </span>
            </p>
            <p>{new Date(article.createdAt).toLocaleDateString("fa-IR")}</p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ArticleCard;
