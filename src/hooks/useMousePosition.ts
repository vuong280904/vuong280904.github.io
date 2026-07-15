import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

/**
 * Tracks raw viewport mouse coordinates. Disabled on touch-only devices
 * (no pointer:fine support) since the cursor-aperture signature element
 * has no meaning without a cursor — see design spec §13.
 */
export function useMousePosition() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mql.matches);

    if (!mql.matches) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return { position, isFinePointer };
}
