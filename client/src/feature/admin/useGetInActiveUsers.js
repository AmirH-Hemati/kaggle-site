import { useQuery } from "@tanstack/react-query";
import { getInActiveUsers } from "../../service/apiArticle";
export function useGetInActiveUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getInActiveUsers,
  });
  return { users: users?.data, isLoading };
}
