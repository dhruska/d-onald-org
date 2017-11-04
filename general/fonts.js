const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href = "/static/font.css";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const fontello = new FontFaceObserver("fontello");

  fontello.load().then(() => {
    document.documentElement.classList.add("fontello");
  });
};

export default Fonts;
