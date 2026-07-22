import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-16 w-full rounded-2xl border border-gray-300 bg-[#EEF3FF] px-6 text-lg outline-none shadow-none transition-colors placeholder:text-gray-500 focus-visible:border-[#4D6B59] focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
