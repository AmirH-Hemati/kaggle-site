import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitModel as submitModelAPI } from "../../service/apiSubmission";
import { useParams } from "react-router-dom";

export function useSubmitModel() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { mutate: submitModel } = useMutation({
    mutationFn: (formData) => submitModelAPI({ formData, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["model"] });
    },
  });
  return { submitModel };
}
