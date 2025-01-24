import { z } from "zod"

export const applicationFormSchema = z.object({
    jobId: z.string().optional(),
    firstName: z
        .string()
        .min(1, { message: "First name is required" })
        .max(50, { message: "First name must be less than 50 characters" }),
    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .max(50, { message: "Last name must be less than 50 characters" }),
    phoneNumber: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .max(15, { message: "Phone number must be less than 15 digits" })
        .regex(/^\+?[0-9]*$/, { message: "Phone number must contain only digits or start with +" }),
    email: z
        .string()
        .email({ message: "Invalid email address" }),
    postalCode: z
        .string()
        .min(5, { message: "Postal code must be at least 5 characters" })
        .max(10, { message: "Postal code must be less than 10 characters" }),
    resume: z
        .any()
        .refine((files) => files?.length === 1, {
            message: "A valid file is required",
        })
        .refine(
            (files) =>
                ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(
                    files[0]?.type
                ),
            {
                message: "Accepted file types: pdf, doc, docx",
            }
        )
        .refine((files) => files[0]?.size <= 25 * 1024 * 1024, {
            message: "File size must not exceed 25 MB",
        }).optional(),
});

    
export const consultationFormSchema = z.object({
  // Checkboxes for seeking home care or career
  seekingHomeCare: z.boolean().optional(), // Checkbox for seeking home care
  seekingCareer: z.boolean().optional(), // Checkbox for seeking career

  // Personal details
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone Number must be at least 10 digits")
    .max(15, "Phone Number must not exceed 15 digits"),
  email: z.string().email("Invalid Email Address"),

  // Additional details
  bestTimeToReach: z.string().min(1, "Best time to be reached is required"),
  referralSource: z.string().optional(), // "How did you hear about us?"

  // Text area for care description
  careDescription: z
    .string()
    .min(1, "Please describe what kind of care you are looking for"),
});