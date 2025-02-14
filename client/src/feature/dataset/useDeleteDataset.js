import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDataset as deleteDatasetAPI } from "../../service/apiDataset";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useDeleteDataset() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteDataset, isPending } = useMutation({
    mutationFn: (id) => deleteDatasetAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["datasets"] });
      toast.success("داده با موفقیت حذف شد");
      navigate(-1);
    },
  });
  return { deleteDataset, isPending };
}
