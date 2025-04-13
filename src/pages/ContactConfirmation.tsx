
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="max-w-lg w-full border border-[#D9D9D9] bg-white shadow-sm">
        <CardHeader className="flex flex-col items-center pt-8 pb-2">
          <div className="rounded-full bg-[#F8FFF8] p-4 mb-4">
            <CircleCheck className="h-12 w-12 text-[#2ECC71]" />
          </div>
          <h1 className="text-2xl font-semibold text-[#2E2E2E] text-center">
            Your request has been submitted
          </h1>
        </CardHeader>
        <CardContent className="text-center px-8">
          <p className="text-[#2E2E2E] mb-4">
            Thank you for contacting the Princess Margaret Care Team. Your request has been successfully submitted and is being reviewed.
          </p>
          <p className="text-[#2E2E2E] mb-6">
            <span className="font-medium">📞 You will receive a phone call in response.</span> Please ensure your phone is nearby and answered if you are expecting a call from your care provider.
          </p>
          <p className="text-[#6C6C6C] text-sm italic">
            If your concern is urgent, contact the clinic directly.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pb-8">
          <Button 
            onClick={() => navigate("/messages")}
          >
            Return to Messages
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactConfirmation;
