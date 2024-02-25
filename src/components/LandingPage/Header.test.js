import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("renders component properly", () => {
    const { getByText, getByAltText, getAllByRole } = render(<Header />);

    expect(
      getByText("OVER 130K REMOTE & LOCAL CONTRACT JOBS:")
    ).toBeInTheDocument();
    expect(getByText("Find what's next:")).toBeInTheDocument();
    expect(
      getByText(
        "This is a job portal where people can view or post contract jobs to be performed. We make it easy to find what's next. Browse over 100,000 jobs — from top companies to fast-growing startups."
      )
    ).toBeInTheDocument();
    expect(getByText("Get Started")).toBeInTheDocument();

    // Check if image is rendered with correct attributes
    const headerImage = getByAltText("office");
    expect(headerImage).toBeInTheDocument();
    expect(headerImage).toHaveAttribute("src", "header-img.jpeg");

    // Check if quote is rendered
    expect(
      getByText(
        "I can't imagine my day to day without this platform. Life would be very difficult."
      )
    ).toBeInTheDocument();
    expect(getByText("Paurush Srivastava")).toBeInTheDocument();

    // Check if SVG components are rendered
    expect(getAllByRole("img")).toHaveLength(1);
  });
});
