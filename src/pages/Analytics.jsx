import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Analytics = () => {
  // Fake sample data – replace with real values from backend
  const earningsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Earnings",
        data: [500, 750, 900, 1200, 1600],
        borderColor: "#16a34a",
        backgroundColor: "rgba(22, 163, 74, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const jobsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Jobs Completed",
        data: [5, 8, 7, 10, 12],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const topServices = {
    labels: ["Pipe Repair", "Leak Fix", "Drain Cleaning", "Heater Install"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ["#facc15", "#fb923c", "#22c55e", "#38bdf8"],
      },
    ],
  };

  return (
    <div className="p-6 container">
      <h2 className="mb-6 font-bold text-blue-950 text-2xl">
        Performance Analytics
      </h2>

      {/* Summary Cards */}
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mb-6">
        {[
          { label: "Job Completion Rate", value: "92%" },
          { label: "Avg Rating", value: "4.8 ★" },
          { label: "Total Earnings", value: "₦325,000" },
          { label: "Repeat Customers", value: "45%" },
        ].map((card, i) => (
          <div key={i} className="bg-white shadow p-4 rounded text-center">
            <p className="text-gray-500 text-sm">{card.label}</p>
            <p className="font-semibold text-green-700 text-xl">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Graphs */}
      <div className="gap-6 grid md:grid-cols-2">
        <div className="bg-white shadow p-4 rounded">
          <h4 className="mb-2 font-semibold text-blue-950 text-md">
            Earnings Over Time
          </h4>
          <Line data={earningsData} />
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h4 className="mb-2 font-semibold text-blue-950 text-md">
            Jobs Completed Monthly
          </h4>
          <Bar data={jobsData} />
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="gap-6 grid md:grid-cols-2 mt-6">
        <div className="bg-white shadow p-4 rounded">
          <h4 className="mb-2 font-semibold text-blue-950 text-md">
            Top Services
          </h4>
          <Pie data={topServices} />
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h4 className="mb-2 font-semibold text-blue-950 text-md">
            Bookings vs No-Shows
          </h4>
          <Bar
            data={{
              labels: ["Bookings", "No-Shows"],
              datasets: [
                {
                  label: "Count",
                  data: [42, 5],
                  backgroundColor: ["#16a34a", "#ef4444"],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
