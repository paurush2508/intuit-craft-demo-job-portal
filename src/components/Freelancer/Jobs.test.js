import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./Jobs";

describe("Jobs component", () => {
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
  const mockResult = mockJobs.map((job, index) => (
    <div key={index}>{job.title}</div>
  ));

  it("renders with mock data", () => {
    const { getByText } = render(
      <Jobs
        result={mockResult}
        jobs={mockJobs}
        filteredData={mockJobs.length}
        selectedCategory={null}
        query=""
        locationQuery=""
      />
    );
    expect(getByText(/1/)).toBeInTheDocument();
  });

  it("renders total available jobs count", () => {
    const { queryByText } = render(
      <Jobs
        result={mockResult}
        jobs={mockJobs}
        filteredData={mockJobs.length}
        selectedCategory={null}
        query=""
        locationQuery=""
      />
    );
    expect(queryByText(`Total available jobs`)).toBeInTheDocument();
  });

  it("renders filtered jobs count when filters are applied", () => {
    const { getByText } = render(
      <Jobs
        result={mockResult}
        jobs={mockJobs}
        filteredData={5}
        selectedCategory="Software"
        query="Engineer"
        locationQuery="New York"
      />
    );
    expect(getByText(/5/)).toBeInTheDocument();
  });
});
