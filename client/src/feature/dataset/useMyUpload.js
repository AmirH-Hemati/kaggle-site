import { useQuery } from "@tanstack/react-query";
import { myUploads } from "../../service/apiDataset";

export function useMyUpload() {
  const { data: uploads, isLoading } = useQuery({
    queryKey: ["dataset"],
    queryFn: myUploads,
  });
  return { uploads };
}
