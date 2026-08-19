import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function AddressInformationView({ building }) {
  return (
    <Card className="rounded-2xl p-6">
      <div className="mb-6 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-[#3F5E4A]" />
        <h2 className="text-lg font-semibold">Address</h2>
      </div>

      <div className="space-y-3">
        <p className="text-lg font-semibold text-[#101828]">
          {building.streetName}
        </p>

        <p className="text-base text-[#667085]">
          {building.directorate?.governorate?.name}
        </p>

        <p className="text-base text-[#667085]">
          {building.longitude}, {building.latitude}
        </p>
      </div>
    </Card>
  );
}
