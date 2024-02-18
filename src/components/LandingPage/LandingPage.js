import React from "react";
import TopNavBar from "./TopNavBar";
import Header from "./Header";
import CompaniesHiring from "./ComapniesHiring";
import { HOME_NAVIGATION_OPTIONS } from "../../constants";

function LandingPage() {
  return (
    <>
      <TopNavBar navOptions={HOME_NAVIGATION_OPTIONS} />
      <Header />
      <CompaniesHiring />
    </>
  );
}

export default LandingPage;
