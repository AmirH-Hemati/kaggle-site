import { useGetReportDailyArticle } from "./admin/useGetReportDailyArticle";
import Articles from "../ui/Articles";

function ReportDailyArticle() {
  const { articles } = useGetReportDailyArticle();
  console.log(articles);
  return (
    <div className="bg-gray-50">
      <Articles articles={articles}/>
    </div>
  );
}

export default ReportDailyArticle;
