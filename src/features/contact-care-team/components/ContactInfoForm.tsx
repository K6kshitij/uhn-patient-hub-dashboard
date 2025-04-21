
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Control } from "react-hook-form";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { FormValues } from "../types";

interface ContactInfoFormProps {
  control: Control<FormValues>;
  onDoneClick: () => void;
}

export const ContactInfoForm = ({ control, onDoneClick }: ContactInfoFormProps) => {
  return (
    <div className="bg-white border border-uhn-border rounded-lg p-6 shadow-sm space-y-6">
      <div className="space-y-4">
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          className="min-w-[96px] px-5 py-2 border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-base shadow-sm"
          onClick={onDoneClick}
        >
          Done
        </Button>
      </div>
    </div>
  );
};
