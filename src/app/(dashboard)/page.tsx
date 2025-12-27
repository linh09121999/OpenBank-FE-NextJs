
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
import { BsJournalCheck } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";

import { format, parse } from 'date-fns'
import { vi, enUS } from 'date-fns/locale'
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-buttons';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.html5';

import JSZip from 'jszip';
import CardBank from "@/components/CardBank";
import { CircularProgress } from "@mui/material";
import ChartMultiLine from "@/components/chartMultiLine";

DataTable.use(DT);

// ⚠️ BẮT BUỘC cho Excel
(window as any).JSZip = JSZip;

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

  const { resTransactionAccountCore, setResTransactionAccountCore } = useStateTransaction()
  const getTransactionsForAccount_Core = async (bank_id: string, account_id: string) => {
    try {
      setLoading(true)
      const res = await GetTransactionsForAccount_Core(bank_id, account_id)
      setResTransactionAccountCore((prev) => [...prev, ...res.data.transactions])
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
        await getTransactionsForAccount_Core(item.bank_id, item.account_id)
      }

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
      setResCustomerForCurrentUser((prev) => [...prev, ...res.data.customers])
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

  const columns = [
    {
      title: 'STT',
      data: null,
      render: function (data: any, type: any, row: any, meta: any) {
        return meta.row + 1;
      },
      className: 'text-center',
      orderable: false,
    },
    {
      title: 'Bank',
      data: 'this_account.bank_routing.address',
      defaultContent: ''
    },
    {
      title: 'Description',
      data: 'details.description',
      defaultContent: ''
    },
    {
      title: 'Completed',
      data: 'details.completed',
      render: function (value: any) {
        return `${format(new Date(value), 'MM/dd/yyyy HH:mm:ss', { locale: enUS })}`
      }
    },
    {
      title: 'Type',
      data: 'details.type',
      defaultContent: ''
    },
    {
      title: 'Value ',
      data: 'details.value',
      render: function (value: any) {
        if (!value) return '$0.00';

        const amount = parseFloat(value.amount || 0).toFixed(2);
        const currency = value.currency || 'USD';

        return `${amount} ${currency}`;
      },
      className: 'text-right'
    },
    {
      title: 'New balance',
      data: 'details.new_balance',
      render: function (value: any) {
        if (!value) return '$0.00';

        const amount = parseFloat(value.amount || 0).toFixed(2);
        const currency = value.currency || 'USD';

        return `${amount} ${currency}`;
      },
      className: 'text-right'
    },
  ];

  const options = {
    paging: true,
    searching: true,
    info: true,
    destroy: true,
    ordering: true,
    autoWidth: false,
    pageLength: 10,
    responsive: true,
    lengthMenu: [10, 25, 50, 100],
    deferRender: true,
    processing: true,
    language: {
      search: "",
      searchPlaceholder: 'Search...',
      lengthMenu: 'Show _MENU_ entries',
    },
    dom: "<'grid grid-cols-1 md:grid-cols-2 p-2 items-center w-full gap-2'<'flex items-center'l><'flex justify-end gap-3 items-center'fB>>" +
      "<'w-full'tr>" +
      "<'grid grid-cols-1 md:grid-cols-2 p-2 items-center w-full gap-2'<'flex items-center'i><'flex items-center justify-end'p>>",
    buttons: [
      {
        extend: "excelHtml5",
        text: "Excel",
        className: "rounded-xl ",
        autoFilter: true,
        sheetName: 'Exported data',
        filename: 'export_' + new Date().toISOString().split('T')[0],
      }
    ]
  };

  const tableKey = useMemo(() => {
    return JSON.stringify({
      columns, options
    });
  }, [columns, options]);

  const summary = resTransactionAccountCore.reduce((acc, transaction) => {
    const amount = parseFloat(transaction.details.value.amount);

    if (amount > 0) {
      acc.totalDeposits += amount; //tien vao
    } else if (amount < 0) {
      acc.totalWithdrawals += Math.abs(amount); //tien ra
    }

    return acc;
  }, { totalDeposits: 0, totalWithdrawals: 0 });


  useEffect(() => {
    getCustomersForCurrentUser()
    getUser_Current()
  }, [])

  const [selectDetailDay, setSelectDetailDay] = useState<number>(0)
  const currentHour = new Date().getHours();

  const isBorderDash = selectDetailDay === 0 ? currentHour : 0

  const label = ["Deposits", "Withdrawals"]

  const times = resTransactionAccountCore.map(
    (t) => {
      const time = format(new Date(t.details.completed), 'MM/dd/yyyy HH:mm:ss', { locale: enUS })
      return time
    }
  )

  const dataDetail = [
    resTransactionAccountCore.map(
      (h) => Number(h.details.value.amount) ?? 0
    ) ?? [],
    resTransactionAccountCore.map(
      (h) => Number(h.details.value.amount) ?? 0
    ) ?? [],
  ]

  return (
    <>
      <div className={`grid  gap-5 ${resCustomerForCurrentUser.length > 0 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
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
                <linearGradient id="lineGradient" x1="1" y1="1" x2="0" y2="1">
                  <stop stopOpacity="1" stopColor="var(--color-green-400)" offset="0" />
                  <stop stopOpacity="1" stopColor="var(--color-green-800)" offset="1" />
                </linearGradient>
              </defs>
              <path
                d="M39.0469 2.3125C38.3437 3.76563 38.9648 5.52344 40.418 6.22657C44.4609 8.17188 47.8828 11.1953 50.3203 14.9805C52.8164 18.8594 54.1406 23.3594 54.1406 28C54.1406 41.3125 43.3125 52.1406 30 52.1406C16.6875 52.1406 5.85937 41.3125 5.85937 28C5.85937 23.3594 7.18359 18.8594 9.66797 14.9688C12.0937 11.1836 15.5273 8.16016 19.5703 6.21485C21.0234 5.51173 21.6445 3.76563 20.9414 2.30079C20.2383 0.847664 18.4922 0.226569 17.0273 0.929694C12 3.34376 7.74609 7.09375 4.73437 11.8047C1.64062 16.6328 -1.56336e-06 22.2344 -1.31134e-06 28C-9.60967e-07 36.0156 3.11719 43.5508 8.78906 49.2109C14.4492 54.8828 21.9844 58 30 58C38.0156 58 45.5508 54.8828 51.2109 49.2109C56.8828 43.5391 60 36.0156 60 28C60 22.2344 58.3594 16.6328 55.2539 11.8047C52.2305 7.10547 47.9766 3.34375 42.9609 0.929693C41.4961 0.238287 39.75 0.84766 39.0469 2.3125V2.3125Z"
                fill="url(#lineGradient)"
              />
              <path
                d="M41.4025 26.4414C41.9767 25.8671 42.258 25.1171 42.258 24.3671C42.258 23.6171 41.9767 22.8671 41.4025 22.2929L34.0314 14.9218C32.9533 13.8437 31.5236 13.2578 30.0119 13.2578C28.5002 13.2578 27.0587 13.8554 25.9923 14.9218L18.6212 22.2929C17.4728 23.4414 17.4728 25.2929 18.6212 26.4414C19.7697 27.5898 21.6212 27.5898 22.7697 26.4414L27.0939 22.1171L27.0939 38.7695C27.0939 40.3867 28.4064 41.6992 30.0236 41.6992C31.6408 41.6992 32.9533 40.3867 32.9533 38.7695L32.9533 22.1054L37.2775 26.4296C38.4025 27.5781 40.2541 27.5781 41.4025 26.4414Z"
                fill="url(#lineGradient)"
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
            icon: <></>,
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
                  <linearGradient id="lineGradient" x1="1" y1="1" x2="0" y2="1">
                    <stop stopOpacity="1" stopColor="var(--color-green-400)" offset="0" />
                    <stop stopOpacity="1" stopColor="var(--color-green-800)" offset="1" />
                  </linearGradient>
                </defs>

                <g className="apexcharts-line-series apexcharts-plot-series">
                  <g className="apexcharts-series" >
                    <path
                      d="M 0 42C 10.5 42 19.5 55.2 30 55.2C 40.5 55.2 49.5 12 60 12C 70.5 12 79.5 42 90 42C 100.5 42 109.5 6.000000000000007 120 6.000000000000007"
                      fill="none"
                      fillOpacity="1"
                      stroke="url(#lineGradient)"
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
        <div className={`md:col-span-2 md:col-start-1 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}>
          <label htmlFor="balanceChart" className="text-2xl">Your Balance Summary</label>
          <ChartMultiLine
            stepSize={0.5}
            label={label}
            times={times}
            dataDetail={dataDetail}
            border={["red", "blue"]}
            background={[
              "rgba(255,0,0,0.2)",
              "rgba(0,0,255,0.2)",
            ]}
            donvi={""}
            isDark={isDark} />
        </div>
        <div className="md:col-span-1 md:col-start-3 md:row-start-2 grid gap-5 md:max-h-[52.5vh] overflow-y-auto scroll-y">
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
        <div className={`md:col-span-3 md:col-start-1 md:row-start-3 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex justify-between gap-5
            ${isDark
            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
            : "bg-white/90"
          }`}>
          <div className="grid pt-5 w-full">
            <DataTable
              id="my-datatable" className='m-2'
              key={tableKey}
              data={resTransactionAccountCore}
              columns={columns}
              options={options}
            />
          </div>
        </div>
      </div >
    </>
  );
}

export default Home
