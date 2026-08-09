import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, CalendarDays, MapPin } from "lucide-react";

export default function BuildingHeader({ building }) {
  return (
    <Card className="rounded-2xl p-6">
      <div className="flex gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted">
          <Building2 size={36} />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{building.name}</h1>

            <Badge variant="secondary">#{building.number}</Badge>
          </div>

          <div className="mt-2 flex gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 size={14} />
              {building.buildingType.name}
            </span>

            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {building.directorate.name}
            </span>

            <span className="flex items-center gap-1">
              <CalendarDays size={14} />
              {building.constructionYear}
            </span>
          </div>

          <div className="mt-3 flex gap-2">
            <Badge className="bg-green-100 text-green-700">
              {building.numberOfRentedUnits} Rented
            </Badge>

            <Badge className="bg-red-100 text-red-700">
              {building.numberOfEmptyUnits} Empty
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
