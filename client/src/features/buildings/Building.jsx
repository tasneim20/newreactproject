import AddBuilding from "./components/AddBuilding";
import BuildingTable from "./components/BuildingTable";
import useBuildings from "./hooks/useBuildings";
import BuildingCards from "./components/BuildingCards";
import { useMediaQuery } from "react-responsive";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import PageLayout from "@/layouts/PageLayout";
import { useState } from "react";
import EditBuilding from "./components/EditBuilding";

function Buildings() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const { buildings, loading } = useBuildings();
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const handleEdit = (building) => {
    setSelectedBuilding(building);
    setOpenEdit(true);
  };

  const handleAdd = () => {
    setOpenAdd(true);
  };

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

        <Button className="flex items-center gap-2" onClick={handleAdd}>
          <Plus size={18} />
          Add Building
        </Button>
      </div>

      {isDesktop ? (
        <BuildingTable buildings={buildings} onEdit={handleEdit} />
      ) : (
        <BuildingCards buildings={buildings} onEdit={handleEdit} />
      )}
      <AddBuilding open={openAdd} setOpen={setOpenAdd} />

      <EditBuilding
        open={openEdit}
        setOpen={setOpenEdit}
        building={selectedBuilding}
      />
    </PageLayout>
  );
}

export default Buildings;
