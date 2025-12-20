'use client'

import { useAuth } from "@/contexts/AuthContext";
import { useStateGeneral } from "@/zustand/useStateGeneral"
import { Badge } from "@mui/material";
import LiquidGlass from "liquid-glass-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
    activeSection: string;
    onSectionChange: (section: string) => void;
    isDark: boolean;
}


const Bar: React.FC<SidebarProps> = ({ isCollapsed, onToggle, activeSection, onSectionChange, isDark }) => {
    const router = useRouter()
    const { navItems, bottomNavItems } = useStateGeneral()

    const { handleLogOut } = useAuth()

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? 92 : 280 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed left-0 top-0 h-screen backdrop-blur-xl flex flex-col z-50
            ${isDark
                    ? "bg-white/5 border-r border-white/10"
                    : "bg-white/90 border-r border-gray-200 shadow-xl"
                }
`}
        >
            <div className={`p-5 ${isDark ? "border-b border-white/10" : "border-b border-gray-200"}`}>
                <div className="relative shrink-0">
                    {isCollapsed ? <img src="../logo-2.png" alt="logo" className="h-[50px] w-[50px] mx-auto" /> : <img src={`${isDark ? "../logofull_green.png" : '../logofull_white.png'}`} alt="logo full" className="h-[34px] mx-auto" />}
                </div>
            </div>

            <nav className="flex-1 p-4 overflow-y-auto scroll-y">
                <div className="space-y-0">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;

                        return (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => {
                                    onSectionChange(item.id)
                                    router.push(`${item.path}`)
                                }}
                                title={`${isCollapsed ? `${item.label}` : ""}`}
                                className={`w-full flex items-center gap-3 ${isCollapsed ? "py-1.5" : "p-3"} rounded-2xl  transition-all group relative `}
                            >
                                {isActive &&
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute inset-0 rounded-2xl 
                                            ${isCollapsed
                                                ? "hidden"
                                                : isDark
                                                    ? "bg-gradient-to-r from-emerald-500/10 to-teal-500/10"
                                                    : "bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 overflow-hidden group"
                                            }`}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                }

                                {(isActive && !isCollapsed) &&
                                    <>
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        </div>
                                        <div className="absolute inset-0 rounded-2xl border-1 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </>
                                }

                                <div className={`relative shrink-0 rounded-lg transition-all 
                                ${isCollapsed
                                        ? isActive
                                            ? "text-2xl mx-auto p-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 relative overflow-hidden group"
                                            : isDark
                                                ? "text-2xl mx-auto p-3 bg-white/5 group-hover:bg-white/10"
                                                : "text-2xl mx-auto p-3 bg-gray-100 group-hover:bg-gray-200"
                                        : isActive
                                            ? isDark
                                                ? "p-2 bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 relative overflow-hidden group"
                                                : 'p-2 bg-white/20 '
                                            : isDark
                                                ? "p-2 bg-white/5 group-hover:bg-white/10"
                                                : "p-2 bg-gray-100 group-hover:bg-gray-200"

                                    }
                                    `}

                                >
                                    <Icon className={` ${isActive
                                        ? "text-white"
                                        : isDark
                                            ? "text-gray-400 group-hover:text-white"
                                            : "text-gray-600 group-hover:text-gray-900"
                                        }`} />
                                    {(isActive && isDark) &&
                                        <>
                                            <div className="absolute inset-0 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                            </div>
                                            <div className="absolute inset-0 rounded-xl border-1 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </>
                                    }
                                </div>

                                <AnimatePresence>
                                    {!isCollapsed && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="flex items-center justify-between flex-1 overflow-hidden"
                                        >
                                            <span className={`text-sm whitespace-nowrap z-10 
                                                ${isActive
                                                    ? "text-white"
                                                    : isDark
                                                        ? "text-gray-400 group-hover:text-white"
                                                        : "text-gray-600 group-hover:text-gray-800"
                                                }`}>
                                                {item.label}
                                            </span>
                                            {item.badge && (
                                                <span className={`px-2 z-10 py-0.5 rounded-full text-xs shrink-0 
                                                    ${item.badge === "New"
                                                        ? isDark
                                                            ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                                                            : isActive
                                                                ? "bg-white/20 text-white border border-white/30"
                                                                : "bg-green-500/10 text-green-500 border border-green-500/30"
                                                        : isDark
                                                            ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                                                            : isActive
                                                                ? "bg-white/20 text-white border border-white/30"
                                                                : "bg-red-500/10 text-red-500 border border-red-500/30"
                                                    }`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {isCollapsed && item.badge && (
                                    <div className={`absolute z-10 -top-1 -right-1 w-6 h-6 rounded-full backdrop-blur-md
                                    ${item.badge === "New"
                                            ? isDark
                                                ? "bg-white/90 text-green-950 border border-green-500 font-bold"
                                                : "bg-white text-green-700 border border-green-500"
                                            : isDark
                                                ? "bg-white/90 text-red-500 border border-red-500 font-bold"
                                                : "bg-white text-red-700 border border-red-500"
                                        } rounded-full flex items-center justify-center`}>
                                        <span className="text-center text-sm">{item.badge.charAt(0).toUpperCase()}</span>
                                    </div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>
            </nav>

            <div className={`p-4 ${isDark ? "border-t border-white/10" : "border-t border-gray-200"} space-y-1`}>
                {bottomNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id

                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                if (item.id === 'logout') {
                                    handleLogOut()
                                    router.push('/login')
                                } else {
                                    onSectionChange(item.id)
                                    router.push(`${item.path}`)
                                }
                            }}
                            title={`${isCollapsed ? `${item.label}` : ""}`}
                            className={`w-full flex items-center gap-3 ${isCollapsed ? "py-1.5" : "p-3"} rounded-2xl  transition-all group relative `}
                        >
                            {isActive &&
                                <motion.div
                                    layoutId="activeTab"
                                    className={`absolute inset-0 rounded-2xl 
                                            ${isCollapsed
                                            ? "hidden"
                                            : isDark
                                                ? "bg-gradient-to-r from-emerald-500/10 to-teal-500/10"
                                                : "bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 overflow-hidden group"
                                        }`}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            }

                            {(isActive && !isCollapsed) &&
                                <>
                                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl border-1 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </>
                            }

                            <div className={`relative shrink-0 rounded-lg transition-all 
                                ${isCollapsed
                                    ? isActive
                                        ? "text-2xl mx-auto p-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 relative overflow-hidden group"
                                        : isDark
                                            ? "text-2xl mx-auto p-3 bg-white/5 group-hover:bg-white/10"
                                            : "text-2xl mx-auto p-3 bg-gray-100 group-hover:bg-gray-200"
                                    : isActive
                                        ? isDark
                                            ? "p-2 bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 relative overflow-hidden group"
                                            : 'p-2 bg-white/20 '
                                        : isDark
                                            ? "p-2 bg-white/5 group-hover:bg-white/10"
                                            : "p-2 bg-gray-100 group-hover:bg-gray-200"

                                }
                                    `}

                            >
                                <Icon className={` ${isActive
                                    ? "text-white"
                                    : isDark
                                        ? "text-gray-400 group-hover:text-white"
                                        : "text-gray-600 group-hover:text-gray-900"
                                    }`} />
                                {(isActive && isDark) &&
                                    <>
                                        <div className="absolute inset-0 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        </div>
                                        <div className="absolute inset-0 rounded-xl border-1 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </>
                                }
                            </div>
                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="flex items-center justify-between flex-1 overflow-hidden"
                                    >
                                        <span className={`text-sm whitespace-nowrap z-10 
                                                ${isActive
                                                ? "text-white"
                                                : isDark
                                                    ? "text-gray-400 group-hover:text-white"
                                                    : "text-gray-600 group-hover:text-gray-800"
                                            }`}>
                                            {item.label}
                                        </span>
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    );
                })}
            </div>

            <button
                onClick={onToggle}
                className={`absolute z-99 -right-3 top-1/2 -translate-y-1/2 w-6 h-6 backdrop-blur-xl rounded-full flex items-center justify-center transition-all group ${isDark
                    ? "bg-green-950 border border-white/20 hover:bg-bg-green-950"
                    : "bg-white border border-gray-200 hover:border-green-500/30 hover:bg-gray-50 shadow-md"
                    }`}
            >
                {isCollapsed ? (
                    <FaChevronRight className={`w-3 h-3 ${isDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-green-600"}`} />
                ) : (
                    <FaChevronLeft className={`w-3 h-3 ${isDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-green-600"}`} />
                )}
            </button>
        </motion.aside >
    )
}

export default Bar