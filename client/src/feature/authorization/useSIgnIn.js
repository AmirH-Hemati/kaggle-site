import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as signInAPI } from "../../service/apiAuth";
import { toast } from "react-toastify";

export function useSignIn() {
  const queryClient = useQueryClient();
  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ email, role, password, userName }) =>
      signInAPI({ email, role, password, userName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("اکانت با موفقیت ساخته شد");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.message);
    },
  });
  return { signIn, isPending };
}
