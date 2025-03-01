import { useQuery } from "@tanstack/react-query";
import { getCommnets } from "../../service/apiComment";
import { useParams } from "react-router-dom";

export function useGetComments() {
  const { id } = useParams();
  const { data: comments } = useQuery({
    queryKey: ["commnet", id],
    queryFn: () => getCommnets(id),
  });
  return { comments };
}
