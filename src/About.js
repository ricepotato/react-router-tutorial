import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>About</h1>
      <p>This project is router base.</p>
      {showDetail && <p>detail 값 true</p>}
    </div>
  );
};

export default About;
