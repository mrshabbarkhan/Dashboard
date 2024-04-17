import React from "react";
import Login from "./Pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import UserDashboard from "./Pages/UserDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./Components/Users";
import Notfount from "./Pages/Notfount";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<User />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Userdashboard" element={<UserDashboard />} />
          <Route path="/Users" element={<Users />} />
          <Route path="*" element={<Notfount />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
