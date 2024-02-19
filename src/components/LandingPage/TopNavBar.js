import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LogoIcon from "../../assets/svg/LogoIcon";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';


export default function TopNavbar(props) {
  const [y, setY] = useState(window.scrollY);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/freelancer/jobs");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Intuit Job Portal
            </h1>
          </Link>
          <UlWrapper className="flexNullCenter">
            {props?.navOptions?.map((item) => (
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  {item}
                </Link>
              </li>
            ))}
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <div  style={{
                  padding: "15px",
                }}>
            {isAuthenticated && <Avatar alt={user?.name} src={user?.picture} />}
            </div>
              <div
                onClick={() => isAuthenticated ? logout() : loginWithRedirect()}
                className="radius8 lightBg"
                style={{
                  padding: "10px 15px",
                  background: isAuthenticated ? "red" : "rgb(118, 32, 255)",
                  color: "#fff",
                }}
              >
                {isAuthenticated ? "Log out" : "Log in"}
              </div>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
