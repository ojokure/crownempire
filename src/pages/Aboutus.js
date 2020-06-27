import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { imageBank } from "../utils/data";
import Header from "../components/Website/Header";
import Roller from "../components/LoadingIndicator/roller";
import box from "../assets/images/box.jpg";
import Footer from "../components/Website/Footer";

const Aboutus = ({ getUserStories, userStories, userStoriesStatus }) => {
  return (
    <>
      <Header height="60vh" image={box} />
      <StyledContainer>
        <h2>Who We Are!</h2>
        <div className="content">
          Crown Empire LLC is dedicated to bringing quality and express logistic
          services all across the United States.
        </div>
        {/* <div> */}
        <div>
          <h3>
            We keep your freight moving no matter what the destination is.
          </h3>
        </div>
        <div className="content">
          Crown Empire LLC was set up in 2020 with the underlying stage
          procurement in Maryland. Since then, we work daily to develop
          ourselves to be a better company not only for the community but also
          for our employees.
        </div>
        <div className="content">
          Whether it is moving a simple package that needs to be taken across
          town or meeting a complicated deadline in another state, you can trust
          us with your logistics.{" "}
        </div>

        <div className="content">
          We take care of your logistics in the most reliable way possible and
          make sure it reaches the final consumer safely and on time.
        </div>

        <div>
          <div>
            We cater services including
            <ul>
              <li> Packaging </li>
              <li> Delivery </li>
              <li> Trucking </li>
            </ul>
          </div>
          <div className="content">
            Our experienced and insured drivers have years of experience in this
            field, and they know all the routes to the different cities across
            the United States and just how to get there through the fastest
            routes.
          </div>
          <div className="content">
            We not only go the extra mile to make things happen; in fact, we are
            prepared to go an extra 10,000 miles if it's needed for us! We aim
            to provide a highly personal experience that exceeds the
            expectations of every customer.
          </div>
          <div className="content">
            <h3> Client satisfaction is the most important to us. </h3>
            We believe that if our customers thrive, we thrive. For this reason,
            we cherish serving our clients in the best way possible.{" "}
          </div>
          <div className="content">
            So what are you waiting for? If you want to move something across
            the town or the state, we're here to take care of it.
          </div>
          <div>
            Contact us today by calling us at 3018612040 or email us
            contact@crownempirellc.com to book a FREE quote and get express
            delivery services at Crown Logistics.
          </div>
        </div>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Aboutus;

const StyledContainer = styled.main`
  /* margin: 0 auto;
  width: 85vw; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* text-align: center; */
  padding: 20px;
  font-size: 17px;
  /* font-family: "Source Sans Pro", sans-serif; */

  ul {
    margin-left: 30px;
    list-style-type: disc;
  }

  .content {
    padding: 1rem;
    margin: 2rem;
    text-align: center;
  }
`;
