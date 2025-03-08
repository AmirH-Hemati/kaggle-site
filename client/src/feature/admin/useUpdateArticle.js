import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateArticle as updateArticlleAPI } from "../../service/apiArticle";
export function useUpdateArticle() {
  const queryClient = useQueryClient();
  const { mutate: updateArticle, isPending } = useMutation({
    mutationFn: ({ id, formData }) => updateArticlleAPI({ id, formData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      toast.success("تغییرات با موفقیت ویرایش  شد");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { updateArticle, isPending };
}
