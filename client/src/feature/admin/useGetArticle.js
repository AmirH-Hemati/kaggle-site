import { useQuery } from "@tanstack/react-query";
import { getArticle } from "../../service/apiArticle";
export function useGetArticle(id) {
  const { data: article, isLoading } = useQuery({
    queryKey: ["article", id],
    queryFn: () => getArticle(id),
  });
  return { article: article?.data, isLoading };
}
