import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFile as createFileAPI } from "../../service/apiDataset";

export function useUploadFile() {
  const queryClient = useQueryClient();
  const { mutate: createFile, isPending } = useMutation({
    mutationFn: (formData) => createFileAPI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dataset"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { createFile, isPending };
}
