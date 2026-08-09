import { Home } from "lucide-react";

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

import { useAddUnit } from "../hooks/useUnit";
import UnitInformation from "./UnitInformation";

function AddUnit({ open, setOpen, building }) {
  const { form, setForm, loading, handleSubmit } = useAddUnit(
    setOpen,
    building,
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        style={{
          width: "90vw",
          maxWidth: "1154px",
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Add Unit</DialogTitle>

          <p className="mt-1 text-sm text-muted-foreground">
            Add a new unit to {building?.name}
          </p>
        </DialogHeader>

        <Accordion
          type="multiple"
          defaultValue={["unit"]}
          className="space-y-4"
        >
          <AccordionItem value="unit" className="rounded-xl border px-5">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-3">
                <Home className="size-5 text-[#527565]" />
                <span>Unit Information</span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <UnitInformation form={form} setForm={setForm} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 flex justify-end gap-3 border-t pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#527565] text-white hover:bg-[#456554]"
          >
            {loading ? "Adding..." : "Add Unit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddUnit;
