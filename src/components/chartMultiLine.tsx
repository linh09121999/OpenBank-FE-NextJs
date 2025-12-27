import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    // 👈 import type
} from "chart.js";
import type { ChartOptions, ChartData, ScriptableLineSegmentContext } from "chart.js";
import { Line } from "react-chartjs-2";
import { useMediaQuery } from "@mui/material";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type LineChartProps = {
    label: string[];
    times: string[];
    dataDetail: number[][]; // mỗi phần tử = 1 line
    title?: string;
    border: string[]; // màu line
    background: string[]; // màu fill
    donvi: string;
    stepSize?: number,
    maxValue?: number,
    minValue?: number,
    isDark?: boolean
};

const ChartMultiLine: React.FC<LineChartProps> = ({
    label,
    times,
    dataDetail,
    title,
    border,
    background,
    donvi,
    stepSize,
    maxValue,
    minValue,
    isDark
}) => {
    const isMobile = useMediaQuery("(max-width:768px)")

    const datasets = dataDetail.map((arr, idx) => ({
        label: label[idx],
        data: arr,
        borderColor: border[idx],
        backgroundColor: background[idx],
        tension: 0.4,
        fill: true,
        // chỉ chấm tại currentIndex
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: border[idx],
        segment: {// Past = gạch đứt, Future = liền
            borderColor: border[idx],
            backgroundColor: background[idx]
        },
    }));

    const data: ChartData<"line"> = {
        labels: times,
        datasets,
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    color: isDark ? "white" : "black",
                    font: { size: isMobile ? 12 : 16 },
                    usePointStyle: true,
                    padding: isMobile ? 6 : 20,
                    boxHeight: isMobile ? 6 : 10,
                },
            },
            title: {
                display: !!title,
                text: title ?? "",
                align: 'start',
                font: { size: isMobile ? 12 : 16 },
                color: isDark ? "white" : "black",
                padding: {
                    top: 10,
                    bottom: 25
                }
            },
        },
        scales: {
            y: {
                max: maxValue,
                min: minValue,
                beginAtZero: true,
                ticks: {
                    color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
                    font: { size: isMobile ? 12 : 16 },
                    callback: (value) => `${value} ${donvi}`,
                    stepSize: stepSize,
                },
            },
            x: {
                ticks: {
                    color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
                    font: { size: isMobile ? 12 : 16 },
                },
            },
        },
    };

    return (
        <Line
            className="w-full min-x-[340px]"
            data={data}
            options={options}
        />
    );
};

export default ChartMultiLine;
