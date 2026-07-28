import { Eye, Pencil } from "lucide-react";

function BuildingTable({ buildings }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#EAECF0] text-left text-[13px] font-medium text-[#667085]">
            <th className="px-8 py-5">Building No.</th>
            <th className="px-6 py-5">Name</th>
            <th className="px-6 py-5">Units</th>
            <th className="px-6 py-5">Type</th>
            <th className="px-6 py-5">Floors</th>
            <th className="px-6 py-5">Rented</th>
            <th className="px-6 py-5 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {buildings.map((building) => (
            <tr
              key={building.id}
              className="border-b border-[#F2F4F7] transition hover:bg-[#FAFAFA]"
            >
              <td className="px-8 py-5 text-[14px] font-semibold text-[#101828]">
                #{building.number}
              </td>

              <td className="px-6 py-5 text-[14px] text-[#101828]">
                {building.name}
              </td>

              <td className="px-6 py-5 text-[14px] text-[#475467]">
                {building.numberOfUnits} Units
              </td>

              <td className="px-6 py-5 text-[14px] text-[#475467]">
                {building.buildingType?.name}
              </td>

              <td className="px-6 py-5 text-[14px] text-[#475467]">
                {building.numberOfFloors} Floors
              </td>

              <td className="px-6 py-5">
                <div className="flex gap-2">
                  <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-[11px] font-medium text-[#16A34A]">
                    {building.numberOfRentedUnits} Rented
                  </span>

                  <span className="rounded-full bg-[#FEE2E2] px-3 py-1 text-[11px] font-medium text-[#DC2626]">
                    {building.numberOfEmptyUnits} Empty
                  </span>
                </div>
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-center gap-4">
                  <button className="text-[#3F5E4A] hover:opacity-70">
                    <Eye size={16} />
                  </button>

                  <button className="text-[#3F5E4A] hover:opacity-70">
                    <Pencil size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BuildingTable;
