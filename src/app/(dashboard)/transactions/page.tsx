'use client'

import React, { useEffect, useMemo } from "react"
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
import { useRouter } from "next/navigation";
import { useStateGeneral } from "@/zustand/useStateGeneral";
import ChartMultiLine from "@/components/chartMultiLine";
import { useStateTransaction } from "@/zustand/useStateTransaction";
import { GetTransactionsForAccount_Core } from "@/services/Transaction/service";
import { FirehoseTransactions } from "@/types/Transaction/response";
import { GetUser_Current } from "@/services/User/service";
import { BankViewItem, GroupedBankAccount } from "@/types/type";

DataTable.use(DT);

(window as any).JSZip = JSZip;

const TransactionsPage: React.FC = () => {
    const router = useRouter()
    const { setActiveSection, bankViewItems, setBankViewItems,
        isDark, setIsDark, setLoading
    } = useStateGeneral()

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

    const getUser_Current = async () => {
        try {
            setLoading(true)
            const res = await GetUser_Current()
            const listView = res.data.views.list
            const listGroup = getUniqueAccounts(listView)
            setBankViewItems(listGroup)
            for (const item of listGroup) {
                await getTransactionsForAccount_Core(item.bank_id, item.account_id)
            }

        } catch (error: any) {

        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setActiveSection('transactions')
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

    return (
        <>
            <div className={`grid  gap-5 md:grid-cols-3`}>
                <div className={`md:col-span-2 md:col-start-1 md:row-start-1 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
                        ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                        : "bg-white/90"
                    }`}>
                    <label htmlFor="balanceChart" className="text-2xl">Your Balance Summary</label>
                    <ChartMultiLine
                        stepSize={100}
                        label={label}
                        dataDetail={[depositPoints, withdrawalPoints]}
                        border={["#05df72", "#016630"]}
                        background={[
                            "rgba(0, 248, 21, 0.2)",
                            "rgba(2, 77, 60, 0.2)",
                        ]}
                        donvi={""}
                        isDark={isDark} />
                </div>
                <div className="md:col-span-1 md:col-start-3 md:row-start-2 grid gap-5 md:max-h-[64.5vh] overflow-y-auto scroll-y">

                </div>
                <div className={`md:col-span-3 md:col-start-1 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
                            ${isDark
                        ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                        : "bg-white/90"
                    }`}>
                    <label htmlFor="balanceTransaction" className="text-2xl">Transaction history</label>
                    <div className="grid w-full">
                        <DataTable
                            id="my-datatable" className='m-2'
                            key={tableKey}
                            data={resTransactionAccountCore}
                            columns={columns}
                            options={{
                                ...options,
                                rowCallback: (row, data, index) => {
                                    row.style.cursor = "pointer";
                                    row.onclick = () => {
                                        const table = document.getElementById("my-datatable");
                                        table?.querySelectorAll("tr").forEach((tr) => {
                                            tr.style.border = ""; // reset border
                                        });

                                        // Thêm border cho row vừa click
                                        row.style.border = "2px dashed var(--color-green-500)"; // màu đỏ ví dụ
                                        row.style.borderRadius = "4px";
                                    };
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransactionsPage