import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';
import { siteName, siteUrl } from '../../../lib/site';

export async function POST(request) {
  const payload = await request.json();
  const { firstName, lastName, email, company, inquiryType, message, source, pagePath } = payload;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, message: 'First name, last name, email, and message are required.' },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      { success: false, message: 'Lead storage is not configured yet.' },
      { status: 500 },
    );
  }

  const { error } = await supabase.from('leads').insert({
    website_name: siteName,
    website_url: siteUrl,
    first_name: firstName,
    last_name: lastName,
    email,
    company: company || null,
    inquiry_type: inquiryType || null,
    message,
    source: source || 'unknown',
    page_path: pagePath || null,
  });

  if (error) {
    return NextResponse.json(
      { success: false, message: 'Unable to save your inquiry right now.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, message: 'Inquiry submitted successfully.' });
}
