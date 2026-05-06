"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { subscribeToWaitlist, type ActionResult } from "@/app/actions";
import { cn } from "@/lib/utils";

function SubmitButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "shrink-0 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-md text-[14px] font-[500] transition-colors disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className
      )}
    >
      {pending ? <Loader2 className="size-4 animate-spin" /> : label}
    </button>
  );
}

interface WaitlistFormProps {
  variant: "hero" | "cta";
  className?: string;
}

export default function WaitlistForm({ variant, className }: WaitlistFormProps) {
  const [state, formAction] = useActionState<ActionResult | null, FormData>(
    subscribeToWaitlist,
    null
  );

  if (state?.ok) {
    return (
      <p
        className={cn(
          "text-[15px] font-[500] transition-opacity duration-300",
          variant === "hero" ? "text-forest" : "text-moss-light"
        )}
        style={{ animation: "fadeIn 0.3s ease" }}
      >
        You&rsquo;re on the list. We&rsquo;ll be in touch.
      </p>
    );
  }

  const isHero = variant === "hero";

  return (
    <form action={formAction} className={cn("w-full", className)} noValidate>
      <label htmlFor={`email-${variant}`} className="sr-only">
        Email address
      </label>

      <div className="flex gap-2">
        <Input
          id={`email-${variant}`}
          type="email"
          name="email"
          placeholder="Your email address"
          required
          autoComplete="email"
          className={cn(
            "flex-1 h-10 rounded-md text-[14px] border-ink/20 focus-visible:ring-forest/50 focus-visible:border-forest",
            isHero ? "bg-white" : "bg-white border-white/30"
          )}
        />
        <SubmitButton
          label={isHero ? "Join waitlist" : "Notify me"}
          className={
            isHero
              ? "bg-forest hover:bg-forest-deep text-white focus-visible:ring-forest"
              : "bg-ink hover:bg-ink/90 text-white focus-visible:ring-white"
          }
        />
      </div>

      {state && !state.ok && (
        <p className="mt-2 text-[13px] text-terracotta" role="alert">
          {state.error}
        </p>
      )}
    </form>
  );
}
