import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../service/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export function useLogin() {
  const navitgate = useNavigate();
  const { loginInAccount } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      loginInAccount(user);
      toast.success("خوش امدید ! ...");
      if (user?.data.role === "uploader") return navitgate("/datasets");
      if (user?.data.role === "analyzer") return navitgate("/codeEditor");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { login, isPending };
}
