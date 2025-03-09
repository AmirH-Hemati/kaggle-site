import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCommentArticle } from "../../service/apiComment";
import { toast } from "react-toastify";

export function useAddCommentArticle() {
  const queryClient = useQueryClient();
  const { mutate: addComment } = useMutation({
    mutationFn: ({ text, id }) => addCommentArticle({ id, text }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentArticle"] });
      toast.success("کامنت با موفقیت ثبت شد");
    },
  });
  return { addComment };
}
