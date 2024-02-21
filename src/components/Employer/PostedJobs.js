import React, { useState } from "react";
import TopNavBar from "../LandingPage/TopNavBar";
import { EMPLOYER_NAVIGATION_OPTIONS } from "../../constants/index";
import JobListing from "../Freelancer/JobListing";

function PostedJobs({ jobs, setJobs }) {
  const updateAndStoreJobs = (newJobs) => {
    setJobs(newJobs);
    localStorage.setItem("jobs", JSON.stringify(newJobs));
  };

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
          navOptions={EMPLOYER_NAVIGATION_OPTIONS}
          jobs={jobs}
          setJobs={setJobs}
          updateAndStoreJobs={updateAndStoreJobs}
        />
        <JobListing jobs={jobs} isLoading={isLoading} />
      </div>
    </>
  );
}

export default PostedJobs;
