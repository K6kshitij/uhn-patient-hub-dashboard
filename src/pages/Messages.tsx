
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bandage, HelpCircle, Heart, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MessagesPage = () => {
  const isMobile = useIsMobile();
  
  const messageOptions = [
    {
      id: "medical",
      icon: Bandage,
      title: "Medical or Appointment Question",
      description: "You have a non-urgent medical question that doesn't require immediate response. You can only send a message to a health care team that you have seen in the past year. Do not send a message about a new symptom—call your health care team directly.",
      ctaText: "Start",
      iconColor: "text-uhn-accent"
    },
    {
      id: "support",
      icon: HelpCircle,
      title: "Contact myUHN Support",
      description: "You have a question about login, proxy access, or other non-medical concern.",
      ctaText: "Contact Support",
      iconColor: "text-uhn-accent"
    },
    {
      id: "share",
      icon: Heart,
      title: "Share Your Record",
      description: "Share your record with a loved one or request an official copy of your record.",
      ctaText: "Share Now",
      iconColor: "text-uhn-accent"
    },
    {
      id: "team",
      icon: Mail,
      title: "Contact Princess Margaret Care Team",
      description: "Send a question, request, or concern to your care team at Princess Margaret Cancer Centre.",
      ctaText: "Message Team",
      iconColor: "text-uhn-accent"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Send a Message or Share Your Record</h1>
        <p className="text-uhn-text-secondary">Choose an option below to get started</p>
      </div>

      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6`}>
        {messageOptions.map((option) => (
          <Card 
            key={option.id}
            className="border border-uhn-border bg-white shadow-sm transition-all hover:shadow-md"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <div className={`rounded-full p-2.5 bg-uhn-bg ${option.iconColor}`}>
                  <option.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-uhn-text">{option.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-uhn-text-secondary min-h-[60px]">
                {option.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full justify-between bg-uhn-accent hover:bg-uhn-accent/90 text-white"
              >
                {option.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
