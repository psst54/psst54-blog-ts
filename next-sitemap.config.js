/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://psst54-blog-ts.pages.dev/",
  changefreq: "daily",
  generateRobotsTxt: true,
  priority: 1,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
