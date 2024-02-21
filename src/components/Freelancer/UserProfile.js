import React from "react";
import styled from "styled-components";

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
  console.log("User Profile", userProfile);
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
        <Name>{userProfile?.name || userProfile?.nickname}</Name>
        <h1 style={{ fontWeight: "bolder" }}>{userProfile?.primaryRole}</h1>
        <h1 style={{ fontWeight: "bolder" }}>{userProfile?.email}</h1>
        <h1 style={{ fontWeight: "bolder" }}>About Me</h1>
        <Bio>{userProfile?.bio}</Bio>
        <ContactInfo>
          <p>
            <strong>Contact:</strong> {userProfile?.contactNum}
          </p>
          <p>
            <strong>Location:</strong> {userProfile?.location}
          </p>
        </ContactInfo>
        <ContactInfo>
          <p>
            <strong>LinkedIn Profile:</strong> {userProfile?.linkedinProfile}
          </p>
        </ContactInfo>
        <ContactInfo>
          <p>
            <strong>Github Profile:</strong> {userProfile?.githubProfile}
          </p>
        </ContactInfo>
      </div>
    </ProfileContainer>
  );
};

export default UserProfile;
