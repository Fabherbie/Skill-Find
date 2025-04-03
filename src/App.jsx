// import Header from "./components/Header";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import DashboardHeader from "./components/DashboardHeader";
// import Footer from "./components/Footer";
// import ServicesPage from "./pages/ServicePage";
// import SignupCustomer from "./pages/SignupCustomer";
// import SignupProvider from "./pages/SignupProvider";
// import DashboardLayout from "./pages/DashboardLayout";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import ProviderDashboard from "./pages/ProviderDashboard";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Header /> {/* Header component for the main layout */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services/:categorySlug" element={<ServicesPage />} />
//         <Route path="/signup-customer" element={<SignupCustomer />} />
//         <Route path="/signup-provider" element={<SignupProvider />} />

//         {/* Dashboard Layout (with Headers.jsx inside) */}
//         <Route path="/dashboard/*" element={<DashboardLayout />}>
//           <Route index element={<CustomerDashboard />} />
//           <Route path="provider" element={<ProviderDashboard />} />
//           console.log("App is running!");
//         </Route>
//       </Routes>
//       <Footer theme="dark" />
//     </Router>
//   );
// }

// const Layout = () => {
//   const location = useLocation();
//   const hideHeaderOnRoutes = ["/dashboard", "/admin"];

//   return (
//     <>
//       {!hideHeaderOnRoutes.includes(location.pathname) && <Header />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<ProviderDashboard />} />
//       </Routes>
//     </>
//   );
// };
// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicePage";
import SignupCustomer from "./pages/SignupCustomer";
import SignupProvider from "./pages/SignupProvider";
import DashboardLayout from "./layouts/DashboardLayout";
import ProviderDashboardLayout from "./layouts/ProviderDashboardLayout";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import JobRequests from "./pages/JobRequests";
import AcceptedJobs from "./pages/AcceptedJobs";
import CompletedJobs from "./pages/CompletedJobs";
import Calendar from "./pages/Calendar";
import Financials from "./pages/Financials";
import ProviderProfile from "./pages/ProviderProfile";
import Messages from "./pages/Messages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/:categorySlug"
          element={
            <>
              <Header />
              <ServicesPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup-customer"
          element={
            <>
              <Header />
              <SignupCustomer />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup-provider"
          element={
            <>
              <Header />
              <SignupProvider />
              <Footer />
            </>
          }
        />

        {/* Customer Dashboard */}
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<CustomerDashboard />} />
        </Route>

        {/* Service Provider Dashboard */}
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
