import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFile as createFileAPI } from "../../service/apiDataset";
import { toast } from "react-toastify";

export function useUploadFile() {
  const queryClient = useQueryClient();
  const { mutate: createFile, isPending } = useMutation({
    mutationFn: (formData) => createFileAPI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dataset"] });
      toast.success("فایل با موفقیت ساخته شد")
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { createFile, isPending };
}
