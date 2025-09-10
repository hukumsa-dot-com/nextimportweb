import { NextResponse } from 'next/server';

const API_ENDPOINT = 'https://trovuat.hukumsa.com/mail';


export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Prepare the data to send to the external API
    const apiResponse = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      throw new Error(errorData.message || 'Failed to send message');
    }

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
