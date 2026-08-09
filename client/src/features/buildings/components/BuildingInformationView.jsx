import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function BuildingInformationView({ building }) {
  return (
    <Card className="rounded-2xl p-6">
      <div className="mb-6 flex items-center gap-2">
        <Building2 className="h-5 w-5 text-[#3F5E4A]" />
        <h2 className="text-lg font-semibold">Building Information</h2>
      </div>

      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-5">
          <div>
            <p className="text-sm text-muted-foreground">Building Type</p>
            <p className="font-semibold">{building.buildingType?.name}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Construction Year</p>
            <p className="font-semibold">{building.constructionYear}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Yearly Consumption (%)
            </p>
            <p className="font-semibold">{building.yearlyConsumption}%</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Unrented Property Tax
            </p>
            <p className="font-semibold">{building.unrentedPropertyTax}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Governorate</p>
            <p className="font-semibold">
              {building.directorate?.governorate?.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Directorate</p>
            <p className="font-semibold">{building.directorate?.name}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Village</p>
            <p className="font-semibold">{building.village || "---"}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Land Cost</p>
            <p className="font-semibold">{building.landCost}</p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm text-muted-foreground">Total Area</p>
            <p className="font-semibold">{building.plotSize} m²</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Building Area</p>
            <p className="font-semibold">{building.buildingSize} m²</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Rental Area</p>
            <p className="font-semibold">{building.rentalSize} m²</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Estimated Rental Price
            </p>
            <p className="font-semibold">
              {building.estimatedRentalPricePerSqm} Per m²
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Block Number</p>
            <p className="font-semibold">{building.blockNumber}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Neighbourhood</p>
            <p className="font-semibold">{building.neighbourhood}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Plot Number</p>
            <p className="font-semibold">{building.plotNumber || "---"}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Building Cost</p>
            <p className="font-semibold">{building.buildingCost}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
