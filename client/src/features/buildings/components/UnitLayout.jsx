import { useState } from "react";
import { Building2, Plus } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";

import { useUnits } from "../hooks/useUnit";
import AddUnit from "./AddUnit";

export default function UnitLayout({ building }) {
  const [openAdd, setOpenAdd] = useState(false);

  const { units, loading } = useUnits();

  const buildingUnits = units.filter(
    (unit) => unit.building?.id === building?.id,
  );

  const floors = Array.from(
    { length: building?.numberOfFloors || 0 },
    (_, index) => building.numberOfFloors - index,
  );

  const rentedCount = buildingUnits.filter((unit) => unit.isRented).length;

  const emptyCount = buildingUnits.filter((unit) => !unit.isRented).length;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Card className="w-full rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="size-6 text-[#527565]" strokeWidth={2} />

            <h2 className="text-base font-normal">Building Layout</h2>
          </div>

          <Button
            onClick={() => setOpenAdd(true)}
            className="h-9 rounded-lg bg-[#527565] px-3 text-sm text-white hover:bg-[#456554]"
          >
            <Plus className="size-4" />
            Add Unit
          </Button>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-sm font-medium">Status Legend:</p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="size-3.5 rounded bg-green-500" />
              <span>Rented</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="size-3.5 rounded bg-red-500" />
              <span>Empty</span>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Click on any unit for details
        </p>

        <div className="mt-4 max-h-[385px] overflow-y-auto pr-1">
          <div className="space-y-2">
            {floors.map((floorNumber) => {
              const floorUnits = buildingUnits.filter(
                (unit) => unit.floorNumber === floorNumber,
              );

              return (
                <div
                  key={floorNumber}
                  className="rounded-xl border border-border px-2.5 py-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span>Floor {floorNumber}</span>

                    <span>
                      {floorUnits.length}{" "}
                      {floorUnits.length === 1 ? "Unit" : "Units"}
                    </span>
                  </div>

                  {floorUnits.length === 0 ? (
                    <div className="flex h-[38px] items-center justify-center text-xs text-muted-foreground">
                      This floor has no units.
                    </div>
                  ) : (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {floorUnits.map((unit) => (
                        <button
                          key={unit.id}
                          type="button"
                          className={`flex h-[74px] w-[104px] flex-col items-center justify-center rounded-xl text-white transition-opacity hover:opacity-90 ${
                            unit.isRented ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          <span className="text-xs font-bold">
                            {unit.number}
                          </span>

                          <span className="mt-1 text-xs">
                            {unit.isRented ? "Rented" : "Empty"}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 border-t pt-3 text-center">
          <div>
            <p className="text-xs font-semibold text-green-600">
              {rentedCount}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">Rented</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-red-600">{emptyCount}</p>

            <p className="mt-1 text-xs text-muted-foreground">Empty</p>
          </div>
        </div>
      </Card>

      <AddUnit open={openAdd} setOpen={setOpenAdd} building={building} />
    </>
  );
}
