import React, { useState, useEffect } from "react"
import { Waypoint } from "react-waypoint"
import "../styles/style.scss"
import SectionWaypoint from "../components/section-waypoint"
import IntroCurtainL from "../components/intro-curtain-l"
import IntroCurtainR from "../components/intro-curtain-r"
import Nav from "../components/nav"
import Portfolio from "../components/portfolio"
import SkillsItem from "../components/skills-item"
import ExperienceItem from "../components/experience-item"
import Helmet from "../components/helmet"
import ContactForm from "../components/contact-form"
import pfItems from "../content/pf-items"
import profileImg from "../images/profile.jpg"

const navItems = [
  {
    name: "Intro",
    id: "intro",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Portfolio",
    id: "portfolio",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Experience",
    id: "exp",
  },
  {
    name: "Contact",
    id: "contact",
  },
]

const IndexPage = () => {
  const [navIndex, setNavIndex] = useState(0)
  const [navHeight, setNavHeight] = useState(90)
  useEffect(() => {
    setNavHeight(document.querySelector("nav").offsetHeight)
  }, [])
  return (
    <>
      <Helmet />
      <div className="loader">
        <div className="loader-mask"></div>
        <div className="intro-curtain-l">
          <IntroCurtainL />
        </div>
        <div className="intro-curtain-r">
          <IntroCurtainR />
        </div>
        <div className="loading-text">
          <span className="loading-text__l">
            <span className="loading-text__l-i">Load</span>
          </span>
          <span className="loading-text__r">
            <span className="loading-text__r-i">ing...</span>
          </span>
        </div>
      </div>

      <div className="main">
        <Waypoint
          topOffset={navHeight}
          onEnter={() => {
            document.body.classList.remove("sticky-nav")
          }}
          onLeave={() => {
            document.body.classList.add("sticky-nav")
          }}
        >
          <div className="page-section" id="intro">
            <div className="intro intro--back"></div>
            <div className="intro">
              <div className="intro-title">
                <h1>
                  <div>Amiel Zwier</div>
                  <div>Senior full stack developer</div>
                </h1>
              </div>
              <Nav items={navItems} navIndex={navIndex} navHeight={navHeight} />
            </div>
          </div>
        </Waypoint>
        <div>
          <SectionWaypoint index={1} setNavIndex={setNavIndex} />
          <div className="page-section" id="about">
            <div className="about std-section">
              <div className="page-section__inner">
                <div className="heading-2">
                  <h2>About me</h2>
                </div>
                <div className="about__main">
                  <div className="about__text">
                    <p>
                      I’ve been working in application development for 12 years
                      and I’m passionate about beautiful user experiences. The
                      smallest details on a website or app add up to making a
                      big impact.
                    </p>
                    <p>
                      My experience includes web development with profficiency
                      in Typescript, React, Redux and Next JS. I have also
                      worked with numerous backend technologies to build out
                      fully functional services through both REST and GraphQL.
                      Backend languages include python, django, PHP and Node JS
                      and other frameworks.
                    </p>
                    <a
                      className="download-button"
                      target="_blank"
                      href="/AmielZCV_portfolio.pdf"
                      rel="noopener noreferrer"
                    >
                      <i className="icon icon-download"></i>Download CV
                    </a>
                  </div>
                  <div className="about__img">
                    <img src={profileImg} alt="Amiel Zwier" />
                    <div
                      style={{
                        backgroundImage:
                          "url({{site.theme.link}}/assets/images/profile.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionWaypoint index={2} setNavIndex={setNavIndex} />
          <div className="page-section" id="portfolio">
            <Portfolio pfItems={pfItems} navHeight={navHeight} />
          </div>
          <SectionWaypoint index={3} setNavIndex={setNavIndex} />
          <div className="page-section" id="skills">
            <div className="skills std-section">
              <div className="page-section__inner">
                <div className="heading-2">
                  <h2>Core Skills</h2>
                </div>
                <div className="skills__main">
                  <div className="skills__grid">
                    <SkillsItem
                      title="Advanced interactions"
                      description="Progressive app design, retina, WAI-ARIA, SVG animation, parallax, video"
                      iconClass="icon-css"
                    />
                    <SkillsItem
                      title="Modern web frameworks"
                      description="Typescript, React JS, Redux, Apollo / GraphQL, Socket IO, Gatsby, Jekyll"
                      iconClass="icon-html"
                    />
                    <SkillsItem
                      title="Dev tools"
                      description="Github actions, CircleCI, Webpack, Rollup, Gulp, Enzyme, Jest, Testing library, Prettier"
                      iconClass="icon-robust"
                    />
                    <SkillsItem
                      title="Cloud services"
                      description="AWS, Google Cloud, Firebase, Digital Ocean, Segment, Amplitude, Google Analytics"
                      iconClass="icon-animation"
                    />
                    <SkillsItem
                      title="CMS Integration"
                      description="Wordpress, Contentful, Sanity, Umbraco"
                      iconClass="icon-cms"
                    />
                    <SkillsItem
                      title="Fullstack tech"
                      description="PHP, Node Express, Django, Python, PostgreSQL, Mongo DB"
                      iconClass="icon-backend"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionWaypoint index={4} setNavIndex={setNavIndex} />
          <div className="page-section" id="exp">
            <div className="experience std-section">
              <div className="page-section__inner">
                <div className="heading-2">
                  <h2>Work Experience</h2>
                </div>
                <div className="experience__main">
                  <ExperienceItem
                    title="Parsley Health"
                    period="May 2017 - April 2021"
                    schedule="Full time"
                    role="Senior Developer"
                    description="Lead applications developer and architect for Parsley Health’s member web services, including their patient portal, sign up flow and provider administration tools."
                  />

                  <ExperienceItem
                    title="NBCUniversal"
                    period="June 2016 - May 2017"
                    schedule="Full time"
                    role="UX Designer / Developer"
                    description="Working as a web developer and ux designer for the NBCU
                    UX research team."
                  />
                  <ExperienceItem
                    title="Deepend (Digital Agency)"
                    period="July 2014 - March 2016"
                    schedule="Full time"
                    role="Front end developer"
                    description="Front end web development for a number of Deepened’s
                    clients. My work included full stack word press sites,
                    and working in larger teams to integrate with enterprise
                    CMSs."
                  />
                  <ExperienceItem
                    title="Siam Studios"
                    period="March 2014 - July 2014"
                    schedule="Contract"
                    role="Full stack developer"
                    description="Website development for Siam’s global clients."
                  />
                  <ExperienceItem
                    title="Double Z Computer Pty Ltd"
                    period="July 2013 – July 2014"
                    schedule="Contract"
                    role="Web designer / Software developer"
                    description="                        Double Z provides a software solution that helps
                    suppliers and retailers to trade through EDI. My primary
                    role was a software engineer and operation support for
                    the company’s products and offerings."
                  />
                  <ExperienceItem
                    title="PlayFi Pty Ltd"
                    period="2009 – 2013"
                    schedule="Full time"
                    role="CEO / Web designer / Software developer"
                    description="                        PlayFi is an interactive web broadcast platform
                    developed in Melbourne Australia that facilitates
                    monetization of live and on demand video on the web. I
                    was a co-founder of the company and CEO, as well as the
                    lead UX designer and front-end developer."
                  />
                </div>
              </div>
            </div>
          </div>
          <SectionWaypoint index={5} setNavIndex={setNavIndex} />
          <div className="page-section" id="contact">
            <div className="contact std-section">
              <div className="page-section__inner">
                <div className="heading-2">
                  <h2>Contact</h2>
                </div>
                <div className="contact-main">
                  <div className="contact-items">
                    <h3>Interested in hiring me or just want to say hi?</h3>
                    <p>
                      I'd love to discuss your project and see how we can create
                      an experience that will delight your users.
                    </p>
                    <a href="mailto:hi@amielzwier.com">
                      <i className="icon icon-email"></i>hi@amielzwier.com
                    </a>
                    <a
                      href="https://au.linkedin.com/in/amiel-zwier-71536352"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon icon-linkedin-circle"></i>LinkedIn
                    </a>
                    <a
                      href="https://github.com/amized"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon icon-github"></i>GitHub
                    </a>
                  </div>
                  <div className="form">
                    <ContactForm />
                  </div>
                </div>
                <div className="copyright">
                  &copy; Copyright Amiel Zwier {new Date().getFullYear()}
                </div>
                <Waypoint
                  onEnter={() => {
                    setNavIndex(5)
                  }}
                  onLeave={() => {
                    setNavIndex(4)
                  }}
                />
              </div>
            </div>
          </div>
          <SectionWaypoint index={6} setNavIndex={setNavIndex} />
        </div>
      </div>
    </>
  )
}

export default IndexPage
