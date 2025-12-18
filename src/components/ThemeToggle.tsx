
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
            className={`relative w-16 h-8 rounded-full transition-all ${isDark
                ? "bg-gradient-to-r from-black to-indigo-500"
                : "bg-gradient-to-r from-green-500 to-teal-500"
                } p-1 shadow-lg hover:shadow-xl`}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center ${isDark ? "ml-auto" : "mr-auto"
                    }`}
            >
                {isDark ? (
                    <FaRegMoon className="w-3.5 h-3.5 mx-auto text-indigo-600" />
                ) : (
                    <FaRegSun className="w-3.5 h-3.5 mx-auto text-green-600" />
                )}
            </motion.div>
        </button>
    );
}