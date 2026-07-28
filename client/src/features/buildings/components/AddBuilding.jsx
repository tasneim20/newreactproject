import { useState } from "react";
import { createBuilding } from "../api/buildingApi";
function AddBuilding() {
  const [form, setForm] = useState({
    buildingTypeId: 1,
    name: "",
    number: "",
    numberOfFloors: 1,
    directorateId: 1,
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
  });

  const handleSubmit = async () => {
    try {
      await createBuilding(form);
      alert("Building Added");
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={handleSubmit}>Add Building</button>;
}

export default AddBuilding;
