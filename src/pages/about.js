import React from "react";
import Link from "gatsby-link";

const About = () => (
  <div>
    <h1>Donald Hruska</h1>
    <h2>Experience</h2>
    <p>
      <a href="https://www.orchard.ai">Orchard</a> - Co-Founder - Aug 2017 -
      Present
      <div>DRIVIN - Software Engineer - Mar 2016 - Aug 2017</div>
      <div>The Tie Bar - Software Engineer - May 2015 - Mar 2016</div>
      <div>
        One North Interactive - Software Developer - Apr 2014 - May 2015
      </div>
      <div>
        Project Leadership Associates - Software Developer - Jun 2013 - Apr 2014
      </div>
      <div>Produce Pro Software - Mobile Developer Intern - Summer 2012</div>
    </p>
    <h2>Education</h2>
    <p>
      University of Illinois at Urbana-Champaign - B.S. Computer Engineering
    </p>
    <Link to="/">Home</Link>
  </div>
);

export default About;
