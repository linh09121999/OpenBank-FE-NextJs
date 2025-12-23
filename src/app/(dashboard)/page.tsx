
'use client'

import Badge from "@/components/Badge";
import TotalCard from "@/components/TotalCard";
import { useAuth } from "@/contexts/AuthContext";
import { GetPublicAccountsAtAllBanks } from "@/services/Account-Public/service";
import { GetAccountBalancesbyBANK_ID, GetAccountsatallBanks_private } from "@/services/Account/service";
import { GetBank } from "@/services/Bank/service";
import { GetBanks } from "@/services/BankAccountTag1/service";
import { GetMyConsents, GetMyConsentsInfo } from "@/services/Consent/service";
import { GetConsumers_LoggedInUser } from "@/services/Consumer/service";
import { GetCustomersForCurrentUser, GetCustomersForCurrentUser_IDsOnly, GetMyCustomers } from "@/services/Customer/service";
import { GetUser_Current } from "@/services/User/service";
import { BankViewItem, GroupedBankAccount } from "@/types/type";
import { useStateAccount } from "@/zustand/useStateAccount";
import { useStateBank } from "@/zustand/useStateBank";
import { useStateGeneral } from "@/zustand/useStateGeneral";
import { useStateUser } from "@/zustand/useStateUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AiTwotoneBank } from "react-icons/ai";
import { BsCart2, BsJournalCheck } from "react-icons/bs";
import { MdOutlineManageAccounts, MdOutlineShoppingCart } from "react-icons/md";
import { RiBankLine, RiCustomerService2Line } from "react-icons/ri";

const Home: React.FC = () => {
  const router = useRouter()
  const { setActiveSection, bankViewItems, setBankViewItems,
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

  const { setResGetUserCurrent } = useStateUser()

  // const getUniqueAccounts = (list: BankViewItem[]): GroupedBankAccount[] => {
  //   return list.filter((item, index, self) => {
  //     return index === self.findIndex(t =>
  //       t.bank_id === item.bank_id && t.account_id === item.account_id
  //     );
  //   }).map(({ bank_id, account_id }) => ({ bank_id, account_id }));
  // };

  const getUniqueAccounts = (list: BankViewItem[]): GroupedBankAccount[] => {
    const map = new Map<string, GroupedBankAccount>()
    list.forEach(({ bank_id, account_id, view_id }) => {
      const key = `${bank_id}_${account_id}`

      if (!map.has(key)) {
        map.set(key, {
          bank_id,
          account_id,
          view_ids: [view_id]
        })
      } else {
        const item = map.get(key)!
        if (!item.view_ids.includes(view_id)) {
          item.view_ids.push(view_id)
        }
      }
    })

    return Array.from(map.values())
  }


  const { resAccountBlancesByBankID, setResAccountBlancesByBankID } = useStateAccount()
  const getAccountBalancesByBankID = async (bank_id: string) => {
    try {
      setLoading(true)
      const res = await GetAccountBalancesbyBANK_ID(bank_id)
      setResAccountBlancesByBankID((prev) => [...prev, ...res.data.accounts])
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  const { resBank, setResBank } = useStateBank()

  const getBank = async (bank_id: string) => {
    try {
      setLoading(true)
      const res = await GetBank(bank_id)

      setResBank((prev) => [...prev, res.data])
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  // Get User (Current)
  const getUser_Current = async () => {
    try {
      setLoading(true)
      const res = await GetUser_Current()
      setResGetUserCurrent(res.data)
      const listView = res.data.views.list
      const listGroup = getUniqueAccounts(listView)
      setBankViewItems(listGroup)
      for (const item of listGroup) {
        await getAccountBalancesByBankID(item.bank_id)
        await getBank(item.bank_id)
      }

    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    setActiveSection("overview")
    getMyConsents()
    getConsumers_LoggedInUser()
    getCustomersForCurrentUser()
    getUser_Current()
  }, [])

  const bankMap = useMemo(() => {
    const balanceMap = new Map<string, any[]>()
    const viewMap = new Map<string, any[]>()

    resAccountBlancesByBankID.forEach((acc) => {
      balanceMap.set(acc.bank_id, [
        ...(balanceMap.get(acc.bank_id) || []),
        acc
      ])
    })

    bankViewItems.forEach((v) => {
      viewMap.set(v.bank_id, [
        ...(viewMap.get(v.bank_id) || []),
        v
      ])
    })

    return resBank.map((bank) => ({
      ...bank,
      accounts: balanceMap.get(bank.id) || [],
      views: viewMap.get(bank.id) || []
    }))
  }, [resBank, resAccountBlancesByBankID, bankViewItems])

  return (
    <>
      {/* <div className="flex flex-col gap-5"> */}
      <div className="grid md:grid-cols-4 gap-5">
        {[
          { total: bankViewItems.length, label: "Total Banks", icon: RiBankLine, bg: "var(--color-blue-500)" },
          { total: total.consents, label: "Total Consent", icon: BsJournalCheck, bg: "#8b5cf6" },
          { total: total.cunsumers, label: "Total Cunsumers", icon: MdOutlineShoppingCart, bg: "var(--color-green-500)" },
          { total: total.customers, label: "Total Customers", icon: RiCustomerService2Line, bg: "var(--color-yellow-500)" }
        ].map(({ total, label, icon, bg }, index) => {
          const Icon = icon
          return (
            <TotalCard key={index} Icon={Icon} isDark={isDark} label={label} total={total} bgCard={bg} />
          )
        })}
        {/* bieu do  */}
        <div className={`md:col-span-3 md:col-start-1 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex justify-between gap-5
            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}></div>
        <div className={`md:col-span-1 md:col-start-4 md:row-start-2 flex flex-col gap-5 max-h-[50vh] overflow-y-auto scroll-y`}>
          {bankMap.map((bank) => (
            <div key={bank.id} className={`p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 h-full items-center
            ${isDark
                ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                : "bg-white/90"
              }
            `}>

              <div className="flex gap-3 items-center">
                <img src={bank.logo} alt={bank.id} className="h-24 w-24" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold">{bank.full_name}</h2>
                  {bank.views.map((view) => (
                    <div key={view.account_id}>
                      <div className="flex gap-2 flex-wrap">
                        {view.view_ids.map((v: any) => (
                          <Badge key={v} isDark={isDark} badge={v} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 ">
                {bank.accounts.map((acc) => (
                  <div key={acc.account_id}>
                    {acc.balances.map((bal: any, i: any) => (
                      <p key={i} className={`text-3xl  leading-[1.5]
                    ${isDark ? "" : "text-neutral-800"}`} >
                        Balance: {bal.amount} {bal.currency}
                      </p>
                    ))}
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>
      </div >

    </>
  );
}

export default Home
