import { useQuery } from "@tanstack/react-query";
import { getDataset } from "../../service/apiDataset";
import { useParams } from "react-router-dom";
export function useGetDataset() {
  const { id } = useParams();
  console.log(id)
  const { data: dataset } = useQuery({
    queryKey: ["dataset"],
    queryFn: () => getDataset(id),
  });
  return { dataset };
}
