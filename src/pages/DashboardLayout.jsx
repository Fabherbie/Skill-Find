import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Headers from "../components/Headers";
const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Header */}
        <Headers />

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
