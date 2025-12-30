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
import { title } from "process"
import Badge from "@/components/Badge"
import Button from "@/components/button"
import { MdAdd } from "react-icons/md"
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

    const filterTransactionRequests_SEPA = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("SEPA")
        )
    }, [resTransactionRequest])

    const filterTransactionRequests_FREE_FORM = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("FREE_FORM")
        )
    }, [resTransactionRequest])

    const filterTransactionRequests_COUNTERPARTY = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("COUNTERPARTY")
        )
    }, [resTransactionRequest])

    const filterTransactionRequests_ACCOUNT_OTP = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("ACCOUNT_OTP")
        )
    }, [resTransactionRequest])

    const filterTransactionRequests_ACCOUNT = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("ACCOUNT")
        )
    }, [resTransactionRequest])

    const filterTransactionRequests_SIMPLE = useMemo(() => {
        if (!Array.isArray(resTransactionRequest)) return []
        return resTransactionRequest.filter(
            (item) => item.transaction_request_type.includes("SIMPLE")
        )
    }, [resTransactionRequest])

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

    return (
        <>
            <div className={`grid  gap-5 md:grid-cols-7`}>
                {[
                    { total: filterTransactionRequests_SANDBOX_TAN.length, label: "SANDBOX_TAN", icon: <></> },
                    { total: filterTransactionRequests_SEPA.length, label: "SEPA", icon: <></> },
                    { total: filterTransactionRequests_FREE_FORM.length, label: "FREE_FORM", icon: <></> },
                    { total: filterTransactionRequests_COUNTERPARTY.length, label: "COUNTERPARTY", icon: <></> },
                    { total: filterTransactionRequests_ACCOUNT_OTP.length, label: "ACCOUNT_OTP", icon: <></> },
                    { total: filterTransactionRequests_ACCOUNT.length, label: "ACCOUNT", icon: <></> },
                    { total: filterTransactionRequests_SIMPLE.length, label: "SIMPLE", icon: <></> }
                ].map(({ total, label, icon }) => {
                    return (
                        <CardTotal key={`${label}_${total}`} children={icon} isDark={isDark} label={label} total={total} />
                    )
                })}
                <div className={`md:col-span-7 md:col-start-1 md:row-start-2 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
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