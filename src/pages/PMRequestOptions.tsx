
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, Calendar, FileText, HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

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
            className="border border-uhn-border bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
            onClick={() => handleOptionSelect(option.id)}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 mb-3">
                <div className={`rounded-full p-2.5 bg-uhn-bg ${option.iconColor}`}>
                  <option.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-uhn-text mt-1">{option.title}</CardTitle>
              </div>
              <CardDescription className="text-uhn-text-secondary">
                {option.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              <Button 
                variant="ghost" 
                className="ml-auto p-0 hover:bg-transparent hover:text-uhn-accent text-uhn-text-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionSelect(option.id);
                }}
              >
                <ArrowRight className="h-5 w-5" />
                <span className="sr-only">Select {option.title}</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PMRequestOptions;
