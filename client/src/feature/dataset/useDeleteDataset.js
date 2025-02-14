import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDataset as deleteDatasetAPI } from "../../service/apiDataset";

export function useDeleteDataset() {
  const queryClient = useQueryClient();
  const { mutate: deleteDataset, isPending } = useMutation({
    mutationFn: (id) => deleteDatasetAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dataset"] });
    },
  });
  return { deleteDataset, isPending };
}
