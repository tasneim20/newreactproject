import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { buildingTypes } from "../data/buildingTypes";
import { fieldClass, labelClass, sectionGridClass } from "../constants/styles";

function BuildingInformation({ form, setForm, isEdit = false }) {
  return (
    <div className={sectionGridClass}>
      <div className="space-y-2">
        <label className={labelClass}>
          Building Type
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Select
          value={String(form.buildingTypeId)}
          disabled={isEdit}
          onValueChange={(value) =>
            setForm({
              ...form,
              buildingTypeId: Number(value),
            })
          }
        >
          <SelectTrigger className={fieldClass}>
            <SelectValue>
              {buildingTypes.find((type) => type.id === form.buildingTypeId)
                ?.name || "Select Type"}
            </SelectValue>
          </SelectTrigger>

          <SelectContent>
            {buildingTypes.map((type) => (
              <SelectItem key={type.id} value={String(type.id)}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Building Name
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Plot Size (m²)
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.plotSize}
          onChange={(e) =>
            setForm({
              ...form,
              plotSize: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Number Of Floors
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.numberOfFloors}
          onChange={(e) =>
            setForm({
              ...form,
              numberOfFloors: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Construction Year
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.constructionYear}
          onChange={(e) =>
            setForm({
              ...form,
              constructionYear: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Building Size
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.buildingSize}
          onChange={(e) =>
            setForm({
              ...form,
              buildingSize: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Rental Size
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.rentalSize}
          onChange={(e) =>
            setForm({
              ...form,
              rentalSize: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Estimated Rental Price Per Sqm
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.estimatedRentalPricePerSqm}
          onChange={(e) =>
            setForm({
              ...form,
              estimatedRentalPricePerSqm: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Building Cost
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.buildingCost}
          onChange={(e) =>
            setForm({
              ...form,
              buildingCost: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Land Cost
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.landCost}
          onChange={(e) =>
            setForm({
              ...form,
              landCost: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Yearly Consumption
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.yearlyConsumption}
          onChange={(e) =>
            setForm({
              ...form,
              yearlyConsumption: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Unrented Property Tax
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.unrentedPropertyTax}
          onChange={(e) =>
            setForm({
              ...form,
              unrentedPropertyTax: Number(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
}

export default BuildingInformation;
