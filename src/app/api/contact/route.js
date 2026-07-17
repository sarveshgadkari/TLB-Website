import { NextResponse } from 'next/server';

export async function POST(request) {
  const payload = await request.json();
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: 'Missing Web3Forms access key.' },
      { status: 500 },
    );
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: 'New strategic inquiry from TLBISBIG website',
      ...payload,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    return NextResponse.json(
      { success: false, message: result.message || 'Unable to submit the inquiry right now.' },
      { status: 400 },
    );
  }

  return NextResponse.json({ success: true, message: 'Inquiry submitted successfully.' });
}