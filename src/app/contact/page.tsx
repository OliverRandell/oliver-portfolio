"use client";

import { useState } from "react";
import Container from "@/components/container";

const EMAIL = "oliverrandell@gmail.com"; // change if needed
const PHONE = "+61 451 029 748"; // optional: remove if you prefer

export default function Page() {

  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return <Container className="py-12">
    <main className="mx-auto max-w-5xl px-6 pt-20 pb-24">
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        Contact
      </h1>

      <p className="mt-4 text-lg text-neutral-600 max-w-2xl">
        The fastest way to reach me is email. If you include a link to the role
        and what you’re looking for, I’ll reply quickly.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 p-6">
          <p className="text-sm text-neutral-500">Email</p>
          <p className="mt-2 text-lg font-medium">{EMAIL}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Hello%20Oliver`}
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
            >
              Email me
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:border-neutral-400 transition"
            >
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 p-6">
          <p className="text-sm text-neutral-500">LinkedIn</p>
          <p className="mt-2 text-lg font-medium">Let’s connect</p>
          <p className="mt-2 text-sm text-neutral-600">
            If you prefer LinkedIn, send a message with context and I’ll respond.
          </p>

          <div className="mt-5">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:border-neutral-400 transition"
            >
              Open LinkedIn
            </a>
          </div>

          <div className="mt-8 border-t border-neutral-200 pt-6">
            <p className="text-sm text-neutral-500">Phone (optional)</p>
            <p className="mt-2 text-lg font-medium">{PHONE}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-3xl bg-neutral-50 p-6 border border-neutral-200">
        <p className="text-sm text-neutral-500">Helpful context</p>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-5">
          <li>Role / company + link</li>
          <li>Location / remote expectations</li>
          <li>What “success” means for this hire (activation, retention, growth)</li>
        </ul>
      </div>
    </main>
  </Container>;
};