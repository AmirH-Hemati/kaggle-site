import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../service/apiAuth";
import { useSearchParams } from "react-router-dom";
export function useGetUsers() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("searchUsers");
  const { data: users, isLoading } = useQuery({
    queryKey: ["users", search],
    queryFn: () => getUsers(search),
  });
  return { users: users?.data, isLoading };
}
