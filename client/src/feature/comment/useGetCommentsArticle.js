import { useQuery } from "@tanstack/react-query";
import { getCommnetsArticle } from "../../service/apiComment";
import { useParams } from "react-router-dom";

export function useGetCommentsArticle() {
  const { id } = useParams();
  const { data: comments } = useQuery({
    queryKey: ["commentsArticle", id],
    queryFn: () => getCommnetsArticle(id),
  });
  return { comments };
}
