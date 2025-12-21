import { ElementType } from "react";

type TotalCardProps = {
    Icon: ElementType;
    label: string,
    total: number,
    isDark: boolean
}

const TotalCard: React.FC<TotalCardProps> = ({ Icon, label, total, isDark }) => {
    return (
        <div
            className={`p-5 rounded-3xl shadow-lg backdrop-blur-xl flex gap-5
                ${isDark
                    ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                    : "bg-white/90"
                }`}
        >
            {/* Icon */}
            <div className="relative">
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 
          text-white hover:from-green-600 hover:to-emerald-700 
          overflow-hidden group p-3 rounded-xl"
                >
                    <Icon className="text-3xl text-white" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gradient-to-r 
              from-transparent via-white/20 to-transparent 
              -skew-x-12 -translate-x-full 
              group-hover:translate-x-full 
              transition-transform duration-1000"
                        />
                    </div>

                    {/* Glow border */}
                    <div
                        className="absolute inset-0 rounded-xl border border-green-400 
            animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>

            {/* Content */}
            <div>
                <div
                    className={`text-base font-normal 
                    ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                    {label}
                </div>

                <div
                    className={`text-2xl font-semibold 
                    ${isDark ? "" : "text-neutral-800"}`}
                >
                    {total}
                </div>
            </div>
        </div>
    );
};

export default TotalCard;
