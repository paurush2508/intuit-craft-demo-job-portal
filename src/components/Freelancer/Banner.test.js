import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner component", () => {
  test("renders component properly with default props", () => {
    const { getByText, getByPlaceholderText } = render(<Banner />);

    expect(getByText(/Find your/)).toBeInTheDocument();
    expect(
      getByPlaceholderText("What position are you looking for ?")
    ).toBeInTheDocument();
    expect(getByPlaceholderText("Location")).toBeInTheDocument();
    expect(getByText("Search")).toBeInTheDocument();
  });

  test("input change handlers are called properly", () => {
    const handleInputChange = jest.fn();
    const handleInputLocationChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Banner
        handleInputChange={handleInputChange}
        handleInputLocationChange={handleInputLocationChange}
      />
    );

    const searchInput = getByPlaceholderText(
      "What position are you looking for ?"
    );
    fireEvent.change(searchInput, { target: { value: "Software Engineer" } });
    expect(handleInputChange).toHaveBeenCalledTimes(1);
    expect(handleInputChange).toHaveBeenCalledWith(expect.anything());

    const locationInput = getByPlaceholderText("Location");
    fireEvent.change(locationInput, { target: { value: "New York" } });
    expect(handleInputLocationChange).toHaveBeenCalledTimes(1);
    expect(handleInputLocationChange).toHaveBeenCalledWith(expect.anything());
  });
});
