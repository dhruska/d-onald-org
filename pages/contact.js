import React from "react";

import Layout from "../components/layout";

const Contact = () => {
  const submitted = process.browser && window.location.search.indexOf("submitted") >= 0;

  return (
    <Layout>
      {submitted && (
        <div className="messageConfirmation">
          {"Thanks for your message! I'll get back to you soon."}
        </div>
      )}
      <form action="https://formspree.io/f/xqkwawdj" method="POST">
        <div className='inputContainer'>
          <div className="left">
            <label htmlFor="senderName">Your name</label>
            <label htmlFor="senderEmail">Your email address</label>
            <label htmlFor="message">Message</label>
          </div>
          <div className="right">
            <input id="senderName" name="Sender name" required type="text" />
            <input id="senderEmail" name="_replyto" required type="email" />
            <textarea id="message" name="Message" required rows="5" />
          </div>
        </div>
        <input type="hidden" name="_next" value="https://d.onald.org/contact?submitted" />
        <input type="hidden" name="_format" value="plain" />
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        form {
          flex: 1;
        }

        .inputContainer {
          display: inline-block;
          width: 100%;        
        }

        .left {
          float: left;
          text-align: right;
        }
        .right {
          float: left;
          text-align: left;
        }
        label {
          display: block;
          margin-right: 5px;
          margin-top: 10px;
        }
        input {
          height: 14px;
        }
        input,
        textarea {
          display: block;
          width: 150px;
          margin-left: 5px;
          margin-top: 10px;
          padding: 1px;
          border: 1px #dddddd solid;
        }
        button {
          margin-top: 30px;
        }
        .messageConfirmation {
          margin: 15px 0 25px;
        }
      `}</style>
    </Layout>
  );
};

export default Contact;
