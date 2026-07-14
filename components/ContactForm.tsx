"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-body text-ink-muted">
        Thanks for reaching out. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block font-utility text-sm text-ink-muted"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-sm border border-ink/20 bg-paper px-4 py-3 font-body text-ink"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1 block font-utility text-sm text-ink-muted"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-sm border border-ink/20 bg-paper px-4 py-3 font-body text-ink"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1 block font-utility text-sm text-ink-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded-sm border border-ink/20 bg-paper px-4 py-3 font-body text-ink"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start rounded-sm bg-cloth px-6 py-3 font-utility text-sm font-medium text-paper transition-colors hover:bg-cloth-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="font-utility text-sm text-red-700">
          Something went wrong. Please try again, or email hello@jongergen.com
          directly.
        </p>
      )}
    </form>
  );
}
