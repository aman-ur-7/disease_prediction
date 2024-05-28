import React from "react";
import { Routes, Route } from "react-router-dom";
import HOME from "./HOME";
import CHATBOT from "./auth/CHATBOT";
import LOGIN from "./auth/LOGIN";
import SIGNUP from "./auth/SIGNUP";
import Dashboard from "./Dashboard";
import Patient from "./components/Patient";
import PatientNext from "./components/PatientNext";
import Symptoms from "./components/Symptoms";
import Result from "./components/Result";
import Consultant from "./components/Consultant";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HOME />} />
        <Route path="/chatbot" element={<CHATBOT />} />
        <Route path="/login" element={<LOGIN />} />
        <Route path="/signup" element={<SIGNUP />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/patientnext" element={<PatientNext />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/result" element={<Result />} />
        <Route path="/register" element={<SIGNUP />} />
        <Route path="/consultant" element={<Consultant />} />
      </Routes>
    </>
  );
};

export default App;
