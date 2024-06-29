import Layout from "../components/layout";

export default () => (
  <Layout>
    <h4>
      Hello, I'm Donald — a software engineer and engineering manager based in San Francisco. I lead the App UI and Mobile teams at{" "}
      <a href="https://retool.com" target="_blank" id="retool">
        Retool
      </a>, where we're working to reshape the way software is built.
      <br />
      <br />
      Prior to Retool, I co-founded{" "}
      <a href="https://draftbit.com" target="_blank" id="draftbit">
        Draftbit
      </a>{" "}
      and spent five years building and leading the team as VP of Engineering. At Draftbit, we created a new way to build mobile apps on the web, with the support of {" "}
      <a
        href="https://techcrunch.com/2019/08/20/here-are-the-82-startups-that-launched-on-day-2-of-ycs-s19-demo-days"
        target="_blank"
        id="ycombinator"
      >
        Y Combinator
      </a>, Floodgate, and Fuel Capital.
      <br />
      <br />
      I've spent time at a variety of startups and agencies, including{" "}
      <a
        href="https://www.chicagotribune.com/business/blue-sky/ct-drivin-acquired-kar-bsi-20170419-story.html"
        target="_blank"
        id="drivin"
      >
        DRIVIN
      </a>,{" "}
      where I led the team building the company's core inventory management product until the company's acquisition in 2017.
      <br />
      <br />I have a background in computer engineering and graduated from the{" "}
      <a href="https://ece.illinois.edu" target="_blank" id="uiuc">
        University of Illinois Urbana-Champaign
      </a>
      .
      <br />
      <br />
      If you'd like to get in touch, reach out to me here or on{" "}
      <a href="https://www.twitter.com/donaldhruska" target="_blank" id="twitter">
        Twitter
      </a>
      !
    </h4>
    <style jsx>{`
      h4 {
        font-size: 1.5em;
        font-weight: 300;
        line-height: 1.5em;
        margin: 1.2em 4.5em 1em;
      }

      @media screen and (max-width: 768px) {
        h4 {
          margin-left: 1.5em;
          margin-right: 1.5em;
        }
      }

      a,
      a:visited {
        text-decoration: none;
        position: relative;
        font-weight: 400;
      }

      a:after {
        content: "";
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        transition: 0.2s;
      }

      a:hover:after {
        width: 100%;
      }

      @media screen and (max-width: 480px) {
        a:hover:after {
          width: 0;
        }
      }

      #retool {
        color: #58565b;
      }

      #retool:after {
        background: #58565b;
      }

      #draftbit {
        color: #5a45ff;
      }

      #draftbit:after {
        background: #5a45ff;
      }

      #ycombinator {
        color: #ff6600;
      }

      #ycombinator:after {
        background: #ff6600;
      }

      #drivin {
        color: #2186d3;
      }

      #drivin:after {
        background: #2186d3;
      }

      #uiuc {
        color: #e84a27;
      }

      #uiuc:after {
        background: #e84a27;
      }

      #contact {
        color: green;
      }

      #contact:after {
        background: green;
      }

      #twitter {
        color: #1da0f2;
      }

      #twitter:after {
        background: #1da0f2;
      }
    `}</style>
  </Layout>
);
