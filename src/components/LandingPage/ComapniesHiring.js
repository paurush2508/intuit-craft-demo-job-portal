import React from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";
import { companies } from "../../constants";

export default function CompaniesHiring() {
  return (
    <Wrapper id="Trending Companies">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Trending Companies hiring now</h1>
            <br />
            <p className="font13">
              Explore exciting career opportunities with the latest 'Trending
              Companies Hiring Now.' Dive into a diverse array of industries and
              roles where innovation thrives and talent is valued. Discover
              forward-thinking organizations at the forefront of their fields,
              actively seeking skilled professionals like you to join their
              teams.
            </p>
          </HeaderInfo>
          <div className="row textCenter" style={{marginBottom: '140px'}}>
            {companies?.map((item) => (
              <div className="col-xs-12 col-xs-4 col-xs-4 col-md-4">
                <ProjectBox
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  action={() => alert("clicked")}
                />
              </div>
            ))}
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
