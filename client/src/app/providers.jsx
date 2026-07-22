import { Toaster } from "@/components/ui/sonner";

function Providers({ children }) {
  return (
    <>
      {children}
      <Toaster richColors position="top-right" />
    </>
  );
}

export default Providers;
