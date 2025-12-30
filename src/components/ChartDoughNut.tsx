import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import { useMediaQuery } from "@mui/material";
import { FaCircle } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface DoughnutChartProps {
    labels: string[];
    data: number[];
    backgroundColor?: string[];
    cutout?: string | number;
    showLegend?: boolean;
    value: number | undefined;
    donvi: string;
    isDark: boolean
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
    labels,
    data,
    backgroundColor = [
        "#4CAF50",
        "#FF9800",
        "#2196F3",
        "#F44336",
    ],
    cutout = "70%",
    showLegend = false,
    value,
    donvi,
    isDark
}) => {
    const isMobile = useMediaQuery("(max-width:768px)")

    const chartData: ChartData<"doughnut"> = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderWidth: 0,
            },
        ],
    };

    const options: ChartOptions<"doughnut"> = {
        cutout,
        plugins: {
            legend: {
                display: showLegend,
                position: "bottom",
                labels: {
                    color: isDark ? "white" : "black",
                    font: { size: isMobile ? 12 : 16 },
                    usePointStyle: true,
                },
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <>
            <div className="flex flex-col items-center relative w-60 m-auto">
                <Doughnut data={chartData} options={options} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <p className="text-xl font-bold text-white">{value}</p>
                    <p className="text-lg text-white/70 max-sm:text-sm">{donvi}</p>
                </div>
            </div>
            <div className="justify-center flex ">
                {labels.map((label, index) => (
                    <div
                        className={`flex items-center text-[12px] p-[6px] md:p-[12px] md:text-[16px] gap-2
                            ${isDark ? "text-white" : "text-black"} `}
                    >
                        <FaCircle style={{
                            color: `${backgroundColor[index]}`,
                        }} />
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DoughnutChart;
