/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Rename McKinley High School",
    siteUrl: "http://rightourhistoryhawaii.com",
    description: "A movement for the people of Hawai'i"
  },
  pathPrefix: `/rename-mckinley`,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:400,700,900", "Caveat:400,700"]
        }
      }
    }
  ]
};
