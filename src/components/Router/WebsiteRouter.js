import React from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Aboutus from "../../pages/Aboutus";
import Contact from "../../pages/Contact";
import SingleUserStory from "../../pages/SingleUserStory";
import Volunteer from "../../pages/Volunteer";

const WebsiteRouter = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={Aboutus} />
    <Route path="/contact" component={Contact} />
    <Route path="/volunteer" component={Volunteer} />
  </>
);

export default WebsiteRouter;
