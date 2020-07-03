import React from "react";

import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Website/Header";
// import trk3 from "../assets/images/trk3.jpg";
import Footer from "../components/Website/Footer";
import ceo from "../assets/images/ceo.jpg";
import devices from "../utils/devices";

const Aboutus = () => {
  return (
    <>
      <Header height="70vh" />
      <StyledContainer>
        <StyledAbout>
          <h3 style={{ paddingBottom: "25px", color: "#3f3d56" }}>
            From our CEO{" "}
          </h3>

          <div className="about-card">
            <div className="card-image"></div>
            <img className="profile-image" src={ceo} alt="ceo-pic" />
            <div className="info">
              <h4 className="name">Addie Renner</h4>
              <p className="position">CEO & Co-founder</p>
            </div>
          </div>
        </StyledAbout>
        <StyledContent>
          <h2> OUR MISSION </h2>

          <p>
            We believe that if our customers thrive, we thrive. For this reason,
            we cherish serving our clients in the best way possible.{" "}
            <p>
              Crown Empire LLC is dedicated to bringing quality and express
              logistic services all across the United States.
            </p>
          </p>
          <p>
            Crown Empire LLC was set up in 2020 with the underlying stage
            procurement in Maryland. Since then, we work daily to develop
            ourselves to be a better company not only for the community but also
            for our employees.
          </p>
          {/* <p>
            Whether it is moving a simple package that needs to be taken across
            town or meeting a complicated deadline in another state, you can
            trust us with your logistics.{" "}
          </p>
          <p>
            We take care of your logistics in the most reliable way possible and
            make sure it reaches the final consumer safely and on time.
          </p> */}
          <div>
            <p>
              Our experienced and insured drivers have years of experience in
              this field, and they know all the routes to the different cities
              across the United States and just how to get there through the
              fastest routes.
            </p>
            <p>
              We not only go the extra mile to make things happen; in fact, we
              are prepared to go an extra 10,000 miles if it's needed for us! We
              aim to provide a highly personal experience that exceeds the
              expectations of every customer.
            </p>
          </div>
        </StyledContent>
      </StyledContainer>

      <StyledAboutBottom>
        {/* <div>
          So what are you waiting for? If you want to move something across the
          town or the state, we're here to take care of it.
        </div> */}
      </StyledAboutBottom>

      <StyledCareer>
        <h3> CAREERS </h3>
        {/* <h5> COME WORK WITH US </h5> */}
        <p
          style={{ textAlign: "center", fontSize: "2.5rem", color: "#3f3d56" }}
        >
          Crown Empire LLC is always eager to meet fresh talent who are willing
          to work and grow with us.{" "}
        </p>
        <p>
          We are committed to the development of our employees who deliver
          consistent quality logistic services to our customers. We do this by
          training them with the necessary skills, support training, and
          opportunities that they need in order to be successful.{" "}
        </p>{" "}
        <p>
          We provide career opportunities all over the United States. We have a
          developed HR system in every region that encourages the development of
          our employees in different ways.{" "}
        </p>{" "}
        <p>
          {" "}
          We are looking for drivers who can help us grow from a company to
          industry, without teamwork and efficient employees, We believe a
          company can not stand well.
        </p>
        <p>
          {" "}
          As a team, we are constantly working to grow our company into one that
          is best for the society as well as its employees. Taking care of our
          efficient and hardworking employees is our top priority. If they are
          benefitting our company, we benefit them equally.
        </p>{" "}
        <p
          style={{ textAlign: "center", fontSize: "2.2rem", color: "#3f3d56" }}
        >
          Apply to our logistics company today and grow with the most
          experienced professionals!{" "}
        </p>
        <p style={{ textAlign: "center", fontSize: "2.2rem" }}>
          {"To apply, kindly send an email with your resume to "}
          <a className="anchor" href="mailto:careers@crownempirellc.com">
            careers@crownempirellc.com
          </a>
        </p>
      </StyledCareer>
      <Footer />
    </>
  );
};

export default Aboutus;

const StyledCareer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 40% 0 0%;
  background: #f2f6f5;
  padding: 7rem;
  padding-top: 4rem;

  margin-top: 6rem;

  .anchor {
    font-family: "Lateef", cursive;
    color: #0097cd;
  }
  p {
    margin: 0;
    /* margin-bottom: 15.025px; */
    color: #3f3d56;
    font-size: 21px;
    /* color: #707070; */
    font-weight: 600;
    line-height: 1.3;
    font-family: "Lateef", cursive;
    padding: 0.8em;
  }
  h3 {
    color: #3f3d56;
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    /* font-family: "Lateef", cursive; */
  }

  h5 {
    color: #3f3d56;
    text-align: center;
    font-weight: 600;
    font-size: 2.5rem;
    /* font-family: "Lateef", cursive; */
  }
`;
const StyledContainer = styled.div`
  /* margin: 0 auto;
  width: 85vw; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* text-align: center; */
  padding-top: 55px;
  padding-left: 60px;
  /* padding-right: 60px;  */

  font-size: 2.2rem;
  font-family: "Lateef", cursive;

  ul {
    margin-left: 30px;
    list-style-type: disc;
  }

  p {
    font-size: 2.1rem;
    width: 60rem;
    color: #707070;

    /* padding: 1rem; */
    /* margin: 2rem; */
    /* text-align: center; */
  }

  @media ${devices.tablet} {
    flex-direction: column;
    padding-left: 0;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #707070;

  /* justify-content: center; */
  align-items: center;
  /* padding-top: 20px; */
  /* height: 80%; */
  width: 60%;

  p {
    margin: 0;
    /* margin-bottom: 15.025px; */
    font-size: 21px;
    /* color: #707070; */
    color: #3f3d56;

    font-weight: 800;
    line-height: 1.3;

    @media ${devices.mobile} {
      /* text-align: center; */
      max-width: 350px;
    }
  }
  h2 {
    color: #3f3d56;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;

    /* font-family: "Lateef", cursive; */
  }

  h4 {
    color: #3f3d56;
    font-size: 2rem;
    font-family: "Lateef", cursive;
  }
`;

const StyledAboutBottom = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledAbout = styled.div`
  color: #707070;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* width: 100%; */
  align-items: center;
  padding-top: 25px;
  /* margin-top: 0;  */

  .about-cards-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1280px;
  }

  .about-card {
    margin: 0 1rem 2rem 1rem;
    box-shadow: 0 4px 12px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 6px;
    width: 32rem;
    /* background: #daefdf; */
  }

  .card-image {
    width: 100%;
    height: 16rem;
    background: #7a7a7a;
    /* background: #65617d; */
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 49%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 49%, 0% 100%);
    border-radius: 6px;
  }

  .profile-image {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -10rem;
    z-index: 1000;
    /* border: 1rem solid #daefdf; */
  }

  .info {
    margin: 1rem 0 3rem 0;
  }

  .name {
    color: #3f3d56;
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  .position {
    color: #655f69;
    font-size: 1.8rem;
    margin: 0;
  }
`;
