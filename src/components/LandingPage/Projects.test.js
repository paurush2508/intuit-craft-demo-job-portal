import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects component", () => {
  test("renders component with repos properly", () => {
    const repos = [
      {
        name: "Repo 1",
        description: "Description for Repo 1",
        git_url: "https://github.com/repo1",
      },
      {
        name: "Repo 2",
        description: "Description for Repo 2",
        git_url: "https://github.com/repo2",
      },
    ];

    const { getByText, getAllByRole } = render(<Projects repos={repos} />);

    expect(getByText("My Github repositories")).toBeInTheDocument();
    expect(getAllByRole("img")).toHaveLength(2); // Assuming there are 2 repos
    expect(getByText("Repo 1")).toBeInTheDocument();
    expect(getByText("Description for Repo 1")).toBeInTheDocument();
    expect(getByText("Repo 2")).toBeInTheDocument();
    expect(getByText("Description for Repo 2")).toBeInTheDocument();
  });

  test("renders component with no repos", () => {
    const { getByText, queryByRole } = render(<Projects repos={[]} />);

    expect(getByText("My Github repositories")).toBeInTheDocument();
    expect(queryByRole("img")).toBeNull(); // No repos should be rendered
  });

  test("renders component with null repos", () => {
    const { getByText, queryByRole } = render(<Projects repos={null} />);

    expect(getByText("My Github repositories")).toBeInTheDocument();
    expect(queryByRole("img")).toBeNull(); // No repos should be rendered
  });
});
