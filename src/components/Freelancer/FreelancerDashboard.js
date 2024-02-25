import React from "react";
import TopNavBar from "../LandingPage/TopNavBar";
import { FREELANCER_NAVIGATION_OPTIONS } from "../../constants/index";
import JobListing from "../Freelancer/JobListing";
import { connect } from "react-redux";
import { fetchJobs } from "../../reducers/dashboardReducer";

function FreelancerDashboard(props) {
  const { jobsList, isLoading, setUserProfile } = props;
  React.useEffect(() => {
    props.fetchJobs();
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
})(FreelancerDashboard);
