import React, { Component } from "react";
import ReactGA from "react-ga";
import Router from "next/router";
import { GA_ID } from "../config/config";

const debug = process.env.NODE_ENV !== "production";

export default WrappedComponent =>
  class GaWrapper extends Component {
    constructor(props) {
      super(props);
      this.trackPageview = this.trackPageview.bind(this);
    }

    componentDidMount() {
      this.initGa();
      this.trackPageview();
      Router.router.events.on("routeChangeComplete", this.trackPageview);
    }

    componentWillUnmount() {
      Router.router.events.off("routeChangeComplete", this.trackPageview);
    }

    trackPageview(path = document.location.pathname) {
      if (path !== this.lastTrackedPath) {
        ReactGA.pageview(path);
        this.lastTrackedPath = path;
      }
    }

    initGa() {
      if (!window.GA_INITIALIZED) {
        ReactGA.initialize(GA_ID, { debug });
        window.GA_INITIALIZED = true;
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
