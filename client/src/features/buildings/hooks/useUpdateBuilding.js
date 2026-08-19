import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBuilding } from "../api/buildingApi";
import { toast } from "sonner";

export default function useUpdateBuilding(setOpen) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateBuilding(id, data),

    onSuccess: () => {
      toast.success("Building updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["buildings"],
      });

      setOpen(false);
    },
    onError: () => {
      toast.error("Failed to update building");
    },
  });
}
