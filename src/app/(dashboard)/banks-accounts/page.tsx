'use client'

import { useStateGeneral } from "@/zustand/useStateGeneral"
import { useRouter } from "next/navigation"
import React, { useEffect, useMemo, useState } from "react"
const Banks_BranchesPage: React.FC = () => {
    const router = useRouter()
    const { setActiveSection, bankViewItems, setBankViewItems,
        isDark, setIsDark, setLoading
    } = useStateGeneral()

    
    useEffect(() => {
        setActiveSection('banks-accounts')
    }, [])

    return (
        <>
           
        </>
    )
}

export default Banks_BranchesPage