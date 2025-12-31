'use client'

import CardTotal from "@/components/CartTotal";
import { GetAccountBalancesbyBANK_ID } from "@/services/Account/service";
import { GetBank } from "@/services/Bank/service";
import { GetCustomersForCurrentUser } from "@/services/Customer/service";
import { GetTransactionsForAccount_Core } from "@/services/Transaction/service";
import { GetUser_Current } from "@/services/User/service";
import { BankViewItem, GroupedBankAccount } from "@/types/type";
import { useStateAccount } from "@/zustand/useStateAccount";
import { useStateBank } from "@/zustand/useStateBank";
import { useStateCustomer } from "@/zustand/useStateCustomer";
import { useStateGeneral } from "@/zustand/useStateGeneral";
import { useStateTransaction } from "@/zustand/useStateTransaction";
import { useStateUser } from "@/zustand/useStateUser";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import CardBank from "@/components/CardBank";
import ChartMultiLine from "@/components/chartMultiLine";
import { ResAccountBalancesbyBANK_ID } from "@/types/Account/response";
import { FirehoseTransactions } from "@/types/Transaction/response";
import { ResCustomerBy } from "@/types/Customer/response";
import GoogleMapComponent from "@/components/GoogleMapComponent ";
import { useStateBranch } from "@/zustand/useStateBranches";
import { GetBranchesforaBank } from "@/services/Branch/service";
import { ResBranch } from "@/types/Branch/response";
import ChartDoughnut from "@/components/ChartDoughNut";


