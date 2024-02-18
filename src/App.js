import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import FreelancerProfile from "./components/Freelancer/UserProfile";
import JobListing from "./components/Freelancer/JobListing";
import NewJobForm from "./components/Employer/NewJobForm";
import PostedJobs from "./components/Employer/PostedJobs";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/freelancer/profile" element={<FreelancerProfile />} />
        <Route path="/freelancer/jobs" element={<JobListing />} />
        <Route path="/employer/new-job" element={<NewJobForm />} />
        <Route path="/employer/posted-jobs" element={<PostedJobs />} />
      </Routes>
    </Router>
  );
}

export default App;
