import React, { PureComponent } from "react";
import { withRouter } from "next/router";
import Layout from "../components/layout";

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    // Fight spam bots
    const localPart = "contact";
    const domain = "donald.cool";

    this.setState({
      email: `${localPart}@${domain}`
    });
  }

  render() {
    return (
      <Layout>
        {this.props.router.query.submitted && (
          <div className="messageConfirmation">
            Thanks for your message! I'll get back to you soon.
          </div>
        )}
        <form action={`https://formspree.io/${this.state.email}`} method="POST">
          <div className="left">
            <label htmlFor="senderName">Your Name</label>
            <label htmlFor="senderEmail">Your Email Address</label>
            <label htmlFor="message">Message</label>
          </div>
          <div className="right">
            <input id="senderName" name="Sender name" required />
            <input id="senderEmail" name="_replyto" required type="email" />
            <textarea id="message" name="Message" required rows="5" />
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://d.onald.org/contact?submitted=true"
          />
          <input type="hidden" name="_format" value="plain" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <button type="submit">Submit</button>
        </form>
        <style jsx>{`
          .left {
            width: 50%;
            float: left;
            text-align: right;
          }
          .right {
            width: 50%;
            float: left;
            text-align: left;
          }
          label {
            display: block;
            margin-right: 5px;
            margin-top: 5px;
          }
          input {
            height: 14px;
          }
          input,
          textarea {
            display: block;
            width: 150px;
            margin-left: 5px;
            margin-top: 5px;
            padding: 1px;
            border: 1px #dddddd solid;
          }
          button {
            margin-top: 10px;
          }
          .messageConfirmation {
            margin: 15px 0 25px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default withRouter(Contact);
