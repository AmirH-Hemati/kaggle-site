import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createArticle as createArticleAPI } from "../../service/apiArticle";

export function useCreateArticle() {
  const queryClient = useQueryClient();
  const { mutate: createArticle, isPending } = useMutation({
    mutationFn: (formData) => createArticleAPI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["article"] });
      toast.success("مقاله با موفقیت ساخته شد");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.message);
    },
  });
  return { createArticle, isPending };
}
