import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/admin/Navbar";
import CustomerNavbar from "./components/customer/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/customer/Homepage";
import AdminDashboard from "./pages/admin/Dashboard";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/admin/*"
        element={
          <>
            <AdminNavbar />
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              {/* Add more admin routes here */}
            </Routes>
          </>
        }
      />
      <Route
        path="/*"
        element={
          <>
            <CustomerNavbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Add more customer routes here */}
            </Routes>
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
