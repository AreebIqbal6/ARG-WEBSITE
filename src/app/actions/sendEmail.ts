"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!firstName || !email || !message) {
      return { error: 'Please fill in all required fields.' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'areeb.jpg@gmail.com', // Resend free tier requires sending to the verified registered email
      subject: `New Lead: ${firstName} ${lastName} - ARG REGISTRARS PAKISTAN`,
      text: `
        New Contact Form Submission:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Server Error:', error);
    return { error: 'Something went wrong. Please try again later.' };
  }
}
