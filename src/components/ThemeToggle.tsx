
import { motion, AnimatePresence } from "motion/react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

interface ThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className={`relative w-16 h-10 rounded-full transition-all 
                ${isDark
                    ? "bg-white/10"
                    : "bg-black/10"
                } 
                p-1 shadow-lg hover:shadow-xl`}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center ${isDark ? "ml-auto" : "mr-auto"
                    }`}
            >
                {isDark ? (
                    <FaRegMoon className="w-3.5 h-3.5 mx-auto text-green-800" />
                ) : (
                    <FaRegSun className="w-3.5 h-3.5 mx-auto text-green-600" />
                )}
            </motion.div>
        </button>
    );
}