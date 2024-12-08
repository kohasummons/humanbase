"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: Array.from({ length: 10 }, (_, i) => `Label ${i + 1}`),
  datasets: [
    {
      label: "Title goes here",
      data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
      borderColor: "#3B82F6",
      fill: false,
    },
  ],
};

const Statements = () => {
  const [activeTab, setActiveTab] = useState("Total Statement");

  const renderChart = () => (
    <Line
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      }}
    />
  );

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-8">
        <h3 className="transition-colors font-pp-supply-sans text-2xl">
          Statements
        </h3>
      </div>

      <div className="flex border-b w-full">
        {["Total Statement", "Income Statement", "Outflow Statement"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 transition-colors text-sm font-pp-supply-sans font-extralight ${
                activeTab === tab ? "border-b border-[#9C9C9C] " : ""
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      <div className="mt-8">
        {activeTab === "Total Statement" && (
          <div className="flex flex-row gap-12">
            <div className="h-64">{renderChart()}</div>
            <div className="h-64">{renderChart()}</div>
            <div className="h-64">{renderChart()}</div>
          </div>
        )}

        {activeTab === "Income Statement" && (
         <div className="flex flex-row gap-12">
         <div className="h-64">{renderChart()}</div>
         <div className="h-64">{renderChart()}</div>
         <div className="h-64">{renderChart()}</div>
       </div>

        )}
        {activeTab === "Outflow Statement" && (
          <div className="flex flex-row gap-12">
          <div className="h-64">{renderChart()}</div>
          <div className="h-64">{renderChart()}</div>
          <div className="h-64">{renderChart()}</div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Statements;
