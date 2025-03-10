import { useQuery } from "@tanstack/react-query";
import { getReportDailyArticle } from "../../service/apiArticle";
import { useParams } from "react-router-dom";
export function useGetReportDailyArticle() {
  const { id } = useParams();
  const { data: articles, isLoading } = useQuery({
    queryKey: ["article"],
    queryFn: () => getReportDailyArticle(id),
  });
  return { articles: articles?.data, isLoading };
}
