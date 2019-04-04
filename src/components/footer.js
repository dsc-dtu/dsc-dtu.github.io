import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/dsc-dtu">GitHub</a>
          <a href="https://www.instagram.com/googledsc_dtu/">Instagram</a>
          <a href="https://linkedin.com/company/dsc-dtu">LinkedIn</a>
        </div>
        <div className="column">
          
        </div>
        <div className="column">
          <p>
            <strong>DSC-DTU</strong><br/>
            Delhi Technological University
            Bawana Rd, Daulatpur Village, Rohini, Delhi, 110042<br/><br/>
            sosc@sahyadri.edu.in<br/>
            +91 9539518599
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>DSC © { new Date().getFullYear() }</p>
    </div>
  </footer>
)

export default Footer
