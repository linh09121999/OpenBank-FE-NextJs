'use client'

import { useStateGeneral } from "@/zustand/useStateGeneral";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "../ThemeToggle";
import { useEffect, useMemo, useState } from "react";
import { Avatar, Badge, Menu, MenuItem, Stack, styled } from "@mui/material";
import { FaRegUser } from "react-icons/fa6";
import type { SxProps, Theme } from "@mui/material/styles";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { GetUser_Current, GetUserId_Current } from "@/services/User/service";
import { useStateUser } from "@/zustand/useStateUser";
import { useAuth } from "@/contexts/AuthContext";
import { BiLogOut } from "react-icons/bi";

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
    const router = useRouter()

    const sxAvata: SxProps<Theme> = {
        width: "100%",
        height: "100%",
        // boxShadow: 'var(--shadow-xl)',
        background: 'linear-gradient(to right,rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))',
        backdropFilter: 'blur(4px)',
        color: isDark ? 'white' : 'var(--color-green-500)'
    }

    const PaperProps: SxProps<Theme> = {
        sx: {
            borderRadius: '10px',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
            maxWidth: 'calc(100%)',
            background: isDark ? "rgb(255,255,255,0.1)" : 'white',
            backdropFilter: "blur(4px)"
        },
    }

    const MenuListProps: SxProps<Theme> = {
        sx: {
            paddingY: 0.5,
        },
    }

    const sxMenuItem: SxProps<Theme> = {
        justifyContent: 'center',
        paddingY: '10px',
        paddingLeft: '20px',
        color: isDark ? 'white' : 'var(--color-gray-500)',
        '&:hover': {
            backgroundColor: 'var(--color-green-100) !important',
            color: 'var(--color-green-700) !important',
            fontWeight: 600
        },
    }

    const { activeSection, navItems, bottomNavItems, setLoading } = useStateGeneral()

    const titleNav = useMemo(() => {
        return navItems.filter((r) =>
            r.id.includes(activeSection)
        )
    }, [activeSection])

    const titleBottomNav = useMemo(() => {
        return bottomNavItems.filter((r) =>
            r.id.includes(activeSection)
        )
    }, [activeSection])

    const { resGetUserCurrent, setResGetUserCurrent } = useStateUser()

    const { handleLogOut } = useAuth()

    // Get User (Current)
    const getUser_Current = async () => {
        try {
            setLoading(true)
            const res = await GetUser_Current()
            console.log(res.data)
            setResGetUserCurrent(res.data)
        } catch (error: any) {

        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUser_Current()
    }, [])

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <motion.header className={`sticky top-0 flex w-full z-99 overflow-hidden backdrop-blur-xl
        ${isDark
                ? "bg-white/5 border-b border-white/10"
                : "bg-white/90 border-b border-gray-200 shadow-xl"
            }
        `}>
            <div className="p-5 w-full flex items-center justify-between gap-5">
                <div>
                    {[...titleNav, ...titleBottomNav].map((item, index) => {
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
                    <button className=' css-icon' aria-label='user'
                        onClick={handleClick}
                    >
                        <Stack direction="row" spacing={2}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar
                                    sx={sxAvata}
                                >
                                    <div className="text-green-500">{resGetUserCurrent?.username.charAt(0).toUpperCase()}</div>
                                </Avatar>
                            </StyledBadge >
                        </Stack>
                    </button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        PaperProps={PaperProps}
                        MenuListProps={MenuListProps}
                        slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
                        }}
                    >
                        <div className={`${isDark ? "bg-white/10" : "bg-green-500/10"} m-3 rounded-[4px] text-green-900 p-2 flex gap-3 items-center border border-white/10 shadow-sm`}>
                            <Stack direction="row" spacing={2}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar
                                        sx={sxAvata}
                                    >
                                        <div className={`${isDark ? "text-white" : "text-green-500"}`}>{resGetUserCurrent?.username.charAt(0).toUpperCase()}</div>
                                    </Avatar>
                                </StyledBadge >
                            </Stack>
                            <p className={`${isDark ? "text-white" : "text-green-500"}`}>{resGetUserCurrent?.email}</p>

                        </div>
                        <MenuItem sx={sxMenuItem}
                            onClick={() => {
                                handleLogOut()
                                setAnchorEl(null)
                            }}
                        >
                            <div className='flex gap-3 items-center'>
                                <span className='text-xl'><BiLogOut /></span>
                                <span className={` text-lg transition-all duration-300 ease-in-out`}>Logout</span>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </motion.header>
    )
}

export default Header