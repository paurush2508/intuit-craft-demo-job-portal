import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, git_url }) {
  return (
    <a href={git_url} target="_blank" rel="noopener noreferrer">
      <Wrapper>
        <ImgBtn className="aniamte pointer">
          <img className="radius8" src={img} alt="project"></img>
        </ImgBtn>
        <h3 className="font20 extraBold">{title?.substring(0, 20)}</h3>
        <p className="font13">{text}</p>
      </Wrapper>
    </a>
  );
}

const Wrapper = styled.div`
  width: 70%;
  margin-top: 20px;
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;
