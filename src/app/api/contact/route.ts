import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message ) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: 'New Contact Form Message',
      html: `
        <h3>New message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
