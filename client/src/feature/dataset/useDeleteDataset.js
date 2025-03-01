import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDataset as deleteDatasetAPI } from "../../service/apiDataset";
import { toast } from "react-toastify";

export function useDeleteDataset() {
  const queryClient = useQueryClient();
  const { mutate: deleteDataset, isPending } = useMutation({
    mutationFn: (id) => deleteDatasetAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dataset"] });
      toast.success("داده با موفقیت حذف شد");
    },
  });
  return { deleteDataset, isPending };
}
