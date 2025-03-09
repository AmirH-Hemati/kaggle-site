import { useQuery } from "@tanstack/react-query";
import { getPopularArticles } from "../../service/apiArticle";

export function useGetPopularArticles() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getPopularArticles,
  });
  return { articles: articles?.data, isLoading };
}
