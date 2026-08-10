import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBuilding } from "../api/buildingApi";
import { toast } from "sonner";

const initialForm = {
  buildingTypeId: 1,
  name: "",
  number: "",
  numberOfFloors: 1,
  directorateId: 1,
  governorateId: 1,
  streetName: "",
  longitude: 35,
  latitude: 32,
  village: "",
  blockNumber: "",
  neighbourhood: "",
  plotNumber: "",
  plotSize: 0,
  constructionYear: 2025,
  buildingSize: 0,
  rentalSize: 0,
  estimatedRentalPricePerSqm: 0,
  yearlyConsumption: 100,
  unrentedPropertyTax: 0,
  buildingCost: 0,
  landCost: 0,
};

export default function useAddBuilding(setOpen) {
  const [form, setForm] = useState(initialForm);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createBuilding,

    onSuccess: () => {
      toast.success("Building created successfully");

      queryClient.invalidateQueries({
        queryKey: ["buildings"],
      });

      setForm(initialForm);
      setOpen(false);
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create building");
    },
  });

  const handleSubmit = () => {
    mutate(form);
  };

  return {
    form,
    setForm,
    loading: isPending,
    handleSubmit,
  };
}
