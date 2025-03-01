import { useQuery } from "@tanstack/react-query";
import { mySubmission } from "../../service/apiSubmission";
import { useParams } from "react-router-dom";

export function useMySubmission1() {
  const { id } = useParams();
  const { data: datasets } = useQuery({
    queryKey: ["submission"],
    queryFn: () => mySubmission(id),
  });
  return { datasets };
}
