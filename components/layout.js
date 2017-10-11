import Head from "next/head";
import Link from "next/link";

import GAWrapper from "./gaWrapper";
import ActiveLink from "./activeLink";
import { BACKGROUND_COLOR, HEADER_TEXT_COLOR } from "../config/css-config";

const Layout = ({ children, title = "Donald Hruska" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta
        name="description"
        content="Software engineer from Chicago, IL. Interested in building high performance, data-driven applications. Skilled in JavaScript, Python, Java, and C#."
      />
      <meta
        name="keywords"
        content="Software engineering, Chicago, JavaScript, HTML, CSS, Python, Java, C#, University of Illinois at Urbana-Champaign"
      />
    </Head>
    <section>
      <h1>Donald Hruska</h1>
      <nav>
        <ul>
          <li>
            <ActiveLink href="/" text="Home" />
          </li>
          <li>
            <ActiveLink href="/about" text="About" />
          </li>
        </ul>
      </nav>
      {children}
    </section>
    <style jsx>{`
      body {
        margin: 0;
        background-color: ${BACKGROUND_COLOR};
      }
      h1 {
        color: ${HEADER_TEXT_COLOR};
        font-family: "Courier New", serif;
        font-size: 1.65em;
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

export default GAWrapper(Layout);
