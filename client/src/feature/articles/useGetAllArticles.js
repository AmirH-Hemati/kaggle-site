import { useQuery } from "@tanstack/react-query";
import { getAllArticles } from "../../service/apiArticle";
import { useSearchParams } from "react-router-dom";

export function useGetAllArticles() {
  const [searchParams] = useSearchParams();
  const searchArticles = searchParams.get("searchArticles");
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles", searchArticles],
    queryFn: () => getAllArticles(searchArticles),
  });
  return { articles: articles?.data, isLoading };
}
