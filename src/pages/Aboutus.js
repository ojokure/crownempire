import React from "react";

import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import ceo from "../assets/images/ceo.jpg";
import driver from "../assets/images/driver2.jpg";
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
            we cherish serving our clients in the best way possible.
          </p>

          <p>
            Crown Empire LLC is dedicated to bringing quality and express
            logistic services all across the United States.
          </p>
          <p>
            Crown Empire LLC was set up in 2020 with the underlying stage
            procurement in Maryland. Since then, we work daily to develop
            ourselves to be a better company not only for the community but also
            for our employees.
          </p>
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

      <StyledAboutBottom></StyledAboutBottom>
      <CareerConatiner>
        <h3> CAREERS </h3>
        <StyledCareer>
          <div className="career-content">
            <h4> COME WORK WITH US </h4>
            <p className="career-par" style={{ textAlign: "center" }}>
              We are constantly looking for great minds to join our team and
              grow with us.{" "}
            </p>
            <p className="career-par">
              As an organization, we are constantly working to grow our company
              into one that best satisfies the needs of our customers. And as
              such we are committed to the development of our employees that
              deliver consistent quality logistic services to our customers. We
              value our people as the greatest assets, so we give attention to
              their welfare, training and development.
            </p>

            <p className="career-par">
              We don’t just offer jobs. We are welcoming you into a company with
              a crucial mind-set and an organization that values its employees.
            </p>

            <p className="career-par">
              We are looking for professional drivers with wealth of experience,
              that can become an integral part of our team and help us grow from
              a company to industry. Do you think you're a good fit ?
            </p>
          </div>
          <div className="career-image-div">
            <img src={driver} alt="driver" />
          </div>
        </StyledCareer>
        <p className="career-bottom-par">
          Apply to our logistics company today and grow with the most
          experienced professionals!
        </p>
        <p className="career-bottom-par">
          {"To apply, kindly send an email with your resume to "}
          <a className="anchor" href="mailto:careers@crownempirellc.com">
            careers@crownempirellc.com
          </a>
        </p>
      </CareerConatiner>
      <Footer />
    </>
  );
};

export default Aboutus;

const CareerConatiner = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 40% 0 0%;
  background: #f2f6f5;
  margin-top: 6rem;
  padding: 3rem;

  .career-bottom-par {
    text-align: center;
    font-size: 22px;
    line-height: 1.4;
    margin: 0;
    font-weight: bold;
    font-family: "Lateef", cursive;
    color: #3f3d56;
  }

  h3 {
    color: #3f3d56;
    text-align: center;
    font-size: 4.2rem;
    font-weight: 600;
  }

  .anchor {
    font-family: "Lateef", cursive;
    color: #0097cd;
  }
`;

const StyledCareer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media ${devices.tablet} {
    flex-direction: column-reverse;
  }

  h5 {
    color: #3f3d56;
    text-align: center;
    font-weight: 600;
    font-size: 2.5rem;
  }

  .career-content {
    display: flex;
    flex-direction: column;
    width: 100;
    height: 100%;
    justify-content: center;
    padding: 30px;
    padding-top: 30px;

    h4 {
      color: #3f3d56;
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
    }
    @media ${devices.tablet} {
    }
  }

  .career-par {
    font-size: 21px;
    line-height: 1.3;
    margin: 0;
    font-weight: bold;
    max-width: 100rem;
    font-family: "Lateef", cursive;
    color: #3f3d56;
    padding-bottom: 1.5rem;

    @media ${devices.mobile} {
      text-align: center;
    }
  }
  .career-image-div {
    max-width: 70%;
    max-height: 38rem;
    text-align: center;
    padding: 30px;
    margin: 0px;

    img {
      width: 100%;
      height: 100%;
      text-align: center;
      border-radius: 8%;

      @media ${devices.mobile} {
        text-align: center;
        width: 150%;
      }
    }

    @media ${devices.tablet} {
      width: 600px;
      text-align: center;
      margin-left: 100px;
    }

    @media ${devices.mobile} {
      width: 360px;
      text-align: center;
      margin-left: 10px;
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 55px;
  padding-left: 60px;

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

  align-items: center;

  width: 60%;

  p {
    margin: 0;
    font-size: 21px;
    color: #3f3d56;

    font-weight: 800;
    line-height: 1.3;

    @media ${devices.mobile} {
      text-align: center;
      max-width: 350px;
    }
  }
  h2 {
    color: #3f3d56;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
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

  align-items: center;
  padding-top: 25px;

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
  }

  .card-image {
    width: 100%;
    height: 16rem;
    background: #7a7a7a;
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
