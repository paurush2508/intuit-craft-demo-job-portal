import React from "react";
import styled from "styled-components";
import Projects from "../LandingPage/Projects";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CoverPhoto = styled.img`
  width: 100%;
  height: 350px;
  background-color: #3b82f6;
`;

const ProfilePictureWrapper = styled.div`
  position: relative;
  margin-top: -9rem;
`;

const ProfilePicture = styled.img`
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
`;

const Name = styled.h1`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  margin-top: 0.5rem;
  color: #4b5563;
  max-width: 20rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b5563;

  & > * + * {
    margin-left: 1rem;
  }
`;

const UserProfile = ({ userProfile }) => {
  const [repos, setRepos] = React.useState([]);
  const userProfileLS = JSON.parse(localStorage.getItem("userProfileLS"));

  React.useEffect(() => {
    if (userProfile || userProfileLS) {
      const username =
        userProfile?.githubProfile?.split("/").pop() ||
        userProfileLS?.githubProfile?.split("/").pop();

      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to fetch repositories: ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((repos) => {
          setRepos(repos);
        })
        .catch((error) => {
          console.error("Error fetching repositories:", error);
        });
    }
  }, [userProfile, userProfileLS]);

  return (
    <ProfileContainer>
      <CoverPhoto
        src="https://timelinecovers.pro/facebook-cover/download/grey-texture-facebook-cover.jpg"
        alt="cover photo"
      />
      <ProfilePictureWrapper>
        <ProfilePicture
          src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1602248693535-KTGCFTA50807510I5LVN/Tom+LinkedIn+Headshot+Profile+Picture.jpg?format=2500w"
          alt="profile"
        />
      </ProfilePictureWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Name>
          {userProfile?.name ||
            userProfile?.nickname ||
            userProfileLS?.name ||
            userProfileLS?.nickname}
        </Name>
        <h1 style={{ fontWeight: "bolder" }}>
          {userProfile?.primaryRole || userProfileLS?.primaryRole}
        </h1>
        <h1 style={{ fontWeight: "bolder" }}>
          {userProfile?.email || userProfileLS?.email}
        </h1>
        <br/>
        <h1 style={{ fontWeight: "bolder" }}>About Me</h1>
        <Bio>{userProfile?.bio || userProfileLS?.bio}</Bio>
        <ContactInfo>
          <p>
            <strong>Contact:</strong>{" "}
            {userProfile?.contactNum || userProfileLS?.contactNum}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {userProfile?.location || userProfileLS?.location}
          </p>
        </ContactInfo>
        <ContactInfo>
          <p>
            <strong>LinkedIn Profile:</strong>{" "}
            {userProfile?.linkedinProfile || userProfileLS?.linkedinProfile}
          </p>
        </ContactInfo>
        <ContactInfo>
          <p>
            <strong>Github Profile:</strong>{" "}
            {userProfile?.githubProfile || userProfileLS?.githubProfile}
          </p>
        </ContactInfo>
      </div>
      <Projects repos={repos} />
    </ProfileContainer>
  );
};

export default UserProfile;
