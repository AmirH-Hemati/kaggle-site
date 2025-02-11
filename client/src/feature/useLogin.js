import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../service/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { login, isPending };
}
