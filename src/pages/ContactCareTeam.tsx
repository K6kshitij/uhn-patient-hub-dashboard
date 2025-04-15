
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon, ChevronLeft, MapPin, PenLine, Phone, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

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

const formSchema = z.object({
  doctor: z.string({
    required_error: "Please select a doctor",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters",
  }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  confirmEmail: z.string().email({
    message: "Please enter a valid email address",
  }),
  healthCard: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }).optional(),
}).refine((data) => data.email === data.confirmEmail, {
  message: "Email addresses must match",
  path: ["confirmEmail"],
});

type FormValues = z.infer<typeof formSchema>;

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

  const sendConfirmationEmail = async (data: FormValues) => {
    try {
      const selectedDoctor = doctors.find(doc => doc.id === data.doctor);
      
      // In a real app, we would use a backend API to send emails
      // This is a simplified frontend-only implementation
      const emailData = {
        from: "care@princessmargaret.ca",
        to: data.email,
        subject: "Your Princess Margaret Care Team Request",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h2 style="color: #405AEB;">Care Team Request Confirmation</h2>
            <p>Dear ${data.fullName},</p>
            <p>Thank you for contacting the Princess Margaret Care Team. Your request has been received and is being reviewed by our staff.</p>
            <div style="background-color: #f5f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Request Details:</strong></p>
              <ul style="list-style-type: none; padding-left: 0;">
                <li><strong>Doctor:</strong> ${selectedDoctor?.name} (${selectedDoctor?.specialty})</li>
                <li><strong>Date Submitted:</strong> ${format(new Date(), "PPP")}</li>
              </ul>
            </div>
            <p>A member of our care team will contact you via phone at <strong>${data.phoneNumber}</strong> to discuss your request.</p>
            <p>If your concern is urgent, please contact the clinic directly.</p>
            <p style="color: #666; font-size: 0.9em; margin-top: 30px;">This is an automated message, please do not reply to this email.</p>
          </div>
        `,
      };

      console.log("Sending email with the following data:", emailData);
      
      // In a real implementation with Resend API, we would make an API call here
      // Note: For security reasons, API calls to Resend should be made from a backend service
      
      return true;
    } catch (error) {
      console.error("Failed to send confirmation email:", error);
      return false;
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Form submitted:", data);
      
      const emailSent = await sendConfirmationEmail(data);
      
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
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Select Your Doctor</h2>
              <div className="pb-4">
                <FormField
                  control={form.control}
                  name="doctor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Please select the doctor you see in the clinic</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select doctor" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {doctors.map((doctor) => (
                            <SelectItem key={doctor.id} value={doctor.id}>
                              {doctor.name} - {doctor.specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-medium text-uhn-text">Verify Your Personal Information</h2>
              
              {!isEditing ? (
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
                      onClick={toggleEdit}
                      className="text-uhn-text flex items-center text-sm font-medium"
                    >
                      <PenLine className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                  </div>
                </Card>
              ) : (
                <div className="bg-white border border-uhn-border rounded-lg p-6 shadow-sm space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of Birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Select date of birth</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Confirm your email address" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="healthCard"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Health Card Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your health card number (optional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={toggleEdit}
                      className="text-blue-500 border-blue-200 hover:border-blue-400"
                    >
                      Done
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-medium">Please describe your message to the care team</h2>
              <div className="pb-4">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Please enter your message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message here" 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                className="bg-[#405AEB] hover:bg-[#405AEB]/90 text-white px-8 py-2.5 text-base font-medium rounded-md min-w-[120px] h-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Submit
                  </span>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactCareTeam;