const Home: React.FC = () => {
  const router = useRouter()
  const { setActiveSection, bankViewItems, setBankViewItems,
    isDark, setIsDark, setLoading
  } = useStateGeneral()

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
      setResAccountBlancesByBankID(prev => {
        // Tránh nối trùng dữ liệu
        const newItems = res.data.accounts.filter(
          (item: ResAccountBalancesbyBANK_ID) => !prev.some(p => p.bank_id === item.bank_id) // check theo id hoặc unique field
        );
        return [...prev, ...newItems];
      });
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

      setResBank(prev => {
        if (prev.some(item => item.id === res.data.id)) {
          return prev;
        }
        return [...prev, res.data];
      });
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  const { resTransactionAccountCore, setResTransactionAccountCore } = useStateTransaction()
  const getTransactionsForAccount_Core = async (bank_id: string, account_id: string) => {
    try {
      setLoading(true)
      const res = await GetTransactionsForAccount_Core(bank_id, account_id)
      setResTransactionAccountCore(prev => {
        const newItems = res.data.transactions.filter(
          (item: FirehoseTransactions) => !prev.some(p => p.id === item.id)
        );
        return [...prev, ...newItems];
      });
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  const { resCustomerForCurrentUser, setResCustomerForCurrentUser } = useStateCustomer()

  const getCustomersForCurrentUser = async () => {
    try {
      setLoading(true)
      const res = await GetCustomersForCurrentUser()
      setResCustomerForCurrentUser(prev => {
        const newItems = res.data.transactions.filter(
          (item: ResCustomerBy) => !prev.some(p => p.customer_id === item.customer_id)
        );
        return [...prev, ...newItems];
      });
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  const bankMap = useMemo(() => {
    const balanceMap = new Map<string, ResAccountBalancesbyBANK_ID[]>()
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

  const summary = resTransactionAccountCore.reduce((acc, transaction) => {
    const amount = parseFloat(transaction.details.value.amount);

    if (amount > 0) {
      acc.totalDeposits += amount; //tien vao
    } else if (amount < 0) {
      acc.totalWithdrawals += Math.abs(amount); //tien ra
    }

    return acc;
  }, { totalDeposits: 0, totalWithdrawals: 0 });

  const { resBranch, setResBranch } = useStateBranch()

  const getBranchesForABank = async (bank_id: string) => {
    try {
      setLoading(true)
      const res = await GetBranchesforaBank(bank_id)
      setResBranch(prev => {
        const newItem = res.data.branches.filter(
          (item: ResBranch) => !prev.some(p => p.id === item.id)
        )
        return [...prev, ...newItem]
      })
    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  const getUser_Current = async () => {
    try {
      setLoading(true)
      const res = await GetUser_Current()
      setResGetUserCurrent(res.data)
      const listView = res.data.views.list
      const listGroup = getUniqueAccounts(listView)
      console.log(listGroup)
      setBankViewItems(listGroup)
      for (const item of listGroup) {
        await getAccountBalancesByBankID(item.bank_id)
        await getBank(item.bank_id)
        await getTransactionsForAccount_Core(item.bank_id, item.account_id)
        await getBranchesForABank(item.bank_id)
      }

    } catch (error: any) {

    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setActiveSection('overview')
    getCustomersForCurrentUser()
    getUser_Current()
  }, [])

  const filterSortTransactionAccountCore = useMemo(() => {
    if (!Array.isArray(resTransactionAccountCore)) return [];
    return [...resTransactionAccountCore].sort(
      (a, b) =>
        new Date(a.details.completed).getTime() -
        new Date(b.details.completed).getTime()
    )
  }, [resTransactionAccountCore])

  const filterTransactionAccountCoreDeposits = useMemo(() => {
    if (!Array.isArray(filterSortTransactionAccountCore)) return [];
    return filterSortTransactionAccountCore.filter(
      (item) => Number(item.details.value.amount) > 0
    )
  }, [filterSortTransactionAccountCore])

  const filterTransactionAccountCoreWithdrawals = useMemo(() => {
    if (!Array.isArray(filterSortTransactionAccountCore)) return [];
    return filterSortTransactionAccountCore.filter(
      (item) => Number(item.details.value.amount) < 0
    )
  }, [filterSortTransactionAccountCore])

  const depositPoints = useMemo(() => {
    return filterTransactionAccountCoreDeposits.map(h => ({
      x: h.details.completed,
      y: Number(h.details.value.amount) ?? 0,
    }));
  }, [filterTransactionAccountCoreDeposits]);

  const withdrawalPoints = useMemo(() => {
    return filterTransactionAccountCoreWithdrawals.map(h => ({
      x: h.details.completed,
      y: Math.abs(Number(h.details.value.amount)) ?? 0,
    }));
  }, [filterTransactionAccountCoreWithdrawals]);

  const label = ["Deposits", "Withdrawals"]

  return (
    <>
      <div className={`grid  gap-5 ${resCustomerForCurrentUser.length > 0 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
        <div className={`md:col-span-3 md:col-start-1 md:row-start-1  
          ${bankMap.length === 1
            ? "grid-cols-1 grid"
            : bankMap.length === 2
              ? "grid-cols-2 grid"
              : bankMap.length === 3
                ? "grid-cols-3 grid"
                : "flex"} 
            gap-5 md:max-h-[64.5vh] overflow-x-auto scroll-x`}>
          {bankMap.map((bank) => {
            const totalBalance = bank.accounts
              .flatMap(acc => acc.balances)
              .reduce((sum, b) => sum + Number(b.amount || 0), 0)
            const currency = bank.accounts?.[0]?.balances?.[0]?.currency ?? ""

            return (
              <CardBank position=" min-w-[450px] flex flex-col" isDark={isDark} bank={bank} totalBalance={totalBalance} currency={currency} onToggle={() => { }} />
            )
          })}
        </div>

        <div className={`md:col-span-2 md:col-start-1 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}>
          <div className="flex justify-between items-center">
            <label htmlFor="balanceChart" className="text-2xl">Your Transaction Summary</label>
            <button>Filter</button>
          </div>
          <ChartMultiLine
            stepSize={100}
            label={label}
            dataDetail={[depositPoints, withdrawalPoints]}
            border={["#05df72", "#ff8904"]}
            background={[
              "rgba(0, 248, 21, 0.2)",
              "rgba(204, 146, 39, 0.2)",
            ]}
            donvi={""}
            isDark={isDark} />
        </div>
        <div className={`md:col-span-1 md:col-start-3 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
                            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"}`}>
          <div className="flex justify-between items-center">
            <label htmlFor="balanceChartDoughnut" className="text-2xl">Transaction rate ({resTransactionAccountCore.length} transaction)</label>
            <button>Filter</button>
          </div>
          <ChartDoughnut
            isDark={isDark}
            labels={["Deposits", "Withdrawals"]}
            backgroundColor={["#05df72", "#ff8904"]}
            data={[summary.totalDeposits, summary.totalWithdrawals]}
            cutout="80%"
            value={summary.totalDeposits + summary.totalWithdrawals}
            donvi="EUR"
          />
        </div>
        {resBranch.length > 0 &&
          <div className={`md:col-span-3 md:col-start-1 md:row-start-3 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 
            ${isDark
              ? "bg-white/5 text-white border border-white/10 shadow-white/5"
              : "bg-white/90"
            }`}>
            <div className="flex justify-between items-center">
              <label htmlFor="branch" className="text-2xl">Your Branches</label>
              <button>Filter</button>
            </div>
            <GoogleMapComponent height="500px" data={resBranch} index={0} zoom={6} />
          </div >
        }
      </div>

    </>
  );
}

export default Home
