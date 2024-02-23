import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

const NewJobForm = ({ open, handleClose, jobs, updateAndStoreJobs, user }) => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [description, setDescription] = useState("");
  const [skillRequired, setSkillRequired] = useState([]);

  const resetData = () => {
    setCompanyName("");
    setJobTitle("");
    setCompanyLogo("");
    setMinSalary("");
    setMaxSalary("");
    setSalaryType("");
    setJobLocation("");
    setPostingDate("");
    setExperienceLevel("");
    setEmploymentType("");
    setDescription("");
    setSkillRequired([]);
  };

  const validateFormFields = () => {
    if (
      companyName &&
      jobTitle &&
      companyLogo &&
      minSalary &&
      maxSalary &&
      salaryType &&
      jobLocation &&
      postingDate &&
      experienceLevel &&
      employmentType &&
      description &&
      skillRequired?.length > 0
    ) {
      return true;
    } else return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFormFields()) {
      const formData = {
        companyName,
        jobTitle,
        companyLogo,
        minPrice: minSalary,
        maxPrice: maxSalary,
        salaryType,
        jobLocation,
        postingDate,
        experienceLevel,
        employmentType,
        description,
        skillRequired,
      };
      const newJob = {
        id: jobs.length + 1,
        postedBy: user?.email,
        isApplied: false,
        skills: skillRequired,
        ...formData,
      };
      updateAndStoreJobs([...jobs, newJob]);
      handleClose();
      resetData();
    }
  };

  const handleCheckboxChange = (event) => {
    const value = event?.target?.value;
    if (skillRequired?.includes(value)) {
      setSkillRequired(skillRequired?.filter((skill) => skill !== value));
    } else {
      setSkillRequired([...skillRequired, value]);
    }
  };

  return (
    <Modal
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
        <div
          className="bg-white p-8 rounded-lg shadow-md"
          style={{ width: "800px" }}
        >
          <h2 className="text-2xl font-bold mb-4">Add Job</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4"
          >
            <div>
              <InputLabel htmlFor="company-name">Company Name *</InputLabel>
              <TextField
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div>
              <InputLabel htmlFor="job-title">Job Title *</InputLabel>
              <TextField
                id="job-title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div>
              <InputLabel htmlFor="company-logo">
                Company Logo (URL) *
              </InputLabel>
              <TextField
                id="company-logo"
                value={companyLogo}
                onChange={(e) => setCompanyLogo(e.target.value)}
                required
                fullWidth
                error={
                  companyLogo?.length > 0 &&
                  !companyLogo.match(/^http[s]?:\/\/.*\.(?:png|jpg|gif)$/)
                }
                helperText="Please enter a valid URL (png, jpg, or gif)"
              />
            </div>
            <div>
              <InputLabel htmlFor="salary-type">Salary Type</InputLabel>
              <FormControl fullWidth required>
                <Select
                  id="salary-type"
                  value={salaryType}
                  onChange={(e) => setSalaryType(e.target.value)}
                >
                  <MenuItem value="Yearly">Yearly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Hourly">Hourly</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <InputLabel htmlFor="min-salary">Minimum Salary ( in Lakhs )</InputLabel>
              <TextField
                id="min-salary"
                type="number"
                value={minSalary}
                onChange={(e) => setMinSalary(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div>
              <InputLabel htmlFor="max-salary">Maximum Salary ( in Lakhs )</InputLabel>
              <TextField
                id="max-salary"
                type="number"
                value={maxSalary}
                onChange={(e) => setMaxSalary(e.target.value)}
                required
                fullWidth
              />
            </div>

            <div>
              <InputLabel htmlFor="job-location">Job Location</InputLabel>
              <TextField
                id="job-location"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div>
              <InputLabel htmlFor="posting-date">Posting Date</InputLabel>
              <TextField
                id="posting-date"
                type="date"
                value={postingDate}
                onChange={(e) => setPostingDate(e.target.value)}
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <InputLabel>Experience Level</InputLabel>
              <FormControl fullWidth required>
                <Select
                  id="experience-level"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                >
                  <MenuItem value="Entry-level">Entry-level</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Mid-level">Mid-level</MenuItem>
                  <MenuItem value="Senior-level">Senior-level</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <InputLabel>Employment Type</InputLabel>
              <FormControl fullWidth required>
                <Select
                  id="employment-type"
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                >
                  <MenuItem value="Full-time">Full-time</MenuItem>
                  <MenuItem value="Temporary">Temporary</MenuItem>
                  <MenuItem value="Part Time">Part Time</MenuItem>
                </Select>
              </FormControl>
            </div>
          </form>
          <div style={{margin: '20px 0px 10px 0px'}}>
            <InputLabel>Required Skillset: </InputLabel>
            <FormControl fullWidth required>
              <FormGroup style={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={skillRequired.includes("Javascript")}
                      onChange={handleCheckboxChange}
                      value="Javascript"
                    />
                  }
                  label="Javascript"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={skillRequired.includes("React.js")}
                      onChange={handleCheckboxChange}
                      value="React.js"
                    />
                  }
                  label="React.js"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={skillRequired.includes("Python")}
                      onChange={handleCheckboxChange}
                      value="Python"
                    />
                  }
                  label="Python"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={skillRequired.includes("React Native")}
                      onChange={handleCheckboxChange}
                      value="React Native"
                    />
                  }
                  label="React Native"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={skillRequired.includes("DevOps")}
                      onChange={handleCheckboxChange}
                      value="DevOps"
                    />
                  }
                  label="DevOps"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={skillRequired.includes("HTML")}
                      onChange={handleCheckboxChange}
                      value="HTML"
                    />
                  }
                  label="HTML"
                />
              </FormGroup>
            </FormControl>
          </div>
          <div>
            <InputLabel htmlFor="description">Description</InputLabel>
            <TextField
              id="description"
              multiline
              rows={1}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ width: "20%" }}
              onClick={() => {
                handleClose();
                resetData();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "20%" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewJobForm;
