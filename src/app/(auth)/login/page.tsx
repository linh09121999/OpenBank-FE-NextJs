'use client'

import { CreateUser } from '@/services/User/service';
import { useStateGeneral } from '@/zustand/useStateGeneral'
import { InputAdornment, TextField } from '@mui/material'
import type { SxProps, Theme } from "@mui/material/styles";
import LiquidGlass from 'liquid-glass-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash, FaRegUser } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineErrorOutline, MdOutlineLock } from 'react-icons/md'

const Login: React.FC = () => {
    const rounter = useRouter()
    const sxTextField: SxProps<Theme> = {
        width: '100%',
        '& .MuiOutlinedInput-root': {
            borderRadius: "var(--radius-xl)",
            background: "rgb(255,255,255,0.1)",
            height: '45px',
            padding: '3px 8px',
            transition: 'all 0.3s',
            fontSize: 'var(--text-md)',
            border: '1px solid rgb(255,255,255,0.1)',
        },

        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            border: 'none'
        },

        '& .MuiOutlinedInput-input': {
            padding: 0
        },

        '& .MuiInputBase-input': {
            color: 'var(--color-green-500)',
            fontSize: 'var(--text-lg)',
            border: 'none',
        },
    }

    const [routerRegister, setRouterRegister] = useState<boolean>(false)

    const { loading } = useStateGeneral()

    // login
    const [errorLoginStatus, setErrorLoginStatus] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [login, setLogin] = useState(
        {
            username: "",
            password: ""
        }
    )

    const [errorLogin, setErrorLogin] = useState({
        username: "",
        password: ""
    })

    const validateFieldsLogin = () => {
        let newErrors: any = {};
        const fields = {
            username: login.username,
            password: login.password
        } as any;
        Object.keys(fields).forEach((key) => {
            if (!fields[key]) {
                newErrors[key] = "Unable to leave empty!";
            }
        });

        setErrorLogin(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmitLogout = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateFieldsLogin()) {
            return;
        }
    }

    // register
    const [errorRegisterStatus, setErrorRegisterStatus] = useState<string>('')

    const [register, setRegister] = useState(
        {
            username: "",
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            password_confirmation: ""
        }
    )

    const [errorRegister, setErrorRegister] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: ""
    })

    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(false);

    const validateFieldsRegister = () => {
        let newErrors: any = {};
        const fields = {
            username: register.username,
            email: register.email,
            first_name: register.first_name,
            last_name: register.last_name,
            password: register.password,
            password_confirmation: register.password_confirmation,
        } as any;
        Object.keys(fields).forEach((key) => {
            if (!fields[key]) {
                newErrors[key] = "Unable to leave empty!";
            }
        });

        // Password rule: min 8 chars + at least 1 number
        if (register.password) {
            if (register.password.length < 8) {
                newErrors.password = "Password must be at least 8 characters!";
            }

            if (!/\d/.test(register.password)) {
                newErrors.password = "Password must contain at least one number!";
            }
        }

        // Password confirmation match
        if (register.password && register.password_confirmation) {
            if (register.password !== register.password_confirmation) {
                newErrors.password_confirmation = "Passwords do not match!";
            }
        }

        setErrorRegister(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmitRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateFieldsRegister()) {
            return;
        }
    }

    return (
        <>
            <img src="/Frame-70-1.png" alt="bg" className="fixed top-0 left-0 w-full h-screen max-md:object-cover -z-10" />

            <div className="flex justify-between ">
                <div></div>
                <div className='max-h-screen h-screen overflow-y-auto scroll-y border-l border-white/10 backdrop-blur-sm'>
                    <div className={`flex flex-col gap-8 justify-center items-center p-10 w-[650px]  ${!routerRegister && 'h-full'}`}>
                        {!routerRegister ?
                            <>
                                <div>
                                    <h2 className="md:text-5xl text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
                                        Welcome Back 👋
                                    </h2>
                                    <p className="text-center text-gray-400 text-lg">Login to continue the experience</p>
                                </div>
                                {errorLoginStatus &&
                                    <div className="p-4 text-center bg-red-50/80 flex flex-col backdrop-blur-sm border border-red-200 rounded-xl gap-1 text-red-600">
                                        <MdOutlineErrorOutline className="mx-auto" size={21} />{errorLoginStatus}</div>
                                }
                                <form
                                    onSubmit={handleSubmitLogout}
                                    autoComplete="off"
                                    className="flex flex-col md:gap-5 gap-2 w-full">
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="email" className="block md:text-xl text-md font-medium text-gray-300">
                                            Email
                                        </label>
                                        <TextField
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="Email"
                                            name="email"
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start"
                                                        >
                                                            <MdOutlineEmail className='text-green-500' />
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                            value={login.username}
                                            variant="outlined"
                                            sx={sxTextField}
                                            onChange={(e) =>
                                                setLogin(prev =>
                                                ({
                                                    ...prev,
                                                    username: e.target.value
                                                })
                                                )
                                            }
                                            error={Boolean(errorLogin.username)}
                                            helperText={errorLogin.username}

                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="password" className="block md:text-xl text-md font-medium text-gray-300">
                                            Password
                                        </label>
                                        <TextField
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            autoComplete="password"
                                            placeholder="Password"
                                            name="password"
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start"
                                                        >
                                                            <MdOutlineLock className='text-green-500' />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <button onClick={() => setShowPassword(!showPassword)}>
                                                                {showPassword ? <FaRegEyeSlash className='text-green-500' /> : <FaRegEye className='text-green-500' />}
                                                            </button>
                                                        </InputAdornment>
                                                    )
                                                },
                                            }}
                                            value={login.password}
                                            variant="outlined"
                                            sx={sxTextField}
                                            onChange={(e) =>
                                                setLogin(prev =>
                                                ({
                                                    ...prev,
                                                    password: e.target.value
                                                })
                                                )
                                            }
                                            error={Boolean(errorLogin.password)}
                                            helperText={errorLogin.password}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="h-[50px] mt-3 rounded-xl bg-gradient-to-br from-green-500 px-10 to-emerald-600 text-white 
                            hover:from-green-600 hover:to-emerald-700 hover:shadow-xl
                            font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg relative overflow-hidden group"
                                    >
                                        {loading ? "Login..." : "Login"}
                                        <div className="absolute inset-0 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        </div>
                                        <div className="absolute inset-0 rounded-xl border-2 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </button>
                                </form>
                                <div className='text-gray-300 w-full text-sm text-center relative after:absolute after:h-[1px] after:w-[45%] after:bg-gradient-to-r after:to-gray-300 after:left-0 after:top-1/2 before:absolute before:h-[1px] before:w-[45%] before:bg-gradient-to-l before:to-gray-300 before:top-1/2 before:right-0'>Or</div>
                                <div className=" flex">
                                    <div className="mx-auto text-gray-300 md:text-md text-sm">
                                        No account?
                                        <button className="text-green-500 hover:text-green-400 hover:font-bold ml-[4px] transition-all duration-300 ease"
                                            onClick={() => {
                                                setRouterRegister(true)
                                                setShowPassword(false)
                                            }}>
                                            Register for a new account
                                        </button>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <h2 className="md:text-5xl text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
                                    Create Your Account
                                </h2>
                                {errorRegisterStatus &&
                                    <div className="p-4 text-center bg-red-50/80 flex flex-col backdrop-blur-sm border border-red-200 rounded-xl gap-1 text-red-600">
                                        <MdOutlineErrorOutline className="mx-auto" size={21} />{errorRegisterStatus}</div>
                                }
                                <form
                                    onSubmit={handleSubmitRegister}
                                    autoComplete="off"
                                    className="flex flex-col md:gap-5 gap-2 w-full">
                                    <div className='grid grid-cols-2 gap-5'>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="firstName" className="md:text-xl text-md font-medium text-gray-300">
                                                First name
                                            </label>
                                            <TextField
                                                type="text"
                                                required
                                                autoComplete="firstName"
                                                placeholder="First name"
                                                name="firstName"
                                                slotProps={{
                                                    input: {
                                                        startAdornment: (
                                                            <InputAdornment position="start"
                                                            >
                                                                <FaRegUser className='text-green-500' />
                                                            </InputAdornment>
                                                        ),
                                                    },
                                                }}
                                                value={register.first_name}
                                                variant="outlined"
                                                sx={sxTextField}
                                                onChange={(e) =>
                                                    setRegister(prev =>
                                                    ({
                                                        ...prev,
                                                        first_name: e.target.value
                                                    })
                                                    )
                                                }
                                                error={Boolean(errorRegister.first_name)}
                                                helperText={errorRegister.first_name}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="lastName" className="md:text-xl text-md font-medium text-gray-300">
                                                Last name
                                            </label>
                                            <TextField
                                                type="text"
                                                required
                                                autoComplete="lastName"
                                                placeholder="Last name"
                                                name="lastName"
                                                slotProps={{
                                                    input: {
                                                        startAdornment: (
                                                            <InputAdornment position="start"
                                                            >
                                                                <FaRegUser className='text-green-500' />
                                                            </InputAdornment>
                                                        ),
                                                    },
                                                }}
                                                value={register.last_name}
                                                variant="outlined"
                                                sx={sxTextField}
                                                onChange={(e) =>
                                                    setRegister(prev =>
                                                    ({
                                                        ...prev,
                                                        last_name: e.target.value
                                                    })
                                                    )
                                                }
                                                error={Boolean(errorRegister.last_name)}
                                                helperText={errorRegister.last_name}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="inputUserName" className="block md:text-xl text-md font-medium text-gray-300">
                                            Username
                                        </label>
                                        <TextField
                                            type="text"
                                            required
                                            autoComplete="inputUserName"
                                            placeholder="UserName"
                                            name="inputUserName"
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start"
                                                        >
                                                            <FaRegUser className='text-green-500' />
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                            value={register.username}
                                            variant="outlined"
                                            sx={sxTextField}
                                            onChange={(e) =>
                                                setRegister(prev =>
                                                ({
                                                    ...prev,
                                                    username: e.target.value
                                                })
                                                )
                                            }
                                            error={Boolean(errorRegister.email)}
                                            helperText={errorRegister.email}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="inputEmail" className="block md:text-xl text-md font-medium text-gray-300">
                                            Email
                                        </label>
                                        <TextField
                                            type="email"
                                            required
                                            autoComplete="inputEmail"
                                            placeholder="Email"
                                            name="inputEmail"
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start"
                                                        >
                                                            <MdOutlineEmail className='text-green-500' />
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                            value={register.email}
                                            variant="outlined"
                                            sx={sxTextField}
                                            onChange={(e) =>
                                                setRegister(prev =>
                                                ({
                                                    ...prev,
                                                    email: e.target.value
                                                })
                                                )
                                            }
                                            error={Boolean(errorRegister.email)}
                                            helperText={errorRegister.email}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="password" className="md:text-xl text-md font-medium text-gray-300">
                                            Password
                                        </label>
                                        <TextField
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            placeholder="Password"
                                            name="password"
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start"
                                                        >
                                                            <MdOutlineLock className='text-green-500' />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <button onClick={() => setShowPassword(!showPassword)}>
                                                                {showPassword ? <FaRegEyeSlash className='text-green-500' /> : <FaRegEye className='text-green-500' />}
                                                            </button>
                                                        </InputAdornment>
                                                    )
                                                },
                                            }}
                                            value={register.password}
                                            variant="outlined"
                                            sx={sxTextField}
                                            onChange={(e) =>
                                                setRegister(prev =>
                                                ({
                                                    ...prev,
                                                    password: e.target.value
                                                })
                                                )
                                            }
                                            error={Boolean(errorRegister.password)}
                                            helperText={errorRegister.password}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="passwordConfirmation" className="md:text-xl text-md font-medium text-gray-300">
                                            Password confirmation
                                        </label>
                                        <TextField
                                            type={showPasswordConfirmation ? 'text' : 'password'}
                                            required
                                            placeholder="Password confirmation"
                                            name="passwordConfirmation"
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start"
                                                        >
                                                            <MdOutlineLock className='text-green-500' />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <button onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}>
                                                                {showPasswordConfirmation ? <FaRegEyeSlash className='text-green-500' /> : <FaRegEye className='text-green-500' />}
                                                            </button>
                                                        </InputAdornment>
                                                    )
                                                },
                                            }}
                                            value={register.password_confirmation}
                                            variant="outlined"
                                            sx={sxTextField}
                                            onChange={(e) =>
                                                setRegister(prev =>
                                                ({
                                                    ...prev,
                                                    password_confirmation: e.target.value
                                                })
                                                )
                                            }
                                            error={Boolean(errorRegister.password_confirmation)}
                                            helperText={errorRegister.password_confirmation}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="h-[50px] mt-3 rounded-xl bg-gradient-to-br from-green-500 px-10 to-emerald-600 text-white 
                            hover:from-green-600 hover:to-emerald-700 hover:shadow-xl
                            font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg relative overflow-hidden group"
                                    >
                                        {loading ? "Register..." : "Register"}
                                        <div className="absolute inset-0 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        </div>
                                        <div className="absolute inset-0 rounded-xl border-2 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    </button>
                                </form>
                                <div className='text-gray-300 w-full text-sm text-center relative after:absolute after:h-[1px] after:w-[45%] after:bg-gradient-to-r after:to-gray-300 after:left-0 after:top-1/2 before:absolute before:h-[1px] before:w-[45%] before:bg-gradient-to-l before:to-gray-300 before:top-1/2 before:right-0'>Or</div>

                                <div className=" flex">
                                    <div className="mx-auto text-gray-300 md:text-md text-sm">
                                        There are accounts?
                                        <button className="text-green-500 hover:text-green-400 hover:font-bold ml-[4px] transition-all duration-300 ease"
                                            onClick={() => {
                                                setRouterRegister(false)
                                                setShowPassword(false)
                                            }}>
                                            Sign in now
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

// CreateUser : register