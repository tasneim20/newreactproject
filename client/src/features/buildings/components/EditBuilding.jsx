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
import BuildingInformation from "./BuildingInformation";
import AddressInformation from "./AddressInformation";
import useUpdateBuilding from "../hooks/useUpdateBuilding";
import useEditBuilding from "../hooks/useEditBuilding";

function EditBuilding({ open, setOpen, building }) {
  const { form, setForm } = useEditBuilding(open, building);

  const { mutate: updateBuilding, isPending } = useUpdateBuilding(setOpen);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-5xl rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Update Building
          </DialogTitle>
        </DialogHeader>

        <Accordion
          type="multiple"
          defaultValue={["building"]}
          className="space-y-4"
        >
          <AccordionItem value="building" className="rounded-xl border px-5">
            <AccordionTrigger>Building Information</AccordionTrigger>

            <AccordionContent>
              <BuildingInformation
                form={form}
                setForm={setForm}
                isEdit={true}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="address" className="rounded-xl border px-5">
            <AccordionTrigger>Address Information</AccordionTrigger>

            <AccordionContent>
              <AddressInformation form={form} setForm={setForm} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 flex justify-end gap-3 border-t pt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            disabled={isPending}
            onClick={() =>
              updateBuilding({
                id: building.id,
                data: form,
              })
            }
          >
            {isPending ? "Updating..." : "Update Building"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditBuilding;
