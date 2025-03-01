import { useQuery } from "@tanstack/react-query";
import { mySubmissions } from "../../service/apiSubmission";

export function useMySubmission() {
  const { data: datasets } = useQuery({
    queryKey: ["submission"],
    queryFn: mySubmissions,
  });
  return { datasets };
}
