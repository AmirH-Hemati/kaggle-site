import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { removeArticle as removeArticleAPI } from "../../service/apiArticle";

export function useRemoveArticle() {
  const queryClient = useQueryClient();
  const { mutate: removeArticle, isPending } = useMutation({
    mutationFn: (id) => removeArticleAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      toast.success("مقاله با موفقیت حذف شد");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { removeArticle, isPending };
}
