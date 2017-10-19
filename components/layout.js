import { withRouter } from "next/router";
import Head from "next/head";

import GAWrapper from "./gaWrapper";
import ActiveLink from "./activeLink";
import { BACKGROUND_COLOR, HEADER_TEXT_COLOR } from "../config/css.config";

const Layout = ({ children, title = "Donald Hruska", router }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
      <meta
        name="description"
        content="Software engineer from Chicago, IL. Interested in building high performance, data-driven applications. Skilled in JavaScript, Python, Java, and C#."
      />
      <meta
        name="keywords"
        content="Software engineering, Chicago, JavaScript, HTML, CSS, Python, Java, C#, University of Illinois at Urbana-Champaign"
      />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <link
        rel="canonical"
        href={`https://d.onald.org${router.pathname !== "/"
          ? router.pathname
          : ""}`}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://d.onald.org" />
      <meta property="og:title" content="Donald Hruska" />
      <meta
        property="og:image"
        content="https://d.onald.org/static/profilePhoto.jpg"
      />
      <meta property="og:description" content="Donald Hruska's personal site" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@donaldhruska" />
      <meta name="twitter:url" content="https://d.onald.org" />
      <meta name="twitter:title" content="Donald Hruska" />
      <meta
        name="twitter:description"
        content="Donald Hruska's personal site"
      />
      <meta
        name="twitter:image"
        content="https://d.onald.org/static/profilePhoto.jpg"
      />
      <meta
        name="google-site-verification"
        content="Wv9dPEU8Ab4cIKSRWzJT4jLY_ZLP45RsxCHWXmx9sQo"
      />
    </Head>
    <section>
      <h1>Donald Hruska</h1>
      <nav role="navigation">
        <ul>
          <li>
            <ActiveLink href="/" text="Home" />
          </li>
          <li>
            <ActiveLink href="/about" text="About" />
          </li>
          <li>
            <ActiveLink href="/photography" text="Photography" />
          </li>
        </ul>
      </nav>
      {children}
    </section>
    <style jsx global>{`
      body {
        margin: 2px;
        background-color: ${BACKGROUND_COLOR};
      }
    `}</style>
    <style jsx>{`
      h1 {
        color: ${HEADER_TEXT_COLOR};
        font-family: "Courier New", serif;
        font-size: 1.65em;
        margin: 0.8em 0;
      }
      section {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
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
        margin-right: 10px;
      }
    `}</style>
  </div>
);

export default withRouter(GAWrapper(Layout));
