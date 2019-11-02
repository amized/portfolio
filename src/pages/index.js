import React from "react"
import IntroCurtainL from "../components/intro-curtain-l"
import IntroCurtainR from "../components/intro-curtain-r"

const IndexPage = () => (
  <>
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
      <div className="page-section" id="intro">
        <div className="intro intro--back"></div>
        <div className="intro">
          <div className="intro-title">
            <h1>
              <div>I'm Amiel Zwier</div>
              <div>I code friendly web experiences</div>
            </h1>
          </div>

          <nav id="nav">
            <div className="nav-list">
              <a href="#">Intro</a>
              <a href="#">About</a>
              <a href="#">Skills</a>
              <a href="#">Experience</a>
              <a href="#">Education</a>
              <a href="#">Work</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </div>
      </div>

      <div className="page-section" id="about">
        <div className="about std-section">
          <div className="page-section__inner">
            <div className="heading-2">
              <h2>About me</h2>
            </div>
            <div className="about__main">
              <div className="about__text">
                <h3>Amiel Zwier</h3>
                <h4>Front-end Web Developer</h4>
                <p>
                  Hi there, I’ve been working in web development for 8+ years.
                  I’m passionate about beautiful web design and building
                  seamless user experiences. The smallest things on a website
                  can make a big difference - like animations that direct users
                  to an action, or graceful form errors, and even simply lining
                  up elements to the pixel.
                </p>
                <p>
                  When all of this is done well, the user forgets they're on a
                  website - now they can engage your content with their full,
                  undivided attention. And that’s my priority when building a
                  site.
                </p>
                <p>
                  My main skills focus around front end web work, including
                  responsive css, advanced web animation, modern javascript
                  frameworks and app style development for web. I am also
                  skilled as a full stack developer with a number of backend
                  frameworks, including Wordpress/php, Django and Node Js.
                </p>
                <a
                  className="download-button"
                  target="_blank"
                  href="{{ options.resume_link.url }}"
                >
                  <i className="icon icon-download"></i>Download CV
                </a>
              </div>
              <div className="about__img">
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

      <div className="page-section" id="skills">
        <div className="skills std-section">
          <div className="page-section__inner">
            <div className="heading-2">
              <h2>Core Skills</h2>
            </div>
            <div className="skills__main">
              <div className="skills__grid">
                <div className="skills__item">
                  <i className="icon icon-css"></i>
                  <div className="skills__item-title">Advanced CSS</div>
                  <p>
                    Responsive, retina optimized, BEM syntax, browser compliance
                  </p>
                </div>
                <div className="skills__item">
                  <i className="icon icon-animation"></i>
                  <div className="skills__item-title">Web animation</div>
                  <p>
                    SVG animation, parallax, graphs, grids, interaction states,
                    HTML 5 video
                  </p>
                </div>

                <div className="skills__item">
                  <i className="icon icon-robust"></i>
                  <div className="skills__item-title">
                    Robust UI Architecture
                  </div>
                  <p>
                    Web components, MVC, Flux, readable code, reusable code,
                    Grunt/Gulp pipelines
                  </p>
                </div>

                <div className="skills__item">
                  <i className="icon icon-html"></i>
                  <div className="skills__item-title">Javascript</div>
                  <p>
                    ECMAScript 6 syntax, Common JS modules, React JS, Angular,
                    JQuery
                  </p>
                </div>

                <div className="skills__item">
                  <i className="icon icon-cms"></i>
                  <div className="skills__item-title">
                    Enterprise CMS Integration<span className="lower"></span>
                  </div>
                  <p>Umbranco, Kentico and Sitecore</p>
                </div>

                <div className="skills__item">
                  <i className="icon icon-backend"></i>
                  <div className="skills__item-title">
                    Full-stack backend frameworks
                  </div>
                  <p>Django, PHP, Wordpress, Node JS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section" id="exp">
        <div className="experience std-section">
          <div className="page-section__inner">
            <div className="heading-2">
              <h2>Work Experience</h2>
            </div>
            <div className="experience__main">
              <div className="exp__item">
                <div className="exp__item-period">
                  <span>July 2016 - Present</span>
                  <strong>Full time</strong>
                </div>
                <div className="exp__item-info">
                  <h3>
                    <a href="http://deepend.com.au" target="_blank">
                      NBCUniversal
                    </a>
                  </h3>
                  <h4>UX Designer / Developer</h4>
                  <p>
                    Working as a web developer and ux designer for the NBCU UX
                    research team.
                  </p>
                </div>
              </div>
              <div className="exp__item">
                <div className="exp__item-period">
                  <span>July 2014 - March 2016</span>
                  <strong>Full time</strong>
                </div>
                <div className="exp__item-info">
                  <h3>
                    <a href="http://deepend.com.au" target="_blank">
                      Deepend
                    </a>
                  </h3>
                  <h4>Front end developer</h4>
                  <p>
                    Front end web development for a number of Deepened’s
                    clients. My work included full stack word press sites, and
                    working in larger teams to integrate with enterprise CMSs.
                  </p>
                </div>
              </div>
              <div className="exp__item">
                <div className="exp__item-period">
                  <span>March 2014 - July 2014</span>
                  <strong>Contract</strong>
                </div>
                <div className="exp__item-info">
                  <h3>
                    <a href="http://www.siamstudios.com.au/" target="_blank">
                      Siam Studios
                    </a>
                  </h3>
                  <h4>Full stack developer</h4>
                  <p>Website development for Siam’s global clients.</p>
                </div>
              </div>
              <div className="exp__item">
                <div className="exp__item-period">
                  <span>July 2013 – July 2014</span>
                  <strong>Contract</strong>
                </div>
                <div className="exp__item-info">
                  <h3>
                    <a href="http://webplus.ediplus.com.au/">
                      Double Z Computer Pty Ltd
                    </a>
                  </h3>
                  <h4>Web designer / Software developer</h4>
                  <p>
                    Double Z provides a software solution that helps suppliers
                    and retailers to trade through EDI. My primary role was a
                    software engineer and operation support for the company’s
                    products and offerings.
                  </p>
                </div>
              </div>
              <div className="exp__item">
                <div className="exp__item-period">
                  <span>2009 – 2013</span>
                  <strong>Full time</strong>
                </div>
                <div className="exp__item-info">
                  <h3>
                    <a href="https://playfi.com" target="_blank">
                      PlayFi Pty Ltd
                    </a>
                  </h3>
                  <h4>CEO / Web designer / Software developer</h4>
                  <p>
                    PlayFi is an interactive web broadcast platform developed in
                    Melbourne Australia that facilitates monetization of live
                    and on demand video on the web. I was a co-founder of the
                    company and CEO, as well as the lead UX designer and
                    front-end developer.
                  </p>
                </div>
              </div>
              <div className="exp__item">
                <div className="exp__item-period">
                  <span>2006 – 2010</span>
                  <strong>Part time</strong>
                </div>
                <div className="exp__item-info">
                  <h3>
                    <a href="http://www.salmat.com.au/" target="_blank">
                      Salmat Pty Ltd
                    </a>
                  </h3>
                  <h4>Customer service representative</h4>
                  <p>
                    I worked in a call center handling customer enquiries for
                    City LinkPractically applied strategies to resolve conflict.
                    Provided professional, competent and friendly customer
                    service, ensuring that customers were satisfied.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  I'd love to discuss your project and see how we can create an
                  experience that will delight your users.
                </p>
                <a href="mailto:hi@amielzwier.com">
                  <i className="icon icon-email"></i>hi@amielzwier.com
                </a>
                <a
                  href="https://au.linkedin.com/in/amiel-zwier-71536352"
                  target="_blank"
                >
                  <i className="icon icon-linkedin-circle"></i>LinkedIn
                </a>
                <a href="https://github.com/amized" target="_blank">
                  <i className="icon icon-github"></i>GitHub
                </a>
              </div>
              <div className="form">
                {/*{ function("gravity_form", 1, false, false, false, '', true, 12) }*/}
              </div>
            </div>
            <div className="copyright">&copy; Copyright Amiel Zwier 2017</div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
