'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode, useRef, Children, useCallback } from 'react';

interface AuthContextType {
    token: string | null;
    handleLogin: (tokenData: any) => void; // Thay đổi để nhận toàn bộ token data
    handleLogOut: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AUTO_LOGOUT_TIME = 10 * 60 * 60 * 1000;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // const [token, setToken] = useState<string | null>(null)
    const [token, setToken] = useState<string | null>(() => {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('token');
    });
    const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const clearLogoutTimer = () => {
        if (refreshIntervalRef.current) {
            clearTimeout(refreshIntervalRef.current)
        }
    }

    const handleLogOut = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
        clearLogoutTimer()
    }, [])

    const handleLogin = useCallback((token: string) => {
        if (!token) return

        const expirationTime = Date.now() + AUTO_LOGOUT_TIME

        setToken(token)
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiration", expirationTime.toString());

        clearLogoutTimer()
        refreshIntervalRef.current = setTimeout(handleLogOut, AUTO_LOGOUT_TIME)
    }, [handleLogOut])

    useEffect(() => {
        const storeToken = localStorage.getItem('token')
        const storeExpiration = localStorage.getItem('tokenExpiration')

        if (!storeToken || !storeExpiration) return

        const remainingTime = Number(storeExpiration) - Date.now()

        if (remainingTime <= 0) {
            handleLogOut()
        } else {
            setToken(storeToken)
            refreshIntervalRef.current = setTimeout(handleLogOut, remainingTime)
        }
    }, [handleLogOut])

    const isAuthenticated = !!token;

    const value: AuthContextType = {
        token,
        handleLogin,
        handleLogOut,
        isAuthenticated,
    };


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};