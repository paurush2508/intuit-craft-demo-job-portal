import React, { useState } from "react";
import TopNavBar from "../LandingPage/TopNavBar";
import { FREELANCER_NAVIGATION_OPTIONS } from "../../constants/index";
import JobListing from "../Freelancer/JobListing";

function FreelancerDashboard({ jobs, setJobs }) {
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
      setIsLoading(false);
    } else
      fetch("/jobs.json")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
          setIsLoading(false);
        });
  }, [setJobs]);

  return (
    <>
      <div>
        <TopNavBar
          navOptions={FREELANCER_NAVIGATION_OPTIONS}
          jobs={jobs}
          setJobs={setJobs}
        />
        <JobListing
          jobs={jobs}
          setJobs={setJobs}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
}

export default FreelancerDashboard;
