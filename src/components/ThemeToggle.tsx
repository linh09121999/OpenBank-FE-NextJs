
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
                className={`w-8 h-8 rounded-full  shadow-md flex items-center justify-center 
                    ${isDark
                        ? "ml-auto bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 relative overflow-hidden group "
                        : "mr-auto bg-white"
                    }`}
            >
                {isDark ? (
                    <>
                        <FaRegMoon className="w-3.5 h-3.5 text-white" />
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                        <div className="absolute inset-0 rounded-full border-1 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </>
                ) : (
                    <LuSun className="w-4.5 h-4.5 mx-auto text-green-600" />
                )}
            </motion.div>
        </button>
    );
}