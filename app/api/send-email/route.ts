import EmailTemplate from '@/app/email-template';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: Request) {
  try {
    // Leemos el body de la request
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['octabevi@protonmail.com'],
      subject: `Nuevo mensaje de ${name}: ${subject}`,
      react: React.createElement(EmailTemplate, { name, email, subject, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
