import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LogoIcon from "../../assets/svg/LogoIcon";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import NewJobForm from "../Employer/NewJobForm";
import ViewPostedJobs from "../Employer/ViewPostedJobs";

export default function TopNavbar(props) {
  const [y, setY] = useState(window.scrollY);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  useEffect(() => {
    if (isAuthenticated) {
      switch (user.nickname) {
        case "freelancer":
          navigate("/freelancer/jobs");
          break;
        case "employer":
          navigate("/employer/posted-jobs");
          break;
        default:
          navigate("/");
      }
    }
  }, [isAuthenticated, navigate, user]);

  return (
    <>
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <NewJobForm
            open={isPostJobModalOpen}
            handleClose={() => setIsPostJobModalOpen(false)}
            jobs={props?.jobs}
            setJobs={props?.setJobs}
            updateAndStoreJobs={props?.updateAndStoreJobs}
            user={user}
          />
          <ViewPostedJobs
            showModal={showModal}
            setShowModal={setShowModal}
            user={user}
            jobs={props?.jobs}
          />
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Intuit Job Portal
            </h1>
          </Link>
          <UlWrapper className="flexNullCenter">
            {props?.navOptions?.map((item) => (
              <li className="semiBold font15 pointer">
                <div>
                  {item === "Posted Jobs" ? (
                    <a
                      style={{ padding: "10px 15px" }}
                      href="#"
                      onClick={() => setShowModal(true)}
                    >
                      {item}
                    </a>
                  ) : (
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
                  )}
                </div>
              </li>
            ))}
          </UlWrapper>
          {user?.nickname === "employer" && (
            <UlWrapper className="flexNullCenter">
              <div
                style={{
                  fontWeight: "bold",
                  backgroundColor: "rgb(118, 32, 255)",
                  padding: "12px",
                  boxShadow: "0px 0px 10px #D3D3D3",
                  borderRadius: "20px",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => setIsPostJobModalOpen(true)}
              >
                Post Jobs
              </div>
            </UlWrapper>
          )}
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <div
                style={{
                  padding: "15px",
                }}
              >
                {isAuthenticated && (
                  <Avatar alt={user?.name} src={user?.picture} />
                )}
              </div>
              <div
                onClick={() => {
                  if (isAuthenticated) {
                    logout();
                    localStorage.removeItem('jobs');
                  } else {
                    loginWithRedirect();
                  }
                }}
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
