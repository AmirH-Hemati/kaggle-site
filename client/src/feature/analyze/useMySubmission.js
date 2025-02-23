import { useQuery } from "@tanstack/react-query";
import { mySubmission } from "../../service/apiSubmission";

export function useMySubmission() {
  const { data: datasets } = useQuery({
    queryKey: ["submission"],
    queryFn: mySubmission,
  });
  return { datasets };
}
