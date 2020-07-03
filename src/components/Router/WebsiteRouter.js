import React from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Aboutus from "../../pages/Aboutus";
import Contact from "../../pages/Contact";

const WebsiteRouter = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={Aboutus} />
    <Route path="/contact" component={Contact} />
  </>
);

export default WebsiteRouter;
