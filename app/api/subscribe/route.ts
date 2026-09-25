
import { NextResponse } from "next/server";

// Kit form "jongergen.com signup"
const KIT_FORM_URL = "https://app.kit.com/forms/9962968/subscriptions";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  try {
    const res = await fetch(KIT_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({ email_address: email }).toString(),
    });

    const text = await res.text();
    let data: { status?: string } | null = null;
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }

    if (!res.ok || (data && data.status && data.status !== "success")) {
      console.error("Kit signup failed:", res.status, text.slice(0, 500));
      return NextResponse.json({ error: "Signup failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kit signup error:", err);
    return NextResponse.json({ error: "Signup failed" }, { status: 502 });
  }
}
