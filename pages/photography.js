import React from "react";
import Layout from "../components/layout";
import Gallery from "react-photo-gallery";
import { PHOTOS } from "../config/photo.config";

export default class Photography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    const width = window.innerWidth;

    let columns = 1;
    if (width >= 1824) {
      columns = 4;
    } else if (width >= 1024) {
      columns = 3;
    } else if (width >= 480) {
      columns = 2;
    }

    this.setState({ columns });
  }

  render() {
    const { columns } = this.state;

    return (
      <Layout>
        <section>
          {columns && <Gallery columns={columns} photos={PHOTOS} />}
          <div>
            Donald Hruska © {new Date().getFullYear()} All Rights Reserved
          </div>
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
  }
}
