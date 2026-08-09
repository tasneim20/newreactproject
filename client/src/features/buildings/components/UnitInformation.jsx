import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { fieldClass, labelClass, sectionGridClass } from "../constants/styles";

import { useUnitTypes } from "../hooks/useUnit";

function UnitInformation({ form, setForm }) {
  const { unitTypes, loading } = useUnitTypes();

  return (
    <div className={sectionGridClass}>
      <div className="space-y-2">
        <label className={labelClass}>
          Unit Type
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Select
          value={String(form.unitTypeId)}
          onValueChange={(value) =>
            setForm({
              ...form,
              unitTypeId: Number(value),
            })
          }
          disabled={loading}
        >
          <SelectTrigger className={fieldClass}>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>

          <SelectContent>
            {unitTypes.map((type) => (
              <SelectItem key={type.id} value={String(type.id)}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Unit Number
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          placeholder="eg: 101"
          value={form.number}
          onChange={(e) =>
            setForm({
              ...form,
              number: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Floor Number
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          placeholder="Enter Floor Number"
          value={form.floorNumber}
          onChange={(e) =>
            setForm({
              ...form,
              floorNumber: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Unit Space (m²)
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          placeholder="Enter Unit Space"
          value={form.unitSize}
          onChange={(e) =>
            setForm({
              ...form,
              unitSize: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Rent Price per m²
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          placeholder="Enter Rent Price"
          value={form.rentPricePerSqm}
          onChange={(e) =>
            setForm({
              ...form,
              rentPricePerSqm: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Electricity Meter
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          placeholder="Enter Meter Number"
          value={form.electricityMeter}
          onChange={(e) =>
            setForm({
              ...form,
              electricityMeter: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Water Meter
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          placeholder="Enter Meter Number"
          value={form.waterMeter}
          onChange={(e) =>
            setForm({
              ...form,
              waterMeter: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>Energy Meter</label>

        <Input
          className={fieldClass}
          placeholder="Enter Meter Number"
          value={form.energyMeter}
          onChange={(e) =>
            setForm({
              ...form,
              energyMeter: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2 md:col-span-2 lg:col-span-3">
        <label className={labelClass}>Comment</label>

        <Input
          className={fieldClass}
          placeholder="Enter any additional Comments"
          value={form.comment}
          onChange={(e) =>
            setForm({
              ...form,
              comment: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}

export default UnitInformation;
