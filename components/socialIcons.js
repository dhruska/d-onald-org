import { CONTACT } from "../config/contact.config";
import {
  TWITTER_BLUE,
  INSTAGRAM_PURPLE,
  LINKEDIN_BLUE,
  ANGELLIST_GREY,
  GITHUB_GREY,
  SNAPCHAT_YELLOW,
  HACKERNEWS_ORANGE
} from "../config/css.config";

export default () => (
  <ul>
    {CONTACT.map(c => {
      return (
        <li key={c.title}>
          <a title={c.title} href={c.url} target="_blank">
            <i className={c.iconName} />
          </a>
        </li>
      );
    })}
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 20px 0 30px;
        padding: 0;
      }

      li {
        display: inline-block;
        font-size: 25px;
      }

      i {
        color: #000;
      }

      i:before {
        margin: 0 7px;
      }

      .icon-twitter:hover {
        color: ${TWITTER_BLUE};
      }

      .icon-instagram:hover {
        color: ${INSTAGRAM_PURPLE};
      }

      .icon-linkedin:hover {
        color: ${LINKEDIN_BLUE};
      }

      .icon-angellist:hover {
        color: ${ANGELLIST_GREY};
      }

      .icon-github-circled:hover {
        color: ${GITHUB_GREY};
      }

      .icon-snapchat-ghost:hover {
        color: ${SNAPCHAT_YELLOW};
      }

      .icon-y-combinator:hover {
        color: ${HACKERNEWS_ORANGE};
      }
    `}</style>
  </ul>
);
