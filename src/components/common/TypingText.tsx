import { useTypingEffect } from "@/hooks/useTypingEffect";

/** Monospace typing subline with a blinking gradient cursor (design spec §3). */
export function TypingText({ phrases }: { phrases: string[] }) {
  const text = useTypingEffect(phrases);

  return (
    <p className="font-mono text-sm md:text-base text-ink-soft dark:text-white/60 h-6">
      {text}
      <span className="inline-block w-[2px] h-4 ml-0.5 -mb-0.5 bg-brand-gradient animate-blink" aria-hidden />
    </p>
  );
}
