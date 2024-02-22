import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Card = ({ data, setJobs, jobs }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    jobLocation,
    employmentType,
    minPrice,
    maxPrice,
    postingDate,
    description,
    isApplied,
    skills,
  } = data;

  const [open, setOpen] = React.useState(false);
  const { user } = useAuth0();

  const handleEasyApply = () => {
    const index = jobs?.findIndex((job) => job.id === id);
    if (index !== -1) {
      const updatedJob = { ...jobs[index], isApplied: true };
      const updatedJobs = [...jobs];
      updatedJobs[index] = updatedJob;
      setJobs(updatedJobs);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      setOpen(true);
    }
  };

  return (
    <div>
      <section className="card">
        <Link className="flex gap-4 flex-col sm:flex-row items-start">
          <img src={companyLogo} alt={jobTitle} className="w-16 h-16 mb-4" />
          <div className="card-details" style={{width: '100%'}}>
            <h4 className="text-primary mb-1">{companyName} </h4>
            <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-2">
                <FiMapPin style={{ color: "#FF7F7F" }} /> {jobLocation}
              </span>
              <span className="flex items-center gap-2">
                <FiClock style={{ color: "black" }} /> {employmentType}
              </span>
              <span className="flex items-center gap-2">
                ₹ {minPrice}-{maxPrice} Lakhs
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar /> {postingDate}
              </span>
            </div>

            <p className="text-base text-primary/70 ">{description}</p>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div>
                <p
                  style={{ marginTop: "10px" }}
                  className="text-base text-primary/80"
                >
                  Required Skillset: {skills?.join(" • ")}
                </p>
              </div>

              {user?.nickname !== "employer" && (
                <div style={{ marginLeft: "100px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEasyApply}
                    disabled={isApplied}
                    style={{ width: "121px" }}
                  >
                    {!isApplied ? "Easy Apply" : "Applied"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Link>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Job applied successfully"
        />
      </section>
    </div>
  );
};

export default Card;
