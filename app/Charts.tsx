"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Charts({data}) {
  const labels = data.map(item => item.name);

  const profits = data.map(item => {
    return (item.currentPrice - item.buyPrice) * item.amount;
  });

  const backgroundColors = profits.map(value =>
  value >= 0 ? "rgba(34,197,94,0.7)" : "rgba(239,68,68,0.7)"
);

const allData = {
  labels,
  datasets: [
    {
      label: "Profit / Loss ($)",
      data: profits,
      backgroundColor: backgroundColors,
      borderRadius: 6,
    },
  ],
};



  return (
  <div className="rounded-xl w-full shadow-md p-6 border">
  <h2 className="text-lg font-semibold mb-4 text-gray-800">
    Portfolio Profit / Loss
  </h2>
  <Bar data={allData}  />
</div>

  );
}
