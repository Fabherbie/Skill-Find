import React from "react";
import { Line } from "react-chartjs-2";
import earningsData from "../data/earningsData";

const EarningsChart = () => {
  if (!earningsData || earningsData.length === 0) {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h3 className="font-semibold text-xl">Earnings Over Time</h3>
        <p>No data available</p>
      </div>
    );
  }

  const chartData = {
    labels: earningsData.map((data) => data.date), // Dates for X-axis
    datasets: [
      {
        label: "Earnings",
        data: earningsData.map((data) => data.earnings), // Earnings for Y-axis
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="font-semibold text-xl">Earnings Over Time</h3>
      <Line data={chartData} />
    </div>
  );
};

export default EarningsChart;
