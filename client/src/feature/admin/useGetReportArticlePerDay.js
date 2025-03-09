import { useQuery } from "@tanstack/react-query";
import { getReportArticlePerDay } from "../../service/apiArticle";
export function useGetReportArticlePerDay() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getReportArticlePerDay,
  });
  return { articles: articles?.data, isLoading };
}
