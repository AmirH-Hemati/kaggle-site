import { useMutation } from "@tanstack/react-query";
import { signIn as signInAPI } from "../../service/apiAuth";

export function useSignIn() {
  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ userName, email, password, role }) =>
      signInAPI({ userName, password, email, role }),
  });
  return { signIn, isPending };
}
