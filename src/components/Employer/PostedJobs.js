import React from "react";
import TopNavBar from "../LandingPage/TopNavBar";
import { EMPLOYER_NAVIGATION_OPTIONS } from "../../constants/index";
import JobListing from "../Freelancer/JobListing";
import { fetchJobs, setJobList } from "../../reducers/dashboardReducer";
import { connect } from "react-redux";

function PostedJobs(props) {
  const { jobsList, isLoading, setJobList } = props;
  const updateAndStoreJobs = (newJobs) => {
    setJobList(newJobs);
  };

  React.useEffect(() => {
    props.fetchJobs();
  }, []);

  return (
    <>
      <div>
        <TopNavBar
          navOptions={EMPLOYER_NAVIGATION_OPTIONS}
          jobs={jobsList}
          updateAndStoreJobs={updateAndStoreJobs}
        />
        <JobListing
          jobs={jobsList}
          isLoading={isLoading}
          setJobs={setJobList}
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  jobsList: state.dashboardReducer.jobsList,
  isLoading: state.dashboardReducer.isLoading,
});
export default connect(mapStateToProps, {
  fetchJobs,
  setJobList,
})(PostedJobs);
