import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * Client-side-only contact form (no backend wired up yet — replace
 * handleSubmit with a real endpoint, e.g. Formspree, or swap this whole
 * component for a plain `mailto:` link if you prefer zero backend).
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up a real submission endpoint.
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md">
      <FloatingLabelInput id="name" label="Your name" type="text" required />
      <FloatingLabelInput id="email" label="Your email" type="email" required />
      <FloatingLabelTextarea id="message" label="Message" required />

      <Button type="submit" size="default" className="self-start">
        <Send size={16} /> Send message
      </Button>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-2 text-sm text-primary font-medium"
          >
            <Check size={16} /> Message sent — I'll get back to you soon.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

function FloatingLabelInput({
  id,
  label,
  type,
  required,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder=" "
        className="peer w-full rounded-sm border border-white/15 bg-white/5 px-4 pt-5 pb-2 text-white placeholder-transparent focus-visible:outline-none focus-visible:border-primary transition-colors"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3.5 text-white/50 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingLabelTextarea({
  id,
  label,
  required,
}: {
  id: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        required={required}
        placeholder=" "
        rows={4}
        className="peer w-full rounded-sm border border-white/15 bg-white/5 px-4 pt-5 pb-2 text-white placeholder-transparent focus-visible:outline-none focus-visible:border-primary transition-colors resize-none"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3.5 text-white/50 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}
