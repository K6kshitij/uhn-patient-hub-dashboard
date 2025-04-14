
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, AlertCircle, Calendar, FileText, HelpCircle, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

const PMRequestOptions = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const requestOptions = [
    {
      id: "symptoms",
      icon: AlertCircle,
      title: "Symptoms and Side Effects",
      description: "Tell us if you are feeling unwell or have any medical issues.",
      iconColor: "text-uhn-accent"
    },
    {
      id: "appointments",
      icon: Calendar,
      title: "Appointments",
      description: "Request a new appointment or change to an existing appointment at Princess Margaret.",
      iconColor: "text-uhn-accent"
    },
    {
      id: "treatment",
      icon: FileText,
      title: "Treatment Plan",
      description: "Tell us if you are feeling unwell after treatment, ask about medications, or ask for more information about your treatment plan.",
      iconColor: "text-uhn-accent"
    },
    {
      id: "other",
      icon: HelpCircle,
      title: "Other Questions, Requests or Concerns",
      description: "Prescriptions, help taking your medications, results, forms, letters, etc.",
      iconColor: "text-uhn-accent"
    }
  ];

  const handleOptionSelect = (optionId: string) => {
    // For now, all options lead to the contact form
    navigate("/contact-care-team");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <button 
          onClick={() => navigate("/messages")}
          className="flex items-center text-uhn-text-secondary hover:text-uhn-text mb-4"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Messages
        </button>
        <h1 className="text-2xl font-semibold mb-1">PM Request</h1>
        <p className="text-uhn-text-secondary">
          Select one of the options below to get started. The information you enter will help direct your request to the right person.
        </p>
      </div>

      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6`}>
        {requestOptions.map((option) => (
          <Card 
            key={option.id}
            className="border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
            onClick={() => handleOptionSelect(option.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0">
                  <option.icon className={`h-5 w-5 ${option.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium mb-1">{option.title}</h3>
                  <p className="text-uhn-text-secondary text-sm">
                    {option.description}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-auto">
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PMRequestOptions;
