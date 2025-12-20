
'use client'

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
  const {
    activeSection, setActiveSection,
    isDark, setIsDark, setLoading
  } = useStateGeneral()

  const [total, setTotal] = useState({
    banks: 0,
    accountPrivate: 0,
    accountPublic: 0,
    consents: 0,
    cunsumers: 0,
    customers: 0
  })

  const getBanks = async () => {
    try {
      setLoading(true)
      const res = await GetBanks()
      setTotal(prev => ({
        ...prev,
        banks: res.data.banks.length
      }))
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
      setTotal(prev => ({
        ...prev,
        accountPrivate: res.data.accounts.length
      }))
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
      setTotal(prev => ({
        ...prev,
        accountPublic: res.data.accounts.length
      }))
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

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
    getBanks()
    getAccountAllBankPublic()
    getAccountAllBankPrivate()
    getMyConsents()
    getConsumers_LoggedInUser()
    getCustomersForCurrentUser()
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-5 gap-5">
        {[
          { total: total.banks, label: "Total Banks", icon: RiBankLine },
          { total: (total.accountPrivate + total.accountPublic), label: "Total Account", icon: MdOutlineManageAccounts },
          { total: total.consents, label: "Total Consent", icon: BsJournalCheck },
          { total: total.cunsumers, label: "Total Cunsumers", icon: MdOutlineShoppingCart },
          { total: total.customers, label: "Total Customers", icon: RiCustomerService2Line }
        ].map(({ total, label, icon }, index) => {
          const Icon = icon
          return (
            <div key={index} className={` p-5 rounded-3xl shadow-lg backdrop-blur-xl flex gap-5
            ${isDark
                ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                : "bg-white/90"
              }`}>
              <div className="relative">
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 relative overflow-hidden group p-3 rounded-xl">
                  <Icon className="text-3xl text-white" />
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <div className="absolute inset-0 rounded-xl border-1 border-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className={``}>
                <div className={`justify-start text-base font-normal ${isDark ? "text-gray-400 " : "text-gray-600"}`}>{label}</div>
                <div className={`justify-start  text-2xl font-semibold
              ${isDark ? "" : "text-neutral-800"}
              `}>{total}</div>
              </div>
            </div>

          )
        })}

      </div >
    </>
  );
}

export default Home
