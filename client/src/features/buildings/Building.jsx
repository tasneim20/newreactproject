import AddBuilding from "./components/AddBuilding";
import BuildingTable from "./components/BuildingTable";
import useBuildings from "./hooks/useBuildings";
import BuildingCards from "./components/BuildingCards";
import { useMediaQuery } from "react-responsive";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import PageLayout from "@/layouts/PageLayout";

function Buildings() {
  const { buildings, loading } = useBuildings();
  const isDesktop = useMediaQuery({
    minWidth: 768,
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <PageLayout>
      <div className="mb-8 flex items-center justify-between">
        <h1>My Buildings</h1>

        <Button className="flex items-center gap-2">
          <Plus size={18} />
          Add Building
        </Button>
      </div>

      {isDesktop ? (
        <BuildingTable buildings={buildings} />
      ) : (
        <BuildingCards buildings={buildings} />
      )}
    </PageLayout>
  );
}

export default Buildings;
