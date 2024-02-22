import React, { useState } from "react";
import Banner from "./Banner";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Card";
import Jobs from "./Jobs";
import TrendingNews from "./TrendingNews";

function JobListing({ jobs, isLoading, setJobs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const itemsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleInputLocationChange = (event) => {
    setLocationQuery(event.target.value);
  };

  const filteredItems = jobs?.filter(
    (job) =>
      job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1 &&
      job.jobLocation.toLowerCase().indexOf(locationQuery.toLowerCase()) !== -1
  );

  // // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to calculate the index range for the current page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Function to handle next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  let filteredJobsCount = 0;
  const filteredData = (jobs, selected, query, locationQuery) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItems;
    }
    if (locationQuery) {
      filteredJobs = filteredItems;
    }
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          salaryType,
          experienceLevel,
          maxPrice,
          postingDate,
          employmentType,
          skills,
        }) => {
          const postingDateCondition =
            new Date(postingDate) >= new Date(selected);
          const jobLocationCondition =
            jobLocation.toLowerCase() === selected.toLowerCase();
          const maxPriceCondition =
            !selected?.includes("-") &&
            parseInt(maxPrice) <= parseInt(selected);
          const salaryTypeCondition =
            salaryType.toLowerCase() === selected.toLowerCase();
          const experienceLevelCondition =
            experienceLevel.toLowerCase() === selected.toLowerCase();
          const employmentTypeCondition =
            employmentType.toLowerCase() === selected.toLowerCase();
          const skillsetCondition = skills?.includes(selected);

          return (
            postingDateCondition ||
            jobLocationCondition ||
            maxPriceCondition ||
            salaryTypeCondition ||
            experienceLevelCondition ||
            employmentTypeCondition ||
            skillsetCondition
          );
        }
      );
    }
    filteredJobsCount = filteredJobs?.length;
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs
      ?.sort((a, b) => b.id - a.id)
      .slice(startIndex, endIndex);

    return filteredJobs?.map((data, i) => (
      <Card key={i} data={data} setJobs={setJobs} jobs={jobs} />
    ));
  };

  const result =
    filteredData(jobs, selectedCategory, query, locationQuery) || [];

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Banner
          handleInputChange={handleInputChange}
          handleInputLocationChange={handleInputLocationChange}
          query={query}
          locationQuery={locationQuery}
        />
      </div>

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result?.length > 0 ? (
            <Jobs
              result={result}
              jobs={jobs}
              filteredData={filteredJobsCount}
              selectedCategory={selectedCategory}
              query={query}
              locationQuery={locationQuery}
            />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}

          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="bg-white p-4 rounded">
          <TrendingNews />
        </div>
      </div>
    </>
  );
}

export default JobListing;
