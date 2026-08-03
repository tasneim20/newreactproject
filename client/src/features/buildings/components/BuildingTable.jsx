import { Eye, Pencil } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function BuildingTable({ buildings, onEdit }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow className="border-b border-[#EAECF0] text-left text-[13px] font-medium text-[#667085]">
            <TableHead className="px-8 py-5">Building No.</TableHead>
            <TableHead className="px-6 py-5">Name</TableHead>
            <TableHead className="px-6 py-5">Units</TableHead>
            <TableHead className="px-6 py-5">Type</TableHead>
            <TableHead className="px-6 py-5">Floors</TableHead>
            <TableHead className="px-6 py-5">Rented</TableHead>
            <TableHead className="px-6 py-5 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {buildings.map((building) => (
            <TableRow
              key={building.id}
              className="border-b border-[#F2F4F7] transition hover:bg-[#FAFAFA]"
            >
              <TableCell className="px-8 py-5 text-[14px] font-semibold text-[#101828]">
                #{building.number}
              </TableCell>

              <TableCell className="px-6 py-5 text-[14px] text-[#101828]">
                {building.name}
              </TableCell>

              <TableCell className="px-6 py-5 text-[14px] text-[#475467]">
                {building.numberOfUnits} Units
              </TableCell>

              <TableCell className="px-6 py-5 text-[14px] text-[#475467]">
                {building.buildingType?.name}
              </TableCell>

              <TableCell className="px-6 py-5 text-[14px] text-[#475467]">
                {building.numberOfFloors} Floors
              </TableCell>

              <TableCell className="px-6 py-5">
                <div className="flex gap-2">
                  <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-[11px] font-medium text-[#16A34A]">
                    {building.numberOfRentedUnits} Rented
                  </span>

                  <span className="rounded-full bg-[#FEE2E2] px-3 py-1 text-[11px] font-medium text-[#DC2626]">
                    {building.numberOfEmptyUnits} Empty
                  </span>
                </div>
              </TableCell>

              <TableCell className="px-6 py-5">
                <div className="flex justify-center gap-4">
                  <button className="text-[#3F5E4A] hover:opacity-70">
                    <Eye size={16} />
                  </button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(building)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BuildingTable;
