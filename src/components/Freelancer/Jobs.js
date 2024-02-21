const Jobs = ({ result, jobs }) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2">
          Total available jobs{" "}
          <span style={{ color: "blue" }}>( {`${jobs?.length}`} )</span>
        </h3>
      </div>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Jobs;
