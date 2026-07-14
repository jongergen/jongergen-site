import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: send a real email. The simplest option is Resend (resend.com),
  // which has a free tier. Once you have an API key:
  //
  // 1. `npm install resend`
  // 2. Add RESEND_API_KEY to your Vercel project's environment variables
  // 3. Uncomment the block below and set your own "from" and "to" addresses
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Jon Gergen site <site@jongergen.com>",
  //   to: "hello@jongergen.com",
  //   replyTo: email,
  //   subject: `New message from ${name}`,
  //   text: message,
  // });

  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
