
'use client'

import { useAuth } from "@/contexts/AuthContext";
import { GetPublicAccountsAtAllBanks } from "@/services/Account-Public/service";
import { GetAccountsatallBanks_private } from "@/services/Account/service";
import { GetBanks } from "@/services/BankAccountTag1/service";
import { useStateGeneral } from "@/zustand/useStateGeneral";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const router = useRouter()
  const {
    activeSection, setActiveSection,
    isDark, setIsDark, setLoading
  } = useStateGeneral()

  const [totalBanks, setTotalBank] = useState<number>(0)
  const [totalAccounts, setTotalAccounts] = useState<number>(0)

  const getBanks = async () => {
    try {
      setLoading(true)
      const res = await GetBanks()
      const dataBanks = res.data.banks
      setTotalBank(dataBanks.length)
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  const getAccountAllBankPrivate = async () => {
    try {
      setLoading(true)
      const res = await GetAccountsatallBanks_private()
      const dataAccount = res.data.accounts
      setTotalAccounts(dataAccount.length)
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  const getAccountAllBankPublic = async () => {
    try {
      setLoading(true)
      const res = await GetPublicAccountsAtAllBanks()
      const dataAccount = res.data.accounts
      setTotalAccounts(dataAccount.length)
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  // Get My Consents
  // Get My Consents Info
  // Get Consumers (logged in User)
  // Get Customers for Current User ?? Get Customers for Current User (IDs only) ?? Get My Customers

  const { isAuthenticated } = useAuth()

  useEffect(() => {
    setActiveSection("overview")
    getBanks()
    getAccountAllBankPublic()
    getAccountAllBankPrivate()
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-4 gap-5">
        <div className={` md:col-span-1 md:col-start-1 p-5 rounded-xl shadow-lg backdrop-blur-xl
            ${isDark
              ? "bg-white/5 text-white border border-white/10 shadow-white/5"
              : "bg-white/90"
            }`}>
          Banks {totalBanks}
        </div>
        <div className={`md:col-span-1 md:col-start-2 p-5 rounded-xl shadow-lg backdrop-blur-xl
          ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}>
          Accounts {totalAccounts}
        </div>
        <div className={`md:col-span-2 md:col-start-3 p-5 rounded-xl shadow-lg backdrop-blur-xl
          ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}></div>

      </div >
    </>
  );
}

export default Home
