import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../service/apiAuth";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export function useLogin() {
  const { loginInAccount } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      loginInAccount(user);
      console.log(user);
      toast.success("خوش امدید ! ...");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { login, isPending };
}
