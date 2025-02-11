import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../service/apiAuth";
import { toast } from "react-toastify";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("خوش امدید ! ...");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { login, isPending };
}
