import React from "react";

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/dsc-dtu">GitHub</a>
          <a href="https://linkedin.com/company/dsc-dtu">LinkedIn</a>
          <a href="https://www.instagram.com/googledsc_dtu/">Instagram</a>
          <a href="https://www.facebook.com/pg/googledscdtu">Facebook</a>
        </div>
        <div className="column" />
        <div className="column">
          <strong>Delhi Technological University</strong> Bawana Road, Daulatpur
          Village, Rohini, Delhi, 110042
        </div>
      </div>
    </div>
    <div className="copyright-area" style={{ textAlign: "center" }}>
      <p>
        dsc.dtu@gmail.com
        <br />
        +91 96501 29191
      </p>
    </div>
  </footer>
);

export default Footer;
