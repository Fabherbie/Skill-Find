const CustomerDashboard = () => {
  return (
    <div>
      <h2 className="mb-4 font-bold text-2xl">Your Dashboard</h2>

      {/* Active Jobs Section */}
      <section className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="font-semibold text-xl">Active Jobs</h3>
        <p>
          No active jobs yet.{" "}
          <span className="text-green-600 cursor-pointer">Post a Job</span>
        </p>
      </section>

      {/* Messages Section */}
      <section className="bg-white shadow-md mt-4 p-6 rounded-lg">
        <h3 className="font-semibold text-xl">Recent Messages</h3>
        <p>You have 2 new messages.</p>
      </section>
    </div>
  );
};

export default CustomerDashboard;
