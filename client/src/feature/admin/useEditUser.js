import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser as editUserAPI } from "../../service/apiAuth";
export function useEditUser() {
  const queryClient = useQueryClient();
  const { mutate: editUser, isPending } = useMutation({
    mutationFn: ({ id, values }) => editUserAPI({ id, values }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return { editUser, isPending };
}
