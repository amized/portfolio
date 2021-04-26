import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.png"
import profileImage from "../images/profile.jpg"

const title = "Portfolio | Amiel Zwier - Senior Web Developer"

const description =
  "Amiel Zwier is a Senior Web Developer. See Amiel's work, download his resume and get in touch."

export default () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="icon" href={favicon} type="image/png" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content="Amiel Zwier's Portfolio" />
    <meta property="og:url" content="http://amielzwier.com" />
    <meta property="og:image" content={profileImage} />
    <meta property="og:description" content={description} />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700"
      rel="stylesheet"
      type="text/css"
    />
  </Helmet>
)
