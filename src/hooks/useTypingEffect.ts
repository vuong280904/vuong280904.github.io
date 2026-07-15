import { useEffect, useState } from "react";

interface Options {
  typingSpeed?: number;
  deletingSpeed?: number;
  holdMs?: number;
}

/**
 * Cycles through `phrases`, typing and deleting each one — powers the
 * hero subline (design spec §3). Respects prefers-reduced-motion by
 * simply showing the first phrase statically.
 */
export function useTypingEffect(phrases: string[], options: Options = {}) {
  const { typingSpeed = 45, deletingSpeed = 25, holdMs = 1800 } = options;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [text, setText] = useState(prefersReducedMotion ? phrases[0] ?? "" : "");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), holdMs);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      const nextText = isDeleting
        ? currentPhrase.slice(0, text.length - 1)
        : currentPhrase.slice(0, text.length + 1);
      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, holdMs, prefersReducedMotion]);

  return text;
}
