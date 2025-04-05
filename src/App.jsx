import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Global Header for public pages
import Footer from "./components/Footer"; // Global Footer for public pages
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicePage";
import SignupCustomer from "./pages/SignupCustomer";
import SignupProvider from "./pages/SignupProvider";

// Dashboard Layouts
import DashboardLayout from "./layouts/DashboardLayout";
import ProviderDashboardLayout from "./layouts/ProviderDashboardLayout";

// Dashboard Pages
import CustomerDashboard from "./pages/CustomerDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import JobRequests from "./pages/JobRequests";
import AcceptedJobs from "./pages/AcceptedJobs";
import CompletedJobs from "./pages/CompletedJobs";
import Calendar from "./pages/Calendar";
import Financials from "./pages/Financials";
import ProviderProfile from "./pages/ProviderProfile";
import Messages from "./pages/Messages";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages (Global Header) */}
        <Route
          path="/"
          element={
            <>
              <Header /> {/* Global Header */}
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header /> {/* Global Header */}
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/:categorySlug"
          element={
            <>
              <Header /> {/* Global Header */}
              <ServicesPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup-customer"
          element={
            <>
              <Header /> {/* Global Header */}
              <SignupCustomer />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup-provider"
          element={
            <>
              <Header /> {/* Global Header */}
              <SignupProvider />
              <Footer />
            </>
          }
        />

        {/* Customer Dashboard with DashboardHeader */}
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<CustomerDashboard />} />
        </Route>

        {/* Provider Dashboard with DashboardHeader */}
        <Route
          path="/provider-dashboard/*"
          element={<ProviderDashboardLayout />}
        >
          <Route index element={<ProviderDashboard />} />
          <Route path="requests" element={<JobRequests />} />
          <Route path="accepted" element={<AcceptedJobs />} />
          <Route path="completed" element={<CompletedJobs />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="financials" element={<Financials />} />
          <Route path="profile" element={<ProviderProfile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
