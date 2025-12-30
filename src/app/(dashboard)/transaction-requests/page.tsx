'use client'

import CardTotal from "@/components/CartTotal"
import { GetTransactionRequests } from "@/services/Transaction-Request/service"
import { GetUser_Current } from "@/services/User/service"
import { ResTransactionRequest } from "@/types/Transaction-Request/response"
import { BankViewItem, GroupedBankAccount } from "@/types/type"
import { useStateGeneral } from "@/zustand/useStateGeneral"
import { useStateTransactionRequest } from "@/zustand/useStateTransactionRequests"
import { useRouter } from "next/navigation"
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
import Badge from "@/components/Badge"
import Button from "@/components/button"
import { MdAdd } from "react-icons/md"
import ChartDoughnut from "@/components/ChartDoughNut"
DataTable.use(DT);

(window as any).JSZip = JSZip;

const TransactionRequestsPage: React.FC = () => {
    const router = useRouter()
    const { setActiveSection, bankViewItems, setBankViewItems,
        isDark, setIsDark, setLoading
    } = useStateGeneral()

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

    const { resTransactionRequest, setResTransactionRequest } = useStateTransactionRequest()

    const getTransactionRequests = async (bank_id: string, account_id: string) => {
        try {
            setLoading(true)
            const res = await GetTransactionRequests(bank_id, account_id, 'owner')
            setResTransactionRequest(prev => {
                const newItem = res.data.transaction_requests.filter(
                    (items: ResTransactionRequest) => !prev.some(p => p.transaction_request_id === items.transaction_request_id)
                )
                return [...prev, ...newItem]
            })
        } catch (error: any) {

        } finally {
            setLoading(false)
        }
    }

    const getUser_Current = async () => {
        try {
            setLoading(true)
            const res = await GetUser_Current()
            const listView = res.data.views.list
            const listGroup = getUniqueAccounts(listView)
            for (const item of listGroup) {
                await getTransactionRequests(item.bank_id, item.account_id)
            }

        } catch (error: any) {

        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setActiveSection('transaction-requests')
        getUser_Current()
    }, [])

    const filterTransactionRequests_SANDBOX_TAN = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("SANDBOX_TAN")
        )
    }, [resTransactionRequest])

    const summary_SANDBOX_TAN = {
        total: filterTransactionRequests_SANDBOX_TAN.reduce(
            (sum, t) => sum + Number(t.details.value.amount || 0),
            0
        ),
    };

    const filterTransactionRequests_SEPA = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("SEPA")
        )
    }, [resTransactionRequest])

    const summary_SEPA = {
        total: filterTransactionRequests_SEPA.reduce(
            (sum, t) => sum + Number(t.details.value.amount || 0),
            0
        )
    }

    const filterTransactionRequests_FREE_FORM = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("FREE_FORM")
        )
    }, [resTransactionRequest])

    const summary_FREE_FORM = {
        total: filterTransactionRequests_FREE_FORM.reduce(
            (sum, t) => sum + Number(t.details.value.amount || 0), 0
        )
    }

    const filterTransactionRequests_COUNTERPARTY = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("COUNTERPARTY")
        )
    }, [resTransactionRequest])

    const summary_COUNTERPARTY = {
        total: filterTransactionRequests_COUNTERPARTY.reduce(
            (sum, t) => sum + Number(t.details.value.amount || 0), 0
        )
    }

    const filterTransactionRequests_ACCOUNT_OTP = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("ACCOUNT_OTP")
        )
    }, [resTransactionRequest])

    const summary_ACCOUNT_OTP = {
        total: filterTransactionRequests_ACCOUNT_OTP.reduce(
            (sum, t) => sum + Number(t.details.value.amount || 0), 0
        )
    }

    const filterTransactionRequests_ACCOUNT = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("ACCOUNT")
        )
    }, [resTransactionRequest])

    const summary_ACCOUNT = {
        total: filterTransactionRequests_ACCOUNT.reduce(
            (sum, t) => sum + Number(t.details.value.amount || 0), 0
        )
    }

    const filterTransactionRequests_SIMPLE = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("SIMPLE")
        )
    }, [resTransactionRequest])

    const summary_SIMPLE = {
        total: filterTransactionRequests_SIMPLE.reduce(
            (sum, t) => sum + Number(t.details.value.amount || 0), 0
        )
    }

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
            title: 'From (Bank)',
            data: 'from.bank_id',
            defaultContent: ''
        },
        {
            title: 'Type',
            data: null,
            render: function (data: any) {
                return data.transaction_request_type
            },
            defaultContent: ''
        },
        {
            title: 'Description',
            data: 'details.description',
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
            title: 'Status',
            data: null,
            render: function (data: any) {
                return data.status
            },
        },
        {
            title: 'Start date',
            data: 'start_date',
            render: function (value: any) {
                return `${format(new Date(value), 'MM/dd/yyyy HH:mm:ss', { locale: enUS })}`
            }
        },
        {
            title: 'End date',
            data: 'end_date',
            render: function (value: any) {
                return `${format(new Date(value), 'MM/dd/yyyy HH:mm:ss', { locale: enUS })}`
            }
        },
        {
            title: 'Charge',
            data: 'charge.value',
            render: function (value: any) {
                if (!value) return '$0.00';

                const amount = parseFloat(value.amount || 0).toFixed(2);
                const currency = value.currency || 'USD';

                return `${amount} ${currency}`;
            },
        },
    ]

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

    const valueDoughnutCenter =
        summary_SANDBOX_TAN.total +
        summary_SEPA.total +
        summary_FREE_FORM.total +
        summary_COUNTERPARTY.total +
        summary_ACCOUNT_OTP.total +
        summary_ACCOUNT.total +
        summary_SIMPLE.total

    return (
        <>
            <div className={`grid  gap-5 md:grid-cols-7`}>
                <div className="md:col-span-7 md:row-start-1 flex gap-5 overflow-x-auto scroll-x pb-1">
                    {[
                        {
                            total:
                                <>
                                    {summary_SANDBOX_TAN.total.toLocaleString()}
                                    <span className="text-lg font-medium opacity-70">
                                        EUR
                                    </span>
                                </>
                            , label: "SANDBOX_TAN", icon: <></>
                        },
                        {
                            total:
                                <>
                                    {summary_SEPA.total.toLocaleString()}
                                    <span className="text-lg font-medium opacity-70">
                                        EUR
                                    </span>
                                </>
                            , label: "SEPA", icon: <></>
                        },
                        {
                            total:
                                <>
                                    {summary_FREE_FORM.total.toLocaleString()}
                                    <span className="text-lg font-medium opacity-70">
                                        EUR
                                    </span>
                                </>, label: "FREE_FORM", icon: <></>
                        },
                        {
                            total:
                                <>
                                    {summary_COUNTERPARTY.total.toLocaleString()}
                                    <span className="text-lg font-medium opacity-70">
                                        EUR
                                    </span>
                                </>
                            , label: "COUNTERPARTY", icon: <></>
                        },
                        {
                            total:
                                <>
                                    {summary_ACCOUNT_OTP.total.toLocaleString()}
                                    <span className="text-lg font-medium opacity-70">
                                        EUR
                                    </span>
                                </>
                            , label: "ACCOUNT_OTP", icon: <></>
                        },
                        {
                            total:
                                <>
                                    {summary_ACCOUNT.total.toLocaleString()}
                                    <span className="text-lg font-medium opacity-70">
                                        EUR
                                    </span>
                                </>
                            , label: "ACCOUNT", icon: <></>
                        },
                        {
                            total:
                                <>
                                    {summary_SIMPLE.total.toLocaleString()}
                                    <span className="text-lg font-medium opacity-70">
                                        EUR
                                    </span>
                                </>
                            , label: "SIMPLE", icon: <></>
                        }
                    ].map(({ total, label, icon }) => {
                        return (
                            <CardTotal key={`${label}_${total}`} children={icon} isDark={isDark} label={label} total={total} />
                        )
                    })}
                </div>
                <div className={`md:col-span-2 md:col-start-1 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
                        ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                        : "bg-white/90"
                    }`}>
                    <div className="flex justify-between items-center">
                        <label htmlFor="transactionRequestChartDoughnut" className="text-2xl">Transaction request Rate</label>
                        <button>Filter</button>
                    </div>
                    <ChartDoughnut
                        donvi="EUR"
                        isDark={isDark}
                        labels={["SANDBOX_TAN", "SEPA", "FREE_FORM", "COUNTERPARTY", "ACCOUNT_OTP", "ACCOUNT", "SIMPLE"]}
                        data={[
                            summary_SANDBOX_TAN.total,
                            summary_SEPA.total,
                            summary_FREE_FORM.total,
                            summary_COUNTERPARTY.total,
                            summary_ACCOUNT_OTP.total,
                            summary_ACCOUNT.total,
                            summary_SIMPLE.total
                        ]}
                        backgroundColor={["#05df72", "#00BFFF", "#4B0082", "#8A2BE2", "#FF0000", "#FFA500", "#FFFF00"]}
                        value={valueDoughnutCenter}
                        cutout="80%"
                    />
                </div>
                <div className={`md:col-span-5 md:col-start-3 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
                        ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                        : "bg-white/90"
                    }`}>
                    <div className="flex justify-between items-center">
                        <label htmlFor="transactionRequestChartDoughnut" className="text-2xl"></label>
                        <button>Filter</button>
                    </div>
                </div>
                <div className={`md:col-span-7 md:col-start-1 md:row-start-3 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
                        ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                        : "bg-white/90"
                    }`}>
                    <div className="flex justify-between items-center">
                        <label htmlFor="transactionRequest" className="text-2xl">Transaction request</label>
                        <div className="flex gap-5">
                            <Button onToggle={() => { }} padding="py-2 px-3" radius="rounded-xl" display="flex gap-1 items-center" fontSize="text-md">
                                <MdAdd />
                                Add
                            </Button>
                            <button>Filter</button>
                        </div>
                    </div>
                    <div className="grid w-full">
                        <DataTable
                            id="my-datatable" className='m-2'
                            key={tableKey}
                            data={resTransactionRequest}
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

export default TransactionRequestsPage