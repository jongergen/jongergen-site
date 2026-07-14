"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-body text-ink-muted">
        You&apos;re on the list. Thanks for signing up.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-start"
    >
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@email.com"
          className="w-full rounded-sm border border-ink/20 bg-paper px-4 py-3 font-body text-ink placeholder:text-ink-faint"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="whitespace-nowrap rounded-sm bg-cloth px-6 py-3 font-utility text-sm font-medium text-paper transition-colors hover:bg-cloth-dark disabled:opacity-60"
      >
        {status === "loading" ? "Signing up…" : "Sign up"}
      </button>
      {status === "error" && (
        <p className="font-utility text-sm text-red-700 sm:basis-full">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
