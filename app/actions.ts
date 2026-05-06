"use server";

import { z } from "zod";
import { Resend } from "resend";

export type ActionResult = { ok: true } | { ok: false; error: string };

const EmailSchema = z.string().email();

export async function subscribeToWaitlist(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const raw = formData.get("email");
  const parsed = EmailSchema.safeParse(raw);

  if (!parsed.success) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error("Missing RESEND_API_KEY or RESEND_AUDIENCE_ID");
    return { ok: false, error: "Configuration error. Please try again later." };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.contacts.create({
      email: parsed.data,
      audienceId,
      unsubscribed: false,
    });
    return { ok: true };
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message.toLowerCase() : String(err).toLowerCase();
    // Treat duplicate contacts as success — don't leak subscriber info
    if (
      message.includes("already") ||
      message.includes("exists") ||
      message.includes("conflict") ||
      message.includes("409")
    ) {
      return { ok: true };
    }
    console.error("Resend error:", err);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
