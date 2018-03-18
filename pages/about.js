import Layout from "../components/layout";
import {
  CURRENT_WORK,
  FORMER_WORK,
  EDUCATION
} from "../config/experience.config";
import { formatWork, formatEducation } from "../utils/formatter";

export default () => (
  <Layout>
    <h3>Currently</h3>
    <div>{CURRENT_WORK.map((w, i) => formatWork(w, i))}</div>
    <h3>Formerly</h3>
    <div>{FORMER_WORK.map((w, i) => formatWork(w, i))}</div>
    <h3>Education</h3>
    <div>{EDUCATION.map((e, i) => formatEducation(e, i))}</div>
    <style jsx>{`
      h3 {
        font-weight: 400;
        margin: 1.2em 0 1em;
      }
    `}</style>
  </Layout>
);
