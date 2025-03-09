import { Star1 } from "iconsax-react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Article({ article }) {
  return (
    <Link to={`/articles/${article?._id}`}>
      <li
        key={article._id}
        className="bg-gray-50 cursor-pointer  rounded-sm shadow-sm p-2 space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full  h-44 object-cover bg-white p-1 rounded-sm"
        />

        <h3 className="text-xl font-bold mt-3 text-gray-900">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">
          <span>تاریخ بارگزاری :</span>
          <span className="font-semibold">
            {new Date(article.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </p>

        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
          {article.content.substring(0, 50)}...
        </p>

        <div className="flex items-center mt-3 gap-1">
          {[...Array(5)].map((_, index) => (
            <Star1
              key={index}
              size="20"
              variant="Bold"
              className="text-yellow-500"
            />
          ))}
          <span className="ml-2 text-gray-600 text-sm">(4.5)</span>
        </div>

        <Button type="contained" extraStyle={`w-full`}>
          مشاهده مقاله
        </Button>
      </li>
    </Link>
  );
}

export default Article;
