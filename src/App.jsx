import Header from "./components/Header";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services:categorySlug" element={<ServicesPage />} />
      </Routes>

      {/* Other components */}
    </Router>
  );
}

export default App;
