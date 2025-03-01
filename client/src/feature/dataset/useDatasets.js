import { useQuery } from "@tanstack/react-query";
import { getAllDatasets } from "../../service/apiDataset";
import { useSearchParams } from "react-router-dom";

export function useDatasets() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const deadline = searchParams.get("deadline");
  const minPrize = searchParams.get("minPrize");
  const maxPrize = searchParams.get("maxPrize");
  const { data: datasets, isPending } = useQuery({
    queryKey: ["datasets", search, deadline, minPrize, maxPrize],
    queryFn: () => getAllDatasets({ search, deadline, minPrize, maxPrize }),
  });
  return { datasets, isPending };
}
