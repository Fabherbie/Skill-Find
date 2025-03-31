import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
// import DashboardHeader from "../components/DashboardHeader";
import {
  earningsData,
  jobFrequencyData,
  jobAdViewsData,
  COLORS,
} from "../data/dashboardData";

const ProviderDashboard = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      {/* <DashboardHeader /> */}
      <h2 className="mb-4 font-bold text-blue-950 text-2xl">Your Dashboard</h2>

      {/* New Job Opportunities */}
      <section className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="font-semibold text-blue-950 text-xl">
          New Job Opportunities
        </h3>
        <p>You have 3 new job requests.</p>
      </section>

      {/* Earnings Section */}
      <section className="bg-white shadow-md mt-4 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-950 text-xl">Earnings</h3>
        <p>Total Earned: $500</p>
      </section>

      {/* Earnings Analytics */}
      <section className="bg-white shadow-md mt-4 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-950 text-xl">
          Earnings Overview
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={earningsData}
              dataKey="earnings"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {earningsData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* Job Frequency Analytics */}
      <section className="bg-white shadow-md mt-4 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-950 text-xl">Job Frequency</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={jobFrequencyData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="jobs" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Job Ad Views */}
      <section className="bg-white shadow-md mt-4 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-950 text-xl">Job Ad Views</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={jobAdViewsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ProviderDashboard;
