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
import DashboardLayout from "./pages/DashboardLayout";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";

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

        {/* Dashboard Layout (Handles DashboardHeader inside) */}
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<CustomerDashboard />} />
          <Route path="provider" element={<ProviderDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

