module.exports = {
  siteMetadata: {
    title: 'www.chocosope.com',
    description: 'Buy handmade chocolates',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayout: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
