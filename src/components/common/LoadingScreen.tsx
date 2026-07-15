import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

/**
 * Brief gradient-wash load screen (design spec §13: "Page load").
 * Mounted once in App.tsx and unmounted after the initial timer/asset check.
 */
export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            className="h-16 w-16 rounded-2xl bg-brand-gradient bg-[length:200%_200%]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
