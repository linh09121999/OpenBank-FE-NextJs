import React from "react";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale, // 👈 thêm
} from "chart.js";
import "chartjs-adapter-date-fns";
import type { ChartDataset, ChartOptions, ChartData } from "chart.js";
import { Line } from "react-chartjs-2";
import { useMediaQuery } from "@mui/material";

ChartJS.register(
    TimeScale,   // 👈
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type TimePoint = {
    x: string | Date; // time
    y: number;
};

type LineChartProps = {
    label: string[];
    dataDetail: TimePoint[][]; // 👈 mỗi line có time riêng
    title?: string;
    border: string[];
    background: string[];
    donvi: string;
    stepSize?: number;
    maxValue?: number;
    minValue?: number;
    isDark?: boolean;
};

const ChartMultiLine: React.FC<LineChartProps> = ({
    label,
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

    // const datasets = dataDetail.map((arr, idx) => ({
    //     label: label[idx],
    //     data: arr,
    //     borderColor: border[idx],
    //     backgroundColor: background[idx],
    //     tension: 0.4,
    //     fill: true,
    //     // chỉ chấm tại currentIndex
    //     pointRadius: 5,
    //     pointHoverRadius: 7,
    //     pointBackgroundColor: border[idx],
    //     segment: {// Past = gạch đứt, Future = liền
    //         borderColor: border[idx],
    //         backgroundColor: background[idx]
    //     },
    // }));

    const datasets: ChartDataset<"line", TimePoint[]>[] = dataDetail.map(
        (arr, idx) => ({
            label: label[idx],
            data: arr, // TimePoint[]
            borderColor: border[idx],
            backgroundColor: background[idx],
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: border[idx],
        })
    );

    const data: ChartData<"line", TimePoint[]> = {
        datasets,
    };


    // const data: ChartData<"line"> = {
    //     labels: times,
    //     datasets,
    // };

    // const options: ChartOptions<"line"> = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             display: true,
    //             position: "bottom",
    //             labels: {
    //                 color: isDark ? "white" : "black",
    //                 font: { size: isMobile ? 12 : 16 },
    //                 usePointStyle: true,
    //                 padding: isMobile ? 6 : 20,
    //                 boxHeight: isMobile ? 6 : 10,
    //             },
    //         },
    //         title: {
    //             display: !!title,
    //             text: title ?? "",
    //             align: 'start',
    //             font: { size: isMobile ? 12 : 16 },
    //             color: isDark ? "white" : "black",
    //             padding: {
    //                 top: 10,
    //                 bottom: 25
    //             }
    //         },
    //     },
    //     scales: {
    //         y: {
    //             max: maxValue,
    //             min: minValue,
    //             beginAtZero: true,
    //             ticks: {
    //                 color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
    //                 font: { size: isMobile ? 12 : 16 },
    //                 callback: (value) => `${value} ${donvi}`,
    //                 stepSize: stepSize,
    //             },
    //         },
    //         x: {
    //             ticks: {
    //                 color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
    //                 font: { size: isMobile ? 12 : 16 },
    //             },
    //         },
    //     },
    // };

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
                align: "start",
                font: { size: isMobile ? 12 : 16 },
                color: isDark ? "white" : "black",
                padding: { top: 10, bottom: 25 },
            },
        },
        scales: {
            x: {
                type: "time", // 👈 QUAN TRỌNG
                time: {
                    tooltipFormat: "dd/MM/yyyy HH:mm",
                    displayFormats: {
                        minute: "HH:mm",
                        hour: "dd/MM HH:mm",
                        day: "dd/MM/yyyy",
                    },
                },
                ticks: {
                    color: isDark
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(0,0,0,0.7)",
                    font: { size: isMobile ? 12 : 16 },
                },
            },
            y: {
                max: maxValue,
                min: minValue,
                beginAtZero: true,
                ticks: {
                    color: isDark
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(0,0,0,0.7)",
                    font: { size: isMobile ? 12 : 16 },
                    callback: (value) => `${value} ${donvi}`,
                    stepSize,
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
