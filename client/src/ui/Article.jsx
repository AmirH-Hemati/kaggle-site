import { Star } from "iconsax-react";

function Article({ article }) {
  return (
    <li className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-md p-4">
      <img
        src={article.image}
        alt={article.title}
        className="w-full aspect-square object-cover rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
        <p className="text-gray-600 text-sm mt-1">
          نویسنده: {article.author.userName}
        </p>
        <p className="text-gray-500 text-xs">
          تاریخ آپلود :{" "}
          {new Date(article.createdAt).toLocaleDateString("fa-IR")}
        </p>
      </div>
      <div className="flex items-center gap-1 mt-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < Math.round(article.rating)
                ? "text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
    </li>
  );
}

export default Article;
