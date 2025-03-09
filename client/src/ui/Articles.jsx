import Article from "./Article";

function Articles({ articles }) {
  return (
    <ul className="grid grid-cols-3 w-full gap-4 p-4">
      {articles?.map((article) => (
        <Article key={article?._id} article={article} />
      ))}
    </ul>
  );
}

export default Articles;
