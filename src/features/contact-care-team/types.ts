
import { z } from "zod";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
}

export interface UserData {
  doctor: string;
  fullName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email: string;
  confirmEmail: string;
  healthCard: string;
  address: string;
}

export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;
