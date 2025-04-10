
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function CareTeamCard() {
  return (
    <div className="uhn-card mb-6 animate-fade-in">
      <h2 className="text-lg font-medium mb-4">Care Team</h2>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">Ambulatory Physician</h3>
          <p className="text-sm text-uhn-text-secondary">Palliative Medicine</p>
          <Button variant="link" className="px-0 text-blue-600 text-sm">
            See provider details and manage
          </Button>
        </div>
        <Button size="icon" variant="outline" className="rounded-full border-uhn-border text-blue-600 h-12 w-12">
          <Mail size={20} />
        </Button>
      </div>
    </div>
  );
}
