/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://blog.psst54.me",
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
