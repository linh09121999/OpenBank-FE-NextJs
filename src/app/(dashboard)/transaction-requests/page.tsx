'use client'

import { useStateGeneral } from "@/zustand/useStateGeneral"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const TransactionRequestsPage: React.FC = () => {
    const router = useRouter()
    const { setActiveSection, bankViewItems, setBankViewItems,
        isDark, setIsDark, setLoading
    } = useStateGeneral()

    useEffect(() => {
        setActiveSection('transaction-requests')
    }, [])

    return (
        <></>
    )
}

export default TransactionRequestsPage