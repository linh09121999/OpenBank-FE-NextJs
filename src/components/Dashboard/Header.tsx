'use client'

import { useStateGeneral } from "@/zustand/useStateGeneral";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "../ThemeToggle";
import { useMemo } from "react";
import { Avatar, Badge, Stack, styled } from "@mui/material";
import { FaRegUser } from "react-icons/fa6";
import type { SxProps, Theme } from "@mui/material/styles";
import { IoSettingsOutline } from "react-icons/io5";

interface HeaderProps {
    isDark: boolean;
    onToggle: () => void;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    width: '50px',
    height: '50px',
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '2px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const Header: React.FC<HeaderProps> = ({ isDark, onToggle }) => {
    const sxAvata: SxProps<Theme> = {
        width: "100%",
        height: "100%",
        // boxShadow: 'var(--shadow-xl)',
        background: 'linear-gradient(to right,rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))',
        backdropFilter: 'blur(4px)',
        color: isDark ? 'white' : 'var(--color-green-500)'
    }

    const { activeSection, navItems } = useStateGeneral()

    const titleNav = useMemo(() => {
        return navItems.filter((r) =>
            r.id.includes(activeSection)
        )
    }, [activeSection])

    return (
        <motion.header className={`sticky top-0 flex w-full z-99 overflow-hidden backdrop-blur-xl
        ${isDark
                ? "bg-white/5 border-b border-white/10"
                : "bg-white/90 border-b border-gray-200 shadow-xl"
            }
        `}>
            <div className="p-5 w-full flex items-center justify-between gap-5">
                <div>
                    {titleNav.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className="flex items-center gap-4" key={index}>
                                <div className="relative">
                                    <div className="relative bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-3 rounded-2xl">
                                        <Icon className="w-6 h-6 text-green-500" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className={isDark ? "text-white mb-0.5" : "text-gray-900 mb-0.5"}>{item.label}</h1>
                                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Live system intelligence</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex items-center gap-3 w-fit">
                    {/* search */}
                    <ThemeToggle isDark={isDark} onToggle={onToggle} />
                    <button className={`css-icon ${isDark ? 'text-white ' : 'text-green-500'} bg-gradient-to-r from-emerald-500/10 to-teal-500/10 w-10 h-10 rounded-full`} aria-label='setting'>
                        <span><IoSettingsOutline className="mx-auto w-5 h-5" /></span>
                    </button>
                    <button className=' css-icon ' aria-label='user'>
                        <Stack direction="row" spacing={2}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            // variant="dot"
                            >
                                <Avatar
                                    sx={sxAvata}
                                >
                                    <FaRegUser className="mx-auto" />
                                </Avatar>
                            </StyledBadge >
                        </Stack>
                    </button>
                </div>
            </div>
        </motion.header>
    )
}

export default Header