import jurassicWorldThumb from "../images/jurrasic-world-1.jpg"
import jurrasicWorldMockup from "../images/william_rajwan_jurassic_world_dinosaurs.jpg"
import npuThumb from "../images/npu-thumb.jpg"
import npuMockup from "../images/npu-mockup.jpg"
import acmiThumb from "../images/acmi-thumb.jpg"
import acmiMockup from "../images/acmi-mockup.jpg"
import fandanglesThumb from "../images/fandangles-thumb.jpg"
import fandanglesMockup from "../images/fangkles-screenshot.jpg"
import hwwoThumb from "../images/hwwa-thumb2.jpg"
import hwwaMockup from "../images/hwwa-mockup.jpg"
//import wilsonThumb from "../images/wilson-thumb1.jpg"
//import wilsonMockup from "../images/wilson-screen.jpg"
//import moroThumb from "../images/moro-thumb.jpg"
//import moroMockup from "../images/moro-mockup.jpg"
import scenicThumb from "../images/scenic-thumb.jpg"
import scenicMockup from "../images/scenic-mockup.jpg"
import parsleyThumb from "../images/PH-Medicine.jpg"
import parsleyMockup from "../images/parsley-mock.jpg"
import showedThumb from "../images/showed-thumb.png"
import showedMockup from "../images/showed-mockups.png"

export default [
  {
    title: "Showed",
    description:
      "Virtual event streaming and ticketing platform to help venues and performers monetize their online performances.",
    thumbnail: showedThumb,
    screenshot: showedMockup,
    link: "https://showed.tv",
    technologies: [
      { name: "Typescript, React, Apollo" },
      { name: "Django, PostgreSQL, graphql backend" },
      { name: "Docker, CI deployments" },
      {
        name: "Firebase authentication and Firestore real time database",
      },
    ],
  },
  {
    title: "My Parsley Health",
    description:
      "Patient portal for Parsley Health members, allowing them schedule visits, messaging doctors, see lab results and view their health plans.",
    thumbnail: parsleyThumb,
    screenshot: parsleyMockup,
    link: "https://my.parsleyhealth.com",
    technologies: [
      { name: "SPA build with Typescript, React, Redux and Apollo" },
      { name: "Graphql Layer built in Node JS" },
      {
        name:
          "Integration with 3rd party EMR, messaging service and other backend services",
      },
      {
        name: "Authentication with google identity",
      },
      {
        name:
          "Dev tools included create react app, github actions, apollo codegen and more",
      },
    ],
  },
  {
    title: "Jurrasic World Prototype",
    description:
      "As part of a pitch to Universal Pictures, the NBCUniversal UX team presented a mock film website for Jurassic World to show what they could do to in only 3 weeks of work.\r\n\r\n* The project is for presentational purposes only.",
    thumbnail: jurassicWorldThumb,
    screenshot: jurrasicWorldMockup,
    link: "http://williamrajwan.com/jurassic_world/",
    technologies: [
      { name: "SPA built on React JS" },
      { name: "Wordpress" },
      { name: "SVG / CSS Animation" },
    ],
  },
  {
    title: "No Postcode Untouched Microsite",
    description:
      "The National Stroke Foundation commissioned Deloitte Access Economics to estimate the impact of stroke across Australia. This microsite visually displays the statistics on a map, and enables users to contact their parliamentary members about the issues.",
    thumbnail: npuThumb,
    screenshot: npuMockup,
    link: "http://maps.strokefoundation.com.au/",
    technologies: [
      { name: "Wordpress" },
      { name: "Jquery" },
      { name: "Google Maps API" },
    ],
  },
  {
    title: "Scenic Tours Responsive Website",
    description:
      "With a history steeped in seeing the world in real life, Scenic Tours wanted to show customers their world, online. They needed a new online platform that would be technically robust enough to look after their digital marketing goals, a well structured booking interface, all integrated with a flexible content management system.",
    thumbnail: scenicThumb,
    screenshot: scenicMockup,
    link: "https://www.scenic.com.au/",
    technologies: [
      { name: "Angular JS" },
      { name: "Integration with Kentico backend" },
      { name: "Ajax multi-step booking form" },
    ],
  },
  {
    title: "HWWA Coordinator Training Course",
    description:
      "Healthier Workplace Western Australia wanted to create an interactive training module to help workplace coordinators improve health and wellbeing. The module features a quiz, auto-generated pdf certificate, and syncing result data with HWWA's Campaign Monitor account, all built on a wordpress backend.",
    thumbnail: hwwoThumb,
    screenshot: hwwaMockup,
    link: "http://training.healthierworkplacewa.com.au/",
    technologies: [
      { name: "Angular" },
      { name: "SVG / CSS animation" },
      { name: "Campaign monitor integration" },
      { name: "Wordpress / PHP" },
    ],
  },
  {
    title: "ACMI Responsive Website",
    description:
      "ACMI's responsive website features a long list of technical functionalities including a comprehensive calendar, ticket sales and social media integration, all powered by an Umbraco backend. ",
    thumbnail: acmiThumb,
    screenshot: acmiMockup,
    technologies: [
      { name: "Umbraco backend integration" },
      { name: "JQuery" },
      { name: "Angular JS" },
    ],
  },
  {
    title: "Peters Fandangles Microsite",
    description:
      "The Fandangles microsite shows off a number of icecream and cake products in a colourful and fun way. The site features highly interactive css animation that responds to mouse movement and scroll.",
    thumbnail: fandanglesThumb,
    screenshot: fandanglesMockup,
    technologies: [
      { name: "Wordpress / PHP" },
      { name: "JQuery" },
      { name: "Parallax" },
    ],
  },
  /*
  {
    title: "Wilson Storage Website",
    description:
      "Wilson Storage's responsive website allows offers users an intuitive way to request detailed to get quotes, calculate their space requirements and book storage directly. The site is built on a wordpress/PHP backend.",
    thumbnail: wilsonThumb,
    screenshot: wilsonMockup,
    link: "https://wilsonstorage.com.au",
    technologies: [
      { name: "Wordpress / PHP" },
      { name: "JQuery" },
      { name: "Google Maps" },
      { name: "Embedded e-commerce" },
    ],
  },
    {
    title: "Moro Olive Oil",
    description:
      "Moro is a popular Australian brand that produces olive oils and vinegars. Their responsive site shows off the products and intelligently connects products to a diverse recipe library. ",
    thumbnail: null, //moroThumb,
    screenshot: null, //moroMockup,
    link: "http://www.worldofmoro.com.au/",
    technologies: [
      { name: "Angular JS" },
      { name: "JQuery" },
      { name: "Sass" },
      { name: "Wordpress" },
      { name: "MVC with Timber" },
    ],
  },
  */
]
