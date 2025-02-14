import { useQuery } from "@tanstack/react-query";
import { getAllDatasets } from "../../service/apiDataset";
import { useSearchParams } from "react-router-dom";

export function useDatasets() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const { data: datasets, isPending } = useQuery({
    queryKey: ["datasets", search],
    queryFn: () => getAllDatasets({ search }),
  });
  return { datasets, isPending };
}
