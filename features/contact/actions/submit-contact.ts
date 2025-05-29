"use server"

import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

// Types
export type ContactFormData = z.infer<typeof contactFormSchema>

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
}

// Server Action
export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Artificial delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Validate form data
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  // Get validated data
  const { name, email, message } = validatedFields.data

  try {
    // In a real app, you would send an email or save to a database here
    console.log("Form submission:", { name, email, message })

    // For demo purposes, we'll just return success
    return {
      success: true,
    }
  } catch (error) {
    // Handle errors
    return {
      errors: {
        _form: ["There was a problem sending your message. Please try again."],
      },
      success: false,
    }
  }
}
