import React from "react";
import { withRouter } from "next/router";
import Head from "next/head";

import Fonts from "../general/fonts";
import CssReset from "./cssReset";
import GAWrapper from "./gaWrapper";
import ActiveLink from "./activeLink";
import SocialIcons from "../components/socialIcons";
import { BACKGROUND_COLOR, HEADER_TEXT_COLOR, FONT_FAMILY } from "../config/css.config";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>{this.props.title}</title>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Donald Hruska",
              "url": "https://d.onald.org"
            })}
          </script>
          <meta
            name="description"
            content="Donald Hruska is a software engineer based in San Francisco, CA"
          />
          <meta
            name="keywords"
            content="Software engineering, Retool, Draftbit, Startups, Y Combinator, San Francisco, University of Illinois at Urbana-Champaign"
          />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
          <link
            rel="canonical"
            href={`https://d.onald.org${this.props.router.pathname !== "/" ? this.props.router.pathname : ""
              }`}
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://d.onald.org" />
          <meta property="og:title" content="Donald Hruska" />
          <meta property="og:site_name" content="Donald Hruska" />
          <meta property="og:image" content="https://d.onald.org/static/profilePhoto.jpg" />
          <meta property="og:description" content="Donald Hruska's personal site" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@donaldhruska" />
          <meta name="twitter:url" content="https://d.onald.org" />
          <meta name="twitter:title" content="Donald Hruska" />
          <meta name="twitter:description" content="Donald Hruska's personal site" />
          <meta name="twitter:image" content="https://d.onald.org/static/profilePhoto.jpg" />
          <meta
            name="google-site-verification"
            content="Wv9dPEU8Ab4cIKSRWzJT4jLY_ZLP45RsxCHWXmx9sQo"
          />
        </Head>
        <main>
          <ActiveLink href="/" style={{ textDecoration: "none" }}>
            <h1>Donald Hruska</h1>
          </ActiveLink>
          <nav role="navigation">
            <ul>
              <li>
                <ActiveLink href="/" style={{ color: "inherit" }}>About</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/photography" style={{ color: "inherit" }}>Photography</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/contact" style={{ color: "inherit" }}>Contact</ActiveLink>
              </li>
              {/**<li>
                <a href="https://blog.d.onald.org" target="_blank" rel="noopener">
                  Blog
                </a>
              </li>**/}
            </ul>
          </nav>
          {this.props.children}
          <SocialIcons />
        </main>
        <CssReset />
        <style jsx global>{`
          html, body, #__next, main {
            height: 100%;
          }

          body {
            margin: 0;
            background-color: ${BACKGROUND_COLOR};
            font-family: ${FONT_FAMILY};
            font-weight: 400;
            font-style: normal;
            line-height: 1.5em;
          }
        `}</style>
        <style jsx>{`
          h1 {
            color: ${HEADER_TEXT_COLOR};
            font-weight: inherit;
            font-size: 2em;
            margin: 1.5em 0 1em;
          }

          main {
            display: flex;
            flex-direction: column;
            max-width: 1024px;
            margin: 0 auto;
            padding: 0 12px;
          }

          @media screen and (max-width: 1063px) {
            main {
              max-width: 768px;
            }
          }

          ul {
            list-style-type: none;
            padding: 0;
            margin-top: 0;
          }

          li {
            display: inline-block;
          }

          li:not(:last-child) {
            margin-right: 20px;
          }
        `}</style>
      </>
    );
  }
}

Layout.defaultProps = {
  title: "Donald Hruska"
};

export default withRouter(GAWrapper(Layout));
