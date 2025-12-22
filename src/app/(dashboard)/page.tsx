
'use client'

import TotalCard from "@/components/TotalCard";
import { useAuth } from "@/contexts/AuthContext";
import { GetPublicAccountsAtAllBanks } from "@/services/Account-Public/service";
import { GetAccountsatallBanks_private } from "@/services/Account/service";
import { GetBanks } from "@/services/BankAccountTag1/service";
import { GetMyConsents, GetMyConsentsInfo } from "@/services/Consent/service";
import { GetConsumers_LoggedInUser } from "@/services/Consumer/service";
import { GetCustomersForCurrentUser, GetCustomersForCurrentUser_IDsOnly, GetMyCustomers } from "@/services/Customer/service";
import { useStateGeneral } from "@/zustand/useStateGeneral";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiTwotoneBank } from "react-icons/ai";
import { BsCart2, BsJournalCheck } from "react-icons/bs";
import { MdOutlineManageAccounts, MdOutlineShoppingCart } from "react-icons/md";
import { RiBankLine, RiCustomerService2Line } from "react-icons/ri";

const Home: React.FC = () => {
  const router = useRouter()
  const { setActiveSection, bankViewItems,
    isDark, setIsDark, setLoading
  } = useStateGeneral()

  const [total, setTotal] = useState({
    banks: 0,
    consents: 0,
    cunsumers: 0,
    customers: 0
  })

  // Get My Consents
  const getMyConsents = async () => {
    try {
      setLoading(true)
      const res = await GetMyConsents()
      setTotal(prev => ({
        ...prev,
        consents: res.data.consents.length
      }))
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  // Get Consumers (logged in User)
  const getConsumers_LoggedInUser = async () => {
    try {
      setLoading(true)
      const res = await GetConsumers_LoggedInUser()
      setTotal(prev => ({
        ...prev,
        cunsumers: res.data.consumers.length
      }))
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  const getCustomersForCurrentUser = async () => {
    try {
      setLoading(true)
      const res = await GetCustomersForCurrentUser()
      setTotal(prev => ({
        ...prev,
        customers: res.data.customers.length
      }))
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  // Get cards for the current user

  useEffect(() => {
    setActiveSection("overview")
    getMyConsents()
    getConsumers_LoggedInUser()
    getCustomersForCurrentUser()
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-4 gap-5">
        {[
          { total: bankViewItems.length, label: "Total Banks", icon: RiBankLine },
          { total: total.consents, label: "Total Consent", icon: BsJournalCheck },
          { total: total.cunsumers, label: "Total Cunsumers", icon: MdOutlineShoppingCart },
          { total: total.customers, label: "Total Customers", icon: RiCustomerService2Line }
        ].map(({ total, label, icon }, index) => {
          const Icon = icon
          return (
            <TotalCard key={index} Icon={Icon} isDark={isDark} label={label} total={total} />
          )
        })}
      </div >
    </>
  );
}

export default Home
