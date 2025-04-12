
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Eye, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { format } from "date-fns";

// Mock data for the request
const requestData = {
  type: "Symptoms and Side Effects",
  doctor: "Dr. Jane Doe",
  dateSubmitted: new Date("2025-07-10T09:42:00"),
  estimatedResponse: "24-48 hours",
  requestId: "PM-2025-07-10-001",
  status: "in-progress" // can be: submitted, viewed, in-progress, responded
};

// Timeline steps data
const timelineSteps = [
  {
    id: "submitted",
    title: "Submitted",
    description: "Your request was received.",
    icon: CheckCircle,
    timestamp: new Date("2025-07-10T09:42:00"),
    complete: true,
    active: false
  },
  {
    id: "viewed",
    title: "Viewed",
    description: "A member of your care team has opened your request.",
    icon: Eye,
    timestamp: new Date("2025-07-10T11:15:00"),
    complete: true,
    active: false
  },
  {
    id: "in-progress",
    title: "In Progress",
    description: "Your request is being reviewed or acted on.",
    icon: Clock,
    timestamp: new Date("2025-07-10T13:30:00"),
    complete: false,
    active: true
  },
  {
    id: "responded",
    title: "Responded",
    description: "Your care team has responded by phone or message.",
    icon: MessageSquare,
    timestamp: null,
    complete: false,
    active: false
  }
];

// Helper function to get the status of a step
const getStepStatus = (step: typeof timelineSteps[0]) => {
  if (step.complete) return "complete";
  if (step.active) return "active";
  return "upcoming";
};

const RequestStatus = () => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      {/* Page Header */}
      <div className="mb-6">
        <Breadcrumb className="mb-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/messages">Messages</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>View Status</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-uhn-text">Request Status</h1>
          <Button 
            variant="outline" 
            className="flex items-center gap-2" 
            onClick={() => navigate('/messages')}
          >
            <ArrowLeft size={16} />
            Back to Messages
          </Button>
        </div>
      </div>

      {/* Request Summary Card */}
      <Card className="mb-6 border border-uhn-border bg-white shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div>
              <h2 className="text-lg font-medium text-uhn-text">
                {requestData.type}
              </h2>
              <p className="text-uhn-text-secondary">
                {requestData.doctor}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-uhn-text-secondary">
                Request ID: <span className="font-medium">{requestData.requestId}</span>
              </p>
              <p className="text-sm text-uhn-text-secondary">
                Submitted: <span className="font-medium">{format(requestData.dateSubmitted, "MMMM d, yyyy 'at' h:mm a")}</span>
              </p>
              <p className="text-sm text-uhn-text-secondary">
                Estimated response time: <span className="font-medium">{requestData.estimatedResponse}</span>
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Timeline Card */}
      <Card className="border border-uhn-border bg-white shadow-sm">
        <CardContent className="pt-6">
          <h2 className="text-lg font-medium text-uhn-text mb-4">Request Timeline</h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline connector line */}
            <div className="absolute left-6 top-1 w-0.5 h-[calc(100%-32px)] bg-uhn-border" />
            
            {/* Timeline steps */}
            <div className="space-y-8">
              {timelineSteps.map((step, index) => {
                const status = getStepStatus(step);
                
                return (
                  <div key={step.id} className="relative pl-14">
                    {/* Step indicator */}
                    <div 
                      className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        status === "complete" 
                          ? "bg-[#2ECC71] text-white" 
                          : status === "active" 
                            ? "bg-uhn-accent text-white" 
                            : "bg-[#D9D9D9] text-uhn-text-secondary"
                      }`}
                    >
                      <step.icon size={22} />
                    </div>
                    
                    {/* Step content */}
                    <div>
                      <h3 className={`text-base font-medium ${
                        status === "upcoming" ? "text-uhn-text-secondary" : "text-uhn-text"
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${
                        status === "upcoming" ? "text-uhn-text-secondary/70" : "text-uhn-text-secondary"
                      }`}>
                        {step.description}
                      </p>
                      {step.timestamp && (
                        <p className="text-xs text-uhn-text-secondary mt-1">
                          {format(step.timestamp, "MMMM d, h:mm a")}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="border-t border-uhn-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button 
            onClick={() => navigate('/messages')}
            className="bg-uhn-accent hover:bg-uhn-accent/90 text-white"
          >
            Return to Messages
          </Button>
          <p className="text-sm text-uhn-text-secondary">
            If your concern is urgent, please contact the clinic directly at (416) 555-0123.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RequestStatus;
