import { Card } from "@/components/ui/card";
import { Building2, Home, DollarSign, Users } from "lucide-react";

export default function BuildingStats({ building }) {
  const cards = [
    {
      title: "Total Floors",
      value: building.numberOfFloors,
      icon: Building2,
    },
    {
      title: "Units",
      value: building.numberOfUnits,
      icon: Home,
    },
    {
      title: "Monthly Income",
      value: building.totalLeaseAmount,
      icon: DollarSign,
    },
    {
      title: "Occupancy",
      value: `${building.occupancy}%`,
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="flex min-h-[175px] flex-col items-center justify-center rounded-2xl py-8"
          >
            <Icon className="mb-3 text-primary" />

            <p className="text-sm text-muted-foreground">{card.title}</p>

            <h2 className="mt-1 text-2xl font-bold">{card.value}</h2>
          </Card>
        );
      })}
    </div>
  );
}
