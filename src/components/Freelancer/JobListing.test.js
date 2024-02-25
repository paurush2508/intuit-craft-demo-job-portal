import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import JobListing from "./JobListing";

describe("JobListing component", () => {
  const mockJobs = [
    {
      skills: ["Javascript", "HTML", "CSS"],
      id: 1,
      companyName: "Netflix",
      jobTitle: "Software Engineer",
      companyLogo:
        "https://photos.wellfound.com/startups/i/33986-687620e87450ee4654c88a0417d81358-medium_jpg.jpg?buster=1589601889",
      minPrice: "25",
      maxPrice: "75",
      salaryType: "Yearly",
      jobLocation: "Brussels",
      postingDate: "2023-11-03",
      experienceLevel: "Entry-level",
      employmentType: "Full-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
  ];

  it("renders with mock data", () => {
    const { getByText } = render(<JobListing jobs={mockJobs} />);
    // Assert that some element from mock data is present
    expect(getByText(mockJobs[0].jobTitle)).toBeInTheDocument();
  });

  it("filters jobs based on input", async () => {
    const { getByPlaceholderText, getByText } = render(
      <JobListing jobs={mockJobs} />
    );
    const input = getByPlaceholderText(/What position are you looking for/);
    fireEvent.change(input, { target: { value: "engineer" } });
    await waitFor(() => {
      expect(getByText("Software Engineer")).toBeInTheDocument();
    });
  });

  it("paginates jobs", async () => {
    const { getByText } = render(<JobListing jobs={mockJobs} />);

    expect(getByText("Page 1 of 1")).toBeInTheDocument();
  });
});
