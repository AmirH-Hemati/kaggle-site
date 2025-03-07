import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../service/apiAuth";
export function useGetUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { users: users?.data, isLoading };
}
