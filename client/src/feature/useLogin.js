import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../service/apiAuth";

export function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
  });
  return { login, isPending };
}
