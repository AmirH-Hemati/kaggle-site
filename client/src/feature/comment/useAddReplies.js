import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReplies as addRepliesAPI } from "../../service/apiComment";

export function useAddReplies() {
  const queryClient = useQueryClient();
  const { mutate: addReplies } = useMutation({
    mutationFn: ({ text, id }) => addRepliesAPI({ id, text }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
    },
  });
  return { addReplies };
}
