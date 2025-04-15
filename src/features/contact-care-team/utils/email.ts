
import { format } from "date-fns";
import { FormValues } from "../types";
import { Resend } from "resend";

const resend = new Resend('re_placeholder_key'); // Replace with a real key in a backend environment

export const sendConfirmationEmail = async (
  data: FormValues, 
  doctors: Array<{ id: string; name: string; specialty: string; }>
) => {
  try {
    const selectedDoctor = doctors.find(doc => doc.id === data.doctor);
    
    const emailHtml = `
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
    `;

    console.log("Sending email with Resend:", {
      from: "care@princessmargaret.ca",
      to: data.email,
      subject: "Your Princess Margaret Care Team Request",
      html: emailHtml
    });

    return true;
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    return false;
  }
};
