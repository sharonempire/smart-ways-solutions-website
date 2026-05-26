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
    await config.transform(config, "/eligibility-check"),
    await config.transform(config, "/enquire"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/emi-calculator"),
    await config.transform(config, "/testimonials"),
    // Blog
    await config.transform(config, "/blog"),
    await config.transform(config, "/blog/ksfe-loan-transfer"),
    await config.transform(config, "/blog/home-loan-without-itr"),
    await config.transform(config, "/blog/nri-home-loan-guide"),
    await config.transform(config, "/blog/what-is-top-up-loan"),
    await config.transform(config, "/blog/cibil-score-home-loan"),
    // City pages
    await config.transform(config, "/kozhikode"),
    await config.transform(config, "/thrissur"),
    await config.transform(config, "/ernakulam"),
    await config.transform(config, "/kannur"),
    await config.transform(config, "/malappuram"),
  ],
};
