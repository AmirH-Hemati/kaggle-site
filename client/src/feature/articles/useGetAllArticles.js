import { useQuery } from "@tanstack/react-query";
import { getAllArticles } from "../../service/apiArticle";
import { useSearchParams } from "react-router-dom";

export function useGetAllArticles() {
  const [searchParams] = useSearchParams();
  const searchTitle = searchParams.get("searchTitle");
  const category = searchParams.get("category");
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles", searchTitle, category],
    queryFn: () => getAllArticles({ searchTitle, category }),
  });
  return { articles: articles?.data, isLoading };
}
