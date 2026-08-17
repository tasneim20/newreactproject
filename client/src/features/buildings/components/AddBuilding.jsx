import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import useAddBuilding from "../hooks/useAddBuilding";
import BuildingInformation from "./BuildingInformation";
import AddressInformation from "./AddressInformation";

function AddBuilding({ open, setOpen }) {
  const { form, setForm, buildingTypes, loading, handleSubmit } =
    useAddBuilding(setOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-5xl rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add Building</DialogTitle>
        </DialogHeader>

        <Accordion
          type="multiple"
          defaultValue={["building"]}
          className="space-y-4"
        >
          <AccordionItem value="building" className="rounded-xl border px-5">
            <AccordionTrigger className="text-lg font-semibold">
              Building Information
            </AccordionTrigger>

            <AccordionContent>
              <BuildingInformation
                form={form}
                setForm={setForm}
                buildingTypes={buildingTypes}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="address" className="rounded-xl border px-5">
            <AccordionTrigger className="text-lg font-semibold">
              Address Information
            </AccordionTrigger>

            <AccordionContent>
              <AddressInformation form={form} setForm={setForm} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 flex justify-end gap-3 border-t pt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Adding..." : "Add Building"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddBuilding;
