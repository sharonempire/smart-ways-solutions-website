/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.smartwaysolutions.in",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/services"),
    await config.transform(config, "/about"),
    await config.transform(config, "/eligibility"),
    await config.transform(config, "/enquire"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/emi-calculator"),
    // City pages
    await config.transform(config, "/kozhikode"),
    await config.transform(config, "/thrissur"),
    await config.transform(config, "/ernakulam"),
    await config.transform(config, "/kannur"),
    await config.transform(config, "/malappuram"),
  ],
};
