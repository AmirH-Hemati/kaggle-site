import { useQuery } from "@tanstack/react-query";
import { getLatestArticles } from "../../service/apiArticle";

export function useGetLatestArticles() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getLatestArticles,
  });
  return { articles: articles?.data, isLoading };
}
