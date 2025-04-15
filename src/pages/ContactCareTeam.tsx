
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ChevronLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { DoctorSelection } from "@/features/contact-care-team/components/DoctorSelection";
import { ContactInfoCard } from "@/features/contact-care-team/components/ContactInfoCard";
import { ContactInfoForm } from "@/features/contact-care-team/components/ContactInfoForm";
import { MessageForm } from "@/features/contact-care-team/components/MessageForm";
import { SubmitButton } from "@/features/contact-care-team/components/SubmitButton";
import { formSchema, FormValues } from "@/features/contact-care-team/types";
import { sendConfirmationEmail } from "@/features/contact-care-team/utils/email";

const doctors = [
  { id: "1", name: "Dr. Sarah Johnson", specialty: "Oncology" },
  { id: "2", name: "Dr. Michael Chen", specialty: "Hematology" },
  { id: "3", name: "Dr. Emily Rodriguez", specialty: "Radiation Oncology" },
  { id: "4", name: "Dr. David Kim", specialty: "Surgical Oncology" },
];

const userData = {
  doctor: "2", // Dr. Michael Chen
  fullName: "John Smith",
  dateOfBirth: new Date("1985-06-15"),
  phoneNumber: "416-555-1234",
  email: "john.smith@example.com",
  confirmEmail: "john.smith@example.com",
  healthCard: "4321-567-890-AB",
  address: "",
};

const ContactCareTeam = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      doctor: userData.doctor,
      fullName: userData.fullName,
      dateOfBirth: userData.dateOfBirth,
      phoneNumber: userData.phoneNumber,
      email: userData.email,
      confirmEmail: userData.confirmEmail,
      healthCard: userData.healthCard,
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Form submitted:", data);
      
      const emailSent = await sendConfirmationEmail(data, doctors);
      
      if (emailSent) {
        toast({
          title: "Confirmation email sent",
          description: "A confirmation has been sent to your email address.",
        });
      } else {
        toast({
          title: "Email notification",
          description: "We were unable to send a confirmation email. Your request has still been submitted.",
          variant: "destructive",
        });
      }
      
      navigate("/contact-confirmation");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
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
        <h1 className="text-2xl font-semibold mb-1">Contact Princess Margaret Care Team</h1>
        <p className="text-uhn-text-secondary">
          Fill out this form to send a message to your care team
        </p>
      </div>

      <div className="bg-white border border-uhn-border rounded-lg p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DoctorSelection control={form.control} doctors={doctors} />

            <div className="space-y-4">
              <h2 className="text-lg font-medium text-uhn-text">Verify Your Personal Information</h2>
              
              {!isEditing ? (
                <ContactInfoCard userData={userData} onEditClick={toggleEdit} />
              ) : (
                <ContactInfoForm control={form.control} onDoneClick={toggleEdit} />
              )}
            </div>

            <MessageForm control={form.control} />

            <div className="pt-4">
              <SubmitButton isSubmitting={isSubmitting} />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactCareTeam;
