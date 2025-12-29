'use client'

import React, { useEffect, useMemo, useState } from "react"

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
import { GetUser_Current } from "@/services/User/service";
import { useStateUser } from "@/zustand/useStateUser";
import { BankViewItem, GroupedBankAccount } from "@/types/type";
import { useStateBranch } from "@/zustand/useStateBranches";
import { GetBranchesforaBank } from "@/services/Branch/service";
import { MdAdd } from "react-icons/md";
import GoogleMapComponent from "@/components/GoogleMapComponent ";
import { ResBranch } from "@/types/Branch/response";

DataTable.use(DT);
(window as any).JSZip = JSZip;

const Banks_BranchesPage: React.FC = () => {
    const router = useRouter()
    const { setActiveSection, bankViewItems, setBankViewItems,
        isDark, setIsDark, setLoading
    } = useStateGeneral()

    const { resBranch, setResBranch } = useStateBranch()

    const getBranchesForABank = async (bank_id: string) => {
        try {
            setLoading(true)
            const res = await GetBranchesforaBank(bank_id)
            // setResBranch((prev) => [...prev, ...res.data.branches])
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
                await getBranchesForABank(item.bank_id)
            }

        } catch (error: any) {

        }
        finally {
            setLoading(false)
        }
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
            title: 'Bank',
            data: 'bank_id',
            defaultContent: ''
        },
        {
            title: 'Name',
            data: 'name',
            defaultContent: ''
        },
        {
            title: 'Address',
            data: 'address',
            render: function (value: any) {
                return `${value.line_1}, ${value.city}, ${value.postcode}, ${value.country_code}`
            }
        }
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

    useEffect(() => {
        setActiveSection('banks-branches')
        getUser_Current()
    }, [])

    const [centerIndexMap, setCenterIndexMap] = useState<number | null>(null)

    return (
        <>
            <div className="grid md:grid-cols-3 gap-5">
                <div className={`md:col-span-2 md:col-start-1 md:row-start-1 p-5 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
                        ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                        : "bg-white/90"
                    }`}>
                    <div className="flex justify-between items-center">
                        <label htmlFor="branch" className="text-2xl">My Branches</label>
                        <button className="items-center flex gap-1">
                            <MdAdd />
                            Add Branch
                        </button>
                    </div>
                    <div className="grid w-full">
                        <DataTable
                            id="my-datatable" className='m-2'
                            key={tableKey}
                            data={resBranch}
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
                                        setCenterIndexMap(index)
                                    };
                                },
                            }}
                        />
                    </div>
                </div>
                {resBranch.length > 0 &&
                    <div className={`md:col-span-1 md:col-start-3 md:row-start-1 rounded-3xl shadow-lg backdrop-blur-xl flex flex-col gap-5 justify-between gap-5
            ${isDark
                            ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                            : "bg-white/90"
                        }`}>
                        <GoogleMapComponent data={resBranch} index={centerIndexMap} zoom={centerIndexMap === null ? 4 : 15} />
                    </div>
                }

            </div>
        </>
    )
}

export default Banks_BranchesPage