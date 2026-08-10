import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { fieldClass, labelClass, sectionGridClass } from "../constants/styles";

import { governorates } from "../data/buildingTypes";

function AddressInformation({ form, setForm }) {
  return (
    <div className={sectionGridClass}>
      <div className="space-y-2">
        <label className={labelClass}>
          Governorate
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Select
          value={String(form.governorateId)}
          onValueChange={(value) =>
            setForm({
              ...form,
              governorateId: Number(value),
            })
          }
        >
          <SelectTrigger className={fieldClass}>
            <SelectValue>
              {governorates.find((gov) => gov.id === form.governorateId)
                ?.name || "Select Governorate"}
            </SelectValue>
          </SelectTrigger>

          <SelectContent>
            {governorates.map((gov) => (
              <SelectItem key={gov.id} value={String(gov.id)}>
                {gov.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className={labelClass}>
          Directorate
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          value={form.directorateId}
          onChange={(e) =>
            setForm({
              ...form,
              directorateId: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Village
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          value={form.village}
          onChange={(e) =>
            setForm({
              ...form,
              village: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Block Number
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          value={form.blockNumber}
          onChange={(e) =>
            setForm({
              ...form,
              blockNumber: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Neighbourhood
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          value={form.neighbourhood}
          onChange={(e) =>
            setForm({
              ...form,
              neighbourhood: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Street Name
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          value={form.streetName}
          onChange={(e) =>
            setForm({
              ...form,
              streetName: e.target.value,
            })
          }
        />
      </div>
      <div className="space-y-2">
        <label className={labelClass}>
          Building Number
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
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
          Plot Number
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          value={form.plotNumber}
          onChange={(e) =>
            setForm({
              ...form,
              plotNumber: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Latitude
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.latitude}
          onChange={(e) =>
            setForm({
              ...form,
              latitude: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>
          Longitude
          <span className="ml-1 text-red-500">*</span>
        </label>

        <Input
          className={fieldClass}
          type="number"
          value={form.longitude}
          onChange={(e) =>
            setForm({
              ...form,
              longitude: Number(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
}

export default AddressInformation;
