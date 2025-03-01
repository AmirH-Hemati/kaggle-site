import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile as editProfileAPI } from "../../service/apiAuth";
import { toast } from "react-toastify";

export function useEditProfile() {
  const queryClient = useQueryClient();
  const { mutate: editProfile, isPending } = useMutation({
    mutationFn: ({ userData }) => editProfileAPI({ userData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("با موفقیت ذخیره شد");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { editProfile };
}
