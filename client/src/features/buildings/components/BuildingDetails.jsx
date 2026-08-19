import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import useBuilding from "../hooks/useBuilding";

import OwnerInformationView from "../components/OwnerInformationView";
import BuildingHeader from "../components/BuildingHeader";
import BuildingStats from "../components/BuildingStats";
import AddressInformationView from "../components/AddressInformationView";
import BuildingInformationView from "../components/BuildingInformationView";
import UnitLayout from "../components/UnitLayout";

import Loading from "@/components/Loading";
import PageLayout from "@/layouts/PageLayout";

export default function BuildingDetails() {
  const { id } = useParams();

  const { building, loading } = useBuilding(id);

  const isDesktop = useMediaQuery({
    minWidth: 1024,
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <PageLayout>
      <BuildingHeader building={building} />

      <div className="mt-6">
        <BuildingStats building={building} />
      </div>
      {isDesktop ? (
        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-8 space-y-6">
            <BuildingInformationView building={building} />
            <AddressInformationView building={building} />
            <OwnerInformationView />
          </div>

          <div className="col-span-4">
            <UnitLayout building={building} />
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-6">
          <BuildingInformationView building={building} />

          <AddressInformationView building={building} />

          <OwnerInformationView />

          <UnitLayout building={building} />
        </div>
      )}
    </PageLayout>
  );
}
