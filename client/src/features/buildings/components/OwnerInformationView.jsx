import { Card } from "@/components/ui/card";
import { Users, Phone, Mail } from "lucide-react";
import useMyClient from "../hooks/useMyClient";
import Loading from "@/components/Loading";

export default function OwnerInformationView() {
  const { client, loading } = useMyClient();
  if (loading) {
    return <Loading />;
  }
  return (
    <Card className="rounded-2xl p-6">
      <div className="mb-6 flex items-center gap-2">
        <Users className="h-5 w-5 text-[#3F5E4A]" />
        <h2 className="text-lg font-semibold">Owner Information</h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Owner Name</p>

          <p className="text-lg font-semibold">
            {client ? `${client.firstName} ${client.lastName}` : "---"}
          </p>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{client?.mobileNumber ?? "---"}</span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>{client?.email ?? "---"}</span>
        </div>
      </div>
    </Card>
  );
}
