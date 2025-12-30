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
import DoughnutChart from "@/components/ChartDoughNut";


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
              <CardBank position="md:min-h-[25vh] min-w-[450px] flex flex-col" isDark={isDark} bank={bank} totalBalance={totalBalance} currency={currency} onToggle={() => { }} />
            )
          })}
        </div>
        {[
          {
            total:
              <>
                {summary.totalDeposits.toLocaleString()}
                <span className="text-lg font-medium opacity-70">
                  EUR
                </span>
              </>,
            label: "Deposits",
            icon: <svg
              width={60}
              height={60}
              viewBox="0 0 60 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGradientDeposits" x1="1" y1="1" x2="0" y2="1">
                  <stop stopOpacity="1" stopColor="var(--color-green-400)" offset="0" />
                  <stop stopOpacity="1" stopColor="var(--color-green-800)" offset="1" />
                </linearGradient>
              </defs>
              <path
                d="M39.0469 2.3125C38.3437 3.76563 38.9648 5.52344 40.418 6.22657C44.4609 8.17188 47.8828 11.1953 50.3203 14.9805C52.8164 18.8594 54.1406 23.3594 54.1406 28C54.1406 41.3125 43.3125 52.1406 30 52.1406C16.6875 52.1406 5.85937 41.3125 5.85937 28C5.85937 23.3594 7.18359 18.8594 9.66797 14.9688C12.0937 11.1836 15.5273 8.16016 19.5703 6.21485C21.0234 5.51173 21.6445 3.76563 20.9414 2.30079C20.2383 0.847664 18.4922 0.226569 17.0273 0.929694C12 3.34376 7.74609 7.09375 4.73437 11.8047C1.64062 16.6328 -1.56336e-06 22.2344 -1.31134e-06 28C-9.60967e-07 36.0156 3.11719 43.5508 8.78906 49.2109C14.4492 54.8828 21.9844 58 30 58C38.0156 58 45.5508 54.8828 51.2109 49.2109C56.8828 43.5391 60 36.0156 60 28C60 22.2344 58.3594 16.6328 55.2539 11.8047C52.2305 7.10547 47.9766 3.34375 42.9609 0.929693C41.4961 0.238287 39.75 0.84766 39.0469 2.3125V2.3125Z"
                fill="url(#lineGradientDeposits)"
              />
              <path
                d="M41.4025 26.4414C41.9767 25.8671 42.258 25.1171 42.258 24.3671C42.258 23.6171 41.9767 22.8671 41.4025 22.2929L34.0314 14.9218C32.9533 13.8437 31.5236 13.2578 30.0119 13.2578C28.5002 13.2578 27.0587 13.8554 25.9923 14.9218L18.6212 22.2929C17.4728 23.4414 17.4728 25.2929 18.6212 26.4414C19.7697 27.5898 21.6212 27.5898 22.7697 26.4414L27.0939 22.1171L27.0939 38.7695C27.0939 40.3867 28.4064 41.6992 30.0236 41.6992C31.6408 41.6992 32.9533 40.3867 32.9533 38.7695L32.9533 22.1054L37.2775 26.4296C38.4025 27.5781 40.2541 27.5781 41.4025 26.4414Z"
                fill="url(#lineGradientDeposits)"
              />
            </svg>,
          },
          {
            total: <>
              {summary.totalWithdrawals.toLocaleString()}
              <span className="text-lg font-medium opacity-70">
                EUR
              </span></>,
            label: "Withdrawals",
            icon: <svg
              style={{ transform: "rotate(180deg)" }}
              width={60}
              height={60}
              viewBox="0 0 60 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGradientWithdrawals" x1="1" y1="1" x2="0" y2="1">
                  <stop stopOpacity="1" stopColor="var(--color-orange-400)" offset="0" />
                  <stop stopOpacity="1" stopColor="var(--color-orange-800)" offset="1" />
                </linearGradient>
              </defs>
              <path
                d="M39.0469 2.3125C38.3437 3.76563 38.9648 5.52344 40.418 6.22657C44.4609 8.17188 47.8828 11.1953 50.3203 14.9805C52.8164 18.8594 54.1406 23.3594 54.1406 28C54.1406 41.3125 43.3125 52.1406 30 52.1406C16.6875 52.1406 5.85937 41.3125 5.85937 28C5.85937 23.3594 7.18359 18.8594 9.66797 14.9688C12.0937 11.1836 15.5273 8.16016 19.5703 6.21485C21.0234 5.51173 21.6445 3.76563 20.9414 2.30079C20.2383 0.847664 18.4922 0.226569 17.0273 0.929694C12 3.34376 7.74609 7.09375 4.73437 11.8047C1.64062 16.6328 -1.56336e-06 22.2344 -1.31134e-06 28C-9.60967e-07 36.0156 3.11719 43.5508 8.78906 49.2109C14.4492 54.8828 21.9844 58 30 58C38.0156 58 45.5508 54.8828 51.2109 49.2109C56.8828 43.5391 60 36.0156 60 28C60 22.2344 58.3594 16.6328 55.2539 11.8047C52.2305 7.10547 47.9766 3.34375 42.9609 0.929693C41.4961 0.238287 39.75 0.84766 39.0469 2.3125V2.3125Z"
                fill="url(#lineGradientWithdrawals)"
              />
              <path
                d="M41.4025 26.4414C41.9767 25.8671 42.258 25.1171 42.258 24.3671C42.258 23.6171 41.9767 22.8671 41.4025 22.2929L34.0314 14.9218C32.9533 13.8437 31.5236 13.2578 30.0119 13.2578C28.5002 13.2578 27.0587 13.8554 25.9923 14.9218L18.6212 22.2929C17.4728 23.4414 17.4728 25.2929 18.6212 26.4414C19.7697 27.5898 21.6212 27.5898 22.7697 26.4414L27.0939 22.1171L27.0939 38.7695C27.0939 40.3867 28.4064 41.6992 30.0236 41.6992C31.6408 41.6992 32.9533 40.3867 32.9533 38.7695L32.9533 22.1054L37.2775 26.4296C38.4025 27.5781 40.2541 27.5781 41.4025 26.4414Z"
                fill="url(#lineGradientWithdrawals)"
              />
            </svg>,
          },
          {
            total: resTransactionAccountCore.length,
            label: "Transactions",
            icon: <svg
              width={120}
              height={60}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="apexcharts-svg"
              style={{ background: 'transparent' }}
            >
              <g className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                <defs>
                  <clipPath id="gridRectMask">
                    <rect
                      width="130"
                      height="66"
                      x="-5"
                      y="-3"
                      rx="0"
                      ry="0"
                      opacity="1"
                      strokeWidth="0"
                      stroke="none"
                      strokeDasharray="0"
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="gridRectMarkerMask">
                    <rect
                      width="124"
                      height="64"
                      x="-2"
                      y="-2"
                      rx="0"
                      ry="0"
                      opacity="1"
                      strokeWidth="0"
                      stroke="none"
                      strokeDasharray="0"
                      fill="#fff"
                    />
                  </clipPath>
                  <linearGradient id="lineGradientTransactions" x1="1" y1="1" x2="0" y2="1">
                    <stop stopOpacity="1" stopColor="var(--color-green-400)" offset="0" />
                    <stop stopOpacity="1" stopColor="var(--color-orange-800)" offset="1" />
                  </linearGradient>
                </defs>

                <g className="apexcharts-line-series apexcharts-plot-series">
                  <g className="apexcharts-series" >
                    <path
                      d="M 0 42C 10.5 42 19.5 55.2 30 55.2C 40.5 55.2 49.5 12 60 12C 70.5 12 79.5 42 90 42C 100.5 42 109.5 6.000000000000007 120 6.000000000000007"
                      fill="none"
                      fillOpacity="1"
                      stroke="url(#lineGradientTransactions)"
                      strokeOpacity="1"
                      strokeLinecap="butt"
                      strokeWidth={6}
                      strokeDasharray="0"
                      className="apexcharts-line"
                      clipPath="url(#gridRectMask)"
                    />
                    <g className="apexcharts-series-markers-wrap" />
                  </g>
                  <g className="apexcharts-datalabels" />
                </g>
                <line x1="0" y1="0" x2="120" y2="0" strokeDasharray="0" strokeWidth="0" className="apexcharts-ycrosshairs-hidden" />

                <g className="apexcharts-yaxis-annotations" />
                <g className="apexcharts-xaxis-annotations" />
                <g className="apexcharts-point-annotations" />
              </g>

              <g className="apexcharts-yaxis" transform="translate(-18, 0)" />
              <g className="apexcharts-annotations" />
            </svg>,
          },
        ].map(({ total, label, icon }) => {
          // const Icon = icon
          return (
            <CardTotal key={`${label}_${total}`} children={icon} isDark={isDark} label={label} total={total} />
          )
        })}
        <div className={`md:col-span-2 md:col-start-1 md:row-start-3 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}>
          <label htmlFor="balanceChart" className="text-2xl">Your Transaction Summary</label>
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
        <div className={`md:col-span-1 md:col-start-3 md:row-start-3 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
                            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"}`}>
          <label htmlFor="balanceChartDoughnut" className="text-2xl">Transaction rate</label>
          <DoughnutChart
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
          <div className={`md:col-span-3 md:col-start-1 md:row-start-4 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 
            ${isDark
              ? "bg-white/5 text-white border border-white/10 shadow-white/5"
              : "bg-white/90"
            }`}>
            <label htmlFor="branch" className="text-2xl">Your Branches</label>
            <GoogleMapComponent height="500px" data={resBranch} index={0} zoom={6} />
          </div >
        }
      </div>

    </>
  );
}

export default Home
