import { useQuery } from "@tanstack/react-query";
import { getDataset } from "../../service/apiDataset";
import { useParams } from "react-router-dom";
export function useGetDataset() {
  const { id } = useParams();
  const { data: dataset } = useQuery({
    queryKey: ["dataset", id],
    queryFn: () => getDataset(id),
  });
  return { dataset };
}
