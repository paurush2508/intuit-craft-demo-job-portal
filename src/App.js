import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import FreelancerProfile from "./components/Freelancer/UserProfile";
import PostedJobs from "./components/Employer/PostedJobs";
import LandingPage from "./components/LandingPage/LandingPage";
import FreelancerDashboard from "./components/Freelancer/FreelancerDashboard";
import "./App.css";

function App() {
  const [jobs, setJobs] = React.useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/freelancer/profile" element={<FreelancerProfile />} />
        <Route
          path="/freelancer/jobs"
          element={<FreelancerDashboard jobs={jobs} setJobs={setJobs} />}
        />
        <Route
          path="/employer/posted-jobs"
          element={<PostedJobs jobs={jobs} setJobs={setJobs} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
