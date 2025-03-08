import { useQuery } from "@tanstack/react-query";
import { GetReportDailyArticles } from "../../service/apiArticle";
import { useSearchParams } from "react-router-dom";
export function useGetReportDailyArticles() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn:GetReportDailyArticles(),
  });
  return { articles: articles?.data, isLoading };
}
