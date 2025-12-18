'use client'

import { useStateGeneral } from "@/zustand/useStateGeneral";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "../ThemeToggle";

interface HeaderProps {
    isDark: boolean;
    onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onToggle }) => {
    return (
        <motion.header className="sticky top-0 flex w-full bg-white z-99 bg-white border-b-[1px] border-b-gray-200 overflow-hidden ">
            {/* <img
                src="../header-bg.png"
                alt="bg-header"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            /> */}
            <div className="relative p-5 flex items-center justify-between gap-5">
                <div></div>
                <div className="flex items-center gap-3">
                    {/* search */}
                    <ThemeToggle isDark={isDark} onToggle={onToggle} />
                </div>
            </div>
        </motion.header>
    )
}

export default Header