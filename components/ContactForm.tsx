"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:oliverrandell@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputStyles =
    "w-full border-0 border-b border-border bg-transparent py-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="grid gap-x-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyles}
          />
        </div>
        <div className="mt-6 sm:mt-0">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Email address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyles}
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="What are you working on? *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputStyles} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex items-center gap-2.5 rounded-sm bg-accent px-6 py-3 text-sm font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-accent-dark"
      >
        Send message
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      <p
        role="status"
        className={`mt-4 text-sm text-ink-faint transition-opacity duration-300 ${sent ? "opacity-100" : "opacity-0"}`}
      >
        Opening your email client with this pre-filled — send it whenever
        you're ready.
      </p>
    </form>
  );
}
