import { useQuery } from "@tanstack/react-query";
import { getAllDatasets } from "../../service/apiDataset";

export function useDatasets() {
  const { data: datasets, isPending } = useQuery({
    queryKey: ["datasets"],
    queryFn: getAllDatasets,
  });
  return { datasets, isPending };
}
