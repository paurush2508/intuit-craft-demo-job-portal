import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CompaniesHiring from "./ComapniesHiring";

jest.mock("../../constants", () => ({
  companies: [
    {
      img: "company1.png",
      title: "Company 1",
      text: "Description for Company 1",
    },
    {
      img: "company2.png",
      title: "Company 2",
      text: "Description for Company 2",
    },
  ],
}));

describe("CompaniesHiring component", () => {
  test("renders component properly", () => {
    const { getByText, getAllByRole } = render(<CompaniesHiring />);
    expect(getByText("Trending Companies hiring now")).toBeInTheDocument();
    expect(
      getByText(
        "Explore exciting career opportunities with the latest 'Trending Companies Hiring Now.' Dive into a diverse array of industries and roles where innovation thrives and talent is valued. Discover forward-thinking organizations at the forefront of their fields, actively seeking skilled professionals like you to join their teams."
      )
    ).toBeInTheDocument();
    expect(getAllByRole("img")).toHaveLength(2); // Assuming there are 2 companies in the mock data
    expect(getByText("Company 1")).toBeInTheDocument();
    expect(getByText("Description for Company 1")).toBeInTheDocument();
    expect(getByText("Company 2")).toBeInTheDocument();
    expect(getByText("Description for Company 2")).toBeInTheDocument();
  });
});
