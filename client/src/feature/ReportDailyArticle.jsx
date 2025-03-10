import { useGetReportDailyArticle } from "./admin/useGetReportDailyArticle";
import Articles from "../ui/Articles";
import { useAuth } from "../context/AuthContext";
import Heading from "../ui/Heading";

function ReportDailyArticle() {
  const { articles } = useGetReportDailyArticle();
  const { role } = useAuth();
  if (role !== "admin") {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Heading>شمابه این صفحه دسترسی ندارید</Heading>
      </div>
    );
  }
  return (
    <div className="bg-gray-50">
      <Articles articles={articles} />
    </div>
  );
}

export default ReportDailyArticle;
