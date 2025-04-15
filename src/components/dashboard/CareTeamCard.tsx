
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function CareTeamCard() {
  return (
    <div className="rounded-2xl border border-white/50 bg-white/80 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
      <h2 className="text-xl font-semibold mb-5 text-gray-800">Care Team</h2>
      <div className="flex items-center justify-between bg-blue-50/50 backdrop-blur-sm p-4 rounded-xl border border-blue-100/50">
        <div>
          <h3 className="font-medium text-gray-800">Ambulatory Physician</h3>
          <p className="text-sm text-gray-500 mb-2">Palliative Medicine</p>
          <Button variant="link" className="px-0 text-blue-600 text-sm font-medium hover:text-blue-800">
            See provider details and manage
          </Button>
        </div>
        <Button size="icon" variant="outline" className="rounded-full border-blue-200 bg-white text-blue-600 h-14 w-14 shadow-md hover:bg-blue-50 transition-colors">
          <Mail size={22} />
        </Button>
      </div>
    </div>
  );
}
