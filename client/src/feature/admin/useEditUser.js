import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser as editUserAPI } from "../../service/apiAuth";
import { toast } from "react-toastify";
export function useEditUser() {
  const queryClient = useQueryClient();
  const { mutate: editUser, isPending } = useMutation({
    mutationFn: ({ id, values }) => editUserAPI({ id, values }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("تغییرات با موفقیت ذخیره شد");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { editUser, isPending };
}
