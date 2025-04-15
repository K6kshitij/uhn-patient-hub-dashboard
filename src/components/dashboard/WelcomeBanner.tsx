
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div className="uhn-card mb-6 animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-full bg-amber-100">
          <Bell className="h-5 w-5 text-amber-500" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-medium mb-2">New option for Princess Margaret patients</h2>
          <p className="text-uhn-text-secondary mb-4">
            If you need to contact your care team at Princess Margaret, you can submit a 
            request using myUHN patient portal. Select Contact Princess Margaret Care Team 
            from the menu or through Messages. Please click on the resources button to see 
            when you can contact your clinic.
          </p>
          <div className="flex items-center gap-3">
            <Button 
              variant="primary" 
              className="px-4 py-2 text-base font-semibold rounded-md"
            >
              Resources for Patients
            </Button>
            <Button 
              variant="outline" 
              className="px-4 py-2 text-base rounded-md border-uhn-border text-uhn-text-secondary hover:bg-uhn-bg"
            >
              Dismiss
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
