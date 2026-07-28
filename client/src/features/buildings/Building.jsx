import AddBuilding from "./components/AddBuilding";
import BuildingTable from "./components/BuildingTable";
import useBuildings from "./hooks/useBuildings";
import BuildingCards from "./components/BuildingCards";

function Buildings() {
  const { buildings, loading, fetchBuildings } = useBuildings();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-lg font-semibold">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#EBEBEB] p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1>My Buildings</h1>

        <button>+ Add Building</button>
      </div>

      <div className="hidden md:block">
        <BuildingTable buildings={buildings} />
      </div>

      <div className="block md:hidden">
        <BuildingCards buildings={buildings} />
      </div>
    </div>
  );
}

export default Buildings;
