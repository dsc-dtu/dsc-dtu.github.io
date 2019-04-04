import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const IndexPage = props => (
  <Layout>
    <div className="page white-bg">
      <div className="container">
        <section className="hero-section">
          <div className="hero-texts">
            <Img
              fluid={props.data.imageFirst.childImageSharp.fluid}
              className="sosc-logo"
              alt="sosc logo"
            />
            <p className="sosc-header">
              Google
              <br />
              Developer Student Club(DTU)
            </p>
            <p>
            Developer Student Club (DSC) is a Google Developers program for university students 
            to learn mobile and web development skills. The club will be open to any student, 
            ranging from novice developers who are just starting, to advanced developers who want 
            to further their skills. The club is intended as a space for students to try out new
             ideas and collaborate to solve mobile and web development problems.
            </p>
            <a
              href="https://goo.gl/forms/aUAhUoOI7a4taYPc2"
              className="btn-hero-green"
            >
              Become a member
            </a>
          </div>
          <div>
            <Img
              fluid={props.data.imageOne.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
        </section>
      </div>
      <div className="container">
        <section className="hero-section2 ">
          <Img
            fluid={props.data.imageTwo.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
          <div className="hero-texts">
            <p className="hero-header">What do we do?</p>
            <div className="dash" />
            <p>
            Google Developer Groups can take many forms - from just a 
            few people getting together to watch some videos, to large 
            gatherings with demos, tech talks, hackathons and conferences. 
            We work on various technical domains and try to make use 
            of Google Technologies to empower the audience around us.
            </p>
            <Link className="btn-hero-green" to="/clubs">Learn More →  </Link>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="hero-section3">
          <div className="hero-texts">
            <p className="hero-header">Get Trained in Various Domains</p>
            <div className="dash" />
            <p>The DSC-DTU provide students with the opportunity to:
             Grow their knowledge on developer technologies and more through peer to peer workshops and events, 
             gain relevant industry experience by solving problems for local organizations with technology based solutions and
             showcase their prototypes and solutions to their local community and industry leaders.
            </p>
          </div>
          <Img
            fluid={props.data.imageThree.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
        </section>
      </div>
      <div className="container">
        <section className="hero-section4">
          <div>
            <Img
              fluid={props.data.imageFour.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
          <div className="hero-texts">
            <p className="hero-header">Get Connected !</p>
            <div className="dash" />
            <p>
              Meet our memebers with similar interest to work together on projects and
              host events to build a better collaborative environment. We are
              more than 15 members with interests on various fields of
              technology here to know each other and get connected.
            </p>
            <Link to="/team" className="btn-hero-green">
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File {
    childImageSharp {
      fluid(maxWidth: 2500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/dsc-logo.png" }) {
      ...firstSiteImages
    }
    imageOne: file(relativePath: { eq: "images/hero_main.png" }) {
      ...firstSiteImages
    }
    imageTwo: file(relativePath: { eq: "images/hero_clubs.png" }) {
      ...firstSiteImages
    }
    imageThree: file(relativePath: { eq: "images/hero_github.png" }) {
      ...firstSiteImages
    }
    imageFour: file(relativePath: { eq: "images/hero_connect_.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
