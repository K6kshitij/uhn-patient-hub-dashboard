
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, PenLine, Phone } from "lucide-react";
import { UserData } from "../types";

interface ContactInfoCardProps {
  userData: UserData;
  onEditClick: () => void;
}

export const ContactInfoCard = ({ userData, onEditClick }: ContactInfoCardProps) => {
  return (
    <Card className="bg-white border border-uhn-border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-uhn-text">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="pt-2 pb-2">
        <div className="flex justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">{userData.address ? userData.address : "Address not entered"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">{userData.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">{userData.email || "Email not entered"}</span>
            </div>
          </div>
          <div>
          </div>
        </div>
      </CardContent>
      <div className="border-t border-gray-100 px-6 py-3">
        <button 
          type="button"
          onClick={onEditClick}
          className="text-uhn-text flex items-center text-sm font-medium"
        >
          <PenLine className="h-4 w-4 mr-1" />
          Edit
        </button>
      </div>
    </Card>
  );
};
