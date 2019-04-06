import React from "react";

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/dsc-dtu">GitHub</a>
          <a href="https://www.instagram.com/googledsc_dtu/">Instagram</a>
          <a href="https://linkedin.com/company/dsc-dtu">LinkedIn</a>
        </div>
        <div className="column" />
        
      </div>
    </div>
    <div className="copyright-area">
      <p>
      
      Delhi Technological University Bawana Rd, Daulatpur Village,<br /> Rohini,
      Delhi, 110042
      </p>
      <p>
      dsc.dtu@gmail.com
      <br />
      +91 96501 29191{new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
