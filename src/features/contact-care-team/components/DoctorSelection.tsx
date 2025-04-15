
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { FormValues } from "../types";

interface DoctorSelectionProps {
  control: Control<FormValues>;
  doctors: Array<{
    id: string;
    name: string;
    specialty: string;
  }>;
}

export const DoctorSelection = ({ control, doctors }: DoctorSelectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Select Your Doctor</h2>
      <div className="pb-4">
        <FormField
          control={control}
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
  );
};
