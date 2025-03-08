import { useQuery } from "@tanstack/react-query";
import { getAllArticles } from "../../service/apiArticle";

export function useGetAllArticles() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
  });
  return { articles: articles?.data, isLoading };
}
