import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRating as addRatingAPI } from "../../service/apiArticle";
export function useAddRating() {
  const qeuryClient = useQueryClient();

  const { mutate: addRating, isPending } = useMutation({
    mutationFn: ({ articleId, rate }) => addRatingAPI({ articleId, rate }),
    onSuccess: () => {
      qeuryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
  return { addRating, isPending };
}
