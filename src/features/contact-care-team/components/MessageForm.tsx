
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormValues } from "../types";

interface MessageFormProps {
  control: Control<FormValues>;
}

export const MessageForm = ({ control }: MessageFormProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Please describe your message to the care team</h2>
      <div className="pb-4">
        <FormField
          control={control}
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
  );
};
