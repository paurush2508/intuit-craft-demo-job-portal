import React, { useState } from "react";
import TopNavBar from "../LandingPage/TopNavBar";
import { EMPLOYER_NAVIGATION_OPTIONS } from "../../constants/index";
import JobListing from "../Freelancer/JobListing";

function PostedJobs() {
  const [jobs, setJobs] = useState([]);

  const updateAndStoreJobs = (newJobs) => {
    setJobs(newJobs);
    localStorage.setItem("jobs", JSON.stringify(newJobs));
  };

  return (
    <>
      <div>
        <TopNavBar
          navOptions={EMPLOYER_NAVIGATION_OPTIONS}
          jobs={jobs}
          setJobs={setJobs}
          updateAndStoreJobs={updateAndStoreJobs}
        />
        <JobListing jobs={jobs} setJobs={setJobs} />
      </div>
    </>
  );
}

export default PostedJobs;
