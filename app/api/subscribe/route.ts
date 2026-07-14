import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  // TODO: add this email to a real list. Popular free-tier options:
  // - ConvertKit (creator-focused, good for authors)
  // - Mailchimp
  // - Buttondown (simple, developer-friendly)
  //
  // Each provider has an API you call here with a server-side API key
  // stored in a Vercel environment variable. Example shape for ConvertKit:
  //
  // await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email }),
  // });

  console.log("Newsletter signup:", email);

  return NextResponse.json({ ok: true });
}
