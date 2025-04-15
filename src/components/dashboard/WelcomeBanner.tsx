
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div className="rounded-2xl border border-white/50 overflow-hidden bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-amber-50/30 z-0" />
        <div className="p-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-full bg-amber-200/80 backdrop-blur-sm shadow-sm">
              <Bell className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">New option for Princess Margaret patients</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                If you need to contact your care team at Princess Margaret, you can submit a 
                request using myUHN patient portal. Select Contact Princess Margaret Care Team 
                from the menu or through Messages. Please click on the resources button to see 
                when you can contact your clinic.
              </p>
              <div className="flex items-center gap-3">
                <Button 
                  variant="primary" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Resources for Patients
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-gray-50 px-5 py-2.5 rounded-xl"
                >
                  Dismiss
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
