import Layout from "../components/layout";
import { WORK, EDUCATION } from "../config/experience";
import { formatWork, formatEducation } from "../utils/formatter";

export default () => (
  <Layout>
    <h3>Work Experience</h3>
    <div>{WORK.map((w, i) => formatWork(w, i))}</div>
    <h3>Education</h3>
    <div>{EDUCATION.map((e, i) => formatEducation(e, i))}</div>
  </Layout>
);
