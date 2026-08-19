import { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { getBuildingById } from "../api/buildingApi";
import { initialForm } from "../schemas/buildingSchema";

export default function useEditBuilding(open, building) {
  const [editedForm, setEditedForm] = useState(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["building", building?.id],
    queryFn: () => getBuildingById(building.id),
    enabled: open && !!building,
    retry: false,
  });

  const loadedForm = useMemo(() => {
    if (!data) return initialForm;
    const latitude = data.latitude ?? 32;
    const longitude = data.longitude ?? 35;

    return {
      ...initialForm,

      // Building Information
      buildingTypeId: data.buildingType?.id ?? "",
      name: data.name ?? "",
      number: data.number ?? "",
      numberOfFloors: data.numberOfFloors ?? 1,
      contactPhoneNumber: data.contactPhoneNumber ?? "",

      // Address Information
      directorateId: data.directorate?.id ?? 1,
      governorateId: data.directorate?.governorate?.id ?? 1,
      streetName: data.streetName ?? "",
      village: data.village ?? "",
      blockNumber: data.blockNumber ?? "",
      neighbourhood: data.neighbourhood ?? "",
      plotNumber: data.plotNumber ?? "",

      // Location
      latitude,
      longitude,
      locationUrl:
        data.locationUrl ??
        `https://www.google.com/maps?q=${latitude},${longitude}`,

      // Property Information
      plotSize: data.plotSize ?? 0,
      constructionYear: data.constructionYear ?? 2025,
      buildingSize: data.buildingSize ?? 0,
      rentalSize: data.rentalSize ?? 0,

      // Financial Information
      estimatedRentalPricePerSqm: data.estimatedRentalPricePerSqm ?? 0,
      yearlyConsumption: data.yearlyConsumption ?? 100,
      unrentedPropertyTax: data.unrentedPropertyTax ?? 0,
      buildingCost: data.buildingCost ?? 0,
      landCost: data.landCost ?? 0,
    };
  }, [data]);

  const setForm = useCallback(
    (value) => {
      setEditedForm((current) =>
        typeof value === "function" ? value(current ?? loadedForm) : value,
      );
    },
    [loadedForm],
  );

  useEffect(() => {
    if (isError) {
      toast.error(error?.response?.data?.message || "Failed to load building");
    }
  }, [isError, error]);

  return {
    form: editedForm ?? loadedForm,
    setForm,
    isLoading,
  };
}
