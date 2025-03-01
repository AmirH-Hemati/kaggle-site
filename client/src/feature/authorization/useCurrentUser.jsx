import { useQuery } from "@tanstack/react-query";
import { currentUser as currentUserAPI } from "../../service/apiAuth";

export function useCurrentUser() {
  const { data: currentUser, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: currentUserAPI,
  });
  return { currentUser, isLoading };
}
