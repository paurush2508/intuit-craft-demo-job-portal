import React from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";

export default function Projects({ repos }) {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h6
              style={{ textAlign: "center", marginTop: "20px" }}
              className="font20 extraBold"
            >
              My Github repositories
            </h6>
          </HeaderInfo>
          <div
            className="row textCenter"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {repos?.map((item, index) => (
              <div key={index} className="col-xs-12 col-xs-4 col-xs-4 col-md-2">
                <ProjectBox
                  img={
                    "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  }
                  title={item?.name}
                  text={item?.description}
                  git_url={item?.git_url}
                  action={() => alert("clicked")}
                />
              </div>
            ))}
          </div>

          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
