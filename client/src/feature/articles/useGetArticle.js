import { useQuery } from "@tanstack/react-query";
import { getArticle } from "../../service/apiArticle";
import { useParams } from "react-router-dom";

export function useGetArticle() {
  const { id } = useParams();
  const { data: article, isLoading } = useQuery({
    queryKey: ["article", id],
    queryFn: () => getArticle(id),
  });
  return { article: article?.data, isLoading };
}
