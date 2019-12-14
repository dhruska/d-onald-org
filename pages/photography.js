import React from "react";
import Layout from "../components/layout";
import Gallery from "react-photo-gallery";
import { PHOTOS } from "../config/photo.config";

const Photography = () => (
  <Layout>
    <section>
      <Gallery photos={PHOTOS} />
      <div>All images © {new Date().getFullYear()} Donald Hruska. All Rights Reserved.</div>
    </section>
    <style jsx>{`
      section {
        margin-top: 12px;
      }
      div {
        margin: 10px 0;
      }
    `}</style>
  </Layout>
);

export default Photography;
