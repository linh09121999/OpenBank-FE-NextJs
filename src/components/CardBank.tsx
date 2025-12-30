import { FaArrowRight } from "react-icons/fa"

import Badge from "./Badge"
import { BankMap } from "@/types/type";
import Button from "./button";

type CardBankProps = {
    isDark: boolean;
    bank: BankMap;
    totalBalance: any;
    currency: any;
    onToggle: () => void;
    position: string;
}

const CardBank: React.FC<CardBankProps> = ({ isDark, bank, totalBalance, currency, onToggle, position }) => {
    return (
        <div
            className={`
        group relative overflow-hidden
        p-6 rounded-3xl ${position}  justify-between gap-6
        transition-all duration-300
        ${isDark
                    ? "bg-white/5 border border-white/10 backdrop-blur-xl text-white"
                    : "bg-white border border-neutral-200"}
      `}
        >

            <div className="flex items-center gap-4">
                <div className={`h-24 w-24 rounded-2xl
           flex items-center justify-center shadow-md
          group-hover:scale-105 transition
          ${isDark ? 'bg-white/80' : 'bg-white/80'}`}>
                    <img
                        src={bank.logo}
                        alt={bank.full_name}
                        className="h-21 w-21 object-contain"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold leading-tight">
                        {bank.full_name}
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        {bank.views.map(view =>
                            view.view_ids.map((v: string) => (
                                <Badge key={`${view.account_id}-${v}`} badge={v} isDark={isDark} />
                            ))
                        )}
                    </div>
                </div>
            </div>

            <div className="">
                <p className={`text-sm ${isDark ? "text-white/60" : "text-neutral-500"}`}>
                    Total Balance
                </p>

                <div className="flex items-end gap-2">
                    <span className="text-4xl tracking-tight">
                        {totalBalance.toLocaleString()}
                    </span>
                    <span className="text-lg font-medium opacity-70">
                        {currency}
                    </span>
                </div>
            </div>
            <div
                className="
    pointer-events-none
    absolute bottom-6 right-6
    opacity-0 translate-x-2 translate-y-2
    group-hover:opacity-100
    group-hover:translate-x-0
    group-hover:translate-y-0
    transition-all duration-300 ease-out
  "
            >
                <div
                    className={`
      rounded-full
      flex items-center justify-center
      backdrop-blur-md group-hover:-rotate-45
      shadow-lg
    `}
                >
                    <Button onToggle={onToggle} radius="rounded-full" padding="p-1" fontSize="text-2xl">
                        <FaArrowRight />
                    </Button>

                </div>
            </div>
            {/* Glow effect */}
            {isDark && (
                <div className="
          pointer-events-none
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition
          bg-gradient-to-tr
          from-primary/20 via-transparent to-transparent
        " />
            )}
        </div>
    )
}

export default CardBank