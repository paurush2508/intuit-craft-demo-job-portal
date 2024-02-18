import React from "react";
import TopNavbar from "../LandingPage/TopNavBar";
import { FREELANCER_NAVIGATION_OPTIONS } from "../../constants";
import Banner from "./Banner";

function JobListing() {
  return (
    <>
      <div>
        <TopNavbar navOptions={FREELANCER_NAVIGATION_OPTIONS} />
      </div>
      <div style={{marginTop: '100px'}}>
        <Banner />
      </div>
    </>
  );
}

export default JobListing;
