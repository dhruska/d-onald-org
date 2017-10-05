module.exports = {
  siteMetadata: {
    title: `Donald Hruska`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:400` // you can also specify font weights and styles
        ]
      },
      pathPrefix: "/d-onald-org"
    }
  ]
};
