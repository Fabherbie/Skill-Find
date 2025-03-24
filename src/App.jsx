import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicePage";
import SignupCustomer from "./pages/SignupCustomer";
import SignupProvider from "./pages/SignupProvider";
import DashboardLayout from "./pages/DashboardLayout";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header /> {/* ✅ Stays for public pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:categorySlug" element={<ServicesPage />} />
        <Route path="/signup-customer" element={<SignupCustomer />} />
        <Route path="/signup-provider" element={<SignupProvider />} />

        {/* Dashboard Layout (with Headers.jsx inside) */}
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<CustomerDashboard />} />
          <Route path="provider" element={<ProviderDashboard />} />
          console.log("App is running!");
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
