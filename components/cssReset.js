import { BLUE } from "../config/css.config";

export default () => (
  <style jsx global>{`
    input,
    label,
    textarea {
      margin: 0;
      border: 0;
      padding: 0;
      display: inline-block;
      vertical-align: middle;
      white-space: normal;
      line-height: 1;
    }

    button {
      margin: 0;
      display: inline-block;
      vertical-align: middle;
      white-space: normal;
      line-height: 1.25;
    }

    input:focus {
      outline: 0;
    }

    input,
    textarea {
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
    }

    button,
    input[type="button"],
    input[type="submit"] {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-border-radius: 0px;
    }

    ::-webkit-search-decoration {
      display: none;
    }

    button,
    input[type="button"],
    input[type="submit"] {
      overflow: visible;
      width: auto;
    }

    ::-webkit-file-upload-button {
      padding: 0;
      border: 0;
      background: none;
    }

    textarea {
      vertical-align: top;
      overflow: auto;
    }

    a {
      color: ${BLUE};
    }
  `}</style>
);
