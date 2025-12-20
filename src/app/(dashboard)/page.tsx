
'use client'

import { useAuth } from "@/contexts/AuthContext";
import { GetPublicAccountsAtAllBanks } from "@/services/Account-Public/service";
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

  const { isAuthenticated } = useAuth()

  useEffect(() => {
    setActiveSection("overview")
    getBanks()
    getAccountAllBankPublic()
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="bg-white md:col-span-1 md:col-start-1 p-5 rounded-xl shadow-lg">
          Banks {totalBanks}
        </div>
        <div className="bg-white md:col-span-1 md:col-start-2 p-5 rounded-xl shadow-lg">
          Accounts {totalAccounts}
        </div>
        <div className="bg-white md:col-span-2 md:col-start-3 p-5 rounded-xl shadow-lg"></div>

      </div>
    </>
  );
}

export default Home
