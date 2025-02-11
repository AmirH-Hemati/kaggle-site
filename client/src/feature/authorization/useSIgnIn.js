import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as signInAPI } from "../../service/apiAuth";

export function useSignIn() {
  const queryClient = useQueryClient();
  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ userName, email, password, role }) =>
      signInAPI({ userName, password, email, role }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { signIn, isPending };
}
