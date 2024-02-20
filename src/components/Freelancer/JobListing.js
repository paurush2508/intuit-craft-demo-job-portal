import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Card";
import Jobs from "./Jobs";
import TrendingNews from "./TrendingNews";

function JobListing({ jobs, setJobs }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const itemsPerPage = 10;
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
      setIsLoading(false);
    } else
      fetch("/jobs.json")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
          setIsLoading(false);
        });
  }, []);

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    // console.log(event.target.value);
  };

  //------------filter by job title-----
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
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

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    // Filtering Input Items

    console.log(filteredItems);
    if (query) {
      filteredJobs = filteredItems;
    }

    // Applying selected filter / category filtering
    if (selected) {
      console.log(selected);

      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          salaryType,
          experienceLevel,
          maxPrice,
          postingDate,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          postingDate === selected ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    // Slice the data based on the current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs
      .slice(startIndex, endIndex)
      ?.sort((a, b) => b.id - a.id);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Banner />
      </div>

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
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
