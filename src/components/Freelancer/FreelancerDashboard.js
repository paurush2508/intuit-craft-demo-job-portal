import React from "react";
import TopNavBar from "../LandingPage/TopNavBar";
import { FREELANCER_NAVIGATION_OPTIONS } from "../../constants/index";
import JobListing from "../Freelancer/JobListing";
import { connect } from "react-redux";
import { fetchJobs, setJobList } from "../../reducers/dashboardReducer";

function FreelancerDashboard(props) {
  const { jobsList, isLoading, setUserProfile, setJobList } = props;
  React.useEffect(() => {
    props.fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <TopNavBar
          navOptions={FREELANCER_NAVIGATION_OPTIONS}
          jobs={jobsList}
          setUserProfile={setUserProfile}
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
})(FreelancerDashboard);
