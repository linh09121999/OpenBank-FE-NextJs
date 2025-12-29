'use client'
import { motion, AnimatePresence } from "motion/react";

type ButtonProps = {
    children: React.ReactNode;
    onToggle: () => void;
    radius: string;
    padding: string;
    fontSize?: string;
    display?: string
}

const Button: React.FC<ButtonProps> = ({ children, onToggle, radius, padding, fontSize, display }) => {
    return (
        <motion.button
            onClick={onToggle}
            // style={{ borderRadius: `${radius}`, padding: `${padding}` }}
            className={`relative ${radius} ${padding} shrink-0 transition-all ${fontSize} ${display} mx-auto bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 relative overflow-hidden group`}>
            {children}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div
                className={`absolute inset-0 ${radius} border-1 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity`}></div>
        </motion.button>
    )
}

export default Button