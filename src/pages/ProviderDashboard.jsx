const ProviderDashboard = () => {
  return (
    <div>
      <h2 className="mb-4 font-bold text-2xl">Your Dashboard</h2>

      {/* New Job Opportunities */}
      <section className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="font-semibold text-xl">New Job Opportunities</h3>
        <p>You have 3 new job requests.</p>
      </section>

      {/* Earnings Section */}
      <section className="bg-white shadow-md mt-4 p-6 rounded-lg">
        <h3 className="font-semibold text-xl">Earnings</h3>
        <p>Total Earned: $500</p>
      </section>
    </div>
  );
};

export default ProviderDashboard;
