"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName = cn(
  "w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-foreground",
  "placeholder:text-muted/50 outline-none transition-all duration-200",
  "focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
);

const labelClassName = "mb-2 block text-sm font-medium text-foreground";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("_honeypot")) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or reach out via email or WhatsApp."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
      <div>
        <h3 className="font-heading text-xl font-bold text-foreground">
          Send a Message
        </h3>
        <p className="mt-1 text-sm text-muted">
          Tell me about your church and what you&apos;re looking to create.
        </p>
      </div>

      <div>
        <label htmlFor="contact-name" className={labelClassName}>
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Pastor John Smith"
          className={inputClassName}
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClassName}>
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@yourchurch.org"
          className={inputClassName}
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClassName}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What type of content do you need? Sermon reels, worship highlights, weekly editing..."
          className={cn(inputClassName, "resize-y min-h-[140px]")}
          disabled={status === "loading"}
        />
      </div>

      <input
        type="text"
        name="_honeypot"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit
          </>
        )}
      </Button>
    </form>
  );
}
