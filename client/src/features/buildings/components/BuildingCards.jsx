import { Building2, Eye, Pencil } from "lucide-react";

function BuildingCards({ buildings }) {
  return (
    <div className="space-y-5">
      {buildings.map((building) => (
        <div
          key={building.id}
          className="rounded-3xl bg-white p-6 shadow-sm border border-[#ECEEF3]"
        >
          <div className="flex gap-4">
            <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[#4C6A59]">
              <Building2 className="text-white" size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-semibold">{building.name}</h2>

              <p className="mt-1 text-xl text-gray-400">#{building.number}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-500">Units</p>

              <h3 className="mt-2 text-3xl font-semibold">
                {building.numberOfUnits}
              </h3>
            </div>

            <div>
              <p className="text-gray-500">Floors</p>

              <h3 className="mt-2 text-3xl font-semibold">
                {building.numberOfFloors}
              </h3>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
              {building.numberOfRentedUnits} Rented
            </span>

            <span className="rounded-full bg-red-100 px-4 py-2 text-red-600">
              {building.numberOfEmptyUnits} Empty
            </span>
          </div>

          <hr className="my-6" />

          <div className="flex justify-around">
            <button className="flex items-center gap-2 text-[#4C6A59]">
              <Eye size={20} />
              View
            </button>

            <button className="flex items-center gap-2 text-[#4C6A59]">
              <Pencil size={20} />
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BuildingCards;
