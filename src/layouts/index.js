import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Donald Hruska"
      meta={[
        {
          name: "description",
          content:
            "Software engineer from Chicago, IL. Interested in building high performance, data-driven applications. Proficient in JavaScript, Python, Java, and C#."
        },
        {
          name: "keywords",
          content:
            "Software engineering, Chicago, JavaScript, HTML, CSS, Python, Java, C#, University of Illinois at Urbana-Champaign"
        }
      ]}
    >
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0 1.0875rem 1.45rem",
        paddingTop: "20vh",
        textAlign: "center"
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
