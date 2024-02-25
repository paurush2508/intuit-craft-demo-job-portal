import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const EditProfile = ({ open, handleClose, user, setUserProfile }) => {
  const [location, setLocation] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [primaryRole, setPrimaryRole] = useState("");
  const [experience, setExperience] = useState("");
  const [linkedinProfile, setLinkedInProfile] = useState("");
  const [githubProfile, setGithubProfile] = useState("");
  const [bio, setBio] = useState("");

  const resetData = () => {
    setLocation("");
    setContactNum("");
    setPrimaryRole("");
    setExperience("");
    setLinkedInProfile("");
    setGithubProfile("");
    setBio("");
  };

  const validateFormFields = () => {
    if (
      location &&
      contactNum &&
      primaryRole &&
      experience &&
      linkedinProfile &&
      githubProfile &&
      bio
    ) {
      return true;
    } else return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFormFields()) {
      const formData = {
        name: user?.nickname,
        email: user?.email,
        location,
        contactNum,
        primaryRole,
        experience,
        linkedinProfile,
        githubProfile,
        bio,
      };
      setLocation(location);
      setContactNum(contactNum);
      setPrimaryRole(primaryRole);
      setExperience(experience);
      setLinkedInProfile(linkedinProfile);
      setGithubProfile(githubProfile);
      setBio(bio);
      setUserProfile(formData);
      handleClose();
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
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4"
          >
            <div>
              <InputLabel htmlFor="nick-name">Your Name *</InputLabel>
              <TextField
                id="nick-name"
                value={user?.nickname}
                disabled
                required
                fullWidth
              />
            </div>
            <div>
              <InputLabel htmlFor="location">Location *</InputLabel>
              <TextField
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div>
              <InputLabel htmlFor="email-id">Email ID</InputLabel>
              <TextField
                id="email-id"
                value={user?.email}
                disabled
                required
                fullWidth
              />
            </div>
            <div>
              <InputLabel htmlFor="contact-number">Contact No</InputLabel>
              <TextField
                id="contact-number"
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
                required
                fullWidth
                type="tel"
              />
            </div>
            <div>
              <InputLabel htmlFor="select-primary-role">
                Select your primary role *
              </InputLabel>
              <FormControl fullWidth required>
                <Select
                  id="select-primary-role"
                  value={primaryRole}
                  onChange={(e) => setPrimaryRole(e.target.value)}
                >
                  <MenuItem value="Frontend Engineer">
                    Frontend Engineer
                  </MenuItem>
                  <MenuItem value="Backend Engineer">Backend Engineer</MenuItem>
                  <MenuItem value="Fullstack Engineer">
                    Fullstack Engineer
                  </MenuItem>
                  <MenuItem value="UI/UX Engineer">UI/UX Engineer</MenuItem>
                  <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <InputLabel htmlFor="years-of-experience">
                Years of experience *
              </InputLabel>
              <FormControl fullWidth required>
                <Select
                  id="years-of-experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <MenuItem value="Less than 1 Year">Less than 1 Year</MenuItem>
                  <MenuItem value="1-2 years">1-2 years</MenuItem>
                  <MenuItem value="2-5 Years">2-5 Years</MenuItem>
                  <MenuItem value="5-8 Years">5-8 Years</MenuItem>
                  <MenuItem value="8+ Yearsr">8+ Years</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <InputLabel htmlFor="linkedin-profile">
                LinkedIn Profile
              </InputLabel>
              <TextField
                id="linkedin-profile"
                value={linkedinProfile}
                onChange={(e) => setLinkedInProfile(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div>
              <InputLabel htmlFor="github-profile">Github Profile</InputLabel>
              <TextField
                id="github-profile"
                value={githubProfile}
                onChange={(e) => setGithubProfile(e.target.value)}
                required
                fullWidth
              />
            </div>
          </form>
          <div style={{ marginTop: "15px" }}>
            <InputLabel htmlFor="bio">Your bio</InputLabel>
            <TextField
              id="bio"
              multiline
              rows={2}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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

export default EditProfile;
