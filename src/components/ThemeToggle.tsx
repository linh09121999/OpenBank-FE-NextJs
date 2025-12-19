
import LiquidGlass from "liquid-glass-react";
import { motion, AnimatePresence } from "motion/react";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

interface ThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className={`relative w-16 h-10 rounded-full transition-all bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-1 `}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-8 h-8 rounded-full  shadow-md flex items-center justify-center ${isDark ? "ml-auto border border-white/10 bg-white/10" : "mr-auto bg-white"
                    }`}
            >
                {isDark ? (
                    <FaRegMoon className="w-3.5 h-3.5 mx-auto text-white" />
                ) : (
                    <LuSun className="w-4.5 h-4.5 mx-auto text-green-600" />
                )}
            </motion.div>
        </button>
    );
}