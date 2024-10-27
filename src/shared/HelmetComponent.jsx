import React from "react";
import { Helmet } from "react-helmet";

export const HelmetComponent = ({ title }) => (
  <Helmet>
    <title>CRAFTO {title ? `| ${title}` : ""}</title>{" "}
  </Helmet>
);
