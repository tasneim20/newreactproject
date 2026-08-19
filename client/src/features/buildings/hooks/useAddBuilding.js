import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBuilding, getBuildingTypes } from "../api/buildingApi";
import { toast } from "sonner";
import { initialForm, buildingSchema } from "../schemas/buildingSchema";

export default function useAddBuilding(setOpen) {
  const [form, setForm] = useState(initialForm);
  const queryClient = useQueryClient();
  const { data: buildingTypes = [], isLoading: buildingTypesLoading } =
    useQuery({
      queryKey: ["building-types"],
      queryFn: getBuildingTypes,
    });
  const { mutate, isPending } = useMutation({
    mutationFn: createBuilding,

    onSuccess: () => {
      toast.success("Building created successfully");

      queryClient.invalidateQueries({
        queryKey: ["buildings"],
      });
      queryClient.invalidateQueries({
        queryKey: ["building-types"],
      });

      setForm(initialForm);
      setOpen(false);
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create building");
    },
  });

  const handleSubmit = () => {
    const result = buildingSchema.safeParse(form);

    console.log("FORM:", form);
    console.log("VALIDATION:", result);

    if (!result.success) {
      console.log("ERRORS:", result.error.issues);
      toast.error(result.error.issues[0].message);
      return;
    }

    console.log("VALID FORM:", result.data);

    mutate(result.data);
  };

  return {
    form,
    setForm,
    buildingTypes,
    buildingTypesLoading,
    loading: isPending,
    handleSubmit,
  };
}
