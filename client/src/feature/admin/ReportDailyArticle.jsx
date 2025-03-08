import { useGetReportDailyArticles } from "./useGetReportDailyArticles";

function ReportDailyArticle() {
  const { articles } = useGetReportDailyArticles();
  return (
    <div className="w-full h-full overflow-auto mx-auto p-6 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        گزارش مقالات امروز
      </h2>
      <ul className="space-y-4">
        {articles?.length === 0 ? (
          <p className="text-gray-500">هیچ مقاله‌ای ثبت نشده است.</p>
        ) : (
          articles?.map((article) => (
            <li
              key={article._id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm border-l-6 border-blue-800"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  {article.userName}
                </h3>
                <p className="text-sm text-gray-500">{article.email}</p>
              </div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                {article.count} مقاله
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ReportDailyArticle;
