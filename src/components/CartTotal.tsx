'use client'

import { type ElementType } from "react";

type CardTotalProps = {
    children: React.ReactNode;
    label: string,
    total: React.ReactNode,
    isDark: boolean,
}

const CardTotal: React.FC<CardTotalProps> = ({ children, label, total, isDark }) => {
    return (
        <div className={`p-5 rounded-3xl shadow-lg backdrop-blur-xl flex justify-between gap-5 items-center md:min-w-[300px]
            ${isDark
                ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                : "bg-white/90"
            }
            `}
        >
            <div className="flex flex-col gap-1">
                <div
                    className={`text-4xl items-end flex gap-2
                    ${isDark ? "" : "text-neutral-800"}`}
                >
                    {total}
                </div>
                <div
                    className={`text-sm font-normal 
                    ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                    {label}
                </div>
            </div>
            <div className="relative">
                <div className="relative overflow-hidden group p-3 rounded-xl "
                >
                    {children}
                </div>
            </div>
        </div >
    );
};

export default CardTotal;
