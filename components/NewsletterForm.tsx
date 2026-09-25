"use client";

import { useState } from "react";

/*
  NEWSLETTER SIGNUP
  ------------------------
  Posts straight from the visitor's browser to Jon's Kit form
  ("jongergen.com signup", form 9962968). The response loads into a
  hidden frame, so the visitor stays on the page and sees our own
  confirmation message instead of Kit's.
*/

const KIT_FORM_URL = "https://app.kit.com/forms/9962968/subscriptions";
const FRAME_NAME = "kit-signup-frame";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="font-body text-ink-muted">
        Almost there &mdash; check your inbox for an email to confirm your
        subscription.
      </p>
    );
  }

  return (
    <>
      <form
        action={KIT_FORM_URL}
        method="post"
        target={FRAME_NAME}
        onSubmit={() => {
          // Let the browser send the form first, then swap in the message.
          setTimeout(() => setSubmitted(true), 300);
        }}
        className="flex flex-col gap-3 sm:flex-row sm:items-start"
      >
        <label htmlFor="email_address" className="sr-only">
          Email address
        </label>
        <input
          id="email_address"
          name="email_address"
          type="email"
          required
          placeholder="name@email.com"
          className="w-full min-w-0 flex-1 rounded-sm border border-ink/20 bg-paper px-4 py-3 font-body text-ink placeholder:text-ink-faint"
        />
        <button
          type="submit"
          className="whitespace-nowrap rounded-sm bg-cloth px-6 py-3 font-utility text-sm font-medium text-paper transition-colors hover:bg-cloth-dark"
        >
          Sign up
        </button>
      </form>
      <iframe
        name={FRAME_NAME}
        title="Newsletter signup"
        aria-hidden="true"
        tabIndex={-1}
        style={{ position: "absolute", width: 0, height: 0, border: 0 }}
      />
    </>
  );
}
