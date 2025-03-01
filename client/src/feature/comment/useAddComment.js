import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCommnet as addCommentAPI } from "../../service/apiComment";

export function useAddComment() {
  const queryClient = useQueryClient();
  const { mutate: addComment } = useMutation({
    mutationFn: ({ text, id }) => addCommentAPI({ id, text }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
    },
  });
  return { addComment };
}
