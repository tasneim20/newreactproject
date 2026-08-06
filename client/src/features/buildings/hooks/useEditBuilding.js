import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { getBuildingById } from "../api/buildingApi";

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

export default function useEditBuilding(open, building) {
  const [form, setForm] = useState(initialForm);

  const { data, isError, error } = useQuery({
    queryKey: ["building", building?.id],
    queryFn: () => getBuildingById(building.id),
    enabled: open && !!building,
    retry: false,
  });

  useEffect(() => {
    if (data) {
      setForm({
        ...initialForm,
        buildingTypeId: data.buildingType?.id ?? 1,
        name: data.name ?? "",
        number: data.number ?? "",
        numberOfFloors: data.numberOfFloors ?? 1,
        directorateId: data.directorate?.id ?? 1,
        governorateId: data.directorate?.governorate?.id ?? 1,
        streetName: data.streetName ?? "",
        longitude: data.longitude ?? 35,
        latitude: data.latitude ?? 32,
        village: data.village ?? "",
        blockNumber: data.blockNumber ?? "",
        neighbourhood: data.neighbourhood ?? "",
        plotNumber: data.plotNumber ?? "",
        plotSize: data.plotSize ?? 0,
        constructionYear: data.constructionYear ?? 2025,
        buildingSize: data.buildingSize ?? 0,
        rentalSize: data.rentalSize ?? 0,
        estimatedRentalPricePerSqm: data.estimatedRentalPricePerSqm ?? 0,
        yearlyConsumption: data.yearlyConsumption ?? 100,
        unrentedPropertyTax: data.unrentedPropertyTax ?? 0,
        buildingCost: data.buildingCost ?? 0,
        landCost: data.landCost ?? 0,
      });
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.response?.data?.message || "Failed to load building");
    }
  }, [isError, error]);

  return {
    form,
    setForm,
  };
}
