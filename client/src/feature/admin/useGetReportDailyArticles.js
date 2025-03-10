import { useQuery } from "@tanstack/react-query";
import { GetReportDailyArticles } from "../../service/apiArticle";
export function useGetReportDailyArticles() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: GetReportDailyArticles,
  });
  return { articles: articles?.data, isLoading };
}
