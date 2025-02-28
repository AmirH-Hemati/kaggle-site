import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as signInAPI } from "../../service/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useSignIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ phone, role, password }) =>
      signInAPI({ phone, role, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/verifyOtp");
      toast.success("کد احراز هویت ارسال شد");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.message);
    },
  });
  return { signIn, isPending };
}
