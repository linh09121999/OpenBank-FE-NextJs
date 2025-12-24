
'use client'

import CardBank from "@/components/CardBank";
import CardTotal from "@/components/CartTotal";
import { GetAccountBalancesbyBANK_ID } from "@/services/Account/service";
import { GetBank } from "@/services/Bank/service";
import { GetMyConsents, GetMyConsentsInfo } from "@/services/Consent/service";
import { GetConsumers_LoggedInUser } from "@/services/Consumer/service";
import { GetCustomersForCurrentUser } from "@/services/Customer/service";
import { GetUser_Current } from "@/services/User/service";
import { BankViewItem, GroupedBankAccount } from "@/types/type";
import { useStateAccount } from "@/zustand/useStateAccount";
import { useStateBank } from "@/zustand/useStateBank";
import { useStateGeneral } from "@/zustand/useStateGeneral";
import { useStateUser } from "@/zustand/useStateUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BsJournalCheck } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiBankLine, RiCustomerService2Line } from "react-icons/ri";
import { motion, AnimatePresence } from "motion/react";
import { Tab, Tabs } from "@mui/material";
import { useStateConsent } from "@/zustand/useStateConsent";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';

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
  const { resMyConsentInfo, setResMyConsentInfo } = useStateConsent()

  const getMyConsentsInfo = async () => {
    try {
      setLoading(true)
      const res = await GetMyConsentsInfo()
      setTotal(prev => ({
        ...prev,
        consents: res.data.consents.length
      }))
      setResMyConsentInfo(res.data.consents)
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
    getMyConsentsInfo()
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

  // const totalAllBanksBalance = useMemo(() =>
  //   bankMap.reduce(
  //     (sum, bank) =>
  //       sum +
  //       bank.accounts.reduce(
  //         (aSum, acc) =>
  //           aSum +
  //           acc.balances.reduce(
  //             (bSum: any, bal: any) => bSum + Number(bal.amount),
  //             0
  //           ),
  //         0
  //       ),
  //     0
  //   ),
  //   [bankMap]
  // )

  const [tabTable, setTabTable] = useState<string>('consent')
  const handleTabTable = (e: React.SyntheticEvent, newValue: string) => {
    setTabTable(newValue)
  }
  const [selectedRowConsent, setSelectedRowConsent] = useState<string | null>(null);


  return (
    <>
      <div className="grid md:grid-cols-4 gap-5">
        {[
          { total: bankViewItems.length, label: "Total Banks", icon: RiBankLine, bg: "var(--color-blue-500)" },
          // { total: totalAllBanksBalance, label: "Total Balances", icon: PiPiggyBankBold, bg: "#8b5cf6" },
          { total: total.consents, label: "Total Consent", icon: BsJournalCheck, bg: "var(--color-violet-500)" },
          { total: total.cunsumers, label: "Total Cunsumers", icon: MdOutlineShoppingCart, bg: "var(--color-green-500)" },
          { total: total.customers, label: "Total Customers", icon: RiCustomerService2Line, bg: "var(--color-yellow-500)" }
        ].map(({ total, label, icon, bg }) => {
          const Icon = icon
          return (
            <CardTotal key={`${label}_${total}`} Icon={Icon} isDark={isDark} label={label} total={total} bgCard={bg} />
          )
        })}
        {/* bieu do  */}
        <div className={`md:col-span-3 md:col-start-1 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex justify-between gap-5
            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}></div>

        <div className={`md:col-span-1 md:col-start-4 md:row-start-2 grid gap-5 md:max-h-[52.5vh] overflow-y-auto scroll-y`}>
          {bankMap.map((bank) => {
            const totalBalance = bank.accounts
              .flatMap(acc => acc.balances)
              .reduce((sum, b) => sum + Number(b.amount || 0), 0)

            const currency = bank.accounts?.[0]?.balances?.[0]?.currency ?? ""

            return (
              <CardBank isDark={isDark} bank={bank} totalBalance={totalBalance} currency={currency} />
            )
          })}

        </div>
        <div className={`md:col-span-4 md:col-start-1 p-5 rounded-3xl shadow-lg backdrop-blur-xl gap-5
            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}>

        </div>
        <div className={`md:col-span-4 md:col-start-1 p-5 rounded-3xl shadow-lg backdrop-blur-xl gap-5
            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}>
          <Tabs
            value={tabTable}
            onChange={handleTabTable}
            sx={{
              "& .MuiTab-textColorPrimary": {
                color: isDark ? "var(--color-gray-400) !important" : "var(--color-gray-600) !important",
              },
              ".Mui-selected": {
                color: isDark ? "var(--color-green-400) !important" : "var(--color-green-600) !important",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: isDark ? "var(--color-green-400) !important" : "var(--color-green-600) !important",
              }
            }}
          >
            {[
              { tabId: "consent", label: "Consents" },
              { tabId: "cunsumer", label: "Consumers" },
              { tabId: "cusstomer", label: "Customers" }
            ].map(({ tabId, label }) => (
              <Tab value={tabId} label={label} />
            ))}
          </Tabs>
          {tabTable === "consent" &&
            <>
              {resMyConsentInfo.length > 0
                ? <div className="grid pt-5">
                  <div className="w-full overflow-x-auto scroll-x">
                    <CTable bordered hover align="middle" responsive className="w-full  " style={{ tableLayout: 'fixed' }}>
                      <CTableHead color="light">
                        <CTableRow>
                          <CTableHeaderCell className="text-center p-3 ">Consent Id</CTableHeaderCell>
                          <CTableHeaderCell className="text-center p-3 ">Consumer Id</CTableHeaderCell>
                          <CTableHeaderCell className="text-center p-3 ">Date</CTableHeaderCell>
                          <CTableHeaderCell className="text-center p-3 ">Status</CTableHeaderCell>
                          <CTableHeaderCell className="text-center p-3 ">Api Standard</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {resMyConsentInfo.slice(0, 5).map((data) => (
                          <CTableRow className="table-body-row-mucluc" key={data.consent_id}
                            onClick={() => {
                              setSelectedRowConsent(data.consent_id);
                            }} onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault(); // Ngăn xuống dòng nếu cần
                                setSelectedRowConsent(null); // Thoát khỏi select
                              }
                            }}
                            style={{
                              border: data.consent_id === selectedRowConsent
                                ? isDark
                                  ? '2px dashed var(--color-green-400)'
                                  : '2px dashed var(--color-green-600)'
                                : '',
                              cursor: 'pointer'
                            }}
                          >
                            <CTableDataCell className='text-center p-3 '>{data.consent_id}</CTableDataCell>
                            <CTableDataCell className='text-center p-3 '>{data.consumer_id}</CTableDataCell>
                            <CTableDataCell className='text-center p-3'>{data.last_usage_date}</CTableDataCell>
                            <CTableDataCell className='text-center p-3 '>{data.status}</CTableDataCell>
                            <CTableDataCell className='text-center p-3 '>{data.api_standard}</CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </div>
                </div>
                : <></>
              }
            </>
          }
          {tabTable === "cunsumer" &&
            <></>
          }
          {tabTable === "cusstomer" &&
            <></>
          }
        </div>
      </div >
    </>
  );
}

export default Home
