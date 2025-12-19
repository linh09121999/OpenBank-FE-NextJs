
'use client'

import { GetPublicAccountsAtAllBanks } from "@/services/Account-Public/service";
import { GetBanks } from "@/services/BankAccountTag1/service";
import { useStateGeneral } from "@/zustand/useStateGeneral";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
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
      setTotalBank(dataAccount.length)
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    setActiveSection("overview")
    getBanks()
    getAccountAllBankPublic()
  }, [])

  return (
    <div className="">

    </div>
  );
}

export default Home
