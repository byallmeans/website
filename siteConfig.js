module.exports = {
  name: 'By All Means',
  shortName: 'BAM',
  description: 'A design & development studio that gets it done. Serving up hot & fresh brands and websites from Portland, OR, USA.',
  url: 'https://byallmeans.studio', // Domain of your site without prefix!
  prefix: '/',
  author: 'By All Means',
  twitter: 'byallmeanstogo',
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    }
  ]
}
