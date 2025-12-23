import { ElementType } from "react";

type TotalCardProps = {
    Icon: ElementType;
    label: string,
    total: number,
    isDark: boolean,
    bgCard: string
}

const TotalCard: React.FC<TotalCardProps> = ({ Icon, label, total, isDark, bgCard }) => {
    return (
        <div className={`p-5 rounded-3xl shadow-lg backdrop-blur-xl flex justify-between gap-5
            ${isDark
                ? "bg-white/5 text-white border border-white/10 shadow-white/5"
                : "bg-white/90"
            }
            `}
        >
            <div>
                <div
                    className={`text-4xl  leading-[1.5]
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
                    style={{ background: `${bgCard}` }}
                >
                    <Icon className="text-4xl text-white" />
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gradient-to-r 
              from-transparent via-white/20 to-transparent 
              -skew-x-12 -translate-x-full 
              group-hover:translate-x-full 
              transition-transform duration-1000"
                        ></div>
                    </div>

                    <div
                        className="absolute inset-0 rounded-xl border  
            animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ borderColor: `${bgCard}` }}
                    ></div>
                </div>
            </div>
        </div >
    );
};

export default TotalCard;
