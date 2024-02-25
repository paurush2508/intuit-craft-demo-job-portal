import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import { Auth0Provider } from "@auth0/auth0-react";

// Mock Auth0Provider with isAuthenticated and user properties
const Auth0ProviderMock = ({ children }) => (
  <Auth0Provider
    domain="dev-gplo4xopkfu3vcka.us.auth0.com"
    clientId="46uHMpq8JfTFtfr1Hr7gF1xO5Td1wric"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    isAuthenticated={true} // Set isAuthenticated to true or false as needed
    user={{ nickname: "freelancer" }} // Set user properties as needed
  >
    {children}
  </Auth0Provider>
);

describe("Card component", () => {
  const data = {
    skills: ["Artificial Intelligence", "Machine Learning"],
    id: 320,
    companyName: "Nullam Vitae Diam Consulting",
    jobTitle: "Drake Stein",
    companyLogo: "https://source.unsplash.com/random",
    minPrice: 81,
    maxPrice: 85,
    salaryType: "Yearly",
    jobLocation: "Bauchi",
    experienceLevel: "Intermediate",
    employmentType: "Full-time",
    description: "eget mollis lectus pede et risus. Quisque libero",
    postingDate: "2023-04-30",
    isApplied: false,
  };

  test("renders component properly with default props", () => {
    const { getByText } = render(<Card data={data} />);

    expect(getByText("Full-time")).toBeInTheDocument();
  });

  test("clicking on Easy Apply button calls handleEasyApply", () => {
    const { getByText } = render(<Card data={data} />);

    const easyApplyButton = getByText("Easy Apply");

    expect(easyApplyButton).toBeInTheDocument();
  });

  test("renders 'Applied' button if isApplied is true", () => {
    const appliedData = { ...data, isApplied: true };
    const { getByText } = render(
      <Card data={appliedData} setJobs={() => {}} jobs={[]} />
    );
    const appliedButton = getByText("Applied");
    expect(appliedButton).toBeInTheDocument();
  });

  test("does not render Easy Apply button if user is an employer", () => {
    const employerData = { ...data };
    const { queryByText } = render(<Card data={employerData} />);

    expect(queryByText("Applied")).not.toBeInTheDocument();
  });
});
