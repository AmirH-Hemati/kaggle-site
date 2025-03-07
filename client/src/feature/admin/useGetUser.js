import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../service/apiAuth";
export function useGetUser(id) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });
  return { user: user?.data, isLoading };
}
