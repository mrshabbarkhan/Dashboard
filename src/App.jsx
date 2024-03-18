import React from "react";
import Login from "./Components/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./Components/User";
import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
