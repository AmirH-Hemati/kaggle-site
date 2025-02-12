import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../service/apiAuth";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export function useLogin() {
  const { login } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("خوش امدید ! ...");
      localStorage.setItem("token", user.data);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { login, isPending };
}
