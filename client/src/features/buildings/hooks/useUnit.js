import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getUnits, createUnit, getUnitTypes } from "../api/buildingApi";

export function useUnits(page = 1) {
  const { data, isLoading } = useQuery({
    queryKey: ["units", page],
    queryFn: () => getUnits(page),
  });

  return {
    units: data?.content || [],
    loading: isLoading,
  };
}

export function useCreateUnit() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createUnit,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["units"],
      });
    },
  });

  return {
    createUnit: mutateAsync,
    loading: isPending,
  };
}

export function useUnitTypes() {
  const { data, isLoading } = useQuery({
    queryKey: ["unitTypes"],
    queryFn: getUnitTypes,
  });

  return {
    unitTypes: data || [],
    loading: isLoading,
  };
}

export function useAddUnit(setOpen, building) {
  const { createUnit, loading } = useCreateUnit();

  const [form, setForm] = useState({
    buildingId: building?.id || "",
    unitTypeId: "",
    number: "",
    name: "",
    floorNumber: "",
    unitSize: "",
    rentPricePerSqm: "",
    electricityMeter: "",
    waterMeter: "",
    energyMeter: "",
    comment: "",
  });

  const handleSubmit = async () => {
    try {
      const unitData = {
        buildingId: building?.id,
        unitTypeId: Number(form.unitTypeId),
        number: form.number,
        name: form.name,
        floorNumber: Number(form.floorNumber),
        unitSize: Number(form.unitSize),
        rentPricePerSqm: Number(form.rentPricePerSqm),
        electricityMeter: form.electricityMeter,
        waterMeter: form.waterMeter,
        energyMeter: form.energyMeter,
        comment: form.comment,
      };

      console.log("UNIT DATA:", unitData);

      await createUnit(unitData);

      setOpen(false);
    } catch (error) {
      console.error("Failed to add unit:", error);
    }
  };

  return {
    form,
    setForm,
    loading,
    handleSubmit,
  };
}
