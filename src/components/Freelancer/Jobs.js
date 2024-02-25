import React from "react";
const Jobs = ({
  result,
  jobs,
  filteredData,
  selectedCategory,
  query,
  locationQuery,
}) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2">
          Total available jobs{" "}
          <span style={{ color: "blue" }}>( {`${jobs?.length}`} ) </span>
          {(selectedCategory || query || locationQuery) &&
            `| Filtered Jobs ( ${filteredData} )`}
        </h3>
      </div>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Jobs;
