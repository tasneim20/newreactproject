import { z } from "zod";

export const initialForm = {
  contactPhoneNumber: "",
  locationUrl: "",
  buildingTypeId: "",
  name: "",
  number: "",
  numberOfFloors: 1,
  directorateId: 1,
  governorateId: 1,
  streetName: "",
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

export const buildingSchema = z.object({
  buildingTypeId: z.number().positive("Building type is required"),

  contactPhoneNumber: z.string().min(1, "Contact phone number is required"),

  locationUrl: z.string().url("Please enter a valid location URL"),

  name: z.string().min(1, "Building name is required"),

  number: z.string().min(1, "Building number is required"),

  numberOfFloors: z
    .number()
    .int()
    .positive("Number of floors must be greater than 0"),

  directorateId: z.number().positive(),

  governorateId: z.number().positive(),

  streetName: z.string().min(1, "Street name is required"),

  village: z.string().min(1, "Village is required"),

  blockNumber: z.string().min(1, "Block number is required"),

  neighbourhood: z.string().min(1, "Neighbourhood is required"),

  plotNumber: z.string().min(1, "Plot number is required"),

  plotSize: z.number().nonnegative("Plot size cannot be negative"),

  constructionYear: z
    .number()
    .int()
    .min(1800, "Invalid construction year")
    .max(new Date().getFullYear(), "Construction year cannot be in the future"),

  buildingSize: z.number().nonnegative("Building size cannot be negative"),

  rentalSize: z.number().nonnegative("Rental size cannot be negative"),

  estimatedRentalPricePerSqm: z
    .number()
    .nonnegative("Rental price cannot be negative"),

  yearlyConsumption: z
    .number()
    .nonnegative("Yearly consumption cannot be negative"),

  unrentedPropertyTax: z
    .number()
    .nonnegative("Property tax cannot be negative"),

  buildingCost: z.number().nonnegative("Building cost cannot be negative"),

  landCost: z.number().nonnegative("Land cost cannot be negative"),
});
